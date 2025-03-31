
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2463] mb-6 leading-tight">
            Paradigm Advisory
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-8">
            Where Science Meets Strategy
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Transforming business decision-making through the integration of social psychology 
            and behavioral economics principles.
          </p>
          <Button className="bg-[#0A2463] hover:bg-[#051a47] text-white px-8 py-6 text-lg rounded-md">
            Learn How We Can Help
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
