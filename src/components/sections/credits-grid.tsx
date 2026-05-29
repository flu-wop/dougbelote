"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CREDITS } from "@/lib/data";
import type { CreditCategory } from "@/types";

/**
 * CreditsGrid — filterable grid of credits.
 * Filter chips are derived automatically from the categories present in
 * CREDITS (src/lib/data.ts), so adding a new category there "just works".
 * Client component because the filter state is interactive.
 */
const ALL = "All" as const;

export function CreditsGrid() {
  const categories = useMemo(() => {
    const set = new Set<CreditCategory>(CREDITS.map((c) => c.category));
    return [ALL, ...Array.from(set)];
  }, []);

  const [active, setActive] = useState<string>(ALL);

  const filtered = useMemo(
    () =>
      active === ALL
        ? CREDITS
        : CREDITS.filter((c) => c.category === active),
    [active]
  );

  return (
    <div>
      {/* Filter chips */}
      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-all",
              active === cat
                ? "border-gold bg-gold/15 text-gold"
                : "border-border text-mist hover:border-gold/40 hover:text-cream"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((credit) => (
          <Card key={credit.id} className="card-lift">
            <CardContent className="py-6">
              <Badge variant="secondary" className="mb-4">
                {credit.category}
              </Badge>
              <p className="font-serif text-2xl leading-tight text-cream">
                {credit.artist}
              </p>
              {credit.project && (
                <p className="mt-1 text-sm text-mist">{credit.project}</p>
              )}
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs uppercase tracking-wider text-gold">
                  {credit.role}
                </span>
                {credit.year && (
                  <span className="font-mono text-xs text-mist">
                    {credit.year}
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-mist">No credits in this category yet.</p>
      )}
    </div>
  );
}
