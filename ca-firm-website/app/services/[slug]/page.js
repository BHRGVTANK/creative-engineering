
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Phone } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";
import Button from "@/components/ui/button";
import { SERVICES } from "@/constants";

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | CA Bhargav Tank`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      {/* Hero Section */}
      <div className="bg-slate-900 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services" className="inline-flex items-center text-slate-400 hover:text-white mb-6 text-sm">
              <ArrowRight className="mr-2 h-4 w-4 rotate-180" /> Back to Services
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-600 rounded-lg">
                <Icon size={32} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
            </div>
            <p className="text-xl text-slate-300 leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {service.fullDescription}
              </p>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <CheckCircle2 className="text-primary mt-1 mr-3 h-5 w-5 shrink-0" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Benefits</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4" />
                    <span className="text-slate-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Process / Approach (Generic for now, but contextual) */}
            <section className="bg-blue-50 p-8 rounded-xl border border-blue-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Approach</h2>
              <p className="text-slate-700 mb-6">
                We believe in a proactive rather than reactive approach to {service.title}. 
                Our team ensures that every aspect of compliance is handled with precision, 
                giving you the peace of mind to focus on your core business.
              </p>
              <Button href="/contact">
                Discuss Your Requirements
              </Button>
            </section>

          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            
            {/* CTA Card */}
            <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Need Expert Advice?</h3>
              <p className="text-slate-300 mb-6 text-sm">
                Get a customized solution for your business needs. Schedule a call with CA Bhargav Tank.
              </p>
              <Button variant="primary" className="w-full bg-white text-slate-900 hover:bg-slate-100" href="/contact">
                Book Consultation
              </Button>
              <div className="mt-4 flex items-center justify-center text-slate-400 text-sm">
                <Phone size={16} className="mr-2" /> +91 98765 43210
              </div>
            </div>

            {/* Other Services */}
            <div className="bg-white border border-slate-200 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Other Services</h3>
              <ul className="space-y-3">
                {SERVICES.filter(s => s.slug !== service.slug).slice(0, 5).map(s => (
                  <li key={s.id}>
                    <Link href={`/services/${s.slug}`} className="text-slate-600 hover:text-primary flex items-center text-sm">
                      <ArrowRight size={14} className="mr-2" />
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download Brochure (Mock) */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl flex items-center justify-between cursor-pointer hover:bg-slate-100 transition-colors">
              <div>
                <h3 className="font-bold text-slate-900">Service Brochure</h3>
                <p className="text-xs text-slate-500">PDF, 2.5 MB</p>
              </div>
              <FileText className="text-slate-400" />
            </div>

          </div>

        </div>
      </SectionWrapper>
    </>
  );
}
