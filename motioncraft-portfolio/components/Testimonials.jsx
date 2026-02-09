"use client";

import { motion } from "framer-motion";
import { FiMessageSquare, FiStar } from "react-icons/fi";
import { testimonialsData } from "@/app/lib/data";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="h-[1px] w-8 bg-red-500"></span>
                        <span className="text-red-500 font-bold uppercase tracking-[0.4em] text-[10px]">Testimonials</span>
                        <span className="h-[1px] w-8 bg-red-500"></span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 tracking-tight">
                        What Clients Say
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-[#111] p-10 rounded-[2rem] border border-white/5 relative group hover:border-red-500/30 transition-all duration-500"
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-6 left-10 w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-xl shadow-red-500/20 group-hover:scale-110 transition-transform duration-500">
                                <FiMessageSquare />
                            </div>

                            <div className="flex gap-1 mb-6 text-yellow-500/80">
                                {[...Array(5)].map((_, i) => (
                                    <FiStar key={i} className="fill-current text-xs" />
                                ))}
                            </div>

                            <p className="text-gray-400 mb-8 italic text-lg leading-relaxed font-medium">
                                &quot;{item.text}&quot;
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-800 flex items-center justify-center text-white font-bold text-lg border border-white/10">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base leading-tight uppercase tracking-tight">{item.name}</h4>
                                    <span className="text-red-500 text-[10px] font-bold uppercase tracking-[0.2em]">{item.role}</span>
                                </div>
                            </div>

                            {/* Decoration */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-3xl -mr-12 -mt-12"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


