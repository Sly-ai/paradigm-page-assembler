
import React from "react";
import { AchievementItem } from "./TeamMemberTypes";

interface AchievementsSectionProps {
  achievements: AchievementItem[];
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievements }) => {
  if (!achievements || achievements.length === 0) return null;
  
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0A2463] mb-8 pb-4 border-b">Key Projects & Achievements</h2>
          <div className="space-y-6">
            {achievements.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-[#0A2463] mb-3">{index + 1}. {project.title}</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {project.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
