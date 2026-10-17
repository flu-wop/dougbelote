import { cn } from "@/lib/utils";

/**
 * SectionHeading — consistent eyebrow + headline used on every page.
 * Pass `emphasis` (a word or phrase inside `title`) to render it in the
 * italic gold treatment used across the IN-FLU-ENTIAL sites.
 */
export function SectionHeading({
  eyebrow,
  title,
  emphasis,
  subtitle,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  emphasis?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const idx = emphasis ? title.indexOf(emphasis) : -1;
  const heading =
    emphasis && idx >= 0 ? (
      <>
        {title.slice(0, idx)}
        <span className="text-gold-gradient italic">{emphasis}</span>
        {title.slice(idx + emphasis.length)}
      </>
    ) : (
      title
    );

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl leading-tight text-cream sm:text-4xl md:text-5xl">
        {heading}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-mist">{subtitle}</p>
      )}
    </div>
  );
}
