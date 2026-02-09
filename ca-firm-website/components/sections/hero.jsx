
"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/button";
import SectionWrapper from "@/components/ui/section-wrapper";
import { fadeIn } from "@/lib/utils";

const Hero = () => {
  return (
    <div className="relative bg-slate-50 overflow-hidden pt-10 pb-16 md:pt-20 md:pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="space-y-8"
          >
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold tracking-wide mb-4">
                Trusted Chartered Accountant in Bangalore
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Expert Financial Guidance for <span className="text-primary">Business Growth</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                Simplifying compliance, optimizing taxes, and driving strategic growth for Startups, SMEs, and Professionals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" href="/contact">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" href="/services">
                Explore Services
              </Button>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center">
                <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" />
                <span>500+ Happy Clients</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" />
                <span>100% Compliance</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image / Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:h-full flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
               {/* Placeholder for professional image */}
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
               <Image 
                 src="/images/home.png"
                 alt="CA Bhargav Tank"
                 fill
                 className="object-cover object-center"
                 priority
               />
            </div>
            
            {/* Floating Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }} // Polish: Removed loop, added simple entry
              className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white p-4 rounded-lg shadow-soft border border-slate-50 max-w-[200px] z-20"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                  ₹
                </div>
                <div>
                  <p className="text-xs text-slate-500">Tax Saved</p>
                  <p className="text-lg font-bold text-slate-900">₹ 2.5 Cr+</p>
                </div>
              </div>
              <p className="text-xs text-slate-400">For clients last year</p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }} // Polish: Static entry
              className="absolute top-10 -right-4 md:top-20 md:-right-8 bg-white p-4 rounded-lg shadow-soft border border-slate-50 z-20"
            >
               <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="text-sm font-semibold text-slate-900">Audit Completed</span>
               </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl -z-10" />
    </div>
  );
};

export default Hero;
