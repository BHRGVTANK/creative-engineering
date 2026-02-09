"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";
import { projectsData } from "@/app/lib/data";

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

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
                        <span className="text-red-500 font-bold uppercase tracking-[0.4em] text-[10px]">Portfolio</span>
                        <span className="h-[1px] w-8 bg-red-500"></span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        Latest Projects
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative"
                        >
                            <Link href={`/projects/${project.id}`}>
                                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl cursor-pointer">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                                    {/* Hover Content */}
                                    <div className="absolute inset-x-0 bottom-0 p-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex justify-between items-end">
                                            <div className="space-y-2">
                                                <span className="text-red-500 text-[10px] font-bold uppercase tracking-[0.2em] block">{project.category}</span>
                                                <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors tracking-tight">{project.title}</h3>
                                                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" onClick={(e) => e.stopPropagation()}>
                                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-red-500 transition-all border border-white/10">
                                                        <FiExternalLink />
                                                    </a>
                                                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-black transition-all border border-white/10">
                                                        <FiGithub />
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="mb-2">
                                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-500">
                                                    <FiArrowRight className="text-2xl -rotate-45" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center mt-20">
                    <button className="group px-10 py-5 bg-transparent border border-red-500/50 text-red-500 font-semibold rounded-2xl hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center gap-3 uppercase tracking-[0.2em] text-[10px]">
                        View All Projects
                        <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}


