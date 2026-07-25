import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const previewImage = `${origin}/og.png`;

  return {
    metadataBase: new URL(origin),
    title: {
      default: "Shaurya Pathak",
      template: "%s · Shaurya Pathak",
    },
    description: "Software, projects, notes, and other things by Shaurya Pathak.",
    openGraph: {
      type: "website",
      title: "Shaurya Pathak",
      description: "I make software and other things.",
      images: [{ url: previewImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Shaurya Pathak",
      description: "I make software and other things.",
      images: [previewImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
