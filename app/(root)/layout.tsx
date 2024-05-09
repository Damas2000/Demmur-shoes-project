import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demmur Store",
  description: "Demmur Ecommerce Store",
  openGraph: {
    title: "Demmur Store",
    description: "Demmur Ecommerce Store",
    url: "https://demmur-store.com",
    siteName: "Demmur Store",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Demmur Store Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Demmur Store",
    description: "Demmur Ecommerce Store",
    images: ["/banner.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <Navbar />
          {children}
        </ClerkProvider>
        <ToasterProvider />
      </body>
    </html>
  );
}
