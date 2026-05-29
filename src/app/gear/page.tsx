import type { Metadata } from "next";
import { SectionHeading } from "@/components/sections/section-heading";
import { GearGrid } from "@/components/sections/gear-grid";

export const metadata: Metadata = { title: "Gear" };

/**
 * Gear page (/gear) — endorsements + setup.
 * Edit the GEAR array in src/lib/data.ts. Set `endorsed: true` to show
 * the gold check badge.
 */
export default function GearPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-28 pt-20 sm:px-8">
      <SectionHeading
        eyebrow="Setup & Endorsements"
        title="What's behind the kit"
        subtitle="The instruments and gear Doug trusts in the studio and on the road."
      />
      <div className="mt-12">
        <GearGrid />
      </div>
    </section>
  );
}
