import type { Metadata } from "next";
import { SectionHeading } from "@/components/sections/section-heading";
import { CreditsGrid } from "@/components/sections/credits-grid";

export const metadata: Metadata = { title: "Credits" };

/**
 * Credits page (/credits) — filterable grid.
 * Edit the CREDITS array in src/lib/data.ts; the filter chips update
 * automatically from whatever categories you use.
 */
export default function CreditsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-28 pt-20 sm:px-8">
      <SectionHeading
        eyebrow="Selected Credits"
        title="The records & the rooms"
        subtitle="A growing list of the artists, albums, and stages Doug has been part of. Filter by type below."
      />
      <div className="mt-12">
        <CreditsGrid />
      </div>
    </section>
  );
}
