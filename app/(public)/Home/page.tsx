"use client";

import HeroSection from "@/app/components/Section/HeroSection";
import Navbar from "@/app/components/ui/Navbar";
import DiscoverSection from "@/app/components/Section/DiscoverCoffee";
import CoffeeSection from "@/app/components/Section/CoffeeSection";
import MenuSection from "@/app/components/Section/MenuSection";
import WhySection from '@/app/components/Section/WhySection';
import TestimonialsSection from '@/app/components/Section/TestimonialsSection';
import SubscribeSection     from '@/app/components/Section/SubscribeSection';
import Footer               from '@/app/components/Section/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <DiscoverSection />
      <MenuSection />
      <WhySection />
      <CoffeeSection />
      <TestimonialsSection />
      <SubscribeSection />
      <Footer />
    </>
  );
}
