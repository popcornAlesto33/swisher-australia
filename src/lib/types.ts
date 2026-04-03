export interface Trip {
  title: string;
  subtitle: string;
  dates: string;
  chapters: Chapter[];
}

export interface Chapter {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  dates: string;
  color: string;
  heroImage: string;
  location: { lat: number; lng: number };
  days: Day[];
}

export interface Day {
  date: string;
  dayNumber: number;
  title: string;
  subtitle: string;
  location: { lat: number; lng: number };
  heroImage: string;
  activities: {
    morning?: string;
    afternoon?: string;
    evening?: string;
  };
  accommodation?: string;
  stops?: Stop[];
  funFacts?: string[];
  highlights?: Highlight[];
}

export interface Stop {
  name: string;
  location: { lat: number; lng: number };
}

export interface Highlight {
  image: string;
  title: string;
  caption: string;
}
