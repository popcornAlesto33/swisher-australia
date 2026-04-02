"use client";

import dynamic from "next/dynamic";
import { Trip } from "@/lib/types";

const TripMap = dynamic(() => import("@/components/map/TripMap"), {
  ssr: false,
  loading: () => (
    <div
      style={{ height: "calc(100vh - 4rem)" }}
      className="flex items-center justify-center bg-cream"
    >
      <p className="text-charcoal/50 font-heading text-lg">Loading map...</p>
    </div>
  ),
});

interface MapPageClientProps {
  trip: Trip;
}

export default function MapPageClient({ trip }: MapPageClientProps) {
  return <TripMap trip={trip} />;
}
