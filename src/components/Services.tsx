
import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useContentStore } from "@/stores/useContentStore";
import { Briefcase, BarChart, LineChart, PieChart, Target, Users, Globe, Award, Star } from "lucide-react";

// Map icon names to actual Lucide components
const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-6 h-6" />,
  BarChart: <BarChart className="w-6 h-6" />,
  LineChart: <LineChart className="w-6 h-6" />,
  PieChart: <PieChart className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  Star: <Star className="w-6 h-6" />
};

const Services = () => {
  const { services } = useContentStore();
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

  // Get unique service categories
  const categories = ["all", ...Array.from(new Set(services.map(service => service.id)))];

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
            <TabsList className="grid grid-cols-1 sm:grid-cols-4 mb-8 w-full sm:w-auto mx-auto">
              {categories.map(category => (
                <TabsTrigger key={category} value={category}>
                  {category === "all" ? "All Services" : 
                    services.find(s => s.id === category)?.title || category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services
            .filter(service => activeTab === "all" || service.id === activeTab)
            .map((service) => (
              <motion.div key={service.id} variants={item} layout>
                <ServiceCard 
                  title={service.title} 
                  icon={iconMap[service.icon] || <Briefcase className="w-6 h-6" />}
                >
                  <div className="space-y-4">
                    {service.sections.map((section, idx) => (
                      <div key={idx}>
                        <h4 className="font-semibold text-lg mb-2 text-[#0A2463]">{section.title}</h4>
                        
                        {section.type === "text" && (
                          <p className="text-gray-700">{section.content}</p>
                        )}
                        
                        {section.type === "list" && (
                          <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            {section.listItems?.map((item, itemIdx) => (
                              <li key={itemIdx}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                    
                    <Button className="w-full mt-2 bg-[#3E92CC] hover:bg-[#2d7eb3]" onClick={(e) => e.stopPropagation()}>
                      Learn More
                    </Button>
                  </div>
                </ServiceCard>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
