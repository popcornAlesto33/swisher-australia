"use client";

import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { Trip } from "@/lib/types";

function createMarkerIcon(color: string) {
  return L.divIcon({
    className: "",
    html: `<div style="
      width: 14px; height: 14px;
      background: ${color};
      border: 2px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
}

interface TripMapProps {
  trip: Trip;
}

export default function TripMap({ trip }: TripMapProps) {
  return (
    <MapContainer
      center={[-28, 140]}
      zoom={4}
      scrollWheelZoom={false}
      style={{ height: "calc(100vh - 4rem)", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />

      {/* Chapter polylines and markers */}
      {trip.chapters.map((chapter) => {
        const positions = chapter.days.map(
          (day) => [day.location.lat, day.location.lng] as [number, number]
        );

        return (
          <Polyline
            key={chapter.slug}
            positions={positions}
            pathOptions={{ color: chapter.color, weight: 3, opacity: 0.7 }}
          />
        );
      })}

      {/* Between-chapter dashed connector lines */}
      {trip.chapters.slice(0, -1).map((chapter, idx) => {
        const nextChapter = trip.chapters[idx + 1];
        const lastDay = chapter.days[chapter.days.length - 1];
        const firstDay = nextChapter.days[0];
        const positions: [number, number][] = [
          [lastDay.location.lat, lastDay.location.lng],
          [firstDay.location.lat, firstDay.location.lng],
        ];

        return (
          <Polyline
            key={`connector-${chapter.slug}-${nextChapter.slug}`}
            positions={positions}
            pathOptions={{
              color: "#999",
              weight: 2,
              dashArray: "10, 10",
              opacity: 0.5,
            }}
          />
        );
      })}

      {/* Day markers */}
      {trip.chapters.map((chapter) =>
        chapter.days.map((day) => (
          <Marker
            key={`day-${day.dayNumber}`}
            position={[day.location.lat, day.location.lng]}
            icon={createMarkerIcon(chapter.color)}
          >
            <Popup>
              <div style={{ minWidth: "160px" }}>
                <p style={{ fontWeight: "bold", marginBottom: "2px" }}>
                  Day {day.dayNumber} &mdash; {day.date}
                </p>
                <p style={{ marginBottom: "2px" }}>{day.title}</p>
                <p style={{ color: "#666", fontSize: "0.85em", marginBottom: "6px" }}>
                  {chapter.title}
                </p>
                <Link
                  href={`/chapter/${chapter.slug}#day-${day.dayNumber}`}
                  style={{ color: chapter.color, textDecoration: "underline", fontSize: "0.9em" }}
                >
                  View day details &rarr;
                </Link>
              </div>
            </Popup>
          </Marker>
        ))
      )}
    </MapContainer>
  );
}
