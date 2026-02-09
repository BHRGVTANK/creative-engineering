"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";

const UPDATES = [
    { id: 1, date: "LIVE NOW", title: "Patch 2.4: Code Red", tag: "Update", image: "/images/5.png" },
    { id: 2, date: "COMING SOON", title: "Expansion: Void Walker", tag: "DLC", image: "/images/6.png" },
    { id: 3, date: "EVENT", title: "World Championship 2026", tag: "Esports", image: "/images/7.png" },
];

export default function LatestNews() {
    return (
        <section className="py-32 bg-zinc-950 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex justify-between items-end mb-16">
                    <div className="space-y-4">
                        <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-sm block">
                            Transmission Log
                        </span>
                        <h2 className="text-4xl md:text-6xl font-oswald font-black text-white uppercase tracking-tighter">
                            Studio <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">Updates</span>
                        </h2>
                    </div>
                    <Button href="/news" variant="outline" className="hidden md:flex">
                        All Transmissions
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {UPDATES.map((update, i) => (
                        <motion.div
                            key={update.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer relative"
                        >
                            <div className="relative aspect-[4/3] bg-zinc-900 rounded-lg overflow-hidden mb-6 border border-white/5 group-hover:border-red-500/50 transition-colors">
                                {/* Thumbnail Image */}
                                <Image
                                    src={update.image}
                                    alt={update.title}
                                    fill
                                    className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                                />

                                <div className={`absolute inset-0 bg-gradient-to-br from-red-900/40 via-transparent to-black opacity-50 group-hover:opacity-30 transition-opacity duration-700`} />

                                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-3 py-1 rounded text-xs font-bold uppercase text-white tracking-wider border border-white/10 z-10">
                                    {update.tag}
                                </div>
                            </div>
                            <span className="text-red-500 text-xs font-bold tracking-widest uppercase mb-2 block">{update.date}</span>
                            <h3 className="text-2xl font-oswald font-bold text-white uppercase group-hover:text-red-500 transition-colors mb-4 line-clamp-2">
                                {update.title}
                            </h3>
                            <Button href={`/news/${update.id}`} variant="ghost" className="pl-0 hover:pl-2 transition-all text-sm group-hover:text-red-400">
                                Read More &rarr;
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center md:hidden">
                    <Button href="/news" variant="outline">
                        All Transmissions
                    </Button>
                </div>
            </div>
        </section>
    );
}
