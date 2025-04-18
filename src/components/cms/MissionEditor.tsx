
import React, { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface MissionData {
  paragraph1: string;
  paragraph2: string;
}

const MissionEditor: React.FC = () => {
  const [missionData, setMissionData] = useState<MissionData>({
    paragraph1: "",
    paragraph2: ""
  });
  
  // Load data on component mount
  useEffect(() => {
    const savedMission = localStorage.getItem("mission-data");
    if (savedMission) {
      setMissionData(JSON.parse(savedMission));
    } else {
      // Default values
      setMissionData({
        paragraph1: "At Paradigm Advisory, we believe businesses thrive when decisions are informed by a deep understanding of human behavior. Our mission is to bridge the gap between scientific insights and strategic business practices.",
        paragraph2: "We help organizations grow by applying principles from social psychology and behavioral economics to develop more effective marketing strategies, optimize decision-making processes, and create better customer experiences. Our science-based approach delivers measurable results that drive sustainable business growth."
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMissionData({
      ...missionData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    localStorage.setItem("mission-data", JSON.stringify(missionData));
    toast.success("Mission content saved successfully!");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#0A2463]">Edit Mission Section</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="paragraph1" className="block text-sm font-medium text-gray-700 mb-1">
            First Paragraph
          </label>
          <Textarea
            id="paragraph1"
            name="paragraph1"
            value={missionData.paragraph1}
            onChange={handleChange}
            rows={4}
            placeholder="Enter first paragraph"
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="paragraph2" className="block text-sm font-medium text-gray-700 mb-1">
            Second Paragraph
          </label>
          <Textarea
            id="paragraph2"
            name="paragraph2"
            value={missionData.paragraph2}
            onChange={handleChange}
            rows={6}
            placeholder="Enter second paragraph"
            className="w-full"
          />
        </div>
      </div>
      
      <Button onClick={handleSave} className="bg-[#0A2463]">
        Save Mission Content
      </Button>
    </div>
  );
};

export default MissionEditor;
