import FloatingHearts from "@/components/FloatingHearts";
import SectionDivider from "@/components/SectionDivider";
import WelcomeSection from "@/components/sections/WelcomeSection";
import LoveCounter from "@/components/sections/LoveCounter";
import TimelineSection from "@/components/sections/TimelineSection";
import GallerySection from "@/components/sections/GallerySection";
import PersonalMessageSection from "@/components/sections/PersonalMessageSection";
import ReasonsSection from "@/components/sections/ReasonsSection";
import ComfortSection from "@/components/sections/ComfortSection";
import FinalMessage from "@/components/sections/FinalMessage";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <FloatingHearts />
      <div className="relative z-10">
        <WelcomeSection />
        <SectionDivider />
        <LoveCounter />
        <SectionDivider />
        <TimelineSection />
        <SectionDivider />
        <GallerySection />
        <SectionDivider />
        <PersonalMessageSection />
        <SectionDivider />
        <ReasonsSection />
        <SectionDivider />
        <ComfortSection />
        <SectionDivider />
        <FinalMessage />
      </div>
    </div>
  );
};

export default Index;
