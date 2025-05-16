import CompanyLogos from "./components/CompanyLogos";
import FounderHeadline from "./components/FounderHeadline";

import Navbar from "./components/Navbar";

import HeroSection from "./components/Herosection";
import React from "react";
import TestimonialSection from "./components/TestimonialCards";
import ImpactfulCTA from "./components/ImpactfulCTA";
import CaseStudyCard from "./components/CaseStudyCard";
import CaseStudy from "./components/CaseStudy";
import SportsDesignCaseStudy from "./components/SportsDesignCaseStudy";
import TimelinesSection from "./components/TimelinesSection";
import BrandIdentityBanner from "./components/BrandIdentityBanner";
import BrandIdentityBannerwhite from "./components/BrandIdentityBannerwhite";
import BrandIdentityBanneryellow from "./components/BrandIdentityBanneryellow";
import BrandIdentityBannerred from "./components/BrandIdentityBannerred";
import TestimonialCarousel from "./components/TestimonialCarousel";
import FAQAccordion from "./components/FAQAccordion";
import Footer from "./components/Footer";
import FullWidthVideoSection from "./components/FullWidthVideoSection";
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CompanyLogos />
      <FullWidthVideoSection />
      <FounderHeadline />
      <TestimonialSection />
      <ImpactfulCTA />
      <CaseStudyCard />
      <CaseStudy />
      <SportsDesignCaseStudy />
      <TimelinesSection />
      <BrandIdentityBanner />
      <BrandIdentityBannerwhite />
      <BrandIdentityBanneryellow />
      <BrandIdentityBannerred />
      <TestimonialCarousel />
      <FAQAccordion />
      <Footer />
     
    </div>
  );
};

export default App;
