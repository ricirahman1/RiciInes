import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Undangan Pernikahan Rici & Ines",
  description: "Kami mengundang Anda ke hari bahagia kami - 31 Mei 2026",

  openGraph: {
    title: "Undangan Pernikahan Rici & Ines",
    description: "31 Mei 2026 | Rici & Ines Wedding",
    url: "https://rici-ines.vercel.app",
    siteName: "Wedding Invitation",

    images: [
      {
        url: "https://rici-ines.vercel.app/bg3.jpeg",
         width: 3563,
        height: 4510,
        alt: "Wedding Invitation",
      },
    ],

    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Undangan Pernikahan Rici & Ines",
    description: "31 Mei 2026 | Rici & Ines Wedding",
    images: ["https://rici-ines.vercel.app/bg3.jpeg"],
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