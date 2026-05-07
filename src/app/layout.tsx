import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ProgressProvider } from "@/context/ProgressContext";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JS Frontend A3 Exam Prep",
  description: "Track your JavaScript Frontend skills from A1 to A3",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Skill Tracker",
  },
  icons: {
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen bg-gray-50">
        <ServiceWorkerRegistration />
        <ProgressProvider>
          <nav className="bg-white border-b border-gray-200 px-4 py-2 flex items-center gap-1 sticky top-0 z-20">
            <Link
              href="/"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              Skill Tracker
            </Link>
            <span className="text-gray-200 select-none">|</span>
            <Link
              href="/plan"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              3-Month Plan
            </Link>
          </nav>
          {children}
        </ProgressProvider>
      </body>
    </html>
  );
}
