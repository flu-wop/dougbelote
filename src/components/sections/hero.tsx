import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE, IMAGES } from "@/lib/data";

/**
 * Hero — full-viewport cinematic opener.
 * Strong portrait, gold-gradient headline, dual CTA (Booking + Media).
 * Swap IMAGES.hero in src/lib/data.ts for Doug's real portrait
 * (ideally a tall/portrait crop, 1600px+ wide, dark or moody lighting).
 */
export function Hero() {
  return (
    <section className="relative grain vignette min-h-[92vh] overflow-hidden">
      {/* Background portrait */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt={`${SITE.name} — ${SITE.role}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50"
        />
        {/* Gradient washes to keep text legible and on-brand */}
        <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-studio-black/60 to-studio-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-studio-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-5 sm:px-8">
        <p className="eyebrow mb-5 animate-fade-up">
          {SITE.city} · {SITE.role}
        </p>

        <h1 className="max-w-3xl animate-fade-up text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
          <span className="text-gold-gradient">{SITE.heroHeadline}</span>
        </h1>

        <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-cream/80">
          {SITE.heroSub}
        </p>

        <div className="mt-10 flex animate-fade-up flex-col gap-4 sm:flex-row">
          <Link href="/contact">
            <Button size="lg" className="w-full sm:w-auto">
              Book Doug
            </Button>
          </Link>
          <Link href="/media">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Watch the reel
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-mist">
        Scroll
      </div>
    </section>
  );
}
