import { Outfit, Oswald } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata = {
  title: "VORTEX STUDIOS | Creating Next-Gen Immersive Worlds",
  description: "Official website of Vortex Studios - AAA Game Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${oswald.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-black text-white selection:bg-red-500 selection:text-white overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen relative z-10 w-full overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
