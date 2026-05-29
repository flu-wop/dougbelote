import type { Metadata } from "next";
import { SectionHeading } from "@/components/sections/section-heading";
import { MediaPlayers } from "@/components/sections/media-players";

export const metadata: Metadata = { title: "Media" };

/**
 * Media page (/media) — video reel + audio clips.
 * Edit the MEDIA array in src/lib/data.ts:
 *   - video: src = YouTube video ID
 *   - audio: src = path under /public (e.g. /audio/clip-1.mp3)
 */
export default function MediaPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 pb-28 pt-20 sm:px-8">
      <SectionHeading
        eyebrow="Watch & Listen"
        title="Media"
        subtitle="Performance footage and studio clips."
      />
      <div className="mt-12">
        <MediaPlayers />
      </div>
    </section>
  );
}
