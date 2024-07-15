import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const GojekBold = localFont({
  src:[{
    path:"../public/font/MaisonNeueExtraBold.otf",
    weight:"700",
    style:"normal"
  },],
  variable:"--font-maison-bold"
})

const GojekExtExtraBold = localFont({
  src:[{
    path:"../public/font/MaisonNeueExtendedExtraBold.otf",
    weight:"700",
    style:"bold"
  },],
  variable:"--font-maisonext-xtrabold"
})

const GojekBook = localFont({
  src:[{
    path:"../public/font/MaisonNeueExtendedBook.otf",
    weight:"100",
    style:"light"
  },],
  variable:"--font-maison-book"
})

const GojekDemi = localFont({
  src:[{
    path:"../public/font/MaisonNeueDemi.otf",
    weight:"100",
    style:"normal"
  },],
  variable:"--font-maison-demi"
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon:{
      rel:'icon',
      url:'/favicon.ico',
      sizes:'16x16',
      type:'image/ico'
    }
  },
  title: "Gojek - Super App",
  description: "Slicing UI from Gojek's Website ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${inter.className} ${GojekBold.variable} ${GojekExtExtraBold.variable}
                    ${GojekBook.variable} ${GojekDemi.variable}`}>
          {children}
      </body>
    </html>
  );
}
