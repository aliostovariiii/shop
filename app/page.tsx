"use client";

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Features from '@/components/sections/features';
import TargetAudience from '@/components/sections/target-audience';
import HowItWorks from '@/components/sections/how-it-works';
import Subscription from '@/components/sections/subscription';
import AppFeatures from '@/components/sections/app-features';
import FAQ from '@/components/sections/faq';
import FinalCTA from '@/components/sections/final-cta';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="usage">
          <TargetAudience />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="pricing">
          <Subscription />
        </section>
        <AppFeatures />
        <section id="faq">
          <FAQ />
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}