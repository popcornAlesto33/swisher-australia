"use client";

import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Chapter, Day } from "@/lib/types";

const ZOOM_LEVELS: Record<string, number> = {
  sydney: 11,
  tasmania: 7,
  "coastal-drive": 6,
  "the-wedding": 11,
};

function createMarkerIcon(color: string, size = 12) {
  return L.divIcon({
    className: "",
    html: `<div style="width:${size}px;height:${size}px;background:${color};border:2px solid white;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,0.3)"></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

function getDayPositions(day: Day): [number, number][] {
  if (!day.stops || day.stops.length === 0) {
    return [[day.location.lat, day.location.lng]];
  }
  const stopPositions = day.stops.map(
    (s) => [s.location.lat, s.location.lng] as [number, number]
  );
  return [...stopPositions, [day.location.lat, day.location.lng]];
}

interface ChapterMiniMapProps {
  chapter: Chapter;
}

export default function ChapterMiniMap({ chapter }: ChapterMiniMapProps) {
  const zoom = ZOOM_LEVELS[chapter.slug] ?? 9;
  const center: [number, number] = [chapter.location.lat, chapter.location.lng];
  const icon = createMarkerIcon(chapter.color);
  const stopIcon = createMarkerIcon(chapter.color, 8);

  // Build full polyline including stops
  const positions: [number, number][] = [];
  chapter.days.forEach((day) => {
    positions.push(...getDayPositions(day));
  });

  return (
    <div className="rounded-xl overflow-hidden shadow-md h-[200px] sm:h-[300px]">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        zoomControl={false}
        dragging={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <Polyline
          positions={positions}
          pathOptions={{ color: chapter.color, weight: 3, opacity: 0.7 }}
        />
        {/* Day markers */}
        {chapter.days.map((day) => (
          <Marker
            key={`mini-day-${day.dayNumber}`}
            position={[day.location.lat, day.location.lng]}
            icon={icon}
          />
        ))}
        {/* Stop markers — smaller */}
        {chapter.days.map((day) =>
          (day.stops || []).map((stop) => (
            <Marker
              key={`mini-stop-${day.dayNumber}-${stop.name}`}
              position={[stop.location.lat, stop.location.lng]}
              icon={stopIcon}
            />
          ))
        )}
      </MapContainer>
    </div>
  );
}
