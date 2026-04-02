import Link from "next/link";
import { trip } from "@/data/itinerary";
import HeroSection from "@/components/home/HeroSection";
import ChapterCard from "@/components/home/ChapterCard";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function Home() {
  return (
    <main>
      {/* 1. Full-screen hero */}
      <HeroSection />

      {/* 2. Chapter grid section */}
      <section className="bg-[#F9F6F2] py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.25em] uppercase text-[#C8B99A] font-body mb-3">
                The Journey
              </p>
              <h2
                className="font-heading text-3xl sm:text-4xl text-[#2C2C2C]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Four Chapters, One Adventure
              </h2>
              <p className="mt-4 text-[#2C2C2C]/60 font-body text-base max-w-xl mx-auto leading-relaxed">
                From Sydney&apos;s sparkling harbour to a wedding in the valley
                — 17 unforgettable days across Australia.
              </p>
            </div>
          </AnimatedSection>

          {/* Chapter cards flow */}
          <div className="flex flex-col items-center gap-0">
            {trip.chapters.map((chapter, index) => (
              <div key={chapter.slug} className="w-full max-w-2xl">
                <AnimatedSection delay={index * 0.15}>
                  <ChapterCard chapter={chapter} />
                </AnimatedSection>

                {/* Flow connector between chapters */}
                {index < trip.chapters.length - 1 && (
                  <AnimatedSection delay={index * 0.15 + 0.1}>
                    <div className="flex flex-col items-center py-4">
                      <div
                        className="w-px h-8"
                        style={{ backgroundColor: chapter.color, opacity: 0.4 }}
                      />
                      <div className="flex items-center gap-3 py-2">
                        <div
                          className="h-px w-8 hidden sm:block"
                          style={{ backgroundColor: chapter.color, opacity: 0.3 }}
                        />
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs"
                          style={{ backgroundColor: trip.chapters[index + 1].color }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3.5 h-3.5"
                            aria-hidden="true"
                          >
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                          </svg>
                        </div>
                        <div
                          className="h-px w-8 hidden sm:block"
                          style={{ backgroundColor: trip.chapters[index + 1].color, opacity: 0.3 }}
                        />
                      </div>
                      <div
                        className="w-px h-8"
                        style={{ backgroundColor: trip.chapters[index + 1].color, opacity: 0.4 }}
                      />
                    </div>
                  </AnimatedSection>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA buttons */}
      <section className="bg-[#F5F0E8] py-16 px-4 sm:px-6 border-t border-[#C8B99A]/20">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h3
              className="font-heading text-2xl sm:text-3xl text-[#2C2C2C] mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Explore Every Detail
            </h3>
            <p className="text-[#2C2C2C]/60 font-body mb-10 text-base">
              Dive into the interactive map or browse the full day-by-day itinerary.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/map"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full
                           bg-[#2C2C2C] text-[#F9F6F2] font-body text-sm tracking-wide
                           hover:bg-[#1A3A5C] transition-colors duration-300 shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M9 3L3 6v15l6-3 6 3 6-3V3l-6 3-6-3z" />
                  <path d="M9 3v15M15 6v15" />
                </svg>
                Explore the Map
              </Link>

              <Link
                href="/table"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full
                           border-2 border-[#C8B99A] text-[#2C2C2C] font-body text-sm tracking-wide
                           hover:bg-[#C8B99A]/20 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
                View Full Itinerary
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
