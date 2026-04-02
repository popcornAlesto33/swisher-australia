import type { Metadata } from "next";
import { trip } from "@/data/itinerary";
import PageTransition from "@/components/shared/PageTransition";
import MapPageClient from "@/components/map/MapPageClient";

export const metadata: Metadata = {
  title: "Map | The Swishers Go Down Under",
};

export default function MapPage() {
  return (
    <PageTransition>
      <MapPageClient trip={trip} />
    </PageTransition>
  );
}
