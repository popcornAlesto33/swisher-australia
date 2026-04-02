"use client";

import dynamic from "next/dynamic";
import { Chapter } from "@/lib/types";

const ChapterMiniMap = dynamic(() => import("@/components/chapter/ChapterMiniMap"), {
  ssr: false,
  loading: () => (
    <div
      className="rounded-xl bg-stone-100 flex items-center justify-center"
      style={{ height: "300px" }}
    >
      <p className="text-charcoal/40 text-sm">Loading map...</p>
    </div>
  ),
});

interface ChapterMiniMapWrapperProps {
  chapter: Chapter;
}

export default function ChapterMiniMapWrapper({ chapter }: ChapterMiniMapWrapperProps) {
  return <ChapterMiniMap chapter={chapter} />;
}
