"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { Search, Filter, Monitor, Code, Palette, Zap } from "lucide-react";
import { GAMES_DATA } from "@/lib/games";
import Image from "next/image";

const CATEGORIES = [
    { name: "All Genres", icon: Monitor },
    { name: "First Person", icon: Zap },
    { name: "Role Playing", icon: Code },
    { name: "Strategy", icon: Palette }, // Placeholder icons
];

export default function GamesPage() {
    const router = useRouter();
    const gamesList = Object.values(GAMES_DATA);

    const [selectedCategory, setSelectedCategory] = useState("All Genres");

    const filteredGames = gamesList.filter((game) => {
        if (selectedCategory === "All Genres") return true;
        if (selectedCategory === "First Person" && game.category.includes("Shooter")) return true;
        if (selectedCategory === "Role Playing" && game.category.includes("RPG")) return true;
        if (selectedCategory === "Strategy" && game.category.includes("Strategy")) return true;
        return false;
    });

    return (
        <div className="bg-black min-h-screen pt-40 pb-12 text-white">
            {/* Hero */}
            <section className="container mx-auto px-6 mb-16 space-y-4 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-9xl font-oswald font-black uppercase tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-600"
                >
                    Our <span className="text-red-600">Universe</span>
                </motion.h1>
                <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
                    Explore the portfolio of groundbreaking titles that redefine the gaming landscape. From neon-lit streets to the edges of the galaxy.
                </p>
            </section>

            {/* Filter / Search Tool */}
            <section className="bg-zinc-950 border-y border-white/5 py-8 sticky top-[80px] z-30 backdrop-blur-md bg-black/80">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
                        {CATEGORIES.map((cat, i) => (
                            <Button
                                key={i}
                                variant={selectedCategory === cat.name ? "primary" : "monitor"}
                                size="sm"
                                className="whitespace-nowrap"
                                onClick={() => setSelectedCategory(cat.name)}
                            >
                                <cat.icon className="w-4 h-4 mr-2" />
                                {cat.name}
                            </Button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Access Database..."
                            className="w-full bg-zinc-900/50 backdrop-blur border border-white/10 py-3 pl-12 pr-4 text-white outline-none focus:border-red-500 focus:bg-zinc-900 transition-all uppercase text-sm tracking-wider placeholder:text-gray-600 shadow-inner"
                        />
                    </div>
                </div>
            </section>

            {/* Games Grid */}
            <section className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {filteredGames.map((game, i) => (
                        <motion.div
                            key={game.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-900/10 transition-all duration-500 aspect-video md:aspect-[21/9] cursor-pointer"
                            onClick={() => router.push(`/games/${game.id}`)}
                        >
                            {/* Game Cover Image */}
                            <Image
                                src={game.image}
                                alt={game.title}
                                fill
                                className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                            />

                            {/* Interactive Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-40 group-hover:opacity-60 transition-opacity duration-700 mix-blend-overlay`} />
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay group-hover:opacity-20 transition-opacity" />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/60 to-transparent">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="bg-white/10 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-white mb-3 inline-block border border-white/10 group-hover:bg-red-600 group-hover:border-red-500 transition-colors">
                                        {game.category}
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-oswald font-black uppercase text-white mb-2 leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-gray-400 transition-all">
                                        {game.title}
                                    </h2>
                                    <p className="text-gray-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 max-w-xl line-clamp-2 mb-6">
                                        {game.description}
                                    </p>

                                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                        <Button href={`/games/${game.id}`} variant="primary" size="md">
                                            Initialize Protocol
                                        </Button>
                                        <Button variant="outline" size="md" className="hidden md:flex">
                                            Watch Trailer
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Legacy / Older Titles (Optional Expansion) */}
            <section className="bg-zinc-950 py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <SectionHeading title="Legacy Archives" subtitle="Previous Operations" align="left" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-60 hover:opacity-100 transition-opacity duration-500">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-[3/4] bg-zinc-900 rounded-lg border border-white/5 group relative overflow-hidden cursor-pointer">
                                <Image
                                    src={`/images/legacy${i}.png`}
                                    alt={`Legacy Title ${i}`}
                                    fill
                                    className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                                <div className="absolute inset-0 flex items-end justify-center pb-6">
                                    <span className="font-oswald font-bold text-xl text-gray-400 group-hover:text-white uppercase tracking-widest transition-colors z-10">Legacy Title {i}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
