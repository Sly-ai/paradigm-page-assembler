
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Trash, Plus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

const ServicesEditor: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  
  // Load data on component mount
  useEffect(() => {
    const savedServices = localStorage.getItem("services-data");
    if (savedServices) {
      setServices(JSON.parse(savedServices));
    } else {
      // Default values for services
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

  const addService = () => {
    const newService: Service = {
      id: Date.now().toString(),
      title: "New Service",
      icon: "Briefcase",
      items: [{ title: "New Item", description: "Description goes here" }]
    };
    setServices([...services, newService]);
  };

  const removeService = (id: string) => {
    setServices(services.filter(service => service.id !== id));
  };

  const addServiceItem = (serviceId: string) => {
    setServices(
      services.map(service => 
        service.id === serviceId 
          ? { ...service, items: [...service.items, { title: "New Item", description: "Description goes here" }] }
          : service
      )
    );
  };

  const removeServiceItem = (serviceId: string, itemIndex: number) => {
    setServices(
      services.map(service => 
        service.id === serviceId 
          ? { ...service, items: service.items.filter((_, i) => i !== itemIndex) }
          : service
      )
    );
  };

  const handleServiceChange = (id: string, field: keyof Service, value: string) => {
    setServices(
      services.map(service => 
        service.id === id ? { ...service, [field]: value } : service
      )
    );
  };

  const handleServiceItemChange = (
    serviceId: string,
    itemIndex: number,
    field: keyof ServiceItem,
    value: string
  ) => {
    setServices(
      services.map(service => 
        service.id === serviceId
          ? {
              ...service,
              items: service.items.map((item, i) => 
                i === itemIndex ? { ...item, [field]: value } : item
              )
            }
          : service
      )
    );
  };

  const handleSave = () => {
    localStorage.setItem("services-data", JSON.stringify(services));
    toast.success("Services saved successfully!");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#0A2463]">Edit Services</h2>
      
      <div className="space-y-6">
        {services.map((service) => (
          <Card key={service.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Title
                  </label>
                  <Input 
                    value={service.title} 
                    onChange={(e) => handleServiceChange(service.id, "title", e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Icon
                  </label>
                  <select 
                    value={service.icon}
                    onChange={(e) => handleServiceChange(service.id, "icon", e.target.value)}
                    className="w-full border border-gray-300 rounded-md h-10 px-3"
                  >
                    <option value="Briefcase">Briefcase</option>
                    <option value="BarChart">Bar Chart</option>
                    <option value="LineChart">Line Chart</option>
                    <option value="PieChart">Pie Chart</option>
                    <option value="Trophy">Trophy</option>
                    <option value="Target">Target</option>
                  </select>
                </div>
                
                <div className="flex justify-end items-center">
                  <Button 
                    variant="destructive" 
                    onClick={() => removeService(service.id)}
                    className="h-10"
                  >
                    <Trash size={16} className="mr-2" /> Remove Service
                  </Button>
                </div>
              </div>
              
              <Accordion type="multiple" defaultValue={[`service-${service.id}`]} className="mt-4">
                <AccordionItem value={`service-${service.id}`}>
                  <AccordionTrigger>Service Items</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      {service.items.map((item, itemIndex) => (
                        <Card key={itemIndex} className="overflow-hidden">
                          <CardContent className="p-4">
                            <div className="grid grid-cols-1 gap-4">
                              <div className="flex gap-2 items-center">
                                <div className="flex-grow">
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Item Title
                                  </label>
                                  <Input 
                                    value={item.title} 
                                    onChange={(e) => handleServiceItemChange(
                                      service.id, 
                                      itemIndex, 
                                      "title", 
                                      e.target.value
                                    )}
                                  />
                                </div>
                                <Button 
                                  variant="destructive"
                                  size="icon"
                                  className="mt-6"
                                  onClick={() => removeServiceItem(service.id, itemIndex)}
                                >
                                  <Trash size={16} />
                                </Button>
                              </div>
                              
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Item Description
                                </label>
                                <Textarea 
                                  value={item.description} 
                                  onChange={(e) => handleServiceItemChange(
                                    service.id, 
                                    itemIndex, 
                                    "description", 
                                    e.target.value
                                  )}
                                  rows={3}
                                />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      
                      <Button
                        variant="outline"
                        className="flex items-center gap-1"
                        onClick={() => addServiceItem(service.id)}
                      >
                        <Plus size={16} />
                        Add Service Item
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex gap-4">
        <Button 
          variant="outline" 
          onClick={addService}
          className="flex items-center gap-1"
        >
          <Plus size={16} />
          Add Service Category
        </Button>
        <Button 
          onClick={handleSave} 
          className="bg-[#0A2463]"
        >
          Save Services
        </Button>
      </div>
    </div>
  );
};

export default ServicesEditor;
