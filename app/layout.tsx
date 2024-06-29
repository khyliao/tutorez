import type { Metadata } from "next";
import "modern-normalize";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { useLang } from "@/hooks/useLang";

export const metadata: Metadata = {
  title: "Tutorez",
  description: "Tutorez platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <link rel="icon" href="favicon.png" />
        <meta property="og:image" content="/preview.png" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
