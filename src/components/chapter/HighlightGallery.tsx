"use client";

import { useState } from "react";
import { Highlight } from "@/lib/types";

interface HighlightGalleryProps {
  highlights: Highlight[];
  chapterColor: string;
}

export default function HighlightGallery({ highlights, chapterColor }: HighlightGalleryProps) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      {/* Thumbnail row */}
      <div className="grid grid-cols-3 gap-3">
        {highlights.map((h, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="group relative rounded-lg overflow-hidden aspect-[4/3] cursor-pointer
                       focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ "--tw-ring-color": chapterColor } as React.CSSProperties}
            aria-label={`View ${h.title}`}
          >
            <img
              src={h.image}
              alt={h.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
              width={400}
              height={300}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="absolute bottom-0 left-0 right-0 px-2 py-1.5 text-xs text-white font-body
                          font-medium leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          truncate">
              {h.title}
            </p>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={highlights[selected].title}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Content */}
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative aspect-[16/10]">
              <img
                src={highlights[selected].image.replace("w=400", "w=1200").replace("w=600", "w=1200")}
                alt={highlights[selected].title}
                className="w-full h-full object-cover"
                width={1200}
                height={750}
              />

              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white
                           flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Close"
              >
                <span className="text-lg leading-none">&times;</span>
              </button>

              {/* Navigation arrows */}
              {selected > 0 && (
                <button
                  onClick={() => setSelected(selected - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
                             bg-black/50 text-white flex items-center justify-center
                             hover:bg-black/70 transition-colors"
                  aria-label="Previous photo"
                >
                  <span className="text-lg leading-none">&lsaquo;</span>
                </button>
              )}
              {selected < highlights.length - 1 && (
                <button
                  onClick={() => setSelected(selected + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
                             bg-black/50 text-white flex items-center justify-center
                             hover:bg-black/70 transition-colors"
                  aria-label="Next photo"
                >
                  <span className="text-lg leading-none">&rsaquo;</span>
                </button>
              )}
            </div>

            {/* Caption */}
            <div className="p-5">
              <h4 className="font-heading text-lg font-bold text-charcoal mb-1">
                {highlights[selected].title}
              </h4>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                {highlights[selected].caption}
              </p>

              {/* Photo dots */}
              <div className="flex gap-2 mt-4 justify-center">
                {highlights.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(i)}
                    className="w-2 h-2 rounded-full transition-all"
                    style={{
                      backgroundColor: i === selected ? chapterColor : "#ddd",
                    }}
                    aria-label={`View photo ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
