
"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/section-wrapper";
import { CheckCircle2, Award, BookOpen, UserCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <div className="bg-slate-900 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Dedicated to excellence, integrity, and your financial growth.
          </p>
        </div>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                CA Bhargav Tank
                <span className="block text-lg font-medium text-primary mt-1">FCA, DISA (ICAI), B.Com (Hons)</span>
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full mb-6" />
              <p className="text-slate-600 leading-relaxed text-lg mb-4">
                I am a Fellow Chartered Accountant with over 15 years of extensive experience in Audit, Taxation, and Business Advisory. My journey began with a passion for numbers and a commitment to helping businesses navigate the complex regulatory environment of India.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Over the years, I have had the privilege of serving a diverse clientele ranging from tech startups and manufacturing units to healthcare professionals and non-profits. My philosophy is simple: <strong>Compliance should be a business enabler, not a bottleneck.</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <Award className="text-primary mb-3 h-8 w-8" />
                <h3 className="font-bold text-slate-900 mb-1">Experience</h3>
                <p className="text-sm text-slate-600">15+ Years in Practice</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <BookOpen className="text-primary mb-3 h-8 w-8" />
                <h3 className="font-bold text-slate-900 mb-1">Education</h3>
                <p className="text-sm text-slate-600">FCA, DISA, B.Com</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <UserCheck className="text-primary mb-3 h-8 w-8" />
                <h3 className="font-bold text-slate-900 mb-1">Memberships</h3>
                <p className="text-sm text-slate-600">ICAI Fellow Member</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">My Philosophy</h3>
              <ul className="space-y-3">
                {[
                  "Integrity and Transparency above all.",
                  "Client-centric approach with personalized attention.",
                  "Continuous learning to stay ahead of regulatory changes.",
                  "Leveraging technology for efficiency and accuracy."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-3 h-5 w-5 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-200 shadow-xl relative z-10">
               <Image 
                 src="/images/about.png"
                 alt="CA Bhargav Tank"
                 fill
                 className="object-cover"
                 priority
               />
            </div>
            <div className="absolute top-10 -right-10 w-full h-full border-2 border-primary rounded-2xl -z-0 hidden md:block" />
            
            {/* Quote Card */}
            <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-xl shadow-lg border border-slate-100 max-w-xs z-20 hidden md:block">
              <p className="italic text-slate-600 mb-4">
                "Our goal is to provide financial clarity so you can focus on what you do best—growing your business."
              </p>
              <p className="font-bold text-slate-900">- Bhargav Tank</p>
            </div>
          </div>

        </div>
      </SectionWrapper>
    </>
  );
}
