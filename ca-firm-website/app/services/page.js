
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";
import Card, { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SERVICES } from "@/constants";

export const metadata = {
  title: "Our Services | CA Bhargav Tank",
  description: "Comprehensive financial, audit, and tax services for businesses and individuals.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="bg-slate-900 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Expert solutions tailored to your financial needs. From compliance to consulting, we have you covered.
          </p>
        </div>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Link key={service.id} href={`/services/${service.slug}`} className="block h-full">
              <Card className="h-full flex flex-col group hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-14 h-14 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon size={28} />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-500">
                        <span className="mr-2 text-primary">•</span> {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
                  View Details <ArrowRight size={16} className="ml-1" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
