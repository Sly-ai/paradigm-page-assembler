
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { TeamMember } from "./TeamMemberTypes";

interface TeamMemberHeaderProps {
  member: TeamMember;
}

const TeamMemberHeader: React.FC<TeamMemberHeaderProps> = ({ member }) => {
  return (
    <div className="bg-white py-16 border-b">
      <div className="container mx-auto px-4">
        <Link to="/#team" className="inline-flex items-center text-[#0A2463] hover:text-[#3E92CC] mb-8">
          <ArrowLeft className="mr-2" size={16} />
          Back to Team
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-2">{member.name}</h1>
          <p className="text-xl text-[#3E92CC] mb-6">{member.title}</p>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-[#0A2463] mb-3">About Me</h2>
            <p className="text-gray-700">{member.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberHeader;
