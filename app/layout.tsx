import type { Metadata } from "next";
import { Archivo_Black, IBM_Plex_Sans} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Define the primary font for headlines
const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-archivo-black",
});

// Define the secondary font for body text
const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-ibm-plex-sans",
});

// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: "Srizen – Crafting Experiences",
    template: "%s | Srizen",
  },
  description: "Srizen (from Srijan: creation & innovation) transforms ideas into seamless digital experiences.",
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
        className={`${ibmPlexSans.variable} ${archivoBlack.variable} antialiased`}
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
