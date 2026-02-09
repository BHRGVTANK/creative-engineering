
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";
import Card, { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SERVICES } from "@/constants";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/utils";

const ServicesGrid = () => {
  return (
    <SectionWrapper id="services" background="gray">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Comprehensive Financial Services
        </h2>
        <p className="text-lg text-slate-600">
          Tailored solutions to meet the diverse needs of businesses and individuals, ensuring compliance and fostering growth.
        </p>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {SERVICES.map((service) => (
          <motion.div key={service.id} variants={fadeIn} className="h-full">
            <Link href={`/services/${service.slug}`} className="block h-full">
              <Card className="h-full flex flex-col group">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-50 text-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon size={24} />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                </CardContent>
                <div className="mt-auto pt-4 flex items-center text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 text-center">
        <Link 
          href="/services" 
          className="inline-flex items-center text-primary font-semibold hover:underline underline-offset-4"
        >
          View All Services <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default ServicesGrid;
