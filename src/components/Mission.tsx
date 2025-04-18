
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useContentStore } from "@/stores/useContentStore";

const Mission = () => {
  const { mission } = useContentStore();
  
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A2463] mb-8">
            {mission.title}
          </h2>
          
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 md:p-10">
              {mission.paragraphs.map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission;
