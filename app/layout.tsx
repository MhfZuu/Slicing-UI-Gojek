import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const Gojek = localFont({
  src:[{
    path:"../public/font/MaisonNeueExtraBold.otf",
    weight:"700",
    style:"bold"
  },],
  variable:"--font-gojek"
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pertemuan 7",
  description: "Pelatihan OTI Pertemua 7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
