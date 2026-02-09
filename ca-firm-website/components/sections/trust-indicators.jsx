
"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { Building2, Users, FileCheck, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Years of Experience", value: "15+", icon: Briefcase },
  { label: "Happy Clients", value: "500+", icon: Users },
  { label: "Projects Completed", value: "1200+", icon: FileCheck },
  { label: "Startups Mentored", value: "50+", icon: Building2 },
];

const TrustIndicators = () => {
  return (
    <SectionWrapper className="border-b border-slate-100 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-slate-100"> {/* Polish: Subtle separators */}
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }} // Polish: Reduced distance
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeInOut" }} // Polish: Smooth
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-2 px-4"
          >
            <div className="p-3 bg-blue-50 text-primary rounded-full mb-2">
              <stat.icon size={24} />
            </div>
            <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
            <span className="text-sm text-slate-500 font-medium uppercase tracking-wide">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TrustIndicators;
