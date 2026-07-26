import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shauryapathak.com"),
  title: {
    default: "Shaurya Pathak",
    template: "%s · Shaurya Pathak",
  },
  description: "Tools and notes by Shaurya Pathak.",
  openGraph: {
    type: "website",
    title: "Shaurya Pathak",
    description: "Tools and notes by Shaurya Pathak.",
  },
  twitter: {
    card: "summary",
    title: "Shaurya Pathak",
    description: "Tools and notes by Shaurya Pathak.",
  },
};

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
