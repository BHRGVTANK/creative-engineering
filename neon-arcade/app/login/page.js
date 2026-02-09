"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowLeft, User, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setEmail("");
            setPassword("");
        }, 2000);
    };

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 font-sans">
            {/* Cinematic Visual (Left Column) */}
            <div className="hidden md:flex flex-col justify-between p-12 bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-black to-black" />
                <div className="animate-pulse-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/20 blur-[100px] rounded-full" />

                <div className="relative z-10">
                    <Link href="/" className="text-white hover:text-red-500 transition-colors flex items-center gap-2 mb-8 mt-8">
                        <ArrowLeft className="w-5 h-5" /> Back to Home
                    </Link>
                    <h1 className="text-6xl font-oswald font-black uppercase tracking-tighter text-white mb-6">
                        Enter the <span className="text-red-600">Void</span>
                    </h1>
                    <p className="text-xl text-gray-400 font-light max-w-md">
                        Your journey continues. Access your profile, syncing game data, and exclusive rewards.
                    </p>
                </div>

                <div className="relative z-10 text-xs text-gray-600 uppercase tracking-widest">
                    © {new Date().getFullYear()} Vortex Studios Secure Login
                </div>
            </div>

            {/* Form Area (Right Column) */}
            <div className="flex items-center justify-center bg-zinc-950 p-8 relative">
                <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-red-600 via-transparent to-transparent md:hidden" />

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="w-full max-w-md space-y-8"
                >
                    <div className="md:hidden mb-8 mt-12">
                        <Link href="/" className="text-gray-400 flex items-center gap-2 mb-4">
                            <ArrowLeft className="w-4 h-4" /> Home
                        </Link>
                        <h2 className="text-4xl font-oswald font-bold text-white uppercase">Login</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-wider text-gray-500 font-bold block">Email Address</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                                <input
                                    type="email"
                                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-red-500 rounded py-3 pl-12 pr-4 text-white outline-none transition-colors placeholder:text-gray-700"
                                    placeholder="agent@vortex.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label className="text-xs uppercase tracking-wider text-gray-500 font-bold block">Password</label>
                                <Link href="/forgot-password" className="text-xs text-red-500 hover:text-red-400">Forgot?</Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-red-500 rounded py-3 pl-12 pr-12 text-white outline-none transition-colors placeholder:text-gray-700"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button
                                variant="primary"
                                className="w-full py-4 relative overflow-hidden"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="flex items-center gap-2 animate-pulse">Authenticating...</span>
                                ) : (
                                    "Sign In"
                                )}
                                {/* Loading bar animation */}
                                {loading && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-1 bg-white"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 2 }}
                                    />
                                )}
                            </Button>
                        </div>
                    </form>

                    <div className="text-center text-sm text-gray-500">
                        Don't have an account?{" "}
                        <Link href="/signup" className="text-red-500 hover:text-red-400 font-bold uppercase tracking-wide">
                            Join the Legion
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
