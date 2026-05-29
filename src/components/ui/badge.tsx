import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Badge — small label/tag. Variants: default (gold), secondary, outline.
 */
type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline";
};

const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-gold/15 text-gold border border-gold/30",
  secondary: "bg-white/5 text-mist border border-border",
  outline: "border border-gold/40 text-gold",
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-mono uppercase tracking-wider",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
