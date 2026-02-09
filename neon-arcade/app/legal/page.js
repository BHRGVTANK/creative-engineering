export default function LegalPage() {
    return (
        <div className="pt-24 pb-12 min-h-screen container mx-auto px-6 max-w-4xl text-gray-400">
            <h1 className="text-4xl md:text-5xl font-oswald font-black uppercase text-white mb-12 border-b border-white/10 pb-8">
                Legal <span className="text-red-600">Information</span>
            </h1>

            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl text-white uppercase font-bold mb-4">Terms of Service</h2>
                    <p className="mb-4">
                        By accessing or using the Vortex Studios website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                    </p>
                    <p>
                        We reserve the right to modify these terms at any time. Your continued use of the site constitutes acceptance of any changes.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl text-white uppercase font-bold mb-4">Privacy Policy</h2>
                    <p className="mb-4">
                        Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>We collect data to improve your gaming experience.</li>
                        <li>We do not sell your data to third parties.</li>
                        <li>You can request data deletion at any time.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl text-white uppercase font-bold mb-4">End User License Agreement (EULA)</h2>
                    <p className="mb-4">
                        Use of our games is subject to the EULA provided with each title. Reverse engineering, hacking, or unauthorized distribution of our software is strictly prohibited and may result in legal action.
                    </p>
                </section>

                <section className="pt-12 border-t border-white/10 text-sm">
                    <p>&copy; {new Date().getFullYear()} Vortex Studios Inc. All trademarks referenced herein are the properties of their respective owners.</p>
                </section>
            </div>
        </div>
    )
}
