import { ABOUT } from "@/lib/data";

/**
 * StatBand — bordered stat row (same treatment as the DJM stats grid).
 * Numbers live in ABOUT.stats in src/lib/data.ts.
 */
export function StatBand() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 overflow-hidden rounded-sm border border-border sm:grid-cols-3">
          {ABOUT.stats.map((s, i) => (
            <div
              key={s.label}
              className={
                "px-8 py-10 text-center" +
                (i > 0 ? " border-t border-border sm:border-l sm:border-t-0" : "")
              }
            >
              <p className="font-serif text-5xl text-gold-gradient">{s.value}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-mist">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
