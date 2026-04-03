"use client";

import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { Trip, Day } from "@/lib/types";

function createMarkerIcon(color: string, size = 14) {
  return L.divIcon({
    className: "",
    html: `<div style="
      width: ${size}px; height: ${size}px;
      background: ${color};
      border: 2px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

/** Build the full polyline positions for a day, including its stops in route order */
function getDayPositions(day: Day): [number, number][] {
  if (!day.stops || day.stops.length === 0) {
    return [[day.location.lat, day.location.lng]];
  }
  // Stops are in travel order, main location is the final destination
  const stopPositions = day.stops.map(
    (s) => [s.location.lat, s.location.lng] as [number, number]
  );
  return [...stopPositions, [day.location.lat, day.location.lng]];
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

      {/* Chapter polylines — include stops for accurate routes */}
      {trip.chapters.map((chapter) => {
        const positions: [number, number][] = [];
        chapter.days.forEach((day) => {
          positions.push(...getDayPositions(day));
        });

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
        const firstNextDay = nextChapter.days[0];
        // Use the final position of the last day (after stops)
        const lastDayPositions = getDayPositions(lastDay);
        const lastPos = lastDayPositions[lastDayPositions.length - 1];
        // Use the first position of the next day (before stops)
        const firstNextPositions = getDayPositions(firstNextDay);
        const firstPos = firstNextPositions[0];

        return (
          <Polyline
            key={`connector-${chapter.slug}-${nextChapter.slug}`}
            positions={[lastPos, firstPos]}
            pathOptions={{
              color: "#999",
              weight: 2,
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

      {/* Stop markers — smaller dots for intermediate road trip stops */}
      {trip.chapters.map((chapter) =>
        chapter.days.map((day) =>
          (day.stops || []).map((stop) => (
            <Marker
              key={`stop-${day.dayNumber}-${stop.name}`}
              position={[stop.location.lat, stop.location.lng]}
              icon={createMarkerIcon(chapter.color, 9)}
            >
              <Popup>
                <div style={{ minWidth: "120px" }}>
                  <p style={{ fontWeight: "bold", marginBottom: "2px" }}>
                    {stop.name}
                  </p>
                  <p style={{ color: "#666", fontSize: "0.85em", marginBottom: "4px" }}>
                    Day {day.dayNumber} stop
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
        )
      )}
    </MapContainer>
  );
}
