import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Undangan Pernikahan Rici & Ines",
  description:
    "Kami mengundang Anda ke hari bahagia kami - 31 Mei 2026",

  metadataBase: new URL("https://rici-ines.vercel.app"),

  openGraph: {
    title: "Undangan Pernikahan Rici & Ines",
    description: "31 Mei 2026 | Rici & Ines Wedding",
    url: "https://rici-ines.vercel.app",
    siteName: "Wedding Invitation",

    images: [
      {
        url: "/g2.jpeg",
        width: 1200,
        height: 630,
        alt: "Wedding Invitation Rici & Ines",
      },
    ],

    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Undangan Pernikahan Rici & Ines",
    description: "31 Mei 2026 | Rici & Ines Wedding",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={bodyFont.className}>
        {children}
      </body>
    </html>
  );
}