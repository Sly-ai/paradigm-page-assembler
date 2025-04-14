
import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import { Briefcase, BarChart, LineChart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Services = () => {
  const [activeTab, setActiveTab] = useState("all");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="services">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A2463] mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-6">
            We offer a comprehensive suite of services designed to help your business grow through 
            science-backed strategies and execution.
          </p>
          
          <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 mb-8 w-full sm:w-auto mx-auto">
              <TabsTrigger value="all">All Services</TabsTrigger>
              <TabsTrigger value="business">Business Dev</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="product">Product Dev</TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Business Development Services */}
          {(activeTab === "all" || activeTab === "business") && (
            <motion.div variants={item} layout>
              <ServiceCard 
                title="Business Development" 
                icon={<Briefcase className="w-6 h-6" />}
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#0A2463]">Investment Advisory</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Market entry strategy for foreign investors</li>
                      <li>Legal and regulatory compliance</li>
                      <li>Due diligence on investment opportunities</li>
                      <li>Facilitation of joint ventures and partnerships</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#0A2463]">Trade Facilitation</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Market intelligence and sector analysis</li>
                      <li>Export and import advisory services</li>
                      <li>Business matchmaking and networking</li>
                      <li>Policy advocacy and government relations</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#0A2463]">Legal and Regulatory Consulting</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Corporate structuring and licensing</li>
                      <li>Contract drafting and negotiation</li>
                      <li>Policy analysis and impact assessment</li>
                      <li>Risk assessment and dispute resolution</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#0A2463]">Policy & Government Relations</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Advocacy for trade-friendly policies</li>
                      <li>Stakeholder engagement strategies</li>
                      <li>Compliance advisory on regulations</li>
                      <li>Public affairs strategy development</li>
                    </ul>
                  </div>
                  
                  <Button className="w-full mt-2 bg-[#3E92CC] hover:bg-[#2d7eb3]" onClick={(e) => e.stopPropagation()}>
                    Learn More
                  </Button>
                </div>
              </ServiceCard>
            </motion.div>
          )}

          {/* Marketing Services */}
          {(activeTab === "all" || activeTab === "marketing") && (
            <motion.div variants={item} layout>
              <ServiceCard 
                title="Marketing & Branding" 
                icon={<BarChart className="w-6 h-6" />}
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#0A2463]">Market Entry & Business Launch</h4>
                    <p className="text-gray-700">
                      We help companies successfully enter new markets through comprehensive research, 
                      strategy development, branding, and marketing execution tailored to your specific goals.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#0A2463]">Rebranding & Brand Transformation</h4>
                    <p className="text-gray-700">
                      Refresh your brand identity and market position through strategic repositioning, 
                      communication planning, internal alignment, and customer re-engagement strategies.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#0A2463]">Industry Penetration & Market Expansion</h4>
                    <p className="text-gray-700">
                      Expand your market reach through opportunity assessment, localized marketing campaigns, 
                      strategic partnerships, and optimized sales strategies.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#0A2463]">Digital Marketing & Optimization</h4>
                    <p className="text-gray-700">
                      Enhance your online presence and marketing ROI through social media strategy, SEO, 
                      paid advertising, data analytics, and audience engagement strategies.
                    </p>
                  </div>
                  
                  <Button className="w-full mt-2 bg-[#3E92CC] hover:bg-[#2d7eb3]" onClick={(e) => e.stopPropagation()}>
                    Learn More
                  </Button>
                </div>
              </ServiceCard>
            </motion.div>
          )}

          {/* Product Services */}
          {(activeTab === "all" || activeTab === "product") && (
            <motion.div variants={item} layout>
              <ServiceCard 
                title="Product & Digital Growth" 
                icon={<LineChart className="w-6 h-6" />}
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#0A2463]">Product Management</h4>
                    <p className="text-gray-700">
                      Comprehensive product strategy, development, optimization, and specialized B2B and 
                      Fintech product management services to drive innovation and growth.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#0A2463]">Project Management</h4>
                    <p className="text-gray-700">
                      Expert planning, execution, monitoring, and stakeholder management to ensure your 
                      projects are delivered on time and within budget.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#0A2463]">Digital Solutions Development</h4>
                    <p className="text-gray-700">
                      Development and implementation of digital platforms and solutions to digitize value chains 
                      and optimize business processes for maximum efficiency.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#0A2463]">Strategic Partnerships & Development</h4>
                    <p className="text-gray-700">
                      Cultivate strategic partnerships to drive growth and implement strategies to increase 
                      referrals and revenue through collaboration and networking.
                    </p>
                  </div>
                  
                  <Button className="w-full mt-2 bg-[#3E92CC] hover:bg-[#2d7eb3]" onClick={(e) => e.stopPropagation()}>
                    Learn More
                  </Button>
                </div>
              </ServiceCard>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
