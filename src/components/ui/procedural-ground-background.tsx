"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * ProceduralGroundBackground
 * A WebGL 2D background featuring topographic neon lines and sand-ripple movement.
 * Optimized for performance using fragment shaders.
 *
 * Se dibuja sobre el contenedor padre (que debe ser `relative`), no sobre el viewport.
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

        // Ground Perspective Simulation
        float depth = 1.0 / (uv.y + 1.15);
        vec2 gridUv = vec2(uv.x * depth, depth + u_time * 0.15);

        // Layered Procedural Noise for Terrain
        float n = noise(gridUv * 3.5);
        float ripples = sin(gridUv.y * 18.0 + n * 8.0 + u_time * 0.5);

        // Topographic Lines
        float topoLine = smoothstep(0.03, 0.0, abs(ripples));

        // Color Palette (tokens de marca)
        vec3 baseColor  = vec3(0.973, 0.976, 0.973); // #F8F9F8 — canvas
        vec3 brandColor = vec3(0.102, 0.263, 0.259); // #1A4342 — primario
        vec3 brandSoft  = vec3(0.271, 0.522, 0.471); // #458578 — primario suave

        // Composite: se oscurece desde el lienzo claro hacia el verde de marca
        vec3 finalColor = mix(baseColor, brandSoft, n * 0.22);
        finalColor = mix(finalColor, brandColor, clamp(topoLine * depth * 0.55, 0.0, 1.0));

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

        gl.uniform1f(timeLoc, time * 0.001);
        gl.uniform2f(resLoc, width, height);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
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
        style={{ filter: "contrast(1.05)" }}
      />
    </div>
  );
};

export default ProceduralGroundBackground;
