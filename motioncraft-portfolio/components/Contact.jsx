"use client";

import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { siteConfig } from "@/app/lib/data";

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

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
                        <span className="text-red-500 font-bold uppercase tracking-[0.4em] text-[10px]">Reach Out</span>
                        <span className="h-[1px] w-8 bg-red-500"></span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 tracking-tight">
                        Get In Touch
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-12 xl:col-span-5 space-y-10"
                    >
                        <div className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                Let&apos;s build something <span className="text-red-500">extraordinary</span> together.
                            </h3>
                            <p className="text-gray-400 text-lg max-w-md font-medium">
                                Have a project in mind or just want to say hi? My inbox is always open.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-1 gap-6">
                            {[
                                { icon: FiMapPin, label: "Location", value: siteConfig.location },
                                { icon: FiMail, label: "Email", value: siteConfig.email, isLink: true },
                                { icon: FiPhone, label: "Phone", value: siteConfig.phone }
                            ].map((info, i) => (
                                <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-[#111] border border-white/5 hover:border-red-500/30 transition-all duration-500 group">
                                    <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 text-2xl group-hover:bg-red-500 group-hover:text-white transition-all duration-500">
                                        <info.icon />
                                    </div>
                                    <div>
                                        <span className="text-gray-500 text-[9px] font-bold uppercase tracking-widest block mb-1">{info.label}</span>
                                        {info.isLink ? (
                                            <a href={`mailto:${info.value}`} className="text-white text-lg font-bold hover:text-red-500 transition-colors uppercase tracking-tight">{info.value}</a>
                                        ) : (
                                            <span className="text-white text-lg font-bold uppercase tracking-tight">{info.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-12 xl:col-span-7"
                    >
                        <div className="bg-[#111] p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
                            {/* Form Decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

                            <form className="space-y-8 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Your Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all duration-300 font-medium"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all duration-300 font-medium"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Subject</label>
                                    <input
                                        type="text"
                                        className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all duration-300 font-medium"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Message</label>
                                    <textarea
                                        rows="5"
                                        className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all duration-300 resize-none font-medium"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="group w-full py-5 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 transition-all shadow-xl shadow-red-500/20 hover:shadow-red-500/40 cursor-pointer active:scale-[0.98] uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3"
                                >
                                    Send Message
                                    <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


