import { BadgeCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GEAR } from "@/lib/data";

/**
 * GearGrid — endorsement / gear list. Items flagged `endorsed: true`
 * in src/lib/data.ts get a gold "Endorsed" badge. Static (no client JS).
 */
export function GearGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {GEAR.map((item) => (
        <Card key={item.id} className="card-lift">
          <CardContent className="py-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-gold">
                  {item.brand}
                </p>
                <p className="mt-1 font-serif text-xl text-cream">
                  {item.model}
                </p>
              </div>
              {item.endorsed && (
                <span
                  className="flex items-center gap-1 text-gold"
                  title="Endorsed"
                >
                  <BadgeCheck size={18} />
                </span>
              )}
            </div>

            {item.note && (
              <p className="mt-3 text-sm leading-relaxed text-mist">
                {item.note}
              </p>
            )}

            <div className="mt-4 border-t border-border pt-4">
              <Badge variant="secondary">{item.category}</Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
