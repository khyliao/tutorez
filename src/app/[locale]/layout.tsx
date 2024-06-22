import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@components/Navbar";

export const metadata: Metadata = {
  title: "Tutorez",
  description: "Tutorez platform",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
