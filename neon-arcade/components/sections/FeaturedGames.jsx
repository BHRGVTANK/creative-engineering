"use client";

import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const GAMES = [
    {
        id: "neon-horizon",
        title: "Neon Horizon",
        category: "Cyberpunk RPG",
        color: "from-purple-900/80 to-blue-900/80",
        accent: "text-purple-400",
        glow: "shadow-purple-500/20",
        image: "/images/2.png"
    },
    {
        id: "star-forge",
        title: "Star Forge",
        category: "Space Strategy",
        color: "from-indigo-900/80 to-slate-900/80",
        accent: "text-indigo-400",
        glow: "shadow-indigo-500/20",
        image: "/images/3.png"
    },
    {
        id: "crimson-protocol",
        title: "Crimson Protocol",
        category: "Tactical Shooter",
        color: "from-red-900/80 to-stone-900/80",
        accent: "text-red-400",
        glow: "shadow-red-500/20",
        image: "/images/4.png"
    },
];

export default function FeaturedGames() {
    const router = useRouter();
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex justify-between items-end mb-16">
                    <div className="space-y-2">
                        <span className="text-red-500 font-bold tracking-widest uppercase text-sm block">
                            Our Masterpieces
                        </span>
                        <h2 className="text-4xl md:text-6xl font-oswald font-black text-white uppercase tracking-tighter">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Games</span>
                        </h2>
                    </div>
                    <Button href="/games" variant="outline" className="hidden md:flex group">
                        View All Games <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {GAMES.map((game, index) => (
                        <motion.div
                            key={game.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`group relative aspect-[1.1/1] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm shadow-xl transition-all duration-500 hover:border-red-500/40 hover:${game.glow} cursor-pointer`}
                            onClick={() => router.push(`/games/${game.id}`)}
                        >
                            {/* Game Thumbnail Image */}
                            <Image
                                src={game.image}
                                alt={game.title}
                                fill
                                className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                            />

                            <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500 mix-blend-overlay`} />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`text-[10px] font-bold uppercase tracking-widest ${game.accent} bg-white/5 px-2 py-0.5 rounded border border-white/10`}>
                                            {game.category}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-oswald font-bold text-white uppercase mb-4 tracking-tight drop-shadow-md">
                                        {game.title}
                                    </h3>

                                    <div className="overflow-hidden h-0 group-hover:h-12 transition-all duration-500 opacity-0 group-hover:opacity-100">
                                        <Button
                                            href={`/games/${game.id}`}
                                            variant="primary"
                                            size="sm"
                                            className="w-full h-10 py-0 text-xs shadow-none border-none"
                                        >
                                            Explore Universe
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-0 right-0 w-12 h-12">
                                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors" />
                            </div>

                            <div className="absolute inset-0 bg-scanline opacity-10 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center md:hidden">
                    <Button href="/games" variant="outline" className="w-full">
                        View All Games
                    </Button>
                </div>
            </div>
        </section>
    );
}
