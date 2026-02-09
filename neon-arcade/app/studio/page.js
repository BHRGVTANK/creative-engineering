"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { User, Code, Palette, Gamepad2, Globe } from "lucide-react";
import Image from "next/image";

const TEAM = [
    { name: "Alex V.", role: "Creative Director", icon: Palette, bio: "15+ years crafting worlds.", image: "/images/alex.png" },
    { name: "Sarah K.", role: "Lead Engineer", icon: Code, bio: "Architect of the Retina Engine.", image: "/images/sarah.png" },
    { name: "Marcus J.", role: "Narrative Lead", icon: User, bio: "Storyteller of the year 2024.", image: "/images/marcus.png" },
    { name: "Elena R.", role: "Art Director", icon: Palette, bio: "Defining the visual language.", image: "/images/elena.png" },
];

const VALUES = [
    { title: "Immersion First", desc: "We don't just make games; we build alternate realities.", icon: Globe },
    { title: "Player Centric", desc: "Community feedback is the cornerstone of our development.", icon: User },
    { title: "Tech Forward", desc: "Pushing hardware to its absolute limit.", icon: Code },
    { title: "No Crunch", desc: "Healthy developers make better games.", icon: Gamepad2 }
];

export default function StudioPage() {
    return (
        <div className="bg-black min-h-screen text-white pt-40 pb-12">
            {/* Hero */}
            <section className="container mx-auto px-6 text-center pb-24 relative">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 -z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black -z-10" />

                <div className="relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-9xl font-oswald font-black uppercase tracking-tighter mb-6"
                    >
                        We Are <span className="text-red-600">Vortex</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
                        Architects of the impossible. Builders of worlds.
                    </p>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-24 container mx-auto px-6">
                <SectionHeading title="Our Code" subtitle="Philosophy" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {VALUES.map((val, i) => (
                        <Card key={i} variant="glass" className="p-8 text-center group hover:bg-zinc-900 transition-colors">
                            <div className="w-16 h-16 mx-auto bg-red-600/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-red-500/20">
                                <val.icon className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold uppercase mb-4">{val.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Team */}
            <section className="py-24 bg-zinc-950 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <SectionHeading title="The Vanguard" subtitle="Leadership" align="left" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {TEAM.map((member, i) => (
                            <Card key={i} variant="outline" className="p-0 overflow-hidden group">
                                <div className="aspect-[3/4] bg-zinc-900 relative">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover object-top opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

                                    <div className="absolute bottom-0 left-0 p-6 w-full z-10">
                                        <h3 className="text-2xl font-oswald font-bold uppercase mb-1 text-white group-hover:text-red-500 transition-colors">{member.name}</h3>
                                        <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-2">{member.role}</p>
                                        <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-16 bg-gradient-to-r from-red-900/20 to-transparent p-12 rounded-lg border border-red-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-oswald font-bold uppercase text-white">Join the Ranks</h3>
                            <p className="text-gray-400 max-w-lg">We are always looking for exceptional talent to join our remote-first team.</p>
                        </div>
                        <Button href="/careers" variant="primary" size="lg">View Open Positions</Button>
                    </div>
                </div>
            </section>

            {/* History/Timeline (Enhanced) */}
            <section className="py-24 container mx-auto px-6">
                <SectionHeading title="Timeline" subtitle="Our Journey" align="center" />
                <div className="relative mt-20">
                    {/* Central Spine */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-red-600/50 to-transparent transform md:-translate-x-1/2" />

                    {[
                        { year: "2022", title: "Genesis", desc: "Vortex Studios established. Constructing the core team and securing seed funding for our ambitious vision." },
                        { year: "2023", title: "The Engine", desc: "Alpha version of the 'Retina' engine released internally. Achieving photorealism at 60FPS on current gen." },
                        { year: "2024", title: "Global Expansion", desc: "Opened new studios in Montreal and Seoul. Team scaled to 150+ developers working round the clock." },
                        { year: "2025", title: "Neon Horizon", desc: "Official launch of our flagship cyberpunk RPG. 5M+ active players in the first month." },
                        { year: "2026", title: "Beyond", desc: "Pre-production begins on 'Project: Star Forge'. Integrating AI-driven narrative systems." },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative flex flex-col md:flex-row items-center mb-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Spacer for Desktop Alignment */}
                            <div className="hidden md:block md:w-1/2" />

                            {/* Node/Marker */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-black border-2 border-red-500 rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(239,68,68,0.6)] box-content p-1">
                                <div className="w-full h-full bg-red-600 rounded-full animate-pulse" />
                            </div>

                            {/* Content Card */}
                            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                                <Card variant="glass" className="p-8 relative group hover:border-red-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/10 overflow-hidden">
                                    <div className={`absolute top-1/2 ${i % 2 === 0 ? 'right-full translate-x-1 border-r-white/5 md:-right-2 md:translate-x-0 md:border-r-0 md:border-l-white/5' : '-left-2 border-l-white/5'} w-4 h-4 bg-zinc-900/50 backdrop-blur border-y border-white/5 transform -translate-y-1/2 rotate-45 hidden md:block`} />

                                    <div className="relative z-10">
                                        <div className="inline-block px-3 py-1 mb-3 rounded bg-red-600/10 border border-red-600/20 text-red-500 text-xs font-bold uppercase tracking-wider">
                                            {item.year}
                                        </div>
                                        <h3 className="text-2xl font-oswald font-bold uppercase text-white mb-3 group-hover:text-red-500 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                                            {item.desc}
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
