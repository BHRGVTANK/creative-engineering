"use client";

import Hero from "@/components/sections/Hero";
import FeaturedGames from "@/components/sections/FeaturedGames";
import LatestNews from "@/components/sections/LatestNews";
import TechShowcase from "@/components/sections/TechShowcase";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <FeaturedGames />
      <LatestNews />
      <TechShowcase />
    </div>
  );
}
