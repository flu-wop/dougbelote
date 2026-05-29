import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SITE } from "@/lib/data";

/**
 * Root layout — applies the dark theme, fonts (loaded via globals.css
 * @import), and wraps every page in the shared Navbar + Footer.
 * Matches the ecosystem layout pattern used by MCS / Streetbeat.
 */
export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.role}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.tagline,
  metadataBase: new URL("https://dougbelote.com"),
  openGraph: {
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.tagline,
    url: "https://dougbelote.com",
    siteName: SITE.name,
    type: "website",
    // TODO: add /public/images/og-image.jpg (1200×630) once available
    // images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.tagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-studio-black text-cream antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
