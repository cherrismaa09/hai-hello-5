import FadeInSection from "@/components/FadeInSection";
import { Description } from "@radix-ui/react-dialog";
import { title } from "process";

const timelineEvents = [
  { year: "Feb 2021", title: "Where It All Began", description: "We first met in the college, never thought the boy sitting behind me would be the LOVE OF MY LIFE! , then confession in the BEEE lab that you are my crush to talking and texting every day" },

  { year: "13 March 2021", title: "The Day We Became Us", description: "Officially started our relationship, because I could'nt wait anymore and wanted to call that days as our's. The beginning of something beautiful and wonderful." },

  { year: "Apr - Jul 2021", title: "Lockdown Long-distance", description: "We celebrated your first birthday during the lockdown, experiencing the best feeling - LOVE and waiting for when things would reopen. We kept learning about each other and growing closer every day." },

  { year: "Late 2021", title: "Back to College", description: "Second Semester brought us back together closer and in person. Very excited to meet you everyday and Waiting for my birthday, studying side by side, and slowly building our bond." },

  { year: "2022", title: "Everyday Together", description: "Meeting every day in college. Trying to bunk classes sometimes. Celebrating your birthday in college and mine during exam time." },

  { year: "13th March 2022", title: "Our First Anniversary", description: "We didn't meet because we were preparing for Java Sem Exam, sad but i forced you to wear blue and send some pictures.. hehe <3" },

  { year: "2023", title: "College Bunks", description: "One of the happiest periods. Bunking classes, watching movies in theatres, outings with friends, endless laughter, a few fights, but always staying together through everything." },

  { year: "13th March 2023", title: "Our Second Anniversary", description: "We had our first placement exam that day in college, so it was very low-key and normal, but we celebrated that day in advance in a cafe in Sainikpuri (gurthunda)" },

  { year: "End of 2023", title: "4th year and Placements", description: "Placements didn't work out as expected, Naaku Rg2 ochindi, dani next day neeku ahex ochindi(very proud of you) iddardi useful kaledu.. but we supported each other through the uncertainty. We proved our love isn't just for easy days." },

  { year: "Jan to May 2024", title: "Rg2 and College", description: "Me going to Rg2 and missing you and you missing me in the college.. then I realised ela undagalam asalu.. college ayyaka roju kalvakunda undalenu ani" },

  { year: "13th March 2024", title: "Our Third Anniversary", description: "Gurthunda nu peddama temple lo shirt change cheskunnav ..darshanam ayyaka  grease monkey ki vellam, super handsome unnav le aa shirt lo.. funnel hill creamery lo chitti cake cut chesi .. ich keem brownie esesi vellipoyam ala oka wholesome and different experience" },

  { year: "May 2024", title: "Our First Trip", description: "Our first trip together to Munnar.. Yayyy!!! One of the most beautiful experiences of my life. A memory we'll carry with us forever." },

  { year: "Late 2024", title: "Started our long distance ", description: "Entha kastam aina phase of our lives struggling between placements, parents words and ofcourse our long distance, and not able to meet to frequently is the worst part" },

  { year: "13th March 2025", title: "Our Fourth Anniversary", description: "Finally, first time manam ratri kalisam in a cafe, happily and you had your first vodka shot my cuteness! I can still remember all those cute moments, It was very great day" },

  { year: "2025", title: "Through Everything, Together", description: "I really am thankful to you for being by my side in the toughtest time of my life, supporting me and guiding me always. And as I always say YOU ARE THE BEST my Bangaru.. " },

  { year:"Jan - Feb 2026", title:"Making it to the same Company", description: "As you have promised, we cracked the same company together!, Thank you for making this happen and staying with me no matter what "
  },

  { year: "2026", title: "Five Years of Us", description: "Five years of love, memories, giggles, growth, happiness and staying together through everything. Here's to us — and to forever." },
];

const TimelineSection = () => (
  <section className="py-20 px-6">
    <FadeInSection>
      <h2 className="text-3xl md:text-4xl font-display font-semibold text-center text-foreground mb-4">
        Our Journey
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-md mx-auto">
        A timeline of us — the moments that made us who we are.
      </p>
    </FadeInSection>
    <div className="max-w-2xl mx-auto relative">
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
      {timelineEvents.map((event, i) => (
        <FadeInSection key={event.year} delay={i * 0.08}>
          <div className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
            <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10 shadow-sm" />
            <div className={`ml-14 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:ml-auto"}`}>
              <span className="text-sm font-semibold text-primary tracking-wider">{event.year}</span>
              <h3 className="text-lg font-display font-semibold text-foreground mt-1">{event.title}</h3>
              <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{event.description}</p>
            </div>
          </div>
        </FadeInSection>
      ))}
    </div>
  </section>
);

export default TimelineSection;
