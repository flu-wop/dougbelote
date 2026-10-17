import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { WALL_ARTISTS } from "@/lib/data";

/**
 * ArtistsWall — typographic wall of selected collaborators. Names come
 * from WALL_ARTISTS in src/lib/data.ts; the full list lives on /credits.
 */
export function ArtistsWall() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected artists"
          title="Behind the players"
          emphasis="players"
          align="center"
        />
        <p className="mx-auto mt-10 max-w-4xl text-center font-serif text-2xl leading-[1.8] text-cream/85 sm:text-3xl">
          {WALL_ARTISTS.map((name, i) => (
            <span key={name}>
              {name}
              {i < WALL_ARTISTS.length - 1 && (
                <span className="mx-3 text-gold/60" aria-hidden>
                  ·
                </span>
              )}
            </span>
          ))}
        </p>
        <div className="mt-10 text-center">
          <Link
            href="/credits"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold transition-colors hover:text-cream"
          >
            Full credits <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
