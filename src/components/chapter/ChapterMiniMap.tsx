"use client";

import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Chapter } from "@/lib/types";

const ZOOM_LEVELS: Record<string, number> = {
  sydney: 11,
  tasmania: 7,
  "coastal-drive": 7,
  "the-wedding": 11,
};

function createMarkerIcon(color: string) {
  return L.divIcon({
    className: "",
    html: `<div style="width:12px;height:12px;background:${color};border:2px solid white;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,0.3)"></div>`,
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  });
}

interface ChapterMiniMapProps {
  chapter: Chapter;
}

export default function ChapterMiniMap({ chapter }: ChapterMiniMapProps) {
  const zoom = ZOOM_LEVELS[chapter.slug] ?? 9;
  const center: [number, number] = [chapter.location.lat, chapter.location.lng];
  const positions = chapter.days.map(
    (day) => [day.location.lat, day.location.lng] as [number, number]
  );
  const icon = createMarkerIcon(chapter.color);

  return (
    <div className="rounded-xl overflow-hidden shadow-md" style={{ height: "300px" }}>
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
        {chapter.days.map((day) => (
          <Marker
            key={`mini-day-${day.dayNumber}`}
            position={[day.location.lat, day.location.lng]}
            icon={icon}
          />
        ))}
      </MapContainer>
    </div>
  );
}
