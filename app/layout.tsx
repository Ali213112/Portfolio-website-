import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const siteUrl = "https://alidanish.vercel.app";
const summary =
  "Blockchain and Web3 engineer based in India. On-chain products, agentic prediction markets, multiplayer games, and the interfaces on top of them.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ali Danish | Blockchain & Web3 Engineer",
    template: "%s",
  },
  description: summary,
  authors: [{ name: "Ali Danish" }],
  creator: "Ali Danish",
  keywords: [
    "Ali Danish",
    "blockchain engineer",
    "Web3 developer",
    "Solidity",
    "Avalanche",
    "Solana",
    "game developer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Ali Danish",
    title: "Ali Danish | Blockchain & Web3 Engineer",
    description: summary,
    images: [{ url: "/ali.jpg", alt: "Ali Danish" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Danish | Blockchain & Web3 Engineer",
    description: summary,
    images: ["/ali.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#06070b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light')}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-surface2 focus:px-4 focus:py-2 focus:text-[13px]"
        >
          Skip to content
        </a>
        <Header />
        <div id="content" className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
