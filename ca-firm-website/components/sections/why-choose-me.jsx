
"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { Check, Shield, Clock, Award, Headphones, Zap } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Highest Integrity",
    description: "We adhere to the strictest ethical standards of the ICAI, ensuring complete transparency and trust."
  },
  {
    icon: Award,
    title: "Expert Knowledge",
    description: "Stay ahead with our team's up-to-date knowledge of changing tax laws and compliance regulations."
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We respect deadlines. Your filings, audits, and reports will always be ready well ahead of time."
  },
  {
    icon: Zap,
    title: "Tech-Driven Approach",
    description: "We leverage modern accounting software and cloud tools for efficiency and real-time data access."
  },
  {
    icon: Headphones,
    title: "Personalized Support",
    description: "Direct access to senior partners for critical advice. We don't just process data; we advise."
  },
  {
    icon: Check,
    title: "End-to-End Solutions",
    description: "From incorporation to winding up, we handle the entire lifecycle of your business compliance."
  }
];

const WhyChooseMe = () => {
  return (
    <SectionWrapper background="blue">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Why Partner With Us?
        </h2>
        <p className="text-lg text-blue-100">
          We bring a blend of traditional expertise and modern efficiency to serve your business better.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/20 transition-colors">
            <div className="w-12 h-12 bg-white text-primary rounded-lg flex items-center justify-center mb-4">
              <reason.icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
            <p className="text-blue-100 text-sm leading-relaxed">{reason.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhyChooseMe;
