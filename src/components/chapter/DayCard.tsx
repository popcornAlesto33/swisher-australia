import { Day } from "@/lib/types";
import FunFact from "./FunFact";
import HighlightGallery from "./HighlightGallery";

interface DayCardProps {
  day: Day;
  chapterColor: string;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00Z");
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

interface ActivitySectionProps {
  label: string;
  text: string;
}

function ActivitySection({ label, text }: ActivitySectionProps) {
  return (
    <div className="mb-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-charcoal/40 mb-1">
        {label}
      </p>
      <p className="text-base leading-relaxed text-charcoal/80">{text}</p>
    </div>
  );
}

export default function DayCard({ day, chapterColor }: DayCardProps) {
  const formattedDate = formatDate(day.date);

  return (
    <div
      id={`day-${day.dayNumber}`}
      style={{ scrollMarginTop: "5rem", borderLeftColor: chapterColor }}
      className="bg-white rounded-xl shadow-sm p-6 border-l-4"
    >
      {/* Header */}
      <p className="text-xs font-medium text-charcoal/50 mb-2 tracking-wide">
        Day {day.dayNumber} &middot; {formattedDate}
      </p>
      <h3 className="font-heading text-xl font-bold text-charcoal mb-1">
        {day.title}
      </h3>
      <p className="text-charcoal/70 mb-5">{day.subtitle}</p>

      {/* Activities */}
      <div>
        {day.activities.morning && (
          <ActivitySection label="Morning" text={day.activities.morning} />
        )}
        {day.activities.afternoon && (
          <ActivitySection label="Afternoon" text={day.activities.afternoon} />
        )}
        {day.activities.evening && (
          <ActivitySection label="Evening" text={day.activities.evening} />
        )}
      </div>

      {/* Highlight photos */}
      {day.highlights && day.highlights.length > 0 && (
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-charcoal/40 mb-3">
            What you&apos;ll see
          </p>
          <HighlightGallery highlights={day.highlights} chapterColor={chapterColor} />
        </div>
      )}

      {/* Fun Facts */}
      {day.funFacts && day.funFacts.length > 0 && (
        <div className="mt-5 flex flex-col gap-3">
          {day.funFacts.map((fact, i) => (
            <FunFact key={i} fact={fact} />
          ))}
        </div>
      )}
    </div>
  );
}
