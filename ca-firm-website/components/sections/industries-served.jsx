
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";
import { INDUSTRIES } from "@/constants";

const IndustriesServed = () => {
  return (
    <SectionWrapper background="gray">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-slate-600">
            Specialized financial expertise across diverse sectors. We understand the unique challenges of your industry.
          </p>
        </div>
        <Link 
          href="/industries" 
          className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          View All Industries <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {INDUSTRIES.slice(0, 6).map((industry, index) => (
          <div 
            key={index}
            className="group bg-white p-8 rounded-xl border border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
              {industry.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {industry.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default IndustriesServed;
