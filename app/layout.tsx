import type { Metadata, Viewport } from "next";
import "modern-normalize";
import "./globals.css";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  applicationName: "Tutorez",
  title: "Tutorez - Платформа онлайн-навчання",
  description:
    "Tutorez - це провідна платформа для онлайн-навчання, яка пропонує якісні освітні послуги з різних предметів та допомагає учням досягати успіху в навчанні.",
  keywords: [
    "tutorez",
    "tutor",
    "онлайн-навчання",
    "репетитори",
    "заняття онлайн",
    "уроки онлайн",
    "репетитор з математики",
    "репетитор з англійської",
    "вивчення англійської",
    "курси програмування",
    "заняття з української мови",
    "навчання онлайн",
    "індивідуальні уроки",
    "підготовка до ЗНО",
    "підготовка до НМТ",
    "шкільна освіта",
    "репетитор для дітей",
    "репетитор для дорослих",
  ],
  openGraph: {
    title: "Tutorez - Платформа онлайн-навчання",
    description:
      "Tutorez - це провідна платформа для онлайн-навчання, яка пропонує якісні освітні послуги з різних предметів та допомагає учням досягати успіху в навчанні.",
    images: [
      {
        url: "/preview.webp",
        width: 800,
        height: 600,
        alt: "Tutorez - Платформа онлайн-навчання",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tutorez - Платформа онлайн-навчання",
    description:
      "Tutorez - це провідна платформа для онлайн-навчання, яка пропонує якісні освітні послуги з різних предметів та допомагає учням досягати успіху в навчанні.",
    images: [
      {
        url: "/preview.webp",
        width: 800,
        height: 600,
        alt: "Tutorez - Платформа онлайн-навчання",
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export const generateViewport = (): Viewport => ({
  width: "device-width",
  initialScale: 1,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="uk">
      <head>
        <meta property="og:site_name" content="Tutorez" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="dark:bg-[#1D1E42]">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
