import type { Metadata } from "next";
import "modern-normalize";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import DashboardMenuLayout from "./components/DashboardMenuLayout";

export const metadata: Metadata = {
  title: "Tutorez - Платформа онлайн-навчання",
  description:
    "Tutorez - це провідна платформа для онлайн-навчання, яка пропонує якісні освітні послуги з різних предметів та допомагає учням досягати успіху в навчанні.",
  openGraph: {
    title: "Tutorez - Платформа онлайн-навчання",
    description:
      "Tutorez - це провідна платформа для онлайн-навчання, яка пропонує якісні освітні послуги з різних предметів та допомагає учням досягати успіху в навчанні.",
    images: [
      {
        url: "/preview.png",
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
        url: "/preview.png",
        width: 800,
        height: 600,
        alt: "Tutorez - Платформа онлайн-навчання",
      },
    ],
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="dark:bg-[#1D1E42]">
        <StoreProvider>
          <DashboardMenuLayout>{children}</DashboardMenuLayout>
        </StoreProvider>
      </body>
    </html>
  );
}
