"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/app/lib/data";

export default function Skills() {
    return (
        <section id="skills" className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-red-500/5 rounded-full blur-[120px]"></div>
            </div>

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
                        <span className="text-red-500 font-bold uppercase tracking-[0.4em] text-[10px]">Expertise</span>
                        <span className="h-[1px] w-12 bg-red-500"></span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Abilities</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-[#0d0d0d] p-8 rounded-[2rem] border border-white/5 hover:border-red-500/30 transition-all duration-500 flex items-center gap-8 overflow-hidden"
                        >
                            {/* Animated Background on Hover */}
                            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-gradient-to-t from-red-500/[0.03] to-transparent transition-all duration-700"></div>

                            <div
                                className="w-16 h-16 rounded-2xl bg-[#111] border border-white/5 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500 shadow-2xl relative z-10"
                                style={{ color: skill.color }}
                            >
                                <skill.icon className="drop-shadow-[0_0_10px_rgba(239,68,68,0.2)] transition-all" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors duration-300 uppercase tracking-wider">
                                    {skill.name}
                                </h3>
                                <p className="text-gray-500 text-[9px] font-bold uppercase tracking-[0.2em] mt-1">Specialized</p>
                            </div>

                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}



