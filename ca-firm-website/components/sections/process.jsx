
"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { PROCESS_STEPS } from "@/constants";
import { motion } from "framer-motion";

const Process = () => {
  return (
    <SectionWrapper id="process">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Our Working Process
        </h2>
        <p className="text-lg text-slate-600">
          A systematic approach to ensure precision, compliance, and peace of mind.
        </p>
      </div>

      <div className="relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center relative group hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 mx-auto bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Process;
