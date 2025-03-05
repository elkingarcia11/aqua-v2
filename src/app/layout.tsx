import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import I18nProvider from "../lib/i18n/i18n-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AQUA v2 - Beachfront Luxury Apartments",
  description: "Discover luxury beachfront apartments at El Pueblito Beach, Puerto Plata.",
  icons: {
    icon: [
      { url: '/logo.ico', type: 'image/x-icon' }
    ],
    shortcut: [
      { url: '/logo.ico', type: 'image/x-icon' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
