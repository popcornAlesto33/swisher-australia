import { Day } from "@/lib/types";
import DayCard from "./DayCard";
import AnimatedSection from "@/components/shared/AnimatedSection";

interface TimelineProps {
  days: Day[];
  chapterColor: string;
}

export default function Timeline({ days, chapterColor }: TimelineProps) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Vertical timeline line — hidden on mobile, visible sm+ */}
          <div
            className="hidden sm:block absolute left-4 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: chapterColor, opacity: 0.3 }}
          />

          <div className="flex flex-col gap-8">
            {days.map((day, index) => (
              <div key={day.dayNumber} className="relative sm:pl-12">
                {/* Timeline dot */}
                <div
                  className="hidden sm:block absolute left-[9px] top-6 w-3 h-3 rounded-full border-2 border-white"
                  style={{ backgroundColor: chapterColor }}
                />

                <AnimatedSection delay={index * 0.1}>
                  <DayCard day={day} chapterColor={chapterColor} />
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
