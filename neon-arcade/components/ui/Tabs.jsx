"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Tabs({ items, defaultValue, className }) {
    const [activeTab, setActiveTab] = useState(defaultValue || items[0].value);

    return (
        <div className={cn("w-full", className)}>
            <div className="flex space-x-1 bg-zinc-900/50 p-1 rounded-lg border border-white/5 mb-8 overflow-x-auto">
                {items.map((item) => (
                    <button
                        key={item.value}
                        onClick={() => setActiveTab(item.value)}
                        className={cn(
                            "px-6 py-2.5 text-sm font-medium uppercase tracking-wide transition-all rounded-md relative whitespace-nowrap",
                            activeTab === item.value ? "text-white" : "text-gray-400 hover:text-white"
                        )}
                    >
                        {activeTab === item.value && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-red-600 rounded-md shadow-lg shadow-red-900/50"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10">{item.label}</span>
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4"
                >
                    {items.find((item) => item.value === activeTab)?.content}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
