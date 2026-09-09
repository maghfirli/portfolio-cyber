import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import PersonSchema from "@/components/PersonSchema";
import WebsiteSchema from "@/components/WebsiteSchema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const siteUrl = "https://portfolio-cyber-lyart.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "MaghFirli Alif Al Ayubi | Cyber Security Engineer",
    template: "%s | MaghFirli Alif Al Ayubi",
  },

  description:
    "Official portfolio of MaghFirli Alif Al Ayubi, Cyber Security Engineer specializing in Cybersecurity, Penetration Testing, Governance Risk Compliance (GRC), ISO 27001, Risk Management, and Secure Software Development.",

  applicationName: "MaghFirli Portfolio",

  category: "Cyber Security Portfolio",

  alternates: {
    canonical: siteUrl,
  },

  keywords: [
    "MaghFirli Alif Al Ayubi",
    "MaghFirli",
    "MaghFirli Portfolio",
    "Cyber Security Engineer",
    "Cybersecurity Engineer",
    "Penetration Testing",
    "Penetration Tester",
    "GRC",
    "Governance Risk Compliance",
    "ISO 27001",
    "Risk Management",
    "Secure Software Development",
    "Application Security",
  ],

  authors: [
    {
      name: "MaghFirli Alif Al Ayubi",
      url: siteUrl,
    },
  ],

  creator: "MaghFirli Alif Al Ayubi",
  publisher: "MaghFirli Alif Al Ayubi",

  verification: {
    google: "vOnKUYLkjihgOxUBD4t9zBbGyVUpGYbyF5UR3_L6tBU",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "MaghFirli Portfolio",

    title: "MaghFirli Alif Al Ayubi | Cyber Security Engineer",

    description:
      "Cyber Security Engineer portfolio featuring Penetration Testing, GRC, ISO 27001 Implementation, and Secure Development projects.",

    images: [
      {
        url: "/images/profile/profile.png",
        width: 800,
        height: 800,
        alt: "MaghFirli Alif Al Ayubi Cyber Security Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "MaghFirli Alif Al Ayubi | Cyber Security Engineer",

    description:
      "Cybersecurity, GRC, ISO 27001, Penetration Testing, and Secure Development Portfolio.",

    images: ["/images/profile/profile.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${spaceGrotesk.variable}
          antialiased
        `}
      >
        <PersonSchema />
        <WebsiteSchema />

        {children}
      </body>
    </html>
  );
}
