import Link from "next/link";

export default function PrivacyPage() {
    return (
        <div className="pt-24 pb-12 min-h-screen container mx-auto px-6 max-w-4xl text-gray-400">
            <h1 className="text-4xl md:text-5xl font-oswald font-black uppercase text-white mb-8 border-b border-white/10 pb-8">
                Privacy <span className="text-red-600">Policy</span>
            </h1>
            <p className="mb-4">
                This implementation is for demonstration purposes. Please refer to the main{" "}
                <Link href="/legal" className="text-red-500 underline">
                    Legal Page
                </Link>{" "}
                for full terms.
            </p>
        </div>
    );
}
