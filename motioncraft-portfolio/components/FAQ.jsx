"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus, FiHelpCircle } from "react-icons/fi";
import { faqData } from "@/app/lib/data";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="faq" className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="h-[1px] w-8 bg-red-500"></span>
                        <span className="text-red-500 font-bold uppercase tracking-[0.4em] text-[10px]">Assistance</span>
                        <span className="h-[1px] w-8 bg-red-500"></span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 tracking-tight">
                        Common Questions
                    </h2>
                </motion.div>

                <div className="space-y-6">
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`border rounded-[1.5rem] transition-all duration-500 group ${activeIndex === index
                                ? 'bg-[#111] border-red-500/30'
                                : 'bg-transparent border-white/5 hover:border-white/10'
                                }`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${activeIndex === index ? 'bg-red-500 text-white' : 'bg-white/5 text-gray-500 group-hover:text-white'
                                        }`}>
                                        <FiHelpCircle className="text-lg" />
                                    </div>
                                    <span className={`text-lg font-bold transition-all duration-500 tracking-tight ${activeIndex === index ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'
                                        }`}>
                                        {item.question}
                                    </span>
                                </div>
                                <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-500 ${activeIndex === index ? 'border-red-500 text-red-500 rotate-180' : 'border-white/10 text-gray-500'
                                    }`}>
                                    {activeIndex === index ? <FiMinus size={12} /> : <FiPlus size={12} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-8 ml-[4rem] pr-12 text-gray-400 leading-relaxed text-base font-medium border-t border-white/5 pt-6">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


