"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * ProceduralGroundBackground
 * A WebGL 2D background featuring topographic neon lines and sand-ripple movement.
 * Optimized for performance using fragment shaders.
 *
 * Se dibuja sobre el contenedor padre (que debe ser `relative`), no sobre el viewport.
 * En dispositivos con puntero fino, el terreno se magnifica y engrosa alrededor
 * del cursor; en táctil o con `prefers-reduced-motion` se queda en su estado base.
 */
export const ProceduralGroundBackground: React.FC<{ className?: string }> = ({
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_mouseStrength;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);

        // --- Interacción con el cursor -----------------------------------
        // Halo radial centrado en el puntero: 1 encima, 0 en el borde.
        vec2 toMouse = uv - u_mouse;
        float halo = smoothstep(0.6, 0.0, length(toMouse)) * u_mouseStrength;

        // Lente: el espacio se dilata alrededor del puntero. Al escalar el
        // propio vector radial no hay singularidad en el centro.
        vec2 warpedUv = uv + toMouse * halo * 0.55;

        // Ground Perspective Simulation
        float depth = 1.0 / (warpedUv.y + 1.15);
        vec2 gridUv = vec2(warpedUv.x * depth, depth + u_time * 0.15);

        // Layered Procedural Noise for Terrain
        float n = noise(gridUv * 3.5);
        float ripples = sin(gridUv.y * 18.0 + n * 8.0 + u_time * 0.5);

        // Topographic Lines — el trazo engorda bajo el cursor
        float lineWidth = 0.05 + halo * 0.05;
        float topoLine = smoothstep(lineWidth, 0.0, abs(ripples));

        // Color Palette (tokens de marca)
        vec3 baseColor  = vec3(0.9804, 0.9765, 0.9647); // #FAF9F6 — canvas
        vec3 brandColor = vec3(0.102, 0.263, 0.259); // #1A4342 — primario
        vec3 brandSoft  = vec3(0.271, 0.522, 0.471); // #458578 — primario suave

        // Composite: se oscurece desde el lienzo claro hacia el verde de marca
        vec3 finalColor = mix(baseColor, brandSoft, n * (0.3 + halo * 0.12));
        finalColor = mix(finalColor, brandColor, clamp(topoLine * depth * (0.8 + halo * 0.45), 0.0, 1.0));

        // Horizon Fog / Fade — se desvanece hacia el lienzo, no hacia el negro
        float fade = smoothstep(0.1, -1.0, uv.y);
        float falloff = clamp((1.0 - length(uv) * 0.45) * (1.0 - fade), 0.0, 1.0);
        finalColor = mix(baseColor, finalColor, falloff);

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const createShader = (
      gl: WebGLRenderingContext,
      type: number,
      source: string
    ) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);

    const program = gl.createProgram()!;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posAttrib = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posAttrib);
    gl.vertexAttribPointer(posAttrib, 2, gl.FLOAT, false, 0, 0);

    const timeLoc = gl.getUniformLocation(program, "u_time");
    const resLoc = gl.getUniformLocation(program, "u_resolution");
    const mouseLoc = gl.getUniformLocation(program, "u_mouse");
    const mouseStrengthLoc = gl.getUniformLocation(program, "u_mouseStrength");

    /* La reactividad solo tiene sentido con ratón/trackpad, y se desactiva
       para quien pide menos movimiento. */
    const interactive =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Posición cruda del puntero (viewport) y su versión suavizada en espacio uv.
    const pointer = { clientX: -9999, clientY: -9999 };
    const smoothed = { x: 0, y: 0, strength: 0 };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.clientX = event.clientX;
      pointer.clientY = event.clientY;
    };

    if (interactive) {
      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
    }

    let animationFrameId: number;
    const render = (time: number) => {
      // Dimensiones del contenedor, no del viewport: el fondo vive dentro del hero.
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.floor(canvas.clientWidth * dpr);
      const height = Math.floor(canvas.clientHeight * dpr);

      if (width > 0 && height > 0) {
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
          gl.viewport(0, 0, width, height);
        }

        if (interactive) {
          const rect = canvas.getBoundingClientRect();
          const localX = pointer.clientX - rect.left;
          const localY = pointer.clientY - rect.top;
          const inside =
            localX >= 0 &&
            localY >= 0 &&
            localX <= rect.width &&
            localY <= rect.height;

          if (inside) {
            // Mismo encuadre que el shader: origen al centro, eje Y hacia arriba.
            const minSide = Math.min(rect.width, rect.height);
            const targetX = (localX * 2 - rect.width) / minSide;
            const targetY = ((rect.height - localY) * 2 - rect.height) / minSide;
            smoothed.x += (targetX - smoothed.x) * 0.08;
            smoothed.y += (targetY - smoothed.y) * 0.08;
          }

          // El halo entra despacio y sale aún más despacio: nada de parpadeos.
          smoothed.strength += ((inside ? 1 : 0) - smoothed.strength) * 0.05;

          gl.uniform2f(mouseLoc, smoothed.x, smoothed.y);
          gl.uniform1f(mouseStrengthLoc, smoothed.strength);
        }

        gl.uniform1f(timeLoc, time * 0.001);
        gl.uniform2f(resLoc, width, height);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", handlePointerMove);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  return (
    <div
      aria-hidden
      className={cn(
        "absolute inset-0 w-full h-full overflow-hidden bg-canvas pointer-events-none",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block touch-none"
      />
    </div>
  );
};

export default ProceduralGroundBackground;
