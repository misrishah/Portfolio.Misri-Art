
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add animation-delay utility classes for staggered animations
    document.documentElement.style.setProperty('--animation-delay', '200ms');
    
    // Scroll to top on initial load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
