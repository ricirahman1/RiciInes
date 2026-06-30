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
    "Kami mengundang Anda ke hari bahagia kami - 5 Juli 2026",

  metadataBase: new URL("https://rici-ines.vercel.app"),

  openGraph: {
    title: "Wedding Invitation Rici & Ines",
    description: "July 5, 2026 | Rici & Ines Wedding",
    url: "https://wedding-rici-ines.vercel.app",
    siteName: "Wedding Invitation",

    images: [
      {
        url: "/og-image.jpeg",
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
    title: "Wedding Invitation Rici & Ines",
    description: "July 5, 2026 | Rici & Ines Wedding",
    images: ["/foto/G2.jpeg"],
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