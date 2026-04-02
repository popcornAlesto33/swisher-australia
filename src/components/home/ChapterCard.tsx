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
                 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                 aspect-[4/3]"
      aria-label={`Chapter ${chapter.number}: ${chapter.title}`}
    >
      {/* Hero background image */}
      <img
        src={chapter.heroImage}
        alt={chapter.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Dark gradient overlay at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Left accent border using chapter color */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ backgroundColor: chapter.color }}
        aria-hidden="true"
      />

      {/* Text content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 pl-6">
        {/* Chapter number */}
        <p
          className="text-xs tracking-[0.2em] uppercase mb-1.5 font-body font-medium"
          style={{ color: chapter.color }}
        >
          Chapter {chapter.number}
        </p>

        {/* Chapter title */}
        <h2
          className="font-heading text-2xl text-white leading-tight mb-1"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {chapter.title}
        </h2>

        {/* Subtitle */}
        <p className="text-white/75 text-sm font-body leading-snug line-clamp-2 mb-2">
          {chapter.subtitle}
        </p>

        {/* Date range */}
        <p className="text-white/50 text-xs font-body tracking-wide uppercase">
          {chapter.dates}
        </p>
      </div>
    </Link>
  );
}
