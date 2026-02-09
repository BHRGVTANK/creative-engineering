import { notFound } from "next/navigation";
import { ArrowRight, Youtube, Monitor, Download, Calendar, Cpu, Crosshair } from "lucide-react";
import Button from "@/components/ui/Button";
import Tabs from "@/components/ui/Tabs";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { GAMES_DATA } from "@/lib/games";
import Image from "next/image";

export async function generateStaticParams() {
    return Object.keys(GAMES_DATA).map((slug) => ({ slug }));
}

export default async function GamePage({ params }) {
    const { slug } = await params;
    const game = GAMES_DATA[slug];

    if (!game) return notFound();

    // Tab Content
    const tabs = [
        {
            value: "overview",
            label: "Overview",
            content: (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start animate-fade-in-up">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold font-oswald text-white uppercase">Experience the Next Gen</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">{game.story}</p>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            {game.releaseDate && (
                                <div className="bg-zinc-900/50 p-4 rounded border border-white/5">
                                    <Calendar className="text-red-500 w-6 h-6 mb-2" />
                                    <span className="text-xs font-bold uppercase text-gray-500 block">Release Date</span>
                                    <span className="text-white font-bold">{game.releaseDate}</span>
                                </div>
                            )}
                            <div className="bg-zinc-900/50 p-4 rounded border border-white/5">
                                <Download className="text-red-500 w-6 h-6 mb-2" />
                                <span className="text-xs font-bold uppercase text-gray-500 block">Platform</span>
                                <span className="text-white font-bold">{game.platforms.join(", ")}</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual Feature/Placeholder */}
                    <div className={`aspect-video rounded-xl bg-gradient-to-br ${game.color || "from-zinc-800 to-black"} relative overflow-hidden shadow-2xl skew-y-1 group`}>
                        <Image
                            src={game.image}
                            alt={game.title}
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-16 h-16 bg-red-600/80 rounded-full flex items-center justify-center backdrop-blur shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                <Youtube className="text-white w-6 h-6 ml-1 fill-current" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            value: "features",
            label: "Key Features",
            content: (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
                    {game.features.map((feature, i) => (
                        <Card key={i} variant="glass" className="p-8 hover:bg-zinc-900/80 transition-colors">
                            <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-6 border border-red-500/20">
                                <span className="font-oswald font-bold text-red-500 text-xl">0{i + 1}</span>
                            </div>
                            <h3 className="text-xl font-bold uppercase text-white mb-4">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                        </Card>
                    ))}
                </div>
            )
        },
        {
            value: "specs",
            label: "System Specs",
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up">
                    <Card variant="outline" className="p-8 border-red-900/30">
                        <h3 className="text-xl font-bold uppercase text-red-500 mb-6 flex items-center gap-2">
                            <Cpu className="w-5 h-5" /> Minimum Requirements
                        </h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>OS</span> <span className="text-white">Windows 10 64-bit</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Processor</span> <span className="text-white">{game.specs?.min.cpu || "TBA"}</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Memory</span> <span className="text-white">{game.specs?.min.ram || "TBA"}</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Graphics</span> <span className="text-white">{game.specs?.min.gpu || "TBA"}</span>
                            </li>
                        </ul>
                    </Card>
                    <Card variant="outline" className="p-8 border-green-900/30">
                        <h3 className="text-xl font-bold uppercase text-green-500 mb-6 flex items-center gap-2">
                            <Crosshair className="w-5 h-5" /> Recommended
                        </h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>OS</span> <span className="text-white">Windows 11 64-bit</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Processor</span> <span className="text-white">{game.specs?.rec.cpu || "TBA"}</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Memory</span> <span className="text-white">{game.specs?.rec.ram || "TBA"}</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Graphics</span> <span className="text-white">{game.specs?.rec.gpu || "TBA"}</span>
                            </li>
                        </ul>
                    </Card>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Cinematic Hero */}
            <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Background */}
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-10`} />

                {/* Dynamic Background Image */}
                <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover opacity-60 animate-pulse-slow mix-blend-overlay"
                    priority
                />

                <div className={`absolute inset-0 bg-gradient-to-br ${game.color || "from-gray-900 via-black to-black"} opacity-60 mix-blend-multiply`} />

                <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center mt-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-white">Official Game Page</span>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-oswald font-black uppercase tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-2xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                        {game.title}
                    </h1>

                    <p className="text-xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto mb-10 leading-relaxed tracking-wide animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                        {game.tagline}
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                        <Button variant="primary" size="lg" className="clip-path-diagonal shadow-[0_0_30px_rgba(234,29,44,0.4)]">
                            Pre-Order Now <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button variant="outline" size="lg" className="backdrop-blur-md bg-black/30 border-white/20 hover:bg-white/10">
                            <Youtube className="mr-2 w-5 h-5" /> Watch Trailer
                        </Button>
                    </div>
                </div>
            </section>

            {/* Main Content Areas */}
            <section className="py-24 container mx-auto px-6 relative z-20">
                <Tabs items={tabs} defaultValue="overview" className="max-w-6xl mx-auto" />
            </section>

            {/* Media Gallery Preview */}
            <section className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <SectionHeading title="Visual Archive" subtitle="In-Engine Footage" align="center" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Mock Gallery Items if empty */}
                        {(game.gallery && game.gallery.length > 0 ? game.gallery : [1, 2, 3]).map((item, i) => (
                            <div key={i} className="aspect-video bg-zinc-900 rounded-lg overflow-hidden relative group cursor-pointer border border-white/5 hover:border-red-500/50 transition-all">
                                <Image
                                    src={typeof item === 'string' ? item : `/images/legacy${i + 1}.png`}
                                    alt={`Gallery Item ${i}`}
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-90 group-hover:scale-100 duration-300">
                                    <div className="bg-black/80 p-3 rounded-full border border-white/20">
                                        <div className="w-6 h-6 border-2 border-white rounded-sm" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-12">
                        <Button variant="secondary" href="/media">View All Media</Button>
                    </div>
                </div>
            </section>

            {/* Call to Action Footer */}
            <section className="py-32 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-red-900/20" />
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent`} />

                <div className="relative z-10 text-center space-y-8 px-6">
                    <h2 className="text-4xl md:text-6xl font-oswald font-black uppercase text-white">
                        Join the <span className="text-red-600">Legend</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Secure your copy today and receive the exclusive "Vanguard" cosmetic pack.
                    </p>
                    <Button variant="primary" size="xl" className="shadow-[0_0_50px_rgba(234,29,44,0.3)] hover:shadow-[0_0_80px_rgba(234,29,44,0.6)] animate-pulse-slow">
                        Pre-Order {game.title}
                    </Button>
                </div>
            </section>
        </div>
    );
}
