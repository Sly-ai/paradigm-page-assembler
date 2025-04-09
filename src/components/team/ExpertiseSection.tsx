
import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { ExpertiseItem } from "./TeamMemberTypes";

interface ExpertiseSectionProps {
  expertise: ExpertiseItem[];
}

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ expertise }) => {
  if (!expertise || expertise.length === 0) return null;
  
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0A2463] mb-8 pb-4 border-b">Core Expertise</h2>
          <div className="space-y-10">
            {expertise.map((item, index) => (
              <Card key={index} className="border-t-4 border-t-[#3E92CC]">
                <CardHeader>
                  <CardTitle className="text-xl text-[#0A2463]">{index + 1}. {item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
