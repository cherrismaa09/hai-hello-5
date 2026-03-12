import FadeInSection from "@/components/FadeInSection";
import { motion } from "framer-motion";

const FinalMessage = () => (
  <section className="py-24 px-6">
    <FadeInSection>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-4xl mb-8 inline-block text-primary"
        >
          ♥
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
          Happy 5th Anniversary
        </h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            To the person who makes my life brighter, warmer, and infinitely more beautiful — thank you. Thank you for five years of love, patience, laughter, and growth.
          </p>
          <p>
            You are my greatest adventure, my deepest comfort, and my most favorite hello. I am so proud of us, of everything we have built, and of everything we are becoming.
          </p>
          <p className="text-xl font-display italic text-primary pt-4">
            I love you — endlessly, completely, and always.
          </p>
        </div>
        <div className="mt-12 text-muted-foreground text-sm">
          Made with love, just for you ♥
        </div>
      </div>
    </FadeInSection>
  </section>
);

export default FinalMessage;
