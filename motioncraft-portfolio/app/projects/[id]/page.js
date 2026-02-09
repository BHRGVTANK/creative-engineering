"use client";

import { projectsData } from "@/app/lib/data";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowLeft, FiCheck } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProjectDetail() {
    const params = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        if (params.id) {
            const foundProject = projectsData.find(p => p.id === params.id);
            if (foundProject) {
                setProject(foundProject);
            } else {
                notFound();
            }
        }
    }, [params.id]);

    if (!project) return <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">Loading...</div>;

    return (
        <section className="min-h-screen bg-[#050505] py-32 px-6 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto relative z-10">
                <Link href="/#portfolio" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-red-500 group-hover:border-red-500 transition-all">
                        <FiArrowLeft className="text-xl" />
                    </div>
                    <span className="uppercase tracking-widest text-xs font-bold">Back to Portfolio</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="aspect-video relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>

                        {/* Tech Stack Floating Chips */}
                        <div className="flex flex-wrap gap-2 mt-6">
                            {project.technologies.map((tech, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + (i * 0.1) }}
                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-gray-300 uppercase tracking-wider hover:bg-white/10 transition-colors"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="text-red-500 font-bold uppercase tracking-[0.2em] text-sm mb-2 block">{project.category}</span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
                                {project.title}
                            </h1>
                            <p className="text-gray-400 text-lg leading-relaxed font-medium">
                                {project.description}
                            </p>
                        </div>

                        {/* Key Features */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Key Features</h3>
                            <ul className="space-y-3">
                                {project.features?.map((feature, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + (i * 0.1) }}
                                        className="flex items-start gap-4 text-gray-400"
                                    >
                                        <div className="min-w-6 min-h-6 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center text-xs mt-0.5">
                                            <FiCheck />
                                        </div>
                                        <span>{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-6 pt-6">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 transition-all shadow-lg shadow-red-500/20 flex items-center gap-3 uppercase tracking-widest text-xs"
                            >
                                Live Demo
                                <FiExternalLink className="text-lg" />
                            </a>
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 border border-white/10 transition-all flex items-center gap-3 uppercase tracking-widest text-xs"
                            >
                                Source Code
                                <FiGithub className="text-lg" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
