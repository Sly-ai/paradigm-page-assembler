
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface FooterData {
  companyName: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
}

const FooterEditor: React.FC = () => {
  const [footerData, setFooterData] = useState<FooterData>({
    companyName: "",
    tagline: "",
    description: "",
    email: "",
    phone: ""
  });
  
  // Load data on component mount
  useEffect(() => {
    const savedFooter = localStorage.getItem("footer-data");
    if (savedFooter) {
      setFooterData(JSON.parse(savedFooter));
    } else {
      // Default values
      setFooterData({
        companyName: "Paradigm Advisory",
        tagline: "Where Science Meets Strategy",
        description: "Integrating social psychology and behavioral economics into strategic business decision-making.",
        email: "info@paradigmadvisory.com",
        phone: "+1 (555) 123-4567"
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFooterData({
      ...footerData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    localStorage.setItem("footer-data", JSON.stringify(footerData));
    toast.success("Footer content saved successfully!");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#0A2463]">Edit Footer Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <Input
            id="companyName"
            name="companyName"
            value={footerData.companyName}
            onChange={handleChange}
            placeholder="Company Name"
          />
        </div>
        
        <div>
          <label htmlFor="tagline" className="block text-sm font-medium text-gray-700 mb-1">
            Tagline
          </label>
          <Input
            id="tagline"
            name="tagline"
            value={footerData.tagline}
            onChange={handleChange}
            placeholder="Company Tagline"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          value={footerData.description}
          onChange={handleChange}
          placeholder="Company Description"
          className="w-full"
          rows={3}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            value={footerData.email}
            onChange={handleChange}
            placeholder="Email Address"
            type="email"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            value={footerData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />
        </div>
      </div>
      
      <Button onClick={handleSave} className="bg-[#0A2463]">
        Save Footer Information
      </Button>
    </div>
  );
};

export default FooterEditor;
