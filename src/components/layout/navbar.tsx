"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE } from "@/lib/data";

/**
 * Navbar — sticky top bar matching the MCS / Streetbeat pattern.
 * - Wordmark logo on the left (swap for an <Image> logo when Doug has one)
 * - Inline links on desktop with a gold underline on the active route
 * - Hamburger drawer on mobile
 */
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-studio-black/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Wordmark — replace with logo <Image> later if desired */}
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-serif text-xl tracking-wide text-cream transition-colors group-hover:text-gold">
            {SITE.name}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">
            {SITE.role}
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative font-sans text-sm tracking-wide transition-colors",
                    active ? "text-gold" : "text-cream/70 hover:text-cream"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300",
                      active ? "w-full" : "w-0"
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-cream md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-border bg-studio-black md:hidden">
          <ul className="flex flex-col px-5 py-2">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block py-3 font-sans text-base tracking-wide",
                      active ? "text-gold" : "text-cream/80"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
