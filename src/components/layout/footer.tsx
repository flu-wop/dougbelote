import Link from "next/link";
import { Instagram, Youtube, Music2 } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

/**
 * Footer — matches the MCS layout: brand block on the left, quick links,
 * social icons, gold divider, copyright row. Edit socials in src/lib/data.ts.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-charcoal">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl text-cream">{SITE.name}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.3em] text-gold">
              {SITE.role}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
              {SITE.tagline}. Based in {SITE.city}.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + socials */}
          <div>
            <p className="eyebrow mb-4">Connect</p>
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm text-cream/70 transition-colors hover:text-gold"
            >
              {SITE.email}
            </a>
            <div className="mt-5 flex gap-4">
              <a
                href={SITE.socials.instagram}
                aria-label="Instagram"
                className="text-mist transition-colors hover:text-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href={SITE.socials.youtube}
                aria-label="YouTube"
                className="text-mist transition-colors hover:text-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={20} />
              </a>
              <a
                href={SITE.socials.spotify}
                aria-label="Spotify"
                className="text-mist transition-colors hover:text-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Music2 size={20} />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-mist sm:flex-row">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.2em]">
            {SITE.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
