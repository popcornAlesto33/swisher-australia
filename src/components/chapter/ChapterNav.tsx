import { Chapter } from "@/lib/types";
import Link from "next/link";

interface ChapterNavProps {
  currentChapter: Chapter;
  allChapters: Chapter[];
}

export default function ChapterNav({ currentChapter, allChapters }: ChapterNavProps) {
  const currentIndex = allChapters.findIndex(
    (c) => c.slug === currentChapter.slug
  );
  const prevChapter = currentIndex > 0 ? allChapters[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < allChapters.length - 1
      ? allChapters[currentIndex + 1]
      : null;
  const isLast = currentIndex === allChapters.length - 1;

  return (
    <nav
      className="border-t border-charcoal/10 bg-cream py-8 px-4 sm:px-6 lg:px-8"
      aria-label="Chapter navigation"
    >
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 justify-between">
        {/* Previous chapter */}
        {prevChapter ? (
          <Link
            href={`/chapter/${prevChapter.slug}`}
            className="group flex flex-col min-h-[44px] rounded-xl border border-charcoal/10 px-5 py-4 transition-all hover:shadow-md hover:-translate-y-0.5 flex-1 sm:max-w-[46%]"
            style={{
              borderLeftColor: prevChapter.color,
              borderLeftWidth: "4px",
            }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-charcoal/40 mb-1">
              &larr; Previous
            </span>
            <span
              className="font-heading font-bold text-lg leading-snug group-hover:opacity-80 transition-opacity"
              style={{ color: prevChapter.color }}
            >
              {prevChapter.title}
            </span>
            <span className="text-sm text-charcoal/50 mt-0.5">
              {prevChapter.dates}
            </span>
          </Link>
        ) : (
          /* Spacer when no previous */
          <div className="flex-1 sm:max-w-[46%]" />
        )}

        {/* Next chapter or Back to Home */}
        {isLast ? (
          <Link
            href="/"
            className="group flex flex-col min-h-[44px] rounded-xl border border-charcoal/10 px-5 py-4 transition-all hover:shadow-md hover:-translate-y-0.5 flex-1 sm:max-w-[46%] sm:items-end text-left sm:text-right"
            style={{
              borderRightColor: "#B8860B",
              borderRightWidth: "4px",
            }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-charcoal/40 mb-1">
              Back to Home &rarr;
            </span>
            <span
              className="font-heading font-bold text-lg leading-snug group-hover:opacity-80 transition-opacity"
              style={{ color: "#B8860B" }}
            >
              The Full Journey
            </span>
            <span className="text-sm text-charcoal/50 mt-0.5">
              Overview
            </span>
          </Link>
        ) : nextChapter ? (
          <Link
            href={`/chapter/${nextChapter.slug}`}
            className="group flex flex-col min-h-[44px] rounded-xl border border-charcoal/10 px-5 py-4 transition-all hover:shadow-md hover:-translate-y-0.5 flex-1 sm:max-w-[46%] sm:items-end text-left sm:text-right"
            style={{
              borderRightColor: nextChapter.color,
              borderRightWidth: "4px",
            }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-charcoal/40 mb-1">
              Next &rarr;
            </span>
            <span
              className="font-heading font-bold text-lg leading-snug group-hover:opacity-80 transition-opacity"
              style={{ color: nextChapter.color }}
            >
              {nextChapter.title}
            </span>
            <span className="text-sm text-charcoal/50 mt-0.5">
              {nextChapter.dates}
            </span>
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
