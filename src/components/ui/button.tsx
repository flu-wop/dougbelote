import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Button — shared ecosystem primitive.
 * Variants: default (gold), outline, ghost, destructive.
 * Renders a <button> by default; pass `asChild`-style usage by wrapping
 * with a Link when you need navigation (see Navbar / Hero for examples).
 */
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default:
    "bg-gold text-studio-black hover:bg-gold-light font-medium shadow-lg shadow-gold/10",
  outline:
    "border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold",
  ghost: "text-cream/80 hover:text-cream hover:bg-white/5",
  destructive: "bg-nola-red text-cream hover:bg-nola-red-light",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-sans tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
