"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/constants";
import Button from "@/components/ui/Button";
import { Menu, X, Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5",
                scrolled ? "bg-black/80 backdrop-blur-lg py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 group cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className="bg-red-600 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                        <Gamepad2 className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold font-oswald tracking-tighter uppercase text-white group-hover:text-red-500 transition-colors">
                        VORTEX<span className="text-red-600">STUDIOS</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm uppercase tracking-wider font-medium transition-colors hover:text-red-500 relative py-2",
                                pathname === link.href ? "text-red-500" : "text-gray-300"
                            )}
                        >
                            {link.label}
                            {pathname === link.href && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 bottom-0 w-full h-[2px] bg-red-600"
                                />
                            )}
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Button href="/login" variant="ghost" size="sm">
                        Login
                    </Button>
                    <Button href="/signup" variant="primary" size="sm" className="clip-path-diagonal">
                        Join Beta
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-red-500 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-red-900/30 py-8 px-6 flex flex-col gap-6 md:hidden shadow-2xl"
                    >
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-oswald uppercase tracking-wide hover:text-red-500 transition-colors text-white"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="h-[1px] bg-white/10 w-full my-2" />
                        <div className="flex flex-col gap-4">
                            <Button href="/login" variant="secondary" className="w-full">
                                Login
                            </Button>
                            <Button href="/signup" variant="primary" className="w-full">
                                Sign Up
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
