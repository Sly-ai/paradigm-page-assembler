
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import WhoWeAre from "@/components/WhoWeAre";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Mission />
      <Services />
      <WhoWeAre />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
