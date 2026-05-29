import { cn } from "@/lib/utils";

/** Separator — thin gold-tinted divider. */
export function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn("h-px w-full bg-gradient-to-r from-transparent via-border to-transparent", className)}
    />
  );
}
