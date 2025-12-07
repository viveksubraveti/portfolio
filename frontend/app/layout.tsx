import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { LINKS } from "./config/links";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vivek Subraveti Uma Mahesh - Software Engineer",
  description:
    "Welcome to my portfolio! I am a passionate software engineer who believes in simplicity and effectiveness. I focus on creating straightforward solutions that solve real problems, with clean code and intuitive user experiences.",
  keywords: [
    "Vivek Subraveti",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Vivek Subraveti" }],
  creator: "Vivek Subraveti Uma Mahesh",
  openGraph: {
    title: "Vivek Subraveti Uma Mahesh - Developer Portfolio",
    description:
      "Passionate developer creating simple and effective solutions.",
    url: LINKS.website.main,
    siteName: "Vivek Subraveti Uma Mahesh - Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-XR6MHJCM9Q'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);};
            gtag('js', new Date());
            gtag('config', 'G-XR6MHJCM9Q');
          `}
        </Script>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
