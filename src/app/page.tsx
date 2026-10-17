import { Hero } from "@/components/sections/hero";
import { StreetBeatFeature } from "@/components/sections/street-beat-feature";
import { ArtistsWall } from "@/components/sections/artists-wall";
import { BookingCTA } from "@/components/sections/booking-cta";

/**
 * Home page (/) — composition only; each block is its own component.
 *
 *   1. Hero              — studio photo, headline, dual CTA
 *   2. StreetBeatFeature — documentary crosslink
 *   3. ArtistsWall       — selected collaborators → /credits
 *   4. BookingCTA        — call-to-action band → /contact
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <StreetBeatFeature />
      <ArtistsWall />
      <BookingCTA />
    </>
  );
}
