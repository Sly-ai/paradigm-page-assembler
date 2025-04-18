
import React, { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { Briefcase, BarChart, LineChart, PieChart, Trophy, Target } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ServiceItem {
  title: string;
  description: string;
}

interface Service {
  id: string;
  title: string;
  icon: string;
  items: ServiceItem[];
}

const Services = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const savedServices = localStorage.getItem("services-data");
    if (savedServices) {
      setServices(JSON.parse(savedServices));
    } else {
      // Default values - these will be displayed until a CMS update
      setServices([
        {
          id: "1",
          title: "Business Development",
          icon: "Briefcase",
          items: [
            { title: "Investment Advisory", description: "Market entry strategy for foreign investors, legal and regulatory compliance, due diligence on investment opportunities, facilitation of joint ventures and partnerships" },
            { title: "Trade Facilitation", description: "Market intelligence and sector analysis, export and import advisory services, business matchmaking and networking, policy advocacy and government relations" },
            { title: "Legal and Regulatory Consulting", description: "Corporate structuring and licensing, contract drafting and negotiation, policy analysis and impact assessment, risk assessment and dispute resolution" },
            { title: "Policy & Government Relations", description: "Advocacy for trade-friendly policies, stakeholder engagement strategies, compliance advisory on regulations, public affairs strategy development" }
          ]
        },
        {
          id: "2",
          title: "Marketing & Branding",
          icon: "BarChart",
          items: [
            { title: "Market Entry & Business Launch", description: "We help companies successfully enter new markets through comprehensive research, strategy development, branding, and marketing execution tailored to your specific goals." },
            { title: "Rebranding & Brand Transformation", description: "Refresh your brand identity and market position through strategic repositioning, communication planning, internal alignment, and customer re-engagement strategies." },
            { title: "Industry Penetration & Market Expansion", description: "Expand your market reach through opportunity assessment, localized marketing campaigns, strategic partnerships, and optimized sales strategies." },
            { title: "Digital Marketing & Optimization", description: "Enhance your online presence and marketing ROI through social media strategy, SEO, paid advertising, data analytics, and audience engagement strategies." }
          ]
        },
        {
          id: "3",
          title: "Product & Digital Growth",
          icon: "LineChart",
          items: [
            { title: "Product Management", description: "Comprehensive product strategy, development, optimization, and specialized B2B and Fintech product management services to drive innovation and growth." },
            { title: "Project Management", description: "Expert planning, execution, monitoring, and stakeholder management to ensure your projects are delivered on time and within budget." },
            { title: "Digital Solutions Development", description: "Development and implementation of digital platforms and solutions to digitize value chains and optimize business processes for maximum efficiency." },
            { title: "Strategic Partnerships & Development", description: "Cultivate strategic partnerships to drive growth and implement strategies to increase referrals and revenue through collaboration and networking." }
          ]
        }
      ]);
    }
  }, []);

  // Function to render the appropriate icon based on the icon name
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Briefcase": return <Briefcase className="w-6 h-6" />;
      case "BarChart": return <BarChart className="w-6 h-6" />;
      case "LineChart": return <LineChart className="w-6 h-6" />;
      case "PieChart": return <PieChart className="w-6 h-6" />;
      case "Trophy": return <Trophy className="w-6 h-6" />;
      case "Target": return <Target className="w-6 h-6" />;
      default: return <Briefcase className="w-6 h-6" />;
    }
  };

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
          {services.map((service) => {
            // Determine if this service should be shown based on active tab
            const shouldShow = activeTab === "all" || 
              (activeTab === "business" && service.title.toLowerCase().includes("business")) || 
              (activeTab === "marketing" && service.title.toLowerCase().includes("marketing")) || 
              (activeTab === "product" && service.title.toLowerCase().includes("product"));

            if (!shouldShow) return null;

            return (
              <motion.div key={service.id} variants={item} layout>
                <ServiceCard 
                  title={service.title} 
                  icon={getIconComponent(service.icon)}
                >
                  <div className="space-y-4">
                    {service.items.map((item, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-lg mb-2 text-[#0A2463]">{item.title}</h4>
                        <p className="text-gray-700">
                          {item.description}
                        </p>
                      </div>
                    ))}
                    
                    <Button className="w-full mt-2 bg-[#3E92CC] hover:bg-[#2d7eb3]" onClick={(e) => e.stopPropagation()}>
                      Learn More
                    </Button>
                  </div>
                </ServiceCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
