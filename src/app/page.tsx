import { Hero } from "@/components/sections/hero";
import { StatBand } from "@/components/sections/stat-band";
import { StreetBeatFeature } from "@/components/sections/street-beat-feature";
import { ArtistsWall } from "@/components/sections/artists-wall";
import { BookingCTA } from "@/components/sections/booking-cta";

/**
 * Home page (/) — composition only; each block is its own component.
 *
 *   1. Hero              — studio photo, headline, dual CTA
 *   2. StatBand          — three headline numbers
 *   3. StreetBeatFeature — documentary crosslink
 *   4. ArtistsWall       — selected collaborators → /credits
 *   5. BookingCTA        — call-to-action band → /contact
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <StatBand />
      <StreetBeatFeature />
      <ArtistsWall />
      <BookingCTA />
    </>
  );
}
