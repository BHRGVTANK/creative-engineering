import Button from "@/components/ui/Button";

// Consistent data with LatestNews and News Detail
const NEWS = [
    {
        id: 1,
        date: "LIVE NOW",
        title: "Patch 2.4: Code Red",
        excerpt: "The system has been breached. Patch 2.4 'Code Red' is officially live, introducing the Cyber-Slums rework and critical combat balancing.",
        tag: "Update"
    },
    {
        id: 2,
        date: "COMING SOON",
        title: "Expansion: Void Walker",
        excerpt: "Step beyond the firewall. Our first major expansion takes you into the Deep Web, featuring a new class, campaign, and raid.",
        tag: "DLC"
    },
    {
        id: 3,
        date: "EVENT",
        title: "World Championship 2026",
        excerpt: "The stage is set in Seoul. The top 16 teams compete for glory and a $5,000,000 prize pool. Watch live for exclusive drops.",
        tag: "Esports"
    },
];

export default function NewsPage() {
    return (
        <div className="pt-40 pb-12 min-h-screen container mx-auto px-6 max-w-5xl">
            <h1 className="text-6xl md:text-9xl font-oswald font-black uppercase text-white mb-20 text-center tracking-tighter">
                Latest <span className="text-red-600">Intel</span>
            </h1>

            <div className="space-y-12">
                {NEWS.map((item, i) => (
                    <article key={i} className="group relative border-l-2 border-white/10 hover:border-red-500 pl-8 transition-colors pb-8">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-white/20 group-hover:border-red-500 transition-colors" />
                        <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2 block">{item.date} • {item.tag}</span>
                        <h2 className="text-3xl md:text-4xl font-oswald font-bold text-white uppercase mb-4 group-hover:text-red-500 transition-colors cursor-pointer">
                            {item.title}
                        </h2>
                        <p className="text-lg text-gray-400 mb-6 leading-relaxed max-w-3xl">
                            {item.excerpt}
                        </p>
                        <Button href={`/news/${item.id}`} variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                            Read Transmission
                        </Button>
                    </article>
                ))}
            </div>
        </div>
    )
}
