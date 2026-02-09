"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { Coffee, Code, Heart, Zap, Globe, Users } from "lucide-react";

const JOBS = [
    { id: 1, title: "Senior Game Designer - Combat", team: "Design", location: "Los Angeles, CA", type: "Full Time" },
    { id: 2, title: "Lead Environment Artist", team: "Art", location: "Montreal, QC", type: "Full Time" },
    { id: 3, title: "Network Programmer", team: "Engineering", location: "Remote / Hybrid", type: "Contract" },
    { id: 4, title: "Community Manager", team: "Publishing", location: "London, UK", type: "Full Time" },
];

const PERKS = [
    { icon: Globe, title: "Remote First", desc: "Work from anywhere in the world." },
    { icon: Zap, title: "Cutting Edge Tech", desc: "Access to proprietary engines and tools." },
    { icon: Heart, title: "Health & Wellness", desc: "Premium healthcare and mental health days." },
    { icon: Users, title: "Diverse Culture", desc: "Join a team from 30+ countries." },
];

export default function CareersPage() {
    return (
        <div className="bg-black min-h-screen text-white pt-40 pb-12">
            {/* Hero */}
            <section className="container mx-auto px-6 text-center pb-24 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl md:text-9xl font-oswald font-black uppercase tracking-tighter mb-8">
                        Join the <span className="text-red-600">Resistance</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We are building the future of interactive entertainment. We need visionaries, rebels, and creators who aren't afraid to break the rules.
                    </p>
                </motion.div>
            </section>

            {/* Perks Grid */}
            <section className="bg-zinc-950 py-24 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <SectionHeading title="Why Vortex?" subtitle="Benefits" />
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {PERKS.map((perk, i) => (
                            <Card key={i} variant="glass" className="text-center p-8 hover:bg-zinc-900 transition-colors">
                                <div className="bg-red-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
                                    <perk.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-oswald font-bold uppercase mb-2">{perk.title}</h3>
                                <p className="text-sm text-gray-500">{perk.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Roles List */}
            <section className="py-24 container mx-auto px-6 max-w-5xl">
                <SectionHeading title="Current Openings" subtitle="We are hiring" />

                <div className="space-y-4">
                    {JOBS.map((job) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group bg-zinc-900 border border-white/5 hover:border-red-500/50 p-8 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/10 cursor-pointer"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="bg-red-600/20 text-red-500 text-[10px] font-bold uppercase px-2 py-1 rounded tracking-wider">{job.team}</span>
                                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">{job.type} • {job.location}</span>
                                </div>
                                <h3 className="text-2xl font-oswald font-bold text-white uppercase group-hover:text-red-500 transition-colors">{job.title}</h3>
                            </div>
                            <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                                View Role &rarr;
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-br from-zinc-900 to-black p-12 rounded-xl border border-white/10 text-center space-y-6 shadow-2xl">
                    <h3 className="text-3xl font-oswald font-bold uppercase text-white">Don't see your role?</h3>
                    <p className="text-gray-400 max-w-lg mx-auto">
                        We are always looking for exceptional talent. If you believe you belong here, send us your portfolio.
                    </p>
                    <Button href="/contact" variant="secondary" className="bg-white text-black hover:bg-gray-200">
                        Send Open Application
                    </Button>
                </div>
            </section>
        </div>
    );
}
