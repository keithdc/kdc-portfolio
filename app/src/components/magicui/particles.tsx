/**
 * @file particles.tsx — Interactive particle background
 * @shared
 * @dependencies react
 */
import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  color?: string;
  vx?: number;
  vy?: number;
}

interface Circle {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
}

function hexToRgb(hex: string): number[] {
  const trimmed = hex.replace("#", "");
  const bigint = parseInt(trimmed, 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

/** Floating interactive particle background effect. */
function Particles({
  className = "",
  quantity = 50,
  staticity = 50,
  ease = 50,
  size = 0.4,
  color = "#B87A4B",
  vx = 0,
  vy = 0,
}: ParticlesProps): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<Circle[]>([]);
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
  const [rgb, setRgb] = useState<number[]>(hexToRgb(color));

  useEffect(() => {
    setRgb(hexToRgb(color));
  }, [color]);

  const circleParams = useCallback((): Circle => {
    return {
      x: Math.floor(Math.random() * canvasSize.current.w),
      y: Math.floor(Math.random() * canvasSize.current.h),
      translateX: 0,
      translateY: 0,
      size: Math.floor(Math.random() * 2) + size,
      alpha: 0,
      targetAlpha: parseFloat((Math.random() * 0.55 + 0.12).toFixed(1)),
      dx: (Math.random() - 0.5) * 0.1,
      dy: (Math.random() - 0.5) * 0.1,
      magnetism: 0.1 + Math.random() * 4,
    };
  }, [size]);

  const drawCircle = useCallback(
    (circle: Circle, update = false): void => {
      if (!context.current) return;
      const { x, y, translateX, translateY, size: circleSize, alpha } = circle;
      context.current.translate(translateX, translateY);
      context.current.beginPath();
      context.current.arc(x, y, circleSize, 0, 2 * Math.PI);
      context.current.fillStyle = `rgba(${String(rgb[0])}, ${String(rgb[1])}, ${String(rgb[2])}, ${String(alpha)})`;
      context.current.fill();
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!update) circles.current.push(circle);
    },
    [dpr, rgb],
  );

  const initCanvas = useCallback((): void => {
    if (!canvasContainerRef.current || !canvasRef.current || !context.current) {
      return;
    }
    circles.current = [];
    canvasSize.current.w = canvasContainerRef.current.offsetWidth;
    canvasSize.current.h = canvasContainerRef.current.offsetHeight;
    canvasRef.current.width = canvasSize.current.w * dpr;
    canvasRef.current.height = canvasSize.current.h * dpr;
    canvasRef.current.style.width = `${String(canvasSize.current.w)}px`;
    canvasRef.current.style.height = `${String(canvasSize.current.h)}px`;
    context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
    for (let i = 0; i < quantity; i++) {
      drawCircle(circleParams());
    }
  }, [dpr, quantity, circleParams, drawCircle]);

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    const handleResize = (): void => initCanvas();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initCanvas]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const { w, h } = canvasSize.current;
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (inside) {
        mouse.current.x = e.clientX - rect.left - w / 2;
        mouse.current.y = e.clientY - rect.top - h / 2;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationId: number;
    const animate = (): void => {
      if (context.current) {
        context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
        circles.current.forEach((circle, i) => {
          const edgeX = circle.x + circle.translateX - canvasSize.current.w / 2;
          const edgeY = circle.y + circle.translateY - canvasSize.current.h / 2;
          circle.translateX +=
            (mouse.current.x - edgeX) / (staticity / circle.magnetism) -
            circle.translateX / ease +
            vx;
          circle.translateY +=
            (mouse.current.y - edgeY) / (staticity / circle.magnetism) -
            circle.translateY / ease +
            vy;
          if (circle.alpha < circle.targetAlpha) circle.alpha += 0.02;
          circle.x += circle.dx;
          circle.y += circle.dy;
          if (
            circle.x < -10 ||
            circle.x > canvasSize.current.w + 10 ||
            circle.y < -10 ||
            circle.y > canvasSize.current.h + 10
          ) {
            circles.current[i] = circleParams();
            circles.current[i].alpha = 0.02;
          }
          drawCircle(circle, true);
        });
      }
      animationId = window.requestAnimationFrame(animate);
    };
    animate();
    return () => window.cancelAnimationFrame(animationId);
  }, [staticity, ease, vx, vy, circleParams, drawCircle]);

  return (
    <div
      className={cn("pointer-events-none", className)}
      ref={canvasContainerRef}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
}

export { Particles };
