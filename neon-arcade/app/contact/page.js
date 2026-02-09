"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;

        // Simulate sending data
        setTimeout(() => {
            setLoading(false);
            form.reset();
            // Optional: alert("Message Transmitted");
        }, 2000);
    };

    return (
        <div className="pt-40 pb-12 min-h-screen container mx-auto px-6 max-w-5xl text-white">
            <h1 className="text-6xl md:text-9xl font-oswald font-black uppercase text-white mb-20 text-center tracking-tighter">
                Make <span className="text-red-600">Contact</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Info */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-oswald font-bold uppercase mb-4 text-gray-200">Headquarters</h2>
                    <div className="bg-zinc-900/50 p-6 border border-white/10 rounded-lg space-y-2">
                        <p className="font-bold text-red-500 uppercase tracking-widest text-xs">Address</p>
                        <p>1234 Cyberpunk Blvd, Suite 404</p>
                        <p>Neo-Vegas, NV 89109</p>
                    </div>

                    <h2 className="text-3xl font-oswald font-bold uppercase mb-4 text-gray-200">Direct Comms</h2>
                    <div className="bg-zinc-900/50 p-6 border border-white/10 rounded-lg space-y-2">
                        <p className="font-bold text-red-500 uppercase tracking-widest text-xs">Main Switchboard</p>
                        <p>+1 (555) 900-1337</p>
                        <p className="text-gray-400 text-sm">Mon-Fri 0900-1800 PST</p>
                    </div>

                    <div className="bg-zinc-900/50 p-6 border border-white/10 rounded-lg space-y-2">
                        <p className="font-bold text-red-500 uppercase tracking-widest text-xs">Press Inquiries</p>
                        <p>press@vortexstudios.com</p>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-zinc-950 p-8 rounded-lg border border-white/10 shadow-xl">
                    <h2 className="text-3xl font-oswald font-bold uppercase mb-6 text-white">Send Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs uppercase font-bold text-gray-500">Name</label>
                                <input required type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 outline-none focus:border-red-500 transition-colors text-white" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase font-bold text-gray-500">Email</label>
                                <input required type="email" className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 outline-none focus:border-red-500 transition-colors text-white" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase font-bold text-gray-500">Subject</label>
                            <select className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 outline-none focus:border-red-500 transition-colors text-gray-400">
                                <option>Choose a topic...</option>
                                <option>Support Request</option>
                                <option>Business Inquiry</option>
                                <option>Feedback</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase font-bold text-gray-500">Message</label>
                            <textarea required rows="5" className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 outline-none focus:border-red-500 transition-colors resize-none text-white"></textarea>
                        </div>

                        <Button variant="primary" className="w-full" disabled={loading}>
                            {loading ? "Transmitting..." : "Transmit Data"}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
