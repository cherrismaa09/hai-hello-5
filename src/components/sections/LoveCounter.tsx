import { useEffect, useState } from "react";
import FadeInSection from "@/components/FadeInSection";

// Relationship start date
const START_DATE = new Date(2021, 2, 13, 0, 0, 0); 
// Month index starts from 0 → 2 = March

const LoveCounter = () => {

  const [elapsed, setElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {

    const calculateTime = () => {
      const now = new Date();

      let years = now.getFullYear() - START_DATE.getFullYear();
      let months = now.getMonth() - START_DATE.getMonth();
      let days = now.getDate() - START_DATE.getDate();
      let hours = now.getHours() - START_DATE.getHours();
      let minutes = now.getMinutes() - START_DATE.getMinutes();
      let seconds = now.getSeconds() - START_DATE.getSeconds();

      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }

      if (minutes < 0) {
        minutes += 60;
        hours--;
      }

      if (hours < 0) {
        hours += 24;
        days--;
      }

      if (days < 0) {
        months--;
        const lastMonthDays = new Date(
          now.getFullYear(),
          now.getMonth(),
          0
        ).getDate();
        days += lastMonthDays;
      }

      if (months < 0) {
        months += 12;
        years--;
      }

      setElapsed({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);

  }, []);

  const units = [
    { label: "Years", value: elapsed.years },
    { label: "Months", value: elapsed.months },
    { label: "Days", value: elapsed.days },
    { label: "Hours", value: elapsed.hours },
    { label: "Minutes", value: elapsed.minutes },
    { label: "Seconds", value: elapsed.seconds },
  ];

  return (
    <section className="py-20 px-6">

      <FadeInSection>

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-3">
            I'd live them all again with you
          </h2>

          <p className="text-muted-foreground mb-10">
            It's already {elapsed.years} years, {elapsed.months} months and {elapsed.days} days
          </p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">

            {units.map((unit) => (

              <div
                key={unit.label}
                className="bg-card rounded-lg p-4 shadow-sm border border-border hover:shadow-md transition-shadow"
              >

                <div className="text-2xl md:text-3xl font-display font-bold text-primary">
                  {String(unit.value).padStart(2, "0")}
                </div>

                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  {unit.label}
                </div>

              </div>

            ))}

          </div>

          <br />

          <p className="text-muted-foreground mb-10 mx-auto text-center">
            Assalu nammaleka pothuna boo.. that we made it till today ani
          </p>

        </div>

      </FadeInSection>

    </section>
  );
};

export default LoveCounter;