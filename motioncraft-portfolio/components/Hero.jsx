"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { heroData } from "@/app/lib/data";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-16 px-4 md:px-6 bg-[#0a0a0a] overflow-hidden relative">
            {/* Cinematic Background Effects */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[150px] -z-0 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[130px] -z-0 animate-[pulse_8s_ease-in-out_infinite]"></div>

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-12 xl:col-span-7 space-y-10"
                >
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-4"
                        >
                            <span className="h-[1px] w-12 bg-red-500"></span>
                            <span className="text-red-500 uppercase tracking-[0.4em] text-[10px] font-bold">Open for collaborations</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                            {heroData.heading} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-800">{heroData.name}</span>
                        </h1>
                    </div>

                    <div className="text-3xl md:text-5xl font-semibold text-gray-500 tracking-tight">
                        <TypeAnimation
                            sequence={heroData.typingItems}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-white bg-white/5 px-6 py-2 rounded-2xl border border-white/5"
                        />
                    </div>

                    <p className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed font-medium">
                        {heroData.description}
                    </p>

                    <div className="flex flex-wrap gap-6 pt-4">
                        <a href="#contact" className="group px-10 py-5 bg-red-500 text-white font-semibold rounded-2xl hover:bg-red-600 transition-all shadow-2xl shadow-red-500/20 hover:shadow-red-500/40 cursor-pointer active:scale-95 flex items-center gap-4 uppercase tracking-[0.2em] text-xs">
                            Work With Me
                            <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                        <a href="#portfolio" className="px-10 py-5 border border-white/10 text-white font-semibold rounded-2xl hover:border-red-500/50 hover:bg-white/5 transition-all backdrop-blur-sm cursor-pointer active:scale-95 uppercase tracking-[0.2em] text-xs">
                            Showcase
                        </a>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="lg:col-span-12 xl:col-span-5 relative flex justify-center"
                >
                    <div className="relative w-[340px] h-[340px] md:w-[450px] md:h-[450px] xl:w-[500px] xl:h-[500px]">
                        {/* Interactive Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-blue-500/5 to-transparent rounded-full blur-[100px] animate-pulse"></div>

                        {/* Main Image Frame */}
                        <div className="relative w-full h-full border border-white/5 rounded-[3rem] overflow-hidden bg-[#0d0d0d] shadow-[0_40px_80px_rgba(0,0,0,0.6)] flex items-center justify-center p-1 group">
                            <div className="relative w-full h-full rounded-[2.8rem] overflow-hidden border border-white/5">
                                <Image
                                    src="/images/alex.jpg"
                                    alt="Hero Profile"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                                    priority
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                                {/* Status Badge */}
                                <div className="absolute bottom-8 left-8 flex items-center gap-3 bg-black/60 backdrop-blur-md px-5 py-2.5 rounded-xl border border-white/10">
                                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></div>
                                    <span className="text-white font-semibold uppercase tracking-widest text-[9px]">Active Now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
