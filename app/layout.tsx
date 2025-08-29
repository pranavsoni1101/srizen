import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: "Srizen – Crafting Experiences",
    template: "%s | Srizen",
  },
  description:
    "Srizen is a creative web development studio specializing in custom websites, web apps, and digital experiences that blend design and technology.",
  keywords: [
    "Srizen",
    "web development",
    "React",
    "Next.js",
    "custom websites",
    "MERN stack",
    "frontend development",
    "backend development",
  ],
  authors: [{ name: "Srizen" }],
  metadataBase: new URL("https://srizen.com"),
  openGraph: {
    title: "Srizen – Crafting Web Experiences",
    description:
      "We forge digital experiences pixel by pixel. From web apps to custom solutions, Srizen delivers sleek, modern, and impactful products.",
    url: "https://builtby-pixel-smith.vercel.app",
    siteName: "Srizen",
    images: [
      {
        url: "/og-image.png", // make one later!
        width: 1200,
        height: 630,
        alt: "Srizen – Crafting Web Experiences",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srizen – Crafting Web Experiences",
    description:
      "Srizen is a creative web development studio specializing in modern, scalable, and beautifully designed digital solutions.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
