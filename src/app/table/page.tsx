import type { Metadata } from "next";
import Link from "next/link";
import { trip } from "@/data/itinerary";
import AnimatedSection from "@/components/shared/AnimatedSection";
import PageTransition from "@/components/shared/PageTransition";

export const metadata: Metadata = {
  title: "Itinerary | The Swishers Go Down Under",
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export default function TablePage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-cream py-12 px-4">
        {/* Page header */}
        <div className="max-w-5xl mx-auto mb-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl text-charcoal mb-3">
            Your Complete Itinerary
          </h1>
          <p className="text-charcoal/60 text-lg">
            17 days across four chapters of your Australian adventure
          </p>
        </div>

        <AnimatedSection>
          {/* ── DESKTOP TABLE ─────────────────────────────────────────── */}
          <div className="hidden md:block max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-md border border-tan/40">
            <table className="w-full text-base border-collapse">
              <thead>
                <tr className="bg-charcoal text-cream">
                  <th className="py-3 px-4 text-left font-semibold w-20">Day</th>
                  <th className="py-3 px-4 text-left font-semibold w-32">Date</th>
                  <th className="py-3 px-4 text-left font-semibold w-64">Location</th>
                  <th className="py-3 px-4 text-left font-semibold">Highlights</th>
                </tr>
              </thead>
              <tbody>
                {trip.chapters.map((chapter) => (
                  <>
                    {/* Chapter header row */}
                    <tr key={`chapter-${chapter.slug}`}>
                      <td
                        colSpan={4}
                        className="py-3 px-4 text-white font-semibold text-base"
                        style={{ backgroundColor: chapter.color }}
                      >
                        Chapter {chapter.number}: {chapter.title} — {chapter.dates}
                      </td>
                    </tr>

                    {/* Day rows */}
                    {chapter.days.map((day, dayIndex) => {
                      const isEven = dayIndex % 2 === 0;
                      const morningHighlight =
                        day.activities.morning
                          ? day.activities.morning.split(".")[0] + "."
                          : day.subtitle;

                      return (
                        <tr
                          key={`day-${day.dayNumber}`}
                          className="cursor-pointer transition-colors duration-150 hover:brightness-95 group"
                          style={{ backgroundColor: isEven ? "#ffffff" : "#F9F6F2" }}
                        >
                          <td className="py-4 px-4 border-b border-tan/30">
                            <Link
                              href={`/chapter/${chapter.slug}#day-${day.dayNumber}`}
                              className="block w-full h-full"
                            >
                              <span className="font-semibold text-charcoal">
                                Day {day.dayNumber}
                              </span>
                            </Link>
                          </td>
                          <td className="py-4 px-4 border-b border-tan/30 text-charcoal/70">
                            <Link
                              href={`/chapter/${chapter.slug}#day-${day.dayNumber}`}
                              className="block w-full h-full"
                            >
                              {formatDate(day.date)}
                            </Link>
                          </td>
                          <td className="py-4 px-4 border-b border-tan/30">
                            <Link
                              href={`/chapter/${chapter.slug}#day-${day.dayNumber}`}
                              className="block w-full h-full"
                            >
                              <span
                                className="font-medium"
                                style={{ color: chapter.color }}
                              >
                                {day.title}
                              </span>
                            </Link>
                          </td>
                          <td className="py-4 px-4 border-b border-tan/30 text-charcoal/70 max-w-xs">
                            <Link
                              href={`/chapter/${chapter.slug}#day-${day.dayNumber}`}
                              className="block w-full h-full"
                            >
                              <span className="line-clamp-2">{morningHighlight}</span>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── MOBILE CARDS ──────────────────────────────────────────── */}
          <div className="md:hidden max-w-2xl mx-auto space-y-3">
            {trip.chapters.map((chapter) => (
              <div key={`mobile-chapter-${chapter.slug}`}>
                {/* Chapter header card */}
                <div
                  className="rounded-xl px-5 py-3 text-white font-semibold text-base mb-2"
                  style={{ backgroundColor: chapter.color }}
                >
                  Chapter {chapter.number}: {chapter.title} — {chapter.dates}
                </div>

                {/* Day cards */}
                <div className="space-y-2">
                  {chapter.days.map((day) => (
                    <Link
                      key={`mobile-day-${day.dayNumber}`}
                      href={`/chapter/${chapter.slug}#day-${day.dayNumber}`}
                      className="block"
                    >
                      <div
                        className="bg-white rounded-xl px-5 py-4 border-l-4 shadow-sm hover:shadow-md transition-shadow duration-150"
                        style={{ borderLeftColor: chapter.color }}
                      >
                        <div className="flex items-baseline justify-between mb-1">
                          <span className="text-sm font-semibold text-charcoal/50 uppercase tracking-wide">
                            Day {day.dayNumber}
                          </span>
                          <span className="text-sm text-charcoal/50">
                            {formatDate(day.date)}
                          </span>
                        </div>
                        <p
                          className="font-heading font-semibold text-lg leading-snug mb-1"
                          style={{ color: chapter.color }}
                        >
                          {day.title}
                        </p>
                        <p className="text-sm text-charcoal/60 leading-snug">
                          {day.subtitle}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </main>
    </PageTransition>
  );
}
