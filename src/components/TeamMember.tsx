
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface TeamMemberProps {
  name: string;
  role?: string;
  imageSrc?: string;
}

const TeamMember = ({ name, role, imageSrc }: TeamMemberProps) => {
  // Get initials from name for the avatar fallback
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");
    
  // Create URL-friendly ID from name
  const urlId = name.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col items-center p-6">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Avatar className="h-24 w-24 mb-4 border-2 border-[#0A2463] cursor-pointer">
            {imageSrc && <AvatarImage src={imageSrc} alt={name} />}
            <AvatarFallback className="text-xl bg-[#3E92CC] text-white">
              {initials}
            </AvatarFallback>
          </Avatar>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <div>
              <h4 className="text-sm font-semibold">{name}</h4>
              {role && <p className="text-sm text-gray-600">{role}</p>}
              <p className="text-sm mt-2">
                Click "Learn More" to view full profile and expertise details.
              </p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      
      <h3 className="text-xl font-semibold text-[#0A2463] mb-1">{name}</h3>
      {role && <p className="text-gray-600 text-center mb-4">{role}</p>}
      <Link to={`/team/${urlId}`}>
        <Button variant="outline" className="mt-2 border-[#0A2463] text-[#0A2463] hover:bg-[#0A2463] hover:text-white">
          Learn More <ArrowRight className="ml-1" size={16} />
        </Button>
      </Link>
    </div>
  );
};

export default TeamMember;
