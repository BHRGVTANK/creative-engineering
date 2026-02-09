import { notFound } from "next/navigation";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowLeft, Clock, Share2, Tag } from "lucide-react";

// Mock data with concise, high-impact content
const NEWS_DATA = [
    {
        id: 1,
        date: "LIVE NOW",
        title: "Patch 2.4: Code Red",
        tag: "Update",
        image: "/images/5.png",
        content: `
            <p class="lead text-xl md:text-2xl text-white font-light mb-8 border-l-4 border-red-600 pl-6">The system has been breached. Patch 2.4 "Code Red" is now live, bringing chaos to the Cyber-Slums.</p>
            <p>We've reworked the district's verticality, introducing new zipline routes and dynamic lighting that responds to sector control. Combat is faster, deadlier, and more unforgiving.</p>
            <h3 class="text-red-500 uppercase tracking-widest mt-12 mb-6 text-sm font-bold border-b border-white/10 pb-2">Patch Highlights</h3>
            <ul class="space-y-4 text-gray-400">
                <li class="flex items-start"><span class="text-red-500 mr-2">/</span> <strong>Map Rework:</strong> Cyber-Slums vertical expansion.</li>
                <li class="flex items-start"><span class="text-red-500 mr-2">/</span> <strong>Weapon Balance:</strong> Increased recoil on Pulse Rifle.</li>
                <li class="flex items-start"><span class="text-red-500 mr-2">/</span> <strong>New Skins:</strong> 3 Legendary Vanguard outfits.</li>
            </ul>
        `
    },
    {
        id: 2,
        date: "COMING SOON",
        title: "Expansion: Void Walker",
        tag: "DLC",
        image: "/images/6.png",
        content: `
            <p class="lead text-xl md:text-2xl text-white font-light mb-8 border-l-4 border-purple-600 pl-6">Step beyond the firewall. The Void is calling.</p>
            <p>Our first major expansion takes you into the Deep Web, a lawless frontier where the laws of physics—and code—no longer apply. Face corruption-based enemies and wield the power of the glitch.</p>
            <h3 class="text-purple-500 uppercase tracking-widest mt-12 mb-6 text-sm font-bold border-b border-white/10 pb-2">expansion Content</h3>
            <ul class="space-y-4 text-gray-400">
                <li class="flex items-start"><span class="text-purple-500 mr-2">/</span> <strong>New Class:</strong> The Void Walker.</li>
                <li class="flex items-start"><span class="text-purple-500 mr-2">/</span> <strong>Campaign:</strong> "Echoes of the Null".</li>
                <li class="flex items-start"><span class="text-purple-500 mr-2">/</span> <strong>Raid:</strong> The Source Code.</li>
            </ul>
        `
    },
    {
        id: 3,
        date: "EVENT",
        title: "World Championship 2026",
        tag: "Esports",
        image: "/images/7.png",
        content: `
            <p class="lead text-xl md:text-2xl text-white font-light mb-8 border-l-4 border-yellow-500 pl-6">Seoul. October. The world is watching.</p>
            <p>The top 16 teams have qualified. The bracket is set. A $5,000,000 prize pool and the title of World Champion are on the line. Witness history in the making.</p>
            <h3 class="text-yellow-500 uppercase tracking-widest mt-12 mb-6 text-sm font-bold border-b border-white/10 pb-2">Event Schedule</h3>
            <ul class="space-y-4 text-gray-400">
                <li class="flex items-start"><span class="text-yellow-500 mr-2">/</span> <strong>Group Stage:</strong> October 1-5</li>
                <li class="flex items-start"><span class="text-yellow-500 mr-2">/</span> <strong>Playoffs:</strong> October 8-10</li>
                <li class="flex items-start"><span class="text-yellow-500 mr-2">/</span> <strong>Grand Finals:</strong> October 12</li>
            </ul>
        `
    },
];

export async function generateStaticParams() {
    return NEWS_DATA.map((n) => ({ id: n.id.toString() }));
}

export default async function NewsDetailPage({ params }) {
    const { id } = await params;
    const article = NEWS_DATA.find((n) => n.id.toString() === id);

    if (!article) return notFound();

    return (
        <div className="bg-black min-h-screen text-white pt-32 pb-24">
            {/* Navigation */}
            <div className="container mx-auto px-6 mb-12">
                <Button href="/news" variant="ghost" className="pl-0 text-gray-400 hover:text-white transition-colors group">
                    <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Transmission Log
                </Button>
            </div>

            <article className="container mx-auto px-6 max-w-3xl">
                {/* Header */}
                <header className="mb-12">
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                        <span className="bg-white/10 border border-white/10 px-3 py-1 rounded font-bold uppercase tracking-wider text-white">
                            {article.tag}
                        </span>
                        <span className="flex items-center text-red-500 font-bold uppercase tracking-widest text-xs">
                            <Clock className="w-4 h-4 mr-2" /> {article.date}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-oswald font-black uppercase leading-[0.9] mb-8 text-white">
                        {article.title}
                    </h1>

                    {/* Featured Image */}
                    <div className="aspect-video relative rounded-xl overflow-hidden border border-white/10 shadow-2xl mb-12 group">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none font-sans text-gray-300">
                    <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>

                {/* Footer/Share */}
                <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10">
                            <span className="font-oswald font-bold text-white">VS</span>
                        </div>
                        <div className="text-sm">
                            <p className="text-white font-bold uppercase">Vortex Admin</p>
                            <p className="text-gray-500">Official Communication</p>
                        </div>
                    </div>
                    <Button variant="outline" size="sm" className="hover:bg-white hover:text-black hover:border-white transition-colors">
                        <Share2 className="w-4 h-4 mr-2" /> Share
                    </Button>
                </div>
            </article>

            {/* Related (Optional - reuse LatestNews logic simplified or link to others) */}
            <div className="container mx-auto px-6 mt-32 pt-16 border-t border-white/5">
                <SectionHeading title="More Transmissions" subtitle="Related Updates" align="left" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {NEWS_DATA.filter(n => n.id !== article.id).slice(0, 2).map(related => (
                        <div key={related.id} className="group cursor-pointer bg-zinc-900 border border-white/5 rounded-lg overflow-hidden hover:border-red-500/30 transition-all flex flex-col md:flex-row">
                            <div className="aspect-video md:w-1/3 relative">
                                <Image src={related.image} alt={related.title} fill className="object-cover" />
                            </div>
                            <div className="p-6 flex flex-col justify-center">
                                <span className="text-red-500 text-xs font-bold uppercase mb-2">{related.tag}</span>
                                <h4 className="text-xl font-oswald font-bold uppercase text-white mb-4 group-hover:text-red-500 transition-colors">{related.title}</h4>
                                <Button href={`/news/${related.id}`} variant="ghost" size="sm" className="pl-0 self-start">Read &rarr;</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
