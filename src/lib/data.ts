/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  dougbelote.com — ALL EDITABLE CONTENT LIVES HERE                  ║
 * ║                                                                    ║
 * ║  Single source of truth for site copy and data. Every credit,      ║
 * ║  gear item and bio line below is drawn from public sources (his    ║
 * ║  Yamaha artist page, interviews, the Street Beat film site).       ║
 * ║  Anything unconfirmed is marked TODO — confirm with Doug first.    ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

import type {
  NavLink,
  Credit,
  GearItem,
  MediaItem,
} from "@/types";

/* ───────────────────────────── SITE META ───────────────────────────── */

export const SITE = {
  name: "Doug Belote",
  role: "Drummer · Percussionist",
  /** Used in <title>, OG tags, footer. */
  tagline: "New Orleans drummer, touring with Jerry Douglas and host of Street Beat",
  /** Hero headline — second part renders in italic gold. */
  heroLead: "The groove lives",
  heroEmphasis: "in the cracks.",
  heroSub:
    "Raised in Lafayette, based in New Orleans. Touring drummer with Jerry Douglas, with sessions alongside Willie Nelson, Sonny Landreth, Dr. John and a hundred-plus albums.",
  email: "booking@dougbelote.com", // TODO: confirm real address with Doug
  city: "New Orleans, LA",
  socials: {
    instagram: "https://www.instagram.com/dougbelote/",
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

export const IMAGES = {
  hero: "/images/doug-hero.jpg",
  aboutPortrait: "/images/doug-portrait.jpg",
  streetBeatPoster: "/images/streetbeat-poster.jpg",
} as const;

/* ───────────────────────── STREET BEAT FEATURE ─────────────────────── */

export const STREET_BEAT = {
  title: "Street Beat",
  subtitle: "Drumming Below Sea Level",
  blurb:
    "A 54-minute documentary on the New Orleans drum sound, hosted by Doug and produced by Mid City Sound and Fire on the Bayou.",
  url: "https://streetbeat.video",
  trailerId: "UHDD6J1j5r0",
} as const;

/* ───────────────────────────── CREDITS ─────────────────────────────── */
/* Sources: Yamaha artist bio, Drum Click & Banjo Studio interviews,      */
/* Troubled Men Podcast, Illinois Entertainer. Add project/year when      */
/* Doug confirms them.                                                    */

const SESSION_ARTISTS = [
  "Willie Nelson",
  "Dr. John",
  "Anders Osborne",
  "George Porter Jr.",
  "Derek Trucks",
  "Charlie Hunter",
  "Robben Ford",
  "John Oates",
  "Mike Gordon",
  "Jeff Coffin",
  "Henry Butler",
  "Delfeayo Marsalis",
  "Cyril Neville",
  "Ivan Neville",
  "Clarence “Gatemouth” Brown",
  "Allen Toussaint",
  "Fred Wesley",
  "Steve Masakowski",
  "Alison Krauss",
  "Bobby Rush",
];

export const CREDITS: Credit[] = [
  {
    id: "jerry-douglas",
    artist: "Jerry Douglas",
    role: "Drums",
    project: "Jerry Douglas Band",
    category: "Touring",
  },
  {
    id: "sonny-landreth",
    artist: "Sonny Landreth",
    role: "Drums",
    project: "Crossroads Guitar Festival, 2010 — alongside Eric Clapton",
    year: 2010,
    category: "Session",
  },
  ...SESSION_ARTISTS.map<Credit>((artist) => ({
    id: artist.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    artist,
    role: "Drums",
    category: "Session",
  })),
  {
    id: "tv-film",
    artist: "Film, TV & commercials",
    role: "Drums / Percussion",
    project: "Recorded in New Orleans & Nashville",
    category: "Film/TV",
  },
  {
    id: "street-beat",
    artist: "Street Beat: Drumming Below Sea Level",
    role: "Host",
    project: "Documentary film",
    year: 2025,
    category: "Film/TV",
  },
];

/** Names shown in the home-page artist wall (touring + selected sessions). */
export const WALL_ARTISTS: string[] = [
  "Jerry Douglas",
  "Willie Nelson",
  "Sonny Landreth",
  "Dr. John",
  "Anders Osborne",
  "George Porter Jr.",
  "Derek Trucks",
  "Charlie Hunter",
  "Robben Ford",
  "John Oates",
  "Allen Toussaint",
  "Cyril Neville",
  "Henry Butler",
  "Alison Krauss",
];

/* ────────────────────────────── GEAR ───────────────────────────────── */
/* Endorsements per Doug's Yamaha artist page.                            */

export const GEAR: GearItem[] = [
  {
    id: "yamaha",
    brand: "Yamaha",
    model: "Absolute Hybrid Maple drum set",
    category: "Drums",
    endorsed: true,
  },
  {
    id: "zildjian",
    brand: "Zildjian",
    model: "Cymbals",
    category: "Cymbals",
    endorsed: true,
  },
  {
    id: "promark",
    brand: "Pro-Mark",
    model: "Drumsticks",
    category: "Sticks",
    endorsed: true,
  },
  {
    id: "shure",
    brand: "Shure",
    model: "In-ear monitors",
    category: "Monitoring",
    endorsed: true,
  },
];

/* ────────────────────────────── MEDIA ──────────────────────────────── */
/* Video: YouTube video ID only. Audio: drop files in /public/audio.      */

export const MEDIA: MediaItem[] = [
  {
    id: "street-beat-trailer",
    type: "video",
    title: "Street Beat — Official Trailer",
    src: STREET_BEAT.trailerId,
    description:
      "Doug hosts this 54-minute documentary on the New Orleans drum sound.",
  },
];

/* ────────────────────────────── ABOUT ──────────────────────────────── */

export const ABOUT = {
  paragraphs: [
    "Doug Belote grew up in Lafayette, in the heart of Cajun country, surrounded by jazz, funk, R&B, zydeco, gospel and second-line rhythm. He started drumming at twelve and was working clubs and recording sessions before he finished high school.",
    "After a single semester at the University of Louisiana at Lafayette, he sold nearly everything he owned, drums included, and moved to New York to study at the Drummers Collective with Ricky Sebastian and Kim Plainfield. Back in Louisiana he learned New Orleans music with Johnny Vidacovich.",
    "Today he lives in New Orleans and tours with dobro master Jerry Douglas, recording albums, TV commercials and film soundtracks between New Orleans and Nashville. He has played on more than a hundred albums, including sessions with Willie Nelson, Sonny Landreth, Dr. John, Anders Osborne, George Porter Jr. and Derek Trucks.",
    "He also hosted Street Beat: Drumming Below Sea Level, a documentary on the New Orleans drum sound, produced by Mid City Sound and Fire on the Bayou.",
  ],
} as const;
