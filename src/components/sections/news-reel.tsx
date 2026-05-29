import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NEWS, IMAGES } from "@/lib/data";

/**
 * NewsReel — home-page block combining a "latest" news list with a
 * reel teaser card that links to the Media page. Edit NEWS in data.ts.
 */
export function NewsReel() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Latest"
        title="What's happening"
        subtitle="Recent sessions, tour routing, and new footage."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Reel teaser */}
        <Link href="/media" className="group">
          <Card className="card-lift relative h-full min-h-[280px]">
            <Image
              src={IMAGES.reelPoster}
              alt="Performance reel"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-60 transition-opacity group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-studio-black/90 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-studio-black/60 text-gold transition-transform group-hover:scale-110">
                <Play size={22} className="ml-1" />
              </div>
              <Badge className="mb-3 w-fit">Reel</Badge>
              <p className="font-serif text-2xl text-cream">
                Performance Reel
              </p>
              <p className="mt-1 text-sm text-mist">
                A short cut of recent live & studio work.
              </p>
            </div>
          </Card>
        </Link>

        {/* News list */}
        <div className="flex flex-col gap-4">
          {NEWS.map((item) => (
            <Card key={item.id} className="card-lift">
              <CardContent className="flex items-start gap-4 py-6">
                <span className="mt-1 font-mono text-xs uppercase tracking-widest text-gold">
                  {item.date}
                </span>
                <div>
                  <p className="font-serif text-xl text-cream">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-mist">
                    {item.blurb}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
