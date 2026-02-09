import { ARTICLES } from "@/constants";
import SectionWrapper from "@/components/ui/section-wrapper";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  
  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | CA Bhargav Tank`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <div className="bg-slate-900 text-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/resources" 
            className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Resources
          </Link>
          
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
            <span className="flex items-center gap-1 bg-slate-800 px-3 py-1 rounded-full">
              <Tag className="w-3 h-3" />
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {article.date}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            {article.title}
          </h1>
          
          <p className="text-xl text-slate-300 leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </div>

      <SectionWrapper className="py-16">
        <div className="max-w-3xl mx-auto">
          <div 
            className="[&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-10 [&_h3]:mb-4 [&_p]:mb-6 [&_p]:text-slate-600 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-6 [&_li]:mb-3 [&_li]:text-slate-600 [&_strong]:font-bold [&_strong]:text-slate-900 text-lg"
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />
        </div>
      </SectionWrapper>
    </>
  );
}
