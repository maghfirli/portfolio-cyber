import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
    "Official portfolio of MaghFirli Alif Al Ayubi, Cyber Security Engineer specializing in Cybersecurity, Governance Risk Compliance (GRC), Penetration Testing, ISO 27001, and Secure Software Development.",

  keywords: [
    "MaghFirli Alif Al Ayubi",
    "MaghFirli",
    "MaghFirli Portfolio",
    "Cyber Security Engineer",
    "Cybersecurity Engineer",
    "Penetration Tester",
    "Pentester",
    "GRC",
    "Governance Risk Compliance",
    "ISO 27001",
    "Risk Management",
    "Secure Developer",
    "Software Security",
  ],

  authors: [
    {
      name: "MaghFirli Alif Al Ayubi",
    },
  ],

  creator: "MaghFirli Alif Al Ayubi",

  publisher: "MaghFirli Alif Al Ayubi",

  applicationName: "MaghFirli Portfolio",

  openGraph: {
    type: "website",

    locale: "en_US",

    url: "https://portfolio-cyber-lyart.vercel.app",

    siteName: "MaghFirli Portfolio",

    title: "MaghFirli Alif Al Ayubi | Cyber Security Engineer",

    description:
      "Cybersecurity, GRC, ISO 27001, Penetration Testing, and Secure Development Portfolio.",

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
      "Cybersecurity, GRC, ISO 27001, and Secure Development Portfolio.",

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
        {children}
      </body>
    </html>
  );
}
