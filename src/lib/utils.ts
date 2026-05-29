import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn — merge conditional class names and resolve Tailwind conflicts.
 * Same helper used across the MCS / Streetbeat ecosystem.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
