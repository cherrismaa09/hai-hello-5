import FadeInSection from "@/components/FadeInSection";
import { motion } from "framer-motion";
import { useState } from "react";

const memories = [
  { src: "pictures/pic0.jpg", caption: "Our 4th Anniversary" },
  { src: "pictures/pic1.jpg", caption: "14-03-2025" },
  { src: "pictures/pic2.jpg", caption: "24-04-2025" },
  { src: "pictures/pic3.jpg", caption: "07-05-2025" },
  { src: "pictures/pic4.jpg", caption: "13-05-2025" },
  { src: "pictures/pic5.jpg", caption: "20-05-2025" },
  { src: "pictures/pic6.jpg", caption: "14-06-2025 Your Birthdayy!" },
  { src: "pictures/pic7.jpg", caption: "24-06-2025" },
  { src: "pictures/pic8.jpg", caption: "09-09-2025" },
  { src: "pictures/pic9.jpg", caption: "25-09-2025" },
  { src: "pictures/pic10.jpg", caption: "26-09-2025" },
  { src: "pictures/pic11.jpg", caption: "24-10-2025" },
  { src: "pictures/pic12.jpg", caption: "06-11-2025" },
  { src: "pictures/pic13.jpg", caption: "12-11-2025" },
  { src: "pictures/pic14.jpg", caption: "15-11-2025" },
  { src: "pictures/pic15.jpg", caption: "03-12-2025" },
  { src: "pictures/pic16.jpg", caption: "15-12-2025" },
  { src: "pictures/pic18.jpg", caption: "21-12-2025" },
  { src: "pictures/pic17.jpg", caption: "26-12-2025" },
  { src: "pictures/pic20.jpg", caption: "13-01-2026" },
  { src: "pictures/pic19.jpg", caption: "16-01-2026" },
  { src: "pictures/pic21.jpeg", caption: "09-03-2025" },
  { src: "pictures/pic22.jpg", caption: "11-03-2026" },
  
];

const MemoryCard = ({ src, caption, delay = 0 }) => {
  const [isPortrait, setIsPortrait] = useState(null);

  const onLoad = (e) => {
    const img = e.currentTarget;
    setIsPortrait(img.naturalHeight > img.naturalWidth);
  };

  return (
    <FadeInSection delay={delay}>
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-card rounded-lg overflow-hidden shadow-sm border border-border group cursor-default"
      >
        {/* Image wrapper */}
        <div
          className={

            `w-full overflow-hidden bg-muted flex items-center justify-center
            ${isPortrait === null ? "aspect-[4/3]" : isPortrait ? "aspect-[3/4]" : "aspect-[4/3]"}
            max-h-65 sm:max-h-64 md:max-h-80`
          }
        >
          <img
            src={src}
            alt={caption}
            onLoad={onLoad}

            className={
              isPortrait === null
                ? "w-full h-full object-contain transition-transform duration-500"
                : isPortrait
                ? "h-full w-auto object-contain transition-transform duration-500"
                : "w-full h-full object-contain transition-transform duration-500"
            }
            // optional: loading="lazy"
            loading="lazy"
          />
        </div>

        <div className="p-2 text-center">
          <p className="text-sm text-semibold-foreground italic">{caption}</p>
        </div>
      </motion.div>
    </FadeInSection>
  );
};

const GallerySection = () => (
  <section className="py-20 px-6 bg-blush/30">
    <FadeInSection>
      <h2 className="text-3xl md:text-4xl font-display font-semibold text-center text-foreground mb-4">
        Memory Gallery
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-md mx-auto">
        Snapshots of us — each one a little piece of our love story.
      </p>
    </FadeInSection>

    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {memories.map((memory, i) => (
        <MemoryCard key={i} src={memory.src} caption={memory.caption} delay={i * 0.08} />
      ))}
    </div>
  </section>
);

export default GallerySection;