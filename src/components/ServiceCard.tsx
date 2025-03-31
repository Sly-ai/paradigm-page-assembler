
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-[#3E92CC] w-6 h-6">
              {icon}
            </div>
            <CardTitle className="text-xl text-[#0A2463]">{title}</CardTitle>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-[#0A2463] transition-colors"
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </CardHeader>
      <CardContent className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-[2000px]' : 'max-h-32'}`}>
        {children}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
