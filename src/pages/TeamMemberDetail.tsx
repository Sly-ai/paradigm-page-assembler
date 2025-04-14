
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
    // Set different metadata based on team member
    if (member.name.includes("Ebenezer")) {
      document.title = `${member.name} | Product & Digital Innovation Leader`;
      
      // Set meta description for SEO
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 
          'Award-winning product leader specializing in digital transformation, B2B platforms, and AI-driven solutions with proven success across FMCG and FinTech sectors.');
      }
    } else if (member.name.includes("Amanuel")) {
      document.title = `${member.name} | Behavioral Marketing & Social Psychology Specialist`;
      
      // Set meta description for SEO
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 
          'Business development and marketing strategist with expertise in behavioral marketing, consumer psychology, and data-driven growth strategies.');
      }
    } else {
      document.title = `${member.name} | Marketing Strategy & Growth Consultant`;
      
      // Set meta description for SEO
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 
          'Marketing strategy consultant specializing in brand launches, rebranding, and market expansion with proven results across Telecom, FMCG and Real Estate sectors.');
      }
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
