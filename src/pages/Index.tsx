import { useState, useCallback } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import ApartmentTypes from "@/components/ApartmentTypes";
import About from "@/components/About";
import OurProcess from "@/components/OurProcess";
import VideoShowcase from "@/components/VideoShowcase";
import Services from "@/components/Services";
import FeaturedCustomerProjects from "@/components/FeaturedCustomerProjects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import QuoteGenerator from "@/components/QuoteGenerator";
import ProjectLocationsMap from "@/components/ProjectLocationsMap";
import Contact from "@/components/Contact";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import IntroAnimation from "@/components/IntroAnimation";
import HomeSpaceCollections from "@/components/HomeSpaceCollections";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* {showIntro && <IntroAnimation onComplete={handleIntroComplete} />} */}
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <ApartmentTypes />
        <HomeSpaceCollections />
        <OurProcess />
        {/* <VideoShowcase /> */}
        {/* <Services /> */}
        <FeaturedCustomerProjects />
        <WhyChooseUs />
        {/* <Testimonials /> */}
        {/* <Blog /> */}
        <ProjectLocationsMap />
        {/* <div id="quote-generator">
          <QuoteGenerator />
        </div> */}
        <About />
        <Contact />
        <FindUs />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;