
"use client";


import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, ShieldCheck, Rocket, Award } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";
import Button from "@/components/ui/button";

const features = [
  {
    icon: TrendingUp,
    title: "Financial Strategy",
    desc: "Modern financial strategies combined with traditional integrity to drive business growth."
  },
  {
    icon: ShieldCheck,
    title: "Seamless Compliance",
    desc: "Turning audit and taxation complexities into a stepping stone for credibility."
  },
  {
    icon: Rocket,
    title: "Startup Mentorship",
    desc: "Guiding startups through funding rounds and scaling operations effectively."
  },
  {
    icon: Award,
    title: "Ex-Big 4 Expertise",
    desc: "Fellow Chartered Accountant (FCA) with deep industry experience and insights."
  }
];

const AboutPreview = () => {
  return (
    <SectionWrapper id="about-preview">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            More Than Just an Accountant
          </h2>
          <p className="text-xl md:text-2xl text-primary font-medium">
            Your Strategic Growth Partner
          </p>
          <div className="w-24 h-1.5 bg-primary/20 rounded-full mx-auto mt-6" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100"
          >
            <div className="w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
              {feature.title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <Button variant="outline" size="lg" href="/about" className="group">
          Read Full Profile
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </SectionWrapper>
  );
};

export default AboutPreview;
