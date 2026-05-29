import * as React from "react";
import { cn } from "@/lib/utils";

/** Textarea — shared form primitive. */
export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-[140px] w-full rounded-lg border border-border bg-charcoal px-4 py-3 text-sm text-cream placeholder:text-mist/60 focus:border-gold/60 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-colors resize-y",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
