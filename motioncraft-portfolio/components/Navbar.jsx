"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";

const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Process", id: "process" },
    { name: "Portfolio", id: "portfolio" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();

        if (pathname !== "/") {
            router.push(`/#${id}`);
            setIsOpen(false);
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsOpen(false);
        }
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? "py-4" : "py-10"
                    }`}
            >
                <div className="container mx-auto px-6">
                    <div className={`flex justify-between items-center transition-all duration-700 p-2 rounded-[2.5rem] ${scrolled
                        ? "bg-black/60 backdrop-blur-2xl border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        : "bg-transparent border border-transparent"
                        }`}>
                        <a
                            href="/"
                            onClick={(e) => scrollToSection(e, 'home')}
                            className="flex items-center gap-3 group px-6"
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl group-hover:rotate-[360deg] transition-transform duration-1000 shadow-lg shadow-red-500/20">
                                A
                            </div>
                            <span className="text-3xl font-bold text-white tracking-tighter">
                                ALEX<span className="text-red-500 group-hover:text-white transition-colors">.</span>
                            </span>
                        </a>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center bg-white/[0.03] backdrop-blur-md rounded-full px-2 py-1.5 border border-white/5">
                            {navLinks.slice(0, 5).map((link) => (
                                <a
                                    key={link.name}
                                    href={`#${link.id}`}
                                    onClick={(e) => scrollToSection(e, link.id)}
                                    className="px-8 py-2.5 text-[11px] font-semibold text-gray-400 hover:text-white transition-all rounded-full hover:bg-white/5 uppercase tracking-[0.2em]"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        <div className="hidden lg:flex items-center pr-2">
                            <a
                                href="#contact"
                                onClick={(e) => scrollToSection(e, 'contact')}
                                className="px-10 py-4 bg-red-500 text-white font-semibold rounded-[2rem] hover:bg-red-600 transition-all shadow-xl shadow-red-500/30 active:scale-95 flex items-center gap-3 uppercase tracking-[0.2em] text-[11px]"
                            >
                                Let&apos;s Build
                                <FiArrowRight className="text-lg" />
                            </a>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="lg:hidden w-14 h-14 flex items-center justify-center bg-white/5 rounded-2xl text-white text-3xl border border-white/10 focus:outline-none hover:bg-red-500 transition-colors mr-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center lg:hidden"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <a
                                        href={`#${link.id}`}
                                        onClick={(e) => scrollToSection(e, link.id)}
                                        className="text-5xl font-bold text-white hover:text-red-500 transition-colors uppercase tracking-tighter"
                                    >
                                        {link.name}
                                    </a>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-20">
                            <a
                                href="#contact"
                                onClick={(e) => scrollToSection(e, 'contact')}
                                className="px-16 py-6 bg-red-500 text-white font-semibold rounded-full text-sm uppercase tracking-[0.3em] shadow-2xl shadow-red-500/50"
                            >
                                Start Project
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}


