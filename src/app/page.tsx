import { Hero } from "@/components/sections/hero";
import { NewsReel } from "@/components/sections/news-reel";
import { BookingCTA } from "@/components/sections/booking-cta";

/**
 * Home page (/) — the cinematic opener.
 * Composition only: each block is its own component so you can reorder,
 * remove, or restyle without touching the others.
 *
 *   1. Hero        — portrait + tagline + dual CTA
 *   2. NewsReel    — latest news cards + reel teaser → /media
 *   3. BookingCTA  — warm call-to-action band → /contact
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <NewsReel />
      <BookingCTA />
    </>
  );
}
