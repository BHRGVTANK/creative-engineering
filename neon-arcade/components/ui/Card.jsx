"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Card({
    children,
    variant = "glass",
    className,
    hoverEffect = true,
    ...props
}) {
    const baseStyles = "relative overflow-hidden rounded-xl border transition-all duration-300";

    const variants = {
        glass: "bg-white/5 backdrop-blur-md border-white/10 shadow-xl",
        solid: "bg-zinc-900 border-zinc-800",
        outline: "bg-transparent border-white/20 hover:border-red-500/50",
    };

    const hoverStyles = hoverEffect
        ? "hover:shadow-red-500/10 hover:border-red-500/30 hover:-translate-y-1 group"
        : "";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={cn(baseStyles, variants[variant], hoverStyles, className)}
            {...props}
        >
            {/* Optional: Glow effect on hover */}
            {hoverEffect && (
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            )}

            {children}
        </motion.div>
    );
}
