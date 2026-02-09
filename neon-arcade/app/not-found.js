"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden relative">
            {/* Glitch Background */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay animate-pulse-slow" />

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 text-center"
            >
                <h1 className="text-[12rem] font-oswald font-black text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-black leading-none mb-4 select-none animate-glitch">
                    404
                </h1>
                <h2 className="text-4xl font-oswald font-bold uppercase text-white mb-8 tracking-widest">
                    Signal Lost
                </h2>
                <p className="text-gray-500 max-w-md mx-auto mb-12 font-mono">
                    The coordinates you are looking for do not exist in this sector. Return to base immediately.
                </p>

                <Button href="/" variant="primary" size="lg" className="mx-auto flex items-center gap-2">
                    <ArrowLeft className="w-5 h-5" /> Abort Mission
                </Button>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute bottom-12 left-12 text-xs font-mono text-red-900/50">
                ERR_CODE_SECTION_MISSING_0x83A
            </div>
            <div className="absolute top-12 right-12 text-xs font-mono text-red-900/50 animate-pulse">
                SYSTEM_CRITICAL_FAILURE
            </div>
        </div>
    );
}
