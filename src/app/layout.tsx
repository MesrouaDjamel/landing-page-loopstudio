import type { Metadata } from "next";
import "./globals.css";
// import { Alata } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({ subsets: ["latin"], weight: ["300"] });
// const alata = Alata({ subsets: ["latin"], weight: ["400"] });



export const metadata: Metadata = {
  title: "LoopStudios",
  description: "LoopStudios landing page challenge by Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefin.className}  antialiased`}>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
