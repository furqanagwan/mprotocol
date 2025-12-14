import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MPROTOCOL | Optimize Your Existence",
  description:
    "Data-driven curation of tools for health, wealth, and aesthetics. No fluff. Just effective protocols.",
  openGraph: {
    title: "MPROTOCOL | Optimize Your Existence",
    description:
      "Data-driven curation of tools for health, wealth, and aesthetics.",
    url: "https://protocolm.vercel.app",
    siteName: "MPROTOCOL",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MPROTOCOL | Optimize Your Existence",
    description:
      "Data-driven curation of tools for health, wealth, and aesthetics.",
  },
  manifest: "/manifest.json",
  themeColor: "#3b82f6",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "MPROTOCOL",
  },
  icons: {
    icon: "/icons/icon-512x512.png",
    apple: "/icons/icon-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MPROTOCOL",
    url: "https://protocolm.vercel.app",
    description:
      "Data-driven curation of tools for health, wealth, and aesthetics.",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
