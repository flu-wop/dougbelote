import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE, IMAGES } from "@/lib/data";

/**
 * Hero — split layout matching the DJM / MCS openers: eyebrow chip,
 * serif headline with an italic gold phrase, dual CTA, and a framed
 * studio photo. Swap IMAGES.hero in src/lib/data.ts for a higher-res
 * original when available (1600px+ wide).
 */
export function Hero() {
  return (
    <section className="grain vignette relative overflow-hidden border-b border-border/40 bg-charcoal">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.05fr_1fr] md:py-28">
        <div className="min-w-0 space-y-6">
          <span className="inline-block animate-fade-up border border-gold/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
            {SITE.city} · {SITE.role}
          </span>

          <h1 className="animate-fade-up text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl">
            {SITE.heroLead}
            <br />
            <span className="text-gold-gradient italic">{SITE.heroEmphasis}</span>
          </h1>

          <p className="max-w-md animate-fade-up text-base leading-relaxed text-mist">
            {SITE.heroSub}
          </p>

          <div className="flex animate-fade-up flex-wrap gap-3 pt-2">
            <Link href="/contact">
              <Button size="lg">Book Doug</Button>
            </Link>
            <Link href="/media">
              <Button variant="outline" size="lg">
                Watch the trailer
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-sm border border-border">
          <Image
            src={IMAGES.hero}
            alt={`${SITE.name} tracking drums in the studio`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-studio-black/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
