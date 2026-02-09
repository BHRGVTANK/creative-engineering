"use client";

import { siteConfig } from "@/app/lib/data";
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiArrowUp, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <footer className="pt-32 pb-16 bg-[#050505] border-t border-white/5 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
                    {/* Brand Section */}
                    <div className="lg:col-span-5 space-y-8">
                        <a
                            href="/"
                            onClick={(e) => scrollToSection(e, 'home')}
                            className="flex items-center gap-4 group"
                        >
                            <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:rotate-[360deg] transition-transform duration-1000 shadow-2xl shadow-red-500/20">
                                A
                            </div>
                            <span className="text-3xl font-bold text-white tracking-tighter">
                                ALEX<span className="text-red-500">.</span>
                            </span>
                        </a>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-md font-medium">
                            Architecting digital futures through bold design and precision engineering. Let&apos;s turn your vision into a <span className="text-white">masterpiece</span>.
                        </p>

                        <div className="flex gap-4">
                            {[
                                { icon: FiGithub, href: siteConfig.socials?.github || "#" },
                                { icon: FiTwitter, href: siteConfig.socials?.twitter || "#" },
                                { icon: FiLinkedin, href: siteConfig.socials?.linkedin || "#" },
                                { icon: FiInstagram, href: siteConfig.socials?.instagram || "#" }
                            ].map((social, i) => (
                                <motion.a
                                    whileHover={{ y: -5 }}
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-xl bg-[#0d0d0d] border border-white/5 flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-xl"
                                >
                                    <social.icon className="text-xl" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-3 space-y-8">
                        <h4 className="text-white font-bold uppercase tracking-[0.4em] text-[10px]">Explore</h4>
                        <ul className="space-y-4">
                            {["Home", "About", "Services", "Portfolio", "Contact"].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        onClick={(e) => scrollToSection(e, link.toLowerCase())}
                                        className="text-gray-500 hover:text-red-500 transition-all font-semibold uppercase tracking-[0.2em] text-[11px] flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-[1px] bg-red-500 group-hover:w-4 transition-all duration-300"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-4 space-y-8">
                        <h4 className="text-white font-bold uppercase tracking-[0.4em] text-[10px]">Stay Connected</h4>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-[#0d0d0d] border border-white/5 flex items-center justify-center text-red-500 text-lg group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                                    <FiMail />
                                </div>
                                <a href={`mailto:${siteConfig.email}`} className="text-gray-400 hover:text-white transition-colors font-semibold tracking-tight">{siteConfig.email}</a>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-[#0d0d0d] border border-white/5 flex items-center justify-center text-red-500 text-lg group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                                    <FiPhone />
                                </div>
                                <span className="text-gray-400 font-semibold tracking-tight">{siteConfig.phone}</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-[#0d0d0d] border border-white/5 flex items-center justify-center text-red-500 text-lg group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                                    <FiMapPin />
                                </div>
                                <span className="text-gray-400 font-semibold tracking-tight">{siteConfig.location}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em]">
                        © {new Date().getFullYear()} {siteConfig.name}. Handcrafted with Passion.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:text-red-500 transition-colors"
                    >
                        Back to Top
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-500/50 transition-colors bg-white/5">
                            <FiArrowUp className="text-lg group-hover:-translate-y-1 transition-transform" />
                        </div>
                    </button>
                </div>
            </div>

            {/* Visual Flare */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
        </footer>
    );
}


