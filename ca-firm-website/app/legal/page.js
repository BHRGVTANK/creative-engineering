
import SectionWrapper from "@/components/ui/section-wrapper";

export const metadata = {
  title: "Legal & Disclaimer | CA Rahul Sharma",
  description: "Terms of use, disclaimer and privacy policy.",
};

export default function LegalPage() {
  return (
    <>
      <div className="bg-slate-900 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Legal & Disclaimer</h1>
        </div>
      </div>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto space-y-12 text-slate-700 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Disclaimer</h2>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-sm">
              <p className="mb-4">
                The information provided on this website is for general informational purposes only. It is not intended to constitute legal, financial, or tax advice. 
                While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
              </p>
              <p>
                Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">ICAI Regulations</h2>
            <p>
              As per the guidelines of the Institute of Chartered Accountants of India (ICAI), Chartered Accountants are not permitted to solicit work or advertise their services. 
              This website is meant solely for the purpose of information and does not in any way amount to solicitation or advertisement. 
              By visiting this website, you acknowledge that you are doing so of your own accord and that there has been no solicitation, invitation, or inducement of any sort whatsoever from us to create a professional relationship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Privacy Policy</h2>
            <p className="mb-4">
              We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. 
              We have adopted this privacy policy to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We collect information only when you voluntarily provide it to us via contact forms.</li>
              <li>We do not sell or share your personal information with third parties for marketing purposes.</li>
              <li>We use reasonable security measures to protect your data.</li>
            </ul>
          </section>

        </div>
      </SectionWrapper>
    </>
  );
}
