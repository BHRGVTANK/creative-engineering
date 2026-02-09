"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { Play, Image as ImageIcon, FileText, Download } from "lucide-react";

// Assuming we want a rich media gallery
const MEDIA_ITEMS = [
    { id: 1, type: "Video", title: "Project: Eclipse Official Trailer", image: "/images/13.png", duration: "2:45" },
    { id: 2, type: "Screenshot", title: "Cyber-Slums: Level Design", image: "/images/14.png", res: "4K" },
    { id: 3, type: "Concept Art", title: "Character Design: Wraith", image: "/images/1.png", artist: "M. Jones" },
    { id: 4, type: "Video", title: "Dev Diary #1: Combat Evolved", image: "/images/2.png", duration: "10:12" },
    { id: 5, type: "Screenshot", title: "Weapon Loadout System", image: "/images/3.png", res: "4K" },
    { id: 6, type: "Wallpaper", title: "Neon Horizon Key Art", image: "/images/4.png", res: "Wide" },
    { id: 7, type: "Soundtrack", title: "Theme of The Void", image: "/images/5.png", duration: "4:00" },
    { id: 8, type: "Video", title: "Teaser: The Signal", image: "/images/6.png", duration: "0:45" },
];

export default function MediaPage() {
    return (
        <div className="bg-black min-h-screen pt-40 pb-12 text-white">
            {/* Hero */}
            <section className="container mx-auto px-6 text-center mb-16 space-y-4">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-6xl md:text-9xl font-oswald font-black uppercase tracking-tighter"
                >
                    The <span className="text-red-600">Archive</span>
                </motion.h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Explore the visual history of our universe. Trailers, concept art, wallpapers, and more.
                </p>
            </section>

            {/* Filter Bar */}
            <div className="container mx-auto px-6 flex flex-wrap justify-center gap-4 mb-16">
                {["All", "Trailers", "Screenshots", "Concept Art", "Wallpapers", "Soundtracks"].map((filter, i) => (
                    <Button
                        key={i}
                        variant={i === 0 ? "primary" : "monitor"}
                        size="sm"
                        className="rounded-none clip-path-polygon"
                    >
                        {filter}
                    </Button>
                ))}
            </div>

            {/* Masonry Grid */}
            <section className="container mx-auto px-6 columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {MEDIA_ITEMS.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="break-inside-avoid relative group aspect-video bg-zinc-900 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-red-500/20 transition-all duration-300 border border-white/5 hover:border-red-500/50"
                    >
                        {/* Thumbnail Image */}
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                        {/* Type Icon */}
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur p-2 rounded-lg border border-white/10 z-10">
                            {item.type === "Video" && <Play className="w-4 h-4 text-white" />}
                            {item.type === "Screenshot" && <ImageIcon className="w-4 h-4 text-white" />}
                            {item.type === "Concept Art" && <FileText className="w-4 h-4 text-white" />}
                            {item.type === "Wallpaper" && <Download className="w-4 h-4 text-white" />}
                        </div>

                        <div className="absolute bottom-0 left-0 p-6 w-full z-10">
                            <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest mb-1 block">
                                {item.type} {item.duration && `• ${item.duration}`} {item.res && `• ${item.res}`}
                            </span>
                            <h3 className="text-xl font-bold font-oswald uppercase text-white leading-tight group-hover:translate-x-1 transition-transform">
                                {item.title}
                            </h3>
                        </div>

                        {/* Overlay Play Button for Video */}
                        {item.type === "Video" && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform duration-300 z-10">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-900/50">
                                    <Play className="w-6 h-6 text-white fill-current ml-1" />
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </section>

            {/* Press Kit CTA */}
            <section className="bg-zinc-950 mt-24 py-24 border-t border-white/5 text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-oswald font-bold uppercase text-white mb-6">Press & Creators</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Looking for high-resolution assets for your coverage or content? Download our official press kit containing logos, key art, and b-roll footage.
                    </p>
                    <Button variant="outline" size="lg">
                        <Download className="mr-2 w-5 h-5" /> Download Press Kit (2.4 GB)
                    </Button>
                </div>
            </section>
        </div>
    );
}
