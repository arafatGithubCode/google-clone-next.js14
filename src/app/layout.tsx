import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import SearchHeader from "@/components/header/SearchHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Google-clone",
  description: "Google clone using Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
