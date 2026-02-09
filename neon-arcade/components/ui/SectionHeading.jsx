"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionHeading({
    title,
    subtitle,
    align = "center",
    className
}) {
    return (
        <div className={cn(
            "mb-16 space-y-4",
            align === "center" && "text-center",
            align === "left" && "text-left",
            align === "right" && "text-right",
            className
        )}>
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-red-500 font-bold tracking-widest uppercase text-sm block"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-oswald font-black text-white uppercase tracking-tighter"
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className={cn(
                    "h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent w-32 mt-4",
                    align === "center" && "mx-auto",
                    align === "left" && "mx-0 bg-gradient-to-r from-red-600 to-transparent",
                    align === "right" && "ml-auto bg-gradient-to-l from-red-600 to-transparent"
                )}
            />
        </div>
    );
}
