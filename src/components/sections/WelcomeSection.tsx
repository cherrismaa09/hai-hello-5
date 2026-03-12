import FadeInSection from "@/components/FadeInSection";
import { motion } from "framer-motion";

const WelcomeSection = () => (
  <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
    <div className="text-center max-w-2xl mx-auto">
      <FadeInSection>
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-5xl mb-6 inline-block text-primary"
        >
          ♥
        </motion.div>
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight mb-6">
          Five Beautiful Years <br />
          <span className="text-primary italic">Together</span>
        </h1>
      </FadeInSection>
      <FadeInSection delay={0.4}>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
          This little corner of the internet is just for you, a place to come back to whenever we want to feel loved, smile at our memories, or simply remember that you are my favorite person in the whole world.
        </p>
      </FadeInSection>
      <FadeInSection delay={0.6}>
        <motion.div
          className="mt-10 text-muted-foreground text-sm tracking-widest uppercase"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          scroll down my Cuteee puppyy
        </motion.div>
      </FadeInSection>
    </div>
  </section>
);

export default WelcomeSection;
