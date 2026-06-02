import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diobu Connect - Empowering the Diobu Community",
  description:
    "Diobu Connect is a modern web application designed to foster community connection and engagement within the Diobu area. Discover events, blog posts, galleries, and stories that empower the community through shared experiences.",
  keywords: [
    "Diobu",
    "community",
    "events",
    "blog",
    "gallery",
    "engagement",
    "stories",
    "Diobu Connect",
  ],
  authors: [{ name: "Diobu Connect Team" }],
  openGraph: {
    title: "Diobu Connect - Empowering the Diobu Community",
    description:
      "Join Diobu Connect to discover events, stories, and opportunities that bring the Diobu community together.",
    url: "https://diobu-connect.vercel.app",
    siteName: "Diobu Connect",
    images: [
      {
        url: "/images/happ_children.jpg",
        width: 1200,
        height: 630,
        alt: "Happy children from the Diobu community",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diobu Connect - Empowering the Diobu Community",
    description:
      "Join Diobu Connect to discover events, stories, and opportunities that bring the Diobu community together.",
    images: ["/images/happ_children.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/happ_children.jpg",
    shortcut: "/images/happ_children.jpg",
    apple: "/images/happ_children.jpg",
  },
  metadataBase: new URL("https://diobu-connect.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}
