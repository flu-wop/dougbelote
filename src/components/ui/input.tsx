import * as React from "react";
import { cn } from "@/lib/utils";

/** Input — shared form primitive. */
export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "h-12 w-full rounded-lg border border-border bg-charcoal px-4 text-sm text-cream placeholder:text-mist/60 focus:border-gold/60 focus:outline-none focus:ring-1 focus:ring-gold/40 transition-colors",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";
