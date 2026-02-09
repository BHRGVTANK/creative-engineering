"use client";

import { motion } from "framer-motion";
import { aboutData, siteConfig } from "@/app/lib/data";

export default function About() {
    return (
        <section id="about" className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 text-center space-y-4"
                >
                    <div className="flex items-center justify-center gap-4">
                        <span className="h-[1px] w-12 bg-red-500"></span>
                        <span className="text-red-500 font-bold uppercase tracking-[0.4em] text-[10px]">Origin</span>
                        <span className="h-[1px] w-12 bg-red-500"></span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Me</span>
                    </h2>
                </motion.div>

                <div className="max-w-5xl mx-auto mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        {/* Summary Block */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-7 space-y-8"
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                                {aboutData.heading} <span className="text-red-500">_</span>
                            </h3>
                            <div className="w-20 h-1 bg-red-500/50 rounded-full"></div>
                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium">
                                {aboutData.descriptionP1}
                            </p>
                            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
                                {aboutData.descriptionP2}
                            </p>
                        </motion.div>

                        {/* Info List */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-5"
                        >
                            <div className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-[2.5rem] p-8 md:p-10 space-y-8 shadow-2xl">
                                {[
                                    { label: "Design Name", value: siteConfig.name },
                                    { label: "Digital Mail", value: siteConfig.email, isLink: true },
                                    { label: "Voice/Cell", value: siteConfig.phone },
                                    { label: "Work Base", value: siteConfig.location }
                                ].map((info, i) => (
                                    <div key={i} className="space-y-1">
                                        <p className="text-red-500 text-[9px] font-bold uppercase tracking-[0.3em]">{info.label}</p>
                                        {info.isLink ? (
                                            <a href={`mailto:${info.value}`} className="text-white text-lg font-bold hover:text-red-500 transition-colors uppercase tracking-tight">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-white text-lg font-bold uppercase tracking-tight">{info.value}</p>
                                        )}
                                    </div>
                                ))}

                                <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                    <button className="w-full sm:w-auto px-8 py-5 bg-red-500 text-white font-bold rounded-2xl hover:bg-red-600 transition-all shadow-xl shadow-red-500/20 active:scale-95 uppercase tracking-[0.2em] text-[10px]">
                                        Download Resume
                                    </button>
                                    <div className="flex items-center gap-3 px-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Active for Projects</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Grid Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-24 border-t border-white/5">
                    {aboutData.stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="flex flex-col items-center justify-center text-center space-y-2 group"
                        >
                            <h3 className="text-5xl md:text-6xl font-bold text-white group-hover:text-red-500 transition-colors duration-500 tracking-tighter">
                                {stat.num}
                            </h3>
                            <p className="text-gray-500 uppercase tracking-[0.4em] text-[10px] font-bold">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

