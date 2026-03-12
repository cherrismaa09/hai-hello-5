import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  type: "heart" | "sparkle";
}

const FloatingHearts = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 16 + 10,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 15,
      opacity: Math.random() * 0.3 + 0.1,
      type: i < 15 ? "heart" as const : "sparkle" as const,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className={p.type === "heart" ? "absolute animate-float-heart" : "absolute animate-float-heart"}
          style={{
            left: `${p.left}%`,
            bottom: "-20px",
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            animationIterationCount: "infinite",
            opacity: p.opacity,
            color: p.type === "heart" ? "hsl(var(--primary))" : "hsl(var(--gold))",
          }}
        >
          {p.type === "heart" ? "♥" : "✦"}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
