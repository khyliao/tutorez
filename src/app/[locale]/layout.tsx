import type { Metadata } from "next";
import "./globals.css";
import "modern-normalize";
import Navbar from "@components/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

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

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="favicon.png" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
