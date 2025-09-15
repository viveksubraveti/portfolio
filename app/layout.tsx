import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vivek Subraveti Uma Mahesh - Software Engineer",
  description:
    "Welcome to my portfolio! I am a passionate software engineer who believes in simplicity and effectiveness. I focus on creating straightforward solutions that solve real problems, with clean code and intuitive user experiences.",
  keywords: [
    "Software Developer",
    "Portfolio",
    "Clean Code",
    "Simple Design",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "User Experience",
    "Problem Solving",
    "Effective Solutions",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "Vivek Subraveti",
    "Django",
    "Python",
    "Full Stack Developer",
    "Tech Enthusiast",
    "Agile Development",
    "Software Engineering",
    "OpenStreetMap",
  ],
  authors: [{ name: "Vivek Subraveti" }],
  creator: "Vivek Subraveti Uma Mahesh",
  openGraph: {
    title: "Vivek Subraveti Uma Mahesh - Developer Portfolio",
    description:
      "Passionate developer creating simple and effective solutions. ",
    url: "https://your-domain.com",
    siteName: "Vivek Subraveti - Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "[Your Name] - Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "[Your Name] - Developer",
    description:
      "Passionate developer creating simple and effective solutions. Explore my projects and development approach.",
    images: ["../public/me.jpg"],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
