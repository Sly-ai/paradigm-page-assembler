
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Mission = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A2463] mb-8">
            Our Mission
          </h2>
          
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 md:p-10">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                At <span className="font-semibold">Paradigm Advisory</span>, we believe businesses thrive when 
                decisions are informed by a deep understanding of human behavior. Our mission is to bridge 
                the gap between scientific insights and strategic business practices.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We help organizations grow by applying principles from social psychology and behavioral 
                economics to develop more effective marketing strategies, optimize decision-making 
                processes, and create better customer experiences. Our science-based approach delivers 
                measurable results that drive sustainable business growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission;
