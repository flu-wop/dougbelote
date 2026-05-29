"use client";

import { useState } from "react";
import { CalendarClock, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SITE } from "@/lib/data";

/**
 * ContactForm — booking enquiry form.
 *
 * RIGHT NOW: client-only. On submit it just shows a success state.
 *
 * WHEN READY TO GO LIVE (same stack as MCS booking-system):
 *   1. Create  src/app/api/contact/route.ts  (POST handler)
 *   2. In that route, use Resend to email SITE.email with the payload
 *      (and/or save to Turso if you want a record).
 *   3. Replace the TODO block in handleSubmit() with a real fetch():
 *
 *        const res = await fetch("/api/contact", {
 *          method: "POST",
 *          headers: { "Content-Type": "application/json" },
 *          body: JSON.stringify(form),
 *        });
 *
 *   The calendar teaser on the right is a placeholder for the future
 *   availability/booking calendar (Turso-backed, like MCS).
 */
type FormState = {
  name: string;
  email: string;
  type: string;
  dates: string;
  message: string;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  type: "Studio session",
  dates: "",
  message: "",
};

const ENQUIRY_TYPES = [
  "Studio session",
  "Touring",
  "Remote tracking",
  "Other",
];

export function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit() {
    setStatus("sending");

    // TODO: replace this stub with a real POST to /api/contact (see header).
    await new Promise((r) => setTimeout(r, 700));

    setStatus("sent");
    setForm(EMPTY);
  }

  const canSubmit =
    form.name.trim() && form.email.trim() && form.message.trim();

  return (
    <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
      {/* ── Form ── */}
      <Card>
        <CardContent className="py-8">
          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 text-gold">
                <Check size={26} />
              </div>
              <p className="font-serif text-2xl text-cream">Message sent</p>
              <p className="mt-2 max-w-sm text-sm text-mist">
                Thanks for reaching out. Doug will get back to you at the email
                you provided.
              </p>
              <Button
                variant="ghost"
                className="mt-6"
                onClick={() => setStatus("idle")}
              >
                Send another
              </Button>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="type">Enquiry type</Label>
                  {/* styled like Input; native select for zero-dependency */}
                  <select
                    id="type"
                    value={form.type}
                    onChange={(e) => update("type", e.target.value)}
                    className="h-12 w-full rounded-lg border border-border bg-charcoal px-4 text-sm text-cream focus:border-gold/60 focus:outline-none focus:ring-1 focus:ring-gold/40"
                  >
                    {ENQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="dates">Date(s)</Label>
                  <Input
                    id="dates"
                    value={form.dates}
                    onChange={(e) => update("dates", e.target.value)}
                    placeholder="e.g. June 12–15"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Details</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Tell Doug about the project, location, and budget."
                />
              </div>

              <Button
                onClick={handleSubmit}
                disabled={!canSubmit || status === "sending"}
                size="lg"
                className="w-full"
              >
                {status === "sending" ? (
                  "Sending…"
                ) : (
                  <>
                    Send enquiry <Send size={16} />
                  </>
                )}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* ── Calendar teaser (placeholder for booking-system) ── */}
      <Card className="relative overflow-hidden">
        <CardContent className="flex h-full flex-col py-8">
          <Badge className="mb-4 w-fit">Coming soon</Badge>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold">
            <CalendarClock size={22} />
          </div>
          <p className="font-serif text-2xl text-cream">
            Real-time availability
          </p>
          <p className="mt-2 text-sm leading-relaxed text-mist">
            Live booking calendar with instant confirmation is on the way —
            powered by the same system behind Mid City Sound Studios.
          </p>

          {/* faux calendar grid for visual teaser */}
          <div className="mt-6 grid grid-cols-7 gap-1.5 opacity-60">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className={
                  "aspect-square rounded-sm border border-border " +
                  (i % 9 === 0 ? "bg-gold/30" : "bg-white/[0.03]")
                }
              />
            ))}
          </div>

          <p className="mt-auto pt-6 text-xs text-mist">
            For now, use the form or email{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-gold hover:underline"
            >
              {SITE.email}
            </a>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
