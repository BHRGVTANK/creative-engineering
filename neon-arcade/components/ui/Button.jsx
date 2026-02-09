"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const baseStyles = "inline-flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden font-bold uppercase tracking-wider disabled:opacity-50 disabled:pointer-events-none group";

const variantStyles = {
    primary: "bg-red-600 hover:bg-red-700 text-white shadow-[0_0_20px_rgba(234,29,44,0.3)] hover:shadow-[0_0_30px_rgba(234,29,44,0.6)] border border-red-500/50",
    secondary: "bg-white text-black hover:bg-gray-200 shadow-md hover:scale-105",
    outline: "border border-white/20 text-white hover:border-red-500 hover:text-red-500 hover:bg-red-500/10 backdrop-blur-sm",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
    monitor: "bg-zinc-900/80 backdrop-blur border border-white/10 text-white hover:border-red-500/50 hover:text-red-400 hover:shadow-[0_0_15px_rgba(234,29,44,0.15)]",
};

const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-bold tracking-wide",
    xl: "px-10 py-5 text-xl font-black uppercase tracking-widest",
};

export default function Button({
    className,
    variant = "primary",
    size = "md",
    children,
    href,
    onClick,
    ...props
}) {
    // Use Link for hrefs, motion.button otherwise
    const Comp = href ? Link : motion.button;

    // Disable framer motion hover scale to keep pure CSS transitions consistent
    const motionProps = {};

    // Only include href prop if it exists
    const linkProps = href ? { href } : {};

    return (
        <Comp
            {...linkProps}
            onClick={onClick}
            // baseStyles is now from the outer scope
            className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
            {...motionProps}
            {...props}
        >
            {children}
        </Comp>
    );
}
