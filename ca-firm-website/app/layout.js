
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { SITE_CONFIG } from "@/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.designation}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: "Professional Chartered Accountant services in Bangalore. Audit, Tax, GST, and Business Advisory for Startups and SMEs.",
  keywords: ["CA", "Chartered Accountant", "Audit", "Tax", "GST", "Bangalore", "Business Advisory", "Startup Registration"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900 flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
