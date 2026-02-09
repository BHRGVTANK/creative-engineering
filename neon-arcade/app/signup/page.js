"use client";

import LoginPage from "@/app/login/page"; // Reuse Login Logic/Layout for simplicity in this demo? No, user wants separate.

// Actually, I'll copy the structure.

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, User, Lock, Mail } from "lucide-react";

export default function SignupPage() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        setTimeout(() => {
            setLoading(false);
            form.reset();
        }, 2000);
    };

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 font-sans bg-zinc-950">
            <div className="hidden md:flex flex-col justify-center items-center bg-red-900/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-transparent" />
                <div className="relative z-10 text-center px-12">
                    <h1 className="text-6xl font-oswald font-black uppercase tracking-tighter text-white mb-6">
                        Join the <span className="text-red-600">Resistance</span>
                    </h1>
                    <p className="text-xl text-gray-400 font-light max-w-md mx-auto">
                        Create your legacy. Compete on the global stage. Unlock exclusive content.
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-center p-8">
                <div className="w-full max-w-md space-y-6">
                    <Link href="/" className="text-gray-500 hover:text-white flex items-center gap-2 mb-8">
                        <ArrowLeft className="w-4 h-4" /> Returns to Base
                    </Link>

                    <h2 className="text-3xl font-oswald font-bold text-white uppercase mb-8">Create Account</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="First Name" className="bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-white w-full outline-none focus:border-red-500" />
                            <input type="text" placeholder="Last Name" className="bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-white w-full outline-none focus:border-red-500" />
                        </div>

                        <input type="email" placeholder="Email Address" className="bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-white w-full outline-none focus:border-red-500" />
                        <input type="text" placeholder="Username" className="bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-white w-full outline-none focus:border-red-500" />
                        <input type="password" placeholder="Password" className="bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-white w-full outline-none focus:border-red-500" />
                        <input type="password" placeholder="Confirm Password" className="bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-white w-full outline-none focus:border-red-500" />

                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="terms" className="accent-red-600" />
                            <label htmlFor="terms" className="text-xs text-gray-500">I agree to the <Link href="/legal" className="text-red-500 underline">Terms of Service</Link></label>
                        </div>

                        <button
                            disabled={loading}
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded uppercase tracking-widest transition-all"
                        >
                            {loading ? "Registering..." : "Initialize Profile"}
                        </button>
                    </form>
                    <div className="text-center text-sm text-gray-500 mt-6">
                        Already an agent?{" "}
                        <Link href="/login" className="text-white hover:text-red-500 font-bold uppercase tracking-wide">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
