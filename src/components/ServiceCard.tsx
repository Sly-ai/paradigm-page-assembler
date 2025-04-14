
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="border border-gray-100 shadow-md transition-all duration-300 h-full flex flex-col group hover:shadow-lg hover:border-[#3E92CC]/30">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-[#3E92CC] bg-blue-50 p-2 rounded-md group-hover:bg-blue-100 transition-colors">
              {icon}
            </div>
            <CardTitle className="text-xl text-[#0A2463] group-hover:text-[#3E92CC] transition-colors">{title}</CardTitle>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-[#0A2463] transition-colors rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100"
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </CardHeader>
      <CardContent className="overflow-hidden">
        <AnimatePresence initial={false}>
          {isExpanded ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {children}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 1, height: "auto" }}
              animate={{ opacity: 1, height: 120, overflow: "hidden" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative z-10">
                {children}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-20"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
