
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { teamMembersData } from "@/components/team/TeamData";
import TeamMemberDetailRevised from "@/components/team/TeamMemberDetailRevised";
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

  // Set page title dynamically
  React.useEffect(() => {
    document.title = `${member.name} | Marketing Strategy & Growth Consultant`;
    
    // Optional: Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Marketing strategy consultant specializing in brand launches, rebranding, and market expansion with proven results across Telecom, FMCG and Real Estate sectors.');
    }
    
    return () => {
      document.title = 'Paradigm Advisory'; // Reset title on unmount
    };
  }, [member.name]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <TeamMemberDetailRevised member={member} />
      </main>
      <Footer />
    </div>
  );
};

export default TeamMemberDetail;
