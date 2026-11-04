import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import { ContactSection } from "../components/contact-section";
import { BlackFridayBar } from "../components/black-friday-decor";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { WhatsAppButton } from "../components/whatsapp-button";
import { BLACK_FRIDAY_THEME } from "../config/seasonal";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Priceless Blinds | Quality Window Blinds in Dublin",
  description:
    "Priceless Blinds provides Quality blinds in Dublin, roller blinds, wooden blinds, vertical blinds, Integral Blinds, Conservatory Blinds, Metal Venetian blinds",
  robots: {
    "max-image-preview": "large",
  },
  verification: {
    google: [
      "c6SNJ2GuVcgNbZ8dRduzTq01-FQlp9zQlI3UrLw1sao",
      "itYdP9NxmRFYh7Mt0JCLOgHBrATUYxvbRuEVTP3xg-g",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${merriweather.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {BLACK_FRIDAY_THEME ? <BlackFridayBar /> : null}
        <SiteHeader />
        {children}
        <ContactSection />
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
