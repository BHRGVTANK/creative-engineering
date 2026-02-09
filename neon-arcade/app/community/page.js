"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { Gamepad2, Twitter, Twitch, MessageSquare, Youtube, Instagram, Share2, Users } from "lucide-react";

export default function CommunityPage() {
    return (
        <div className="bg-black min-h-screen pt-40 pb-12 text-white">
            {/* Hero */}
            <section className="container mx-auto px-6 text-center pb-24 mb-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <span className="text-red-500 font-bold tracking-[0.3em] uppercase text-sm block mb-6">Global Network</span>
                    <h1 className="text-6xl md:text-9xl font-oswald font-black uppercase tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
                        The <span className="text-red-600">Resistance</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
                        Join 2.5 million agents worldwide. Share strategies, compete in tournaments, and shape the future of our universe.
                    </p>
                </motion.div>
            </section>

            {/* Social Hubs */}
            <section className="container mx-auto px-6 mb-32">
                <SectionHeading title="Command Centers" subtitle="Join The Comms" align="center" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Discord */}
                    <Card variant="glass" className="p-8 flex flex-col items-center text-center group border-indigo-500/20 hover:border-indigo-500 hover:bg-indigo-900/10 transition-all">
                        <div className="w-20 h-20 bg-indigo-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-indigo-500/50">
                            <MessageSquare className="w-8 h-8 text-indigo-500" />
                        </div>
                        <h3 className="text-2xl font-oswald font-bold uppercase mb-2">Discord</h3>
                        <p className="text-gray-400 text-sm mb-6">542K Agents Active</p>
                        <Button href="#" variant="outline" className="w-full hover:bg-indigo-500 hover:text-white border-indigo-500/50">
                            Connect
                        </Button>
                    </Card>

                    {/* Twitter / X */}
                    <Card variant="glass" className="p-8 flex flex-col items-center text-center group border-sky-500/20 hover:border-sky-500 hover:bg-sky-900/10 transition-all">
                        <div className="w-20 h-20 bg-sky-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-sky-500/50">
                            <Twitter className="w-8 h-8 text-sky-500" />
                        </div>
                        <h3 className="text-2xl font-oswald font-bold uppercase mb-2">Twitter / X</h3>
                        <p className="text-gray-400 text-sm mb-6">1.2M Agents Active</p>
                        <Button href="#" variant="outline" className="w-full hover:bg-sky-500 hover:text-white border-sky-500/50">
                            Connect
                        </Button>
                    </Card>

                    {/* Twitch */}
                    <Card variant="glass" className="p-8 flex flex-col items-center text-center group border-purple-500/20 hover:border-purple-500 hover:bg-purple-900/10 transition-all">
                        <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-purple-500/50">
                            <Twitch className="w-8 h-8 text-purple-500" />
                        </div>
                        <h3 className="text-2xl font-oswald font-bold uppercase mb-2">Twitch</h3>
                        <p className="text-gray-400 text-sm mb-6">890K Agents Active</p>
                        <Button href="#" variant="outline" className="w-full hover:bg-purple-500 hover:text-white border-purple-500/50">
                            Connect
                        </Button>
                    </Card>
                </div>
            </section>

            {/* Events Calendar */}
            <section className="bg-zinc-950 py-24 border-y border-white/5 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                    <SectionHeading title="Operation Schedule" subtitle="Upcoming Events" align="left" />

                    <div className="space-y-4">
                        {[
                            { date: "FRI 24 OCT", time: "20:00 EST", title: "Global Scrimmage: Neon Horizon", type: "Tournament", status: "Open" },
                            { date: "MON 27 OCT", time: "14:00 PST", title: "Dev Stream: Patch 2.5 Preview", type: "Livestream", status: "Reminder" },
                            { date: "SAT 01 NOV", time: "All Day", title: "Double XP Weekend", type: "In-Game", status: "Upcoming" },
                        ].map((event, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-zinc-900 border-l-4 border-l-red-600 border-y border-r border-white/5 hover:bg-zinc-800 transition-colors rounded-r cursor-pointer"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-6">
                                    <div className="text-center md:text-left min-w-[100px]">
                                        <span className="block text-2xl font-black font-oswald text-white uppercase">{event.date.split(' ').slice(0, 2).join(' ')}</span>
                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{event.time}</span>
                                    </div>
                                    <div>
                                        <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest mb-1 block">{event.type}</span>
                                        <h3 className="text-xl font-bold uppercase text-white group-hover:text-red-500 transition-colors">{event.title}</h3>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <Button size="sm" variant="secondary" className="uppercase text-xs font-bold tracking-wider">
                                        {event.status}
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* UGC / Fan Art Showcase */}
            <section className="py-24 container mx-auto px-6">
                <SectionHeading title="Community Spotlight" subtitle="Fan Creations" align="center" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
                    {/* Mosaic of abstract placeholders */}
                    <div className="col-span-2 row-span-2 bg-zinc-800 rounded-lg overflow-hidden relative group">
                        <Image
                            src="/images/1.png"
                            alt="Fan Art 1"
                            fill
                            className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-6 left-6 z-10">
                            <p className="text-white font-bold uppercase text-lg">@CyberNinja99</p>
                            <span className="text-red-500 text-xs font-bold tracking-wider uppercase">Character Concept</span>
                        </div>
                    </div>
                    <div className="bg-zinc-800 rounded-lg overflow-hidden relative group">
                        <Image
                            src="/images/2.png"
                            alt="Fan Art 2"
                            fill
                            className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-4 left-4 z-10">
                            <p className="text-white font-bold uppercase text-xs">@VoidWalker</p>
                        </div>
                    </div>
                    <div className="bg-zinc-800 rounded-lg overflow-hidden relative group">
                        <Image
                            src="/images/3.png"
                            alt="Fan Art 3"
                            fill
                            className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-4 left-4 z-10">
                            <p className="text-white font-bold uppercase text-xs">@PixelMage</p>
                        </div>
                    </div>
                    <div className="col-span-2 bg-zinc-800 rounded-lg overflow-hidden relative group">
                        <Image
                            src="/images/4.png"
                            alt="Fan Art 4"
                            fill
                            className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-4 left-4 z-10">
                            <p className="text-white font-bold uppercase text-sm">@NeonDreams</p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-400 mb-6">Have something to show? Tag us with <span className="text-red-500 font-bold">#VortexArt</span></p>
                    <Button variant="outline" size="sm">Submit Creation</Button>
                </div>
            </section>
        </div>
    );
}
