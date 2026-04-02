import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { trip } from "@/data/itinerary";
import PageTransition from "@/components/shared/PageTransition";
import ChapterHero from "@/components/chapter/ChapterHero";
import Timeline from "@/components/chapter/Timeline";
import ChapterNav from "@/components/chapter/ChapterNav";

// In Next.js 15, params is a Promise
interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return trip.chapters.map((chapter) => ({
    slug: chapter.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const chapter = trip.chapters.find((c) => c.slug === slug);

  if (!chapter) {
    return { title: "Not Found" };
  }

  return {
    title: `${chapter.title} | The Swishers Go Down Under`,
    description: chapter.subtitle,
  };
}

export default async function ChapterPage({ params }: PageProps) {
  const { slug } = await params;
  const chapter = trip.chapters.find((c) => c.slug === slug);

  if (!chapter) {
    notFound();
  }

  return (
    <PageTransition>
      <ChapterHero chapter={chapter} />
      <Timeline days={chapter.days} chapterColor={chapter.color} />
      <ChapterNav currentChapter={chapter} allChapters={trip.chapters} />
    </PageTransition>
  );
}
