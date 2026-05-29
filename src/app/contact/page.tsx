import type { Metadata } from "next";
import { SectionHeading } from "@/components/sections/section-heading";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = { title: "Booking" };

/**
 * Contact / Booking page (/contact) — enquiry form + calendar teaser.
 * The form is currently client-only; see the header comment in
 * src/components/sections/contact-form.tsx for wiring it to Resend/Turso
 * (the same booking-system stack as MCS).
 */
export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-28 pt-20 sm:px-8">
      <SectionHeading
        eyebrow="Booking"
        title="Let's work together"
        subtitle="Studio sessions, touring, remote tracking — send the details and Doug will be in touch."
      />
      <div className="mt-12">
        <ContactForm />
      </div>
    </section>
  );
}
