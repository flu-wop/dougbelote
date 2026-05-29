import * as React from "react";
import { cn } from "@/lib/utils";

/** Label — shared form primitive. */
export function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "block font-mono text-xs uppercase tracking-[0.2em] text-mist mb-2",
        className
      )}
      {...props}
    />
  );
}
