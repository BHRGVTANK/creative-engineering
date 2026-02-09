
import SectionWrapper from "@/components/ui/section-wrapper";
import Card, { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { INDUSTRIES } from "@/constants";
import { Factory, Briefcase, ShoppingBag, Building, HeartPulse, Laptop } from "lucide-react";

// Mapping icons to industries based on index or title match for better visuals
const industryIcons = [
  Laptop, // Startups & Tech
  Factory, // Manufacturing
  Briefcase, // Service Professionals
  ShoppingBag, // Retail & Trading
  Building, // Real Estate
  HeartPulse // Non-Profits (generic fallback or specific)
];

export const metadata = {
  title: "Industries Served | CA Rahul Sharma",
  description: "Specialized financial and compliance services for Startups, Manufacturing, Retail, and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <div className="bg-slate-900 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Tailored financial strategies for the unique challenges of your sector.
          </p>
        </div>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((industry, index) => {
            const Icon = industryIcons[index % industryIcons.length];
            return (
              <Card key={index} className="h-full flex flex-col hover:border-primary/40">
                <CardHeader>
                  <div className="w-14 h-14 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-4">
                    <Icon size={28} />
                  </div>
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Services:</h4>
                    <ul className="text-sm text-slate-500 space-y-1">
                      <li>• Specialized Tax Planning</li>
                      <li>• Industry-Specific Compliance</li>
                      <li>• Audit & Risk Assurance</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </SectionWrapper>
    </>
  );
}
