import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/sections/section-heading";
import { BookingCTA } from "@/components/sections/booking-cta";
import { ABOUT, IMAGES, SITE } from "@/lib/data";

export const metadata: Metadata = { title: "About" };

/**
 * About page (/about) — bio + portrait + stat blocks.
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

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {ABOUT.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-4xl text-gold-gradient">
                    {s.value}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-mist">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* In the studio with a collaborator */}
        <div className="mt-16 grid grid-cols-1 overflow-hidden rounded-sm border border-border sm:grid-cols-[220px_1fr]">
          <div className="relative aspect-[4/5] min-w-0 sm:aspect-auto sm:min-h-[260px]">
            <Image
              src={IMAGES.withGaryPaczosa}
              alt="Doug Belote with engineer and producer Gary Paczosa"
              fill
              sizes="(max-width: 640px) 100vw, 220px"
              className="object-cover object-top"
            />
          </div>
          <div className="flex min-w-0 flex-col justify-center gap-2 border-t border-border p-6 sm:border-l sm:border-t-0 sm:p-10">
            <p className="eyebrow">In the studio</p>
            <p className="font-serif text-2xl text-cream">
              Doug Belote with <span className="text-gold-gradient italic">Gary Paczosa</span>
            </p>
            <p className="text-sm text-mist">Engineer and producer.</p>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
