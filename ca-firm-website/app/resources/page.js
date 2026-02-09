
import SectionWrapper from "@/components/ui/section-wrapper";
import Card, { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { ARTICLES } from "@/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Resources & Insights | CA Bhargav Tank",
  description: "Latest tax updates, compliance calendars, and financial insights.",
};

export default function ResourcesPage() {
  return (
    <>
      <div className="bg-slate-900 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources & Insights</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Stay updated with the latest in finance, tax laws, and compliance.
          </p>
        </div>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Articles */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Latest Articles</h2>
            {ARTICLES.map((article, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-48 aspect-video bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 shrink-0">
                  <article.icon size={32} />
                </div>
                <div>
                  <div className="flex items-center text-xs text-slate-500 mb-2 space-x-2">
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <Link href={`/resources/${article.slug}`}>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-primary cursor-pointer transition-colors">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <Link 
                    href={`/resources/${article.slug}`}
                    className="inline-flex items-center text-primary font-semibold hover:text-blue-700 transition-colors group text-sm"
                  >
                    Read More 
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Compliance Calendar */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Compliance Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    { date: "7th Nov", event: "TDS Payment Due" },
                    { date: "11th Nov", event: "GSTR-1 Filing" },
                    { date: "15th Nov", event: "PF/ESI Payment" },
                    { date: "20th Nov", event: "GSTR-3B Filing" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center justify-between text-sm border-b border-slate-50 last:border-0 pb-2 last:pb-0">
                      <span className="font-medium text-slate-700">{item.event}</span>
                      <span className="text-primary bg-blue-50 px-2 py-1 rounded text-xs">{item.date}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Newsletter (Mock) */}
            <div className="bg-primary text-white p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2">Subscribe to Updates</h3>
              <p className="text-sm text-blue-200 mb-4">Get the latest tax news delivered to your inbox.</p>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-3 py-2 rounded-md text-slate-900 text-sm mb-3 focus:outline-none"
              />
              <Button 
                size="sm" 
                className="w-full bg-white text-primary hover:bg-slate-100 cursor-pointer border-none hover:no-underline focus:ring-0 focus:outline-none"
              >
                Subscribe
              </Button>
            </div>

          </div>

        </div>
      </SectionWrapper>
    </>
  );
}
