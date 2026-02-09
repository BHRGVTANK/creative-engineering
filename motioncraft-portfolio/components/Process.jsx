"use client";

import { motion } from "framer-motion";
import { processData } from "@/app/lib/data";

export default function Process() {
    return (
        <section id="process" className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] -translate-y-1/2 -z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24 text-center"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="h-[1px] w-8 bg-red-500"></span>
                        <span className="text-red-500 font-bold uppercase tracking-[0.4em] text-[10px]">Workflow</span>
                        <span className="h-[1px] w-8 bg-red-500"></span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 tracking-tight">
                        Creative Process
                    </h2>
                </motion.div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[44px] left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent z-0"></div>

                    {processData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="relative group z-10"
                        >
                            {/* Step Circle */}
                            <div className="relative mb-12">
                                <div className="w-20 h-20 rounded-[1.5rem] bg-[#111] border border-white/10 group-hover:border-red-500/50 flex items-center justify-center text-2xl font-bold text-white/20 group-hover:text-red-500 transition-all duration-500 shadow-2xl mx-auto rotate-45 group-hover:rotate-[225deg]">
                                    <span className="-rotate-45 group-hover:-rotate-[225deg] transition-transform duration-700">{item.step}</span>
                                </div>
                                {/* Glow */}
                                <div className="absolute inset-0 bg-red-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                            </div>

                            {/* Card Content */}
                            <div className="text-center px-4">
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300 uppercase tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm md:text-base font-medium">
                                    {item.description}
                                </p>
                            </div>

                            {/* Decorative arrows for mobile/tablet */}
                            {index < processData.length - 1 && (
                                <div className="lg:hidden flex justify-center mt-8 text-red-500/20 text-3xl">
                                    ↓
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


