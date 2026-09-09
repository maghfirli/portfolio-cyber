import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import PersonSchema from "@/components/PersonSchema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-cyber-lyart.vercel.app"),

  title: {
    default: "MaghFirli Alif Al Ayubi | Cyber Security Engineer",

    template: "%s | MaghFirli Alif Al Ayubi",
  },

  description:
    "Official portfolio of MaghFirli Alif Al Ayubi, Cyber Security Engineer specializing in Cybersecurity, Penetration Testing, GRC, ISO 27001, Risk Management, and Secure Software Development.",

  keywords: [
    "MaghFirli Alif Al Ayubi",
    "MaghFirli",
    "MaghFirli Portfolio",
    "Cyber Security Engineer",
    "Cybersecurity Engineer",
    "Penetration Tester",
    "Pentester",
    "GRC",
    "ISO 27001",
    "Risk Management",
    "Secure Developer",
    "Software Security",
  ],

  authors: [
    {
      name: "MaghFirli Alif Al Ayubi",
      url: "https://portfolio-cyber-lyart.vercel.app",
    },
  ],

  creator: "MaghFirli Alif Al Ayubi",

  publisher: "MaghFirli Alif Al Ayubi",

  applicationName: "MaghFirli Portfolio",

  verification: {
    google: "vOnKUYLkjihgOxUBD4t9zBbGyVUpGYbyF5UR3_L6tBU",
  },

  openGraph: {
    type: "website",

    locale: "en_US",

    url: "https://portfolio-cyber-lyart.vercel.app",

    siteName: "MaghFirli Portfolio",

    title: "MaghFirli Alif Al Ayubi | Cyber Security Engineer",

    description:
      "Cyber Security Engineer portfolio covering Penetration Testing, GRC, ISO 27001, and Secure Software Development.",

    images: [
      {
        url: "/images/profile/profile.png",

        width: 800,

        height: 800,

        alt: "MaghFirli Alif Al Ayubi Cyber Security Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "MaghFirli Alif Al Ayubi | Cyber Security Engineer",

    description:
      "Cybersecurity, GRC, ISO 27001, Penetration Testing and Secure Development Portfolio.",

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
        {/* Google Knowledge Graph Person Schema */}

        <PersonSchema />

        {children}
      </body>
    </html>
  );
}
