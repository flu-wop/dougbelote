import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * BookingCTA — full-width band that drives to the booking page.
 * Reused on the home and about pages. The deep nola-red glow gives it
 * the New Orleans warmth without breaking the dark/gold ecosystem look.
 */
export function BookingCTA() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-charcoal">
      {/* warm radial accent */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-nola-red/30 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
        <p className="eyebrow mb-4">Sessions · Tours · One-offs</p>
        <h2 className="text-4xl leading-tight text-cream sm:text-5xl">
          Let&apos;s make the track <span className="text-gold-gradient">breathe.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist">
          Available for studio sessions, touring, and remote tracking. Reach out
          with dates and details — Doug will get back to you personally.
        </p>
        <div className="mt-9 flex justify-center">
          <Link href="/contact">
            <Button size="lg">Start a booking</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
