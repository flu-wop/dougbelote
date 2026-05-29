/**
 * Shared content types for dougbelote.com.
 * Editing the actual content? You almost never need this file —
 * go to src/lib/data.ts instead. These types just keep that data honest.
 */

export type NavLink = {
  label: string;
  href: string;
};

export type Credit = {
  id: string;
  artist: string; // e.g. "Jerry Douglas"
  /** What Doug did on the project. */
  role: string; // e.g. "Drums / Percussion"
  /** Album or project title (optional). */
  project?: string;
  /** Release year (optional, used for sorting/display). */
  year?: number;
  /** Used by the Credits filter chips. */
  category: CreditCategory;
  /** Optional cover art — local path or remote URL. */
  image?: string;
};

export type CreditCategory =
  | "Studio"
  | "Touring"
  | "Film/TV"
  | "Session";

export type GearItem = {
  id: string;
  brand: string; // e.g. "Yamaha"
  /** Specific product line / model. */
  model: string; // e.g. "Recording Custom"
  /** Drums, Cymbals, Hardware, Sticks, Heads, etc. */
  category: string;
  /** One-line note about why Doug plays it. */
  note?: string;
  /** Endorsement badge? Shows a gold "Endorsed" tag. */
  endorsed?: boolean;
  image?: string;
};

export type MediaItem = {
  id: string;
  type: "video" | "audio";
  title: string;
  /**
   * For video: a YouTube/Vimeo embed ID or full URL.
   * For audio: a path to a file in /public/audio.
   */
  src: string;
  description?: string;
};

export type NewsItem = {
  id: string;
  date: string; // ISO or human readable
  title: string;
  blurb: string;
  href?: string;
};
