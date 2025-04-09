
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { teamMembersData } from "@/components/team/TeamData";
import TeamMemberHeader from "@/components/team/TeamMemberHeader";
import ExpertiseSection from "@/components/team/ExpertiseSection";
import AchievementsSection from "@/components/team/AchievementsSection";
import NotFoundMessage from "@/components/team/NotFoundMessage";

const TeamMemberDetail = () => {
  const { id } = useParams();
  const member = id ? teamMembersData[id] : undefined;
  
  if (!member) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-24">
          <NotFoundMessage />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <TeamMemberHeader member={member} />
        <ExpertiseSection expertise={member.expertise || []} />
        <AchievementsSection achievements={member.achievements || []} />
      </main>
      <Footer />
    </div>
  );
};

export default TeamMemberDetail;
