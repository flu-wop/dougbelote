import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMAGES, STREET_BEAT } from "@/lib/data";

/**
 * StreetBeatFeature — crosslink card to the documentary site, styled like
 * the MCS crosslink on donaldmarkowitz.com. Buttons wrap, columns are
 * min-w-0 so nothing clips at any width.
 */
export function StreetBeatFeature() {
  return (
    <section className="border-y border-border/40 bg-charcoal px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-sm border border-border/60">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="min-w-0 space-y-5 p-6 sm:p-10">
              <span className="inline-block border border-gold/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                Documentary · Host
              </span>
              <h2 className="text-3xl leading-tight text-cream md:text-4xl">
                {STREET_BEAT.title}
                <br />
                <span className="text-gold-gradient italic">
                  {STREET_BEAT.subtitle}
                </span>
              </h2>
              <p className="text-sm leading-relaxed text-mist">
                {STREET_BEAT.blurb}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href={STREET_BEAT.url} target="_blank" rel="noopener noreferrer">
                  <Button>
                    Watch the film <ExternalLink className="ml-2 h-3.5 w-3.5" />
                  </Button>
                </a>
                <Link href="/media">
                  <Button variant="outline">Trailer</Button>
                </Link>
              </div>
            </div>

            <div className="relative min-h-[240px] min-w-0 border-t border-border/40 md:order-first md:border-r md:border-t-0">
              <Image
                src={IMAGES.streetBeatPoster}
                alt="Street Beat: Drumming Below Sea Level — film poster"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
