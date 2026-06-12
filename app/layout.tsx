import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Higgsfield Motion Showcase • StandoutLocal Demo",
  description: "Exact Higgsfield workflow from your X bookmarks: Grok Imagine start/end frames → open clone transition video → scroll-driven 3D motion website. Pure scroll. No buttons. Real photographic content (guy + truck) as the hero. Built for client demos.",
  icons: {
    icon: "/vercel.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-[#0a0f1a] text-[#e8e6e1]">
        {children}
      </body>
    </html>
  );
}
