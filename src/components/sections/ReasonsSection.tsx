import FadeInSection from "@/components/FadeInSection";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";

// UPDATE THESE with your personal reasons
const reasons = [

"I love you for the way you care, love, and constantly check on me.",

"I love you for the way you understand and support me all the time, no matter what it is.",

"I love the way you just to be, enjoy, understand life, talk, and make sure that I am very happy and satisfied every moment.",

"I love you Because you have been a constant pillar for my emotions, for my mental health, for my happiness, and today I am what I am is because of you.",

"I love you because I love the way we have maintained our relationship. We still wanting to meet each other and constantly wanting to be loved by each other, even till today. This really supports me and this gave me immense happiness.",

"I love how you changed me from who I was to who I really am, the way I changed, the way I am thinking, the way I am just being, is really somehow done by me very involuntarily",

"I love you because I can see a very good life with you, a wonderful future, an amazing marriage, a cute home, and collect memories, cherish all those moments for the rest of our lives. I am really seeing that beautiful life.",

"I love the way you prioritize us, our relationship, and me and being in a control, and not doing anything that's not done till now.",

"I love the person in you who has changed a lot for me and us and still clingy being on to me even after five years is amazing. I love you.",

"I love your sweetness, I love your goofiness, I love your humor, I love your cuteness, I love your handsomeness, and everything else in you, my cuttiee",

"I love you because you are the person who I adore, who I can be myself with, who I can follow, whom I will love so much, whom I can cuddle, hug, and kiss, and sleep with happily and safely.",

"I loved you because you sat behind me and started talking to me and changed my life entirely where I found a person whom I can rely on for my whole life without any complaints.",

"I love the conversations we have, way you laugh, I love the way you love me, how you remember all the smallest details about me and the way you look at me, the way you adore me, the way you compliment me all the time, the way you make me feel safe, and the way you are kind to everyone. And I love how silly you are, and I am glad that I choose you every day and to be with you every second.",


];

const ReasonsSection = () => {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const toggleReveal = (index: number) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section className="py-20 px-6 bg-blush/30">
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-center text-foreground mb-4">
          13 Reasons Why I Love You
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-md mx-auto">
          Tap each card to reveal a reason ♥
        </p>
      </FadeInSection>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {reasons.map((reason, i) => {
          const isRevealed = revealed.has(i);
          return (
            <FadeInSection key={i} delay={i * 0.04}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toggleReveal(i)}
                className="relative flex items-start gap-3 bg-card p-5 rounded-lg border border-border shadow-sm hover:shadow-md transition-all cursor-pointer select-none overflow-hidden min-h-[72px]"
              >
                <Heart className={`w-4 h-4 mt-1 flex-shrink-0 transition-colors duration-300 ${isRevealed ? "text-primary fill-primary" : "text-muted-foreground"}`} />
                <div className="flex-1">
                  <span className="text-xs font-semibold text-primary/60 tracking-wider">#{i + 1}</span>
                  <motion.p
                    initial={false}
                    animate={{ 
                      filter: isRevealed ? "blur(0px)" : "blur(6px)",
                      opacity: isRevealed ? 1 : 0.4 
                    }}
                    transition={{ duration: 0.4 }}
                    className="text-sm text-foreground leading-relaxed mt-0.5"
                  >
                    {reason}
                  </motion.p>
                </div>
              </motion.div>
            </FadeInSection>
          );
        })}
      </div>
    </section>
  );
};

export default ReasonsSection;
