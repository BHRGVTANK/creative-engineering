"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const PARTNERS = ["NVIDIA", "UNREAL ENGINE", "SONY PLAYSTATION", "AMD RYZEN", "STEAM"];

export default function TechShowcase() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Tech Lines */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                        Powered By
                    </span>
                    <h2 className="text-3xl md:text-5xl font-oswald font-bold text-white uppercase mb-4">
                        Global <span className="text-gray-500">Alliances</span>
                    </h2>
                </motion.div>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50">
                    {PARTNERS.map((partner, i) => (
                        <motion.div
                            key={partner}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-xl md:text-2xl font-bold font-oswald text-white hover:text-red-500 cursor-default transition-all duration-300 transform hover:scale-110"
                        >
                            {partner}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
