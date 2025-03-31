
import React from "react";
import TeamMember from "./TeamMember";

const WhoWeAre = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-6">
            Who We Are
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our team of experts combines deep industry knowledge with cutting-edge 
            insights from social psychology and behavioral economics to deliver 
            transformative results for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <TeamMember 
            name="Ebenezer Tesfaye" 
            role="Founder & Chief Strategy Officer" 
          />
          <TeamMember 
            name="Natnael Melaku" 
            role="Head of Business Development" 
          />
          <TeamMember 
            name="Sosena Samson" 
            role="Director of Marketing & Branding" 
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
