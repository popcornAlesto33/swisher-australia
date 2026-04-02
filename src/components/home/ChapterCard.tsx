import Link from "next/link";
import { Chapter } from "@/lib/types";

interface ChapterCardProps {
  chapter: Chapter;
}

export default function ChapterCard({ chapter }: ChapterCardProps) {
  return (
    <Link
      href={`/chapter/${chapter.slug}`}
      className="group relative block rounded-xl overflow-hidden shadow-lg
                 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl"
      aria-label={`Chapter ${chapter.number}: ${chapter.title}`}
    >
      <div className="flex flex-col sm:flex-row">
        {/* Image section */}
        <div className="relative sm:w-2/5 aspect-[16/9] sm:aspect-auto sm:min-h-[220px]">
          <img
            src={chapter.heroImage}
            alt={`${chapter.title} — ${chapter.subtitle}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            width={600}
            height={450}
          />
          {/* Chapter number badge */}
          <div
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-body font-semibold tracking-wider uppercase text-white/90"
            style={{ backgroundColor: `${chapter.color}cc` }}
          >
            Chapter {chapter.number}
          </div>
        </div>

        {/* Content section */}
        <div className="sm:w-3/5 bg-white p-6 sm:p-8 flex flex-col justify-center">
          {/* Accent bar */}
          <div
            className="w-10 h-1 rounded-full mb-4"
            style={{ backgroundColor: chapter.color }}
            aria-hidden="true"
          />

          {/* Chapter title */}
          <h2
            className="font-heading text-2xl sm:text-3xl text-[#2C2C2C] leading-tight mb-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {chapter.title}
          </h2>

          {/* Subtitle */}
          <p className="text-[#2C2C2C]/70 text-sm sm:text-base font-body leading-relaxed mb-4">
            {chapter.subtitle}
          </p>

          {/* Date range and day count */}
          <div className="flex items-center gap-3">
            <p
              className="text-xs font-body font-medium tracking-wide uppercase"
              style={{ color: chapter.color }}
            >
              {chapter.dates}
            </p>
            <span className="text-[#2C2C2C]/20">·</span>
            <p className="text-xs font-body text-[#2C2C2C]/40 tracking-wide">
              {chapter.days.length} {chapter.days.length === 1 ? "day" : "days"}
            </p>
          </div>

          {/* Arrow indicator */}
          <div className="mt-4 flex items-center gap-1.5 text-xs font-body tracking-wide uppercase"
               style={{ color: chapter.color }}>
            <span>Explore</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
