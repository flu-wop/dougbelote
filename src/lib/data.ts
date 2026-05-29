/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  dougbelote.com — ALL EDITABLE CONTENT LIVES HERE                  ║
 * ║                                                                    ║
 * ║  This is the single source of truth for site copy and data.       ║
 * ║  When Doug sends real bio text, the full credits list, gear, and   ║
 * ║  media links, swap them in HERE and every page updates itself.     ║
 * ║                                                                    ║
 * ║  Images: replace the placeholder URLs with local paths like        ║
 * ║  "/images/doug-hero.jpg" after dropping files into /public/images. ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

import type {
  NavLink,
  Credit,
  GearItem,
  MediaItem,
  NewsItem,
} from "@/types";

/* ───────────────────────────── SITE META ───────────────────────────── */

export const SITE = {
  name: "Doug Belote",
  role: "Drummer · Percussionist",
  /** Used in <title>, OG tags, footer. */
  tagline: "World-class New Orleans drummer & touring percussionist",
  /** Hero headline + sub. Edit freely. */
  heroHeadline: "The pulse behind the players.",
  heroSub:
    "New Orleans–born drummer and percussionist with credits spanning Jerry Douglas, Dr. John, Robben Ford, and a generation of records that move people.",
  email: "booking@dougbelote.com", // TODO: confirm real address
  city: "New Orleans, LA",
  socials: {
    instagram: "https://instagram.com/", // TODO
    youtube: "https://youtube.com/", // TODO
    spotify: "https://open.spotify.com/", // TODO
  },
} as const;

/* ─────────────────────────── NAVIGATION ────────────────────────────── */

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Credits", href: "/credits" },
  { label: "Gear", href: "/gear" },
  { label: "Media", href: "/media" },
  { label: "Booking", href: "/contact" },
];

/* ───────────────────────────── IMAGES ──────────────────────────────── */
/* Swap these for local /images/*.jpg paths once real photos arrive.     */

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=1600&auto=format&fit=crop",
  aboutPortrait:
    "https://images.unsplash.com/photo-1571327073757-71d13c24de30?q=80&w=1200&auto=format&fit=crop",
  reelPoster:
    "https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?q=80&w=1600&auto=format&fit=crop",
  // Generic warm placeholder for credit/gear cards without their own art:
  cardFallback:
    "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?q=80&w=800&auto=format&fit=crop",
} as const;

/* ──────────────────────── HOME: LATEST NEWS ────────────────────────── */

export const NEWS: NewsItem[] = [
  {
    id: "n1",
    date: "2025",
    title: "In the studio this season",
    blurb:
      "Tracking sessions across New Orleans and Nashville. New record dates announced soon.",
  },
  {
    id: "n2",
    date: "2025",
    title: "On the road",
    blurb:
      "Selected touring dates with longtime collaborators. Routing posted on the booking page.",
  },
  {
    id: "n3",
    date: "2025",
    title: "New reel",
    blurb: "A fresh performance reel is up on the Media page — give it a spin.",
  },
];

/* ───────────────────────────── CREDITS ─────────────────────────────── */
/* Placeholder list. The names below are real collaborators Doug is       */
/* associated with; confirm exact projects/years before publishing.       */

export const CREDITS: Credit[] = [
  {
    id: "c1",
    artist: "Jerry Douglas",
    role: "Drums / Percussion",
    project: "Studio & touring",
    category: "Touring",
  },
  {
    id: "c2",
    artist: "Dr. John",
    role: "Drums",
    project: "Session work",
    category: "Studio",
  },
  {
    id: "c3",
    artist: "Robben Ford",
    role: "Drums / Percussion",
    project: "Album & live",
    category: "Touring",
  },
  {
    id: "c4",
    artist: "Placeholder Artist",
    role: "Drums",
    project: "Album Title (TBD)",
    year: 2023,
    category: "Studio",
  },
  {
    id: "c5",
    artist: "Placeholder Artist",
    role: "Percussion",
    project: "Film Score (TBD)",
    category: "Film/TV",
  },
  {
    id: "c6",
    artist: "Placeholder Artist",
    role: "Session Drums",
    project: "Single (TBD)",
    category: "Session",
  },
];

/* ────────────────────────────── GEAR ───────────────────────────────── */
/* Confirm exact endorsements before publishing — these are placeholders. */

export const GEAR: GearItem[] = [
  {
    id: "g1",
    brand: "Yamaha",
    model: "Recording Custom (placeholder)",
    category: "Drums",
    note: "Workhorse studio kit — warm, focused tone.",
    endorsed: true,
  },
  {
    id: "g2",
    brand: "Zildjian",
    model: "K Series (placeholder)",
    category: "Cymbals",
    note: "Dark, dry, expressive — built for the room.",
    endorsed: true,
  },
  {
    id: "g3",
    brand: "Remo",
    model: "Coated Heads (placeholder)",
    category: "Heads",
    note: "Go-to heads for tracking.",
  },
  {
    id: "g4",
    brand: "Vic Firth",
    model: "Signature Sticks (placeholder)",
    category: "Sticks",
    note: "Balanced feel for sessions and stages.",
  },
  {
    id: "g5",
    brand: "DW",
    model: "Hardware & Pedals (placeholder)",
    category: "Hardware",
    note: "Rock-solid foundation under the kit.",
  },
  {
    id: "g6",
    brand: "LP",
    model: "Percussion (placeholder)",
    category: "Percussion",
    note: "Auxiliary percussion for color and NOLA flavor.",
  },
];

/* ────────────────────────────── MEDIA ──────────────────────────────── */
/* Video: use the YouTube/Vimeo ID. Audio: drop files in /public/audio.   */

export const MEDIA: MediaItem[] = [
  {
    id: "m1",
    type: "video",
    title: "Performance Reel",
    // Leave src as "" to show a "coming soon" placeholder. When Doug's
    // reel (or a trailer) is ready, paste ONLY the YouTube video ID here
    // — e.g. for https://youtu.be/abc123XYZ  →  src: "abc123XYZ".
    src: "",
    description: "A short cut of recent live and studio performances.",
  },
  {
    id: "m2",
    type: "audio",
    title: "Studio Clip — Track 1",
    src: "/audio/clip-1.mp3", // TODO: add file to /public/audio
    description: "Placeholder studio clip.",
  },
  {
    id: "m3",
    type: "audio",
    title: "Studio Clip — Track 2",
    src: "/audio/clip-2.mp3", // TODO: add file to /public/audio
    description: "Placeholder studio clip.",
  },
];

/* ────────────────────────────── ABOUT ──────────────────────────────── */

export const ABOUT = {
  /** Each string is a paragraph. Replace with Doug's real bio. */
  paragraphs: [
    "Doug Belote is a New Orleans drummer and percussionist whose playing has anchored studio sessions and stages around the world. [Placeholder bio — replace with Doug's real story.]",
    "Rooted in the deep rhythmic tradition of New Orleans, his feel moves easily between roots, blues, Americana, and beyond — the kind of player other musicians call when the song has to breathe. [Placeholder.]",
    "Over the years his work has carried him alongside artists including Jerry Douglas, Dr. John, and Robben Ford, with a discography that keeps growing. [Placeholder — add highlights, schooling, influences, gear philosophy, etc.]",
  ],
  /** Small stat blocks under the bio. Edit numbers/labels freely. */
  stats: [
    { value: "25+", label: "Years playing" },
    { value: "100+", label: "Records & sessions" },
    { value: "∞", label: "Miles toured" },
  ],
} as const;
