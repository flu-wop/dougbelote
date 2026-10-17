import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/sections/section-heading";
import { BookingCTA } from "@/components/sections/booking-cta";
import { ABOUT, IMAGES, SITE } from "@/lib/data";

export const metadata: Metadata = { title: "About" };

/**
 * About page (/about) — bio + portrait.
 * All copy lives in ABOUT (src/lib/data.ts). Swap IMAGES.aboutPortrait
 * for Doug's real photo (portrait orientation works best here).
 */
export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20">
        <SectionHeading eyebrow="About" title={SITE.name} />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          {/* Portrait */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border">
            <Image
              src={IMAGES.aboutPortrait}
              alt={`${SITE.name} portrait`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-studio-black/40 to-transparent" />
          </div>

          {/* Bio */}
          <div>
            <div className="space-y-5">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-cream/85">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
