"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import { Play, ArrowRight } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
            {/* Background Visuals */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                {/* Hero Background Image */}
                <Image
                    src="/images/5.png"
                    alt="Hero Background"
                    fill
                    className="object-contain opacity-50 mix-blend-overlay"
                    priority
                />

                {/* Animated Gradient Mesh */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black opacity-80" />

                {/* Grid/Scanlines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

                {/* Moving Particles or Fog */}
                <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 blur-[120px] rounded-full animate-pulse-slow" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center gap-6"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="flex items-center gap-2 text-red-500 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full backdrop-blur-md uppercase tracking-widest text-xs font-bold mb-4"
                    >
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        Next Gen Experience
                    </motion.div>

                    <h1 className="font-oswald text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600 tracking-tighter uppercase drop-shadow-2xl">
                        Retina <span className="text-red-600">Protocol</span>
                    </h1>

                    <p className="max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed font-light tracking-wide mb-8">
                        Experience the future of competitive gaming. Immersion so deep, reality fades away.
                        Join the elite vanguard today.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
                        <Button variant="primary" size="lg" className="clip-path-diagonal group">
                            Start playing <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="monitor" size="lg" className="group">
                            <Play className="w-5 h-5 mr-2 fill-current" /> Watch Trailer
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
            >
                <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-red-500 to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
}
