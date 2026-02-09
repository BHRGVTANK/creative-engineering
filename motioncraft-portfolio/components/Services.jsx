"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { servicesData } from "@/app/lib/data";

export default function Services() {
    return (
        <section id="services" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[150px] -z-0"></div>

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
                        <span className="text-red-500 font-bold uppercase tracking-[0.4em] text-[10px]">Services</span>
                        <span className="h-[1px] w-8 bg-red-500"></span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        What I Offer
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="p-10 bg-[#111] rounded-[2rem] border border-white/5 hover:border-red-500/50 transition-all duration-500 group relative flex flex-col items-center text-center overflow-hidden"
                        >
                            {/* Card Background Glow */}
                            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-all duration-700"></div>

                            <div className="text-5xl text-red-500 mb-8 transform group-hover:scale-110 transition-transform duration-500">
                                <service.icon />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors uppercase tracking-tight">
                                {service.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow font-medium">
                                {service.description}
                            </p>

                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-500">
                                <FiArrowUpRight className="text-lg" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


