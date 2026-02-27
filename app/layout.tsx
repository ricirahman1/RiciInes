import "./globals.css";
import { Inter, Allura } from "next/font/google";
  
const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

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