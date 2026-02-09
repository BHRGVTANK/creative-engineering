"use client";

import Link from "next/link";
import { useState } from "react";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/constants";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-16 border-t border-white/10 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-white font-oswald mb-6 block tracking-tighter"
                        >
                            VORTEX<span className="text-red-500">STUDIOS</span>
                        </Link>
                        <p className="text-sm mb-8 leading-relaxed text-gray-500 max-w-xs">
                            Crafting immersive digital experiences for the next generation of
                            gamers. We push boundaries and define new worlds.
                        </p>
                        <div className="flex gap-6">
                            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                                <Link
                                    key={label}
                                    href={href || "#"}
                                    className="text-gray-500 hover:text-red-500 transition-colors transform hover:scale-110 duration-200"
                                >
                                    {Icon && <Icon className="w-5 h-5" />}
                                    <span className="sr-only">{label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {FOOTER_LINKS.map((column) => (
                        <div key={column.title} className="col-span-1">
                            <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">
                                {column.title}
                            </h3>
                            <ul className="space-y-4">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter */}
                    <div className="col-span-1">
                        <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">
                            Stay Updated
                        </h3>
                        <p className="text-xs mb-4 text-gray-500">
                            Subscribe to get the latest updates, beta access, and exclusive rewards.
                        </p>
                        <NewsletterForm />
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                    <p>
                        &copy; {new Date().getFullYear()} Vortex Studios Inc. All rights reserved.
                    </p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/legal" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/cookies" className="hover:text-white transition-colors">
                            Cookie Settings
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setEmail("");
        }, 2000);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-red-500 transition-colors w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button
                type="submit"
                disabled={loading}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition-all uppercase text-xs tracking-widest hover:shadow-[0_0_20px_rgba(234,29,44,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? "Joining..." : "Join The Legion"}
            </button>
        </form>
    );
}
