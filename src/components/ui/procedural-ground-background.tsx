"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * ProceduralGroundBackground
 * A WebGL 2D background featuring topographic lines and sand-ripple movement.
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

        // Cursor halo & lens distortion
        vec2 toMouse = uv - u_mouse;
        float halo = smoothstep(0.78, 0.0, length(toMouse)) * u_mouseStrength;
        vec2 warpedUv = uv + toMouse * halo * 0.62;

        // Ground Perspective Simulation (3D terrain movement)
        float depth = 1.0 / (warpedUv.y + 1.15);
        vec2 gridUv = vec2(warpedUv.x * depth, depth + u_time * 0.18);

        // Layered Procedural Noise for Terrain Ripples
        float n = noise(gridUv * 3.5);
        float ripples = sin(gridUv.y * 18.0 + n * 8.0 + u_time * 0.5);

        // Topographic Lines — el trazo engorda bajo el cursor
        float lineWidth = 0.085 + halo * 0.09;
        float topoLine = smoothstep(lineWidth, 0.0, abs(ripples));

        // Segunda familia de curvas, más apretada y fina
        float fineRipples = sin(gridUv.y * 33.0 + n * 5.0 + u_time * 0.32);
        float fineLine = smoothstep(lineWidth * 0.5, 0.0, abs(fineRipples));

        // Neutral Palette
        vec3 cCanvas = vec3(0.957, 0.957, 0.965); // #F4F4F6 porcelana
        vec3 cDark   = vec3(0.102, 0.102, 0.118); // #1A1A1E Deep Graphite
        vec3 cSoft   = vec3(0.850, 0.850, 0.880); // Subtle neutral line tint

        // Base color
        vec3 finalColor = cCanvas;

        // Blend fine terrain lines in soft neutral tint
        finalColor = mix(finalColor, cSoft, clamp(fineLine * depth * (0.35 + halo * 0.4), 0.0, 1.0) * 0.30);

        // Blend main topographic lines in Deep Graphite
        vec3 lineColor = cDark;
        finalColor = mix(finalColor, lineColor, clamp(topoLine * depth * (1.15 + halo * 0.8), 0.0, 0.85));

        // Horizon Fade
        float fade = smoothstep(0.15, -1.0, uv.y);
        float falloff = clamp((1.0 - length(uv) * 0.3) * (1.0 - fade), 0.0, 1.0);
        finalColor = mix(cCanvas, finalColor, falloff);

        // Fine film grain / noise overlay
        float tSeed = fract(u_time * 0.01);
        float grain = (hash(gl_FragCoord.xy + vec2(tSeed, tSeed)) - 0.5) * 0.025;
        finalColor += grain;

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
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compilation error:", gl.getShaderInfoLog(shader));
      }
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
        "absolute inset-0 w-full h-full overflow-hidden bg-transparent pointer-events-none",
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
