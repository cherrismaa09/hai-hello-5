import FadeInSection from "@/components/FadeInSection";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const comfortMessages: Record<string, { emoji: string; title: string; message: string }> = {

  miss: {
    emoji: "🤗",
    title: "When You Mich Me",
    message: "Close your eyes. Remember the moments you hugged me. I'm always there with you, in every heartbeat, every memory, and every quiet moment. Distance is just space; my love for you has no distance at all kucchu.",
  },

  sad: {
    emoji: "💛",
    title: "When You Feel Sad",
    message: "Cuttieee gaadu sad ga unnapudu kucchii papa smile talchukunte automatic ga happy aithadu boo boo. But please remember — Lubbuuuu chaaaalaaa😘💞. Whatever you're going through, you don't have to go through it alone. I'm with you laali, you always have my shoulder .",
  },

  happy: {
    emoji: "✨",
    title: "When You Feel Happy",
    message: "Your happiness is my favoritesttt thing in the world. I hope this moment lasts forever. You deserve all the happiness, every single beautiful thing in life. Keep smiling ypu light up my entire world boo boo.",
  },

  loved: {
    emoji: "❤️",
    title: "When You Want to Feel Loved",
    message: "Remember all the cute cuddles we had. You are the most important person in my life. You are cherished, valued, and adored, not for what you do, but for who you are. I love you today, tomorrow, and every day after that.",
  },
};

const ComfortSection = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="py-20 px-6">
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-center text-foreground mb-4">
          A Message For You
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-md mx-auto">
          How are you feeling right now? Pick one, and read something just for you.
        </p>
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {Object.entries(comfortMessages).map(([key, val]) => (
              <button
                key={key}
                onClick={() => setActive(active === key ? null : key)}
                className={`p-4 rounded-lg border text-center transition-all duration-300 ${
                  active === key
                    ? "bg-primary border-primary text-primary-foreground shadow-md"
                    : "bg-card border-border text-foreground hover:border-primary/40 hover:shadow-sm"
                }`}
              >
                <span className="text-xl block mb-1">{val.emoji}</span>
                <span className="text-xs font-medium">{key === "miss" ? "I Miss You" : key === "sad" ? "I Feel Sad" : key === "happy" ? "I Feel Happy" : "Love Me"}</span>
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="bg-card border border-border rounded-lg p-8 shadow-sm text-center"
              >
                <h3 className="font-display text-xl font-semibold text-primary mb-4">
                  {comfortMessages[active].title}
                </h3>
                <p className="text-foreground leading-relaxed">{comfortMessages[active].message}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </FadeInSection>
    </section>
  );
};

export default ComfortSection;
