import { Chapter } from "@/lib/types";

interface ChapterHeroProps {
  chapter: Chapter;
}

export default function ChapterHero({ chapter }: ChapterHeroProps) {
  return (
    <section
      className="relative w-full"
      style={{ minHeight: "45vh" }}
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={chapter.heroImage}
        alt={`${chapter.title} — ${chapter.subtitle}`}
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
        width={1200}
        height={675}
        aria-hidden="true"
      />

      {/* Dark gradient overlay — bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content — anchored to bottom of hero */}
      <div className="relative h-full flex items-end" style={{ minHeight: "45vh" }}>
        <div className="w-full px-4 sm:px-6 lg:px-8 pb-10">
          <div className="max-w-3xl mx-auto">
            {/* Chapter label — white at reduced opacity so it reads over any dark hero */}
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-2 text-white/70">
              Chapter {chapter.number}
            </p>

            {/* Accent underline bar */}
            <div
              className="w-12 h-0.5 mb-4 rounded-full"
              style={{ backgroundColor: chapter.color }}
            />

            {/* Title */}
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-3 leading-tight">
              {chapter.title}
            </h1>

            {/* Subtitle */}
            <p className="text-white/80 text-lg mb-2 leading-snug max-w-xl">
              {chapter.subtitle}
            </p>

            {/* Date range */}
            <p className="text-white/60 text-sm tracking-wide">
              {chapter.dates}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
