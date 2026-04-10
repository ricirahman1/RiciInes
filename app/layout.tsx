import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

/* ✅ TAMBAHKAN INI */
export const metadata = {
  title: "Undangan Pernikahan Rici & Ines",
  description: "Kami mengundang Anda ke hari bahagia kami - 31 Mei 2026",
  openGraph: {
    title: "Undangan Pernikahan Rici & Ines",
    description: "31 Mei 2026 | Rici & Ines Wedding",
    url: "https://rici-ines.vercel.app/", // ganti domain kamu
    siteName: "Wedding Invitation",
    images: [
      {
        url: "https://rici-ines.vercel.app/bg-cvrr.jpeg", // WAJIB FULL URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

/* ================= LAYOUT ================= */
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