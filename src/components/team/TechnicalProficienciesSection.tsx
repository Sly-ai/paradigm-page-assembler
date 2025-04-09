
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Skill {
  name: string;
  level: "Advanced" | "Expert" | "Certified";
  percentage?: number;
}

interface TechnicalProficienciesSectionProps {
  skills: {
    advanced: string[];
    expert: string[];
    certified: string[];
  };
}

const TechnicalProficienciesSection: React.FC<TechnicalProficienciesSectionProps> = ({ skills }) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0A2463] mb-8 pb-2 border-b">Technical Proficiencies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-t-4 border-t-[#3E92CC]">
              <CardHeader>
                <CardTitle className="text-lg text-[#0A2463]">Advanced</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {skills.advanced.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-full">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{skill}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-[#3E92CC] h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-[#0A2463]">
              <CardHeader>
                <CardTitle className="text-lg text-[#0A2463]">Expert</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {skills.expert.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-full">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{skill}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-[#0A2463] h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-[#DAA520]">
              <CardHeader>
                <CardTitle className="text-lg text-[#0A2463]">Certified</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {skills.certified.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-full">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{skill}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-[#DAA520] h-2 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalProficienciesSection;
