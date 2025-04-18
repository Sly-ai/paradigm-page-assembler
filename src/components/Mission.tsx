
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface MissionData {
  paragraph1: string;
  paragraph2: string;
}

const Mission = () => {
  const [missionData, setMissionData] = useState<MissionData>({
    paragraph1: "At Paradigm Advisory, we believe businesses thrive when decisions are informed by a deep understanding of human behavior. Our mission is to bridge the gap between scientific insights and strategic business practices.",
    paragraph2: "We help organizations grow by applying principles from social psychology and behavioral economics to develop more effective marketing strategies, optimize decision-making processes, and create better customer experiences. Our science-based approach delivers measurable results that drive sustainable business growth."
  });

  useEffect(() => {
    const savedMission = localStorage.getItem("mission-data");
    if (savedMission) {
      setMissionData(JSON.parse(savedMission));
    }
  }, []);

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A2463] mb-8">
            Our Mission
          </h2>
          
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 md:p-10">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                {missionData.paragraph1}
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {missionData.paragraph2}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission;
