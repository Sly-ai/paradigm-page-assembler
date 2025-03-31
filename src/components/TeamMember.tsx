
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

  return (
    <div className="flex flex-col items-center p-6">
      <Avatar className="h-24 w-24 mb-4 border-2 border-[#0A2463]">
        {imageSrc && <AvatarImage src={imageSrc} alt={name} />}
        <AvatarFallback className="text-xl bg-[#3E92CC] text-white">
          {initials}
        </AvatarFallback>
      </Avatar>
      <h3 className="text-xl font-semibold text-[#0A2463] mb-1">{name}</h3>
      {role && <p className="text-gray-600 text-center">{role}</p>}
    </div>
  );
};

export default TeamMember;
