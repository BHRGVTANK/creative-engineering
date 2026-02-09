"use client";

import { motion } from "framer-motion";
import { educationData, experienceData } from "@/app/lib/data";

export default function Resume() {
    return (
        <section id="resume" className="py-32 bg-[#050505] relative overflow-hidden">
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
                        <span className="text-red-500 font-bold uppercase tracking-[0.4em] text-[10px]">Experience</span>
                        <span className="h-[1px] w-12 bg-red-500"></span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Path</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Education Column */}
                    <div className="flex-1 space-y-10">
                        <div className="flex items-center gap-6 mb-12">
                            <span className="text-6xl font-bold text-white/5 select-none">01.</span>
                            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Education</h3>
                        </div>

                        <div className="space-y-6">
                            {educationData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className="group relative bg-[#0d0d0d] p-8 rounded-[2rem] border border-white/5 hover:border-red-500/30 transition-all duration-500"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] border border-red-500/20">
                                            {item.year || "2020 - 2024"}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors uppercase tracking-tight">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest mb-4 italic">{item.place}</p>
                                    <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Divider for Desktop */}
                    <div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

                    {/* Experience Column */}
                    <div className="flex-1 space-y-10">
                        <div className="flex items-center gap-6 mb-12">
                            <span className="text-6xl font-bold text-white/5 select-none">02.</span>
                            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Experience</h3>
                        </div>

                        <div className="space-y-6">
                            {experienceData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className="group relative bg-[#0d0d0d] p-8 rounded-[2rem] border border-white/5 hover:border-red-500/30 transition-all duration-500"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] border border-red-500/20">
                                            {item.year || "2024 - Present"}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors uppercase tracking-tight">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest mb-4 italic">{item.place}</p>
                                    <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
