
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Team member data
const teamMembersData = {
  "sosena-samson": {
    name: "Sosena Samson",
    role: "Director of Marketing & Branding",
    title: "Marketing Strategy & Business Growth Consultant",
    about: "I am a marketing strategist with extensive experience in launching brands, rebranding businesses, and penetrating new industries. With a track record of working across various sectors—including Telecom, FMCG, Real estate —I specialize in creating data-driven strategies that drive brand growth, customer engagement, and market expansion. My expertise lies in blending innovative marketing approaches with business insights to deliver sustainable success.",
    expertise: [
      {
        title: "Market Entry & Business Launch Strategies",
        description: "Developing strategies for companies looking to establish a strong presence in competitive industries.",
        points: [
          "Conducting in-depth market research and competitor analysis",
          "Crafting go-to-market strategies for new product and service launches",
          "Developing brand positioning and differentiation strategies",
          "Executing multi-channel marketing campaigns for maximum reach",
          "Establishing performance metrics and optimizing campaigns"
        ]
      },
      {
        title: "Rebranding & Brand Transformation",
        description: "Helping businesses refresh their identity and strengthen their market positioning.",
        points: [
          "Strategic repositioning of brand messaging and identity",
          "PR and communication strategies for seamless rebranding",
          "Internal brand alignment to unify company culture and vision",
          "Customer re-engagement initiatives",
          "Market perception analysis and strategic adjustments"
        ]
      },
      {
        title: "Industry Penetration & Market Expansion",
        description: "Guiding businesses through market expansion and entry into new industries.",
        points: [
          "Identifying and evaluating new market opportunities",
          "Developing localized marketing strategies for different consumer segments",
          "Building strategic partnerships and collaborations",
          "Implementing targeted digital marketing campaigns",
          "Optimizing sales strategies and distribution channels"
        ]
      },
      {
        title: "Digital Marketing & Performance Optimization",
        description: "Enhancing brand presence and ensuring maximum marketing ROI.",
        points: [
          "Social media strategy, content creation, and influencer collaborations",
          "SEO, paid advertising (PPC), and email marketing",
          "Data-driven analytics for performance tracking and improvement",
          "Conversion rate optimization and lead generation",
          "Storytelling and audience engagement strategies"
        ]
      }
    ],
    achievements: [
      {
        title: "Launching a Mobile Super App for a Leading Telecom Provider",
        points: [
          "Conducted market research to identify key consumer needs and trends",
          "Developed a comprehensive go-to-market strategy",
          "Designed digital and offline marketing campaigns for mass adoption",
          "Executed user acquisition strategies, resulting in a 50% increase in app downloads within three months"
        ]
      },
      {
        title: "FMCG Market Penetration Strategy",
        points: [
          "Led a market analysis to understand gaps in the Ethiopian FMCG sector",
          "Developed strategic partnerships with local distributors and retailers",
          "Designed an integrated marketing campaign to drive brand awareness and sales"
        ]
      },
      {
        title: "Launching a Premium Cold-Pressed Juice Brand",
        points: [
          "Developed a brand identity focused on wellness and detox benefits",
          "Created a strategic social media launch campaign with influencer partnerships",
          "Implemented a targeted advertising strategy, increasing brand awareness by 60%",
          "Achieved 35% higher-than-projected sales in the first quarter"
        ]
      },
      {
        title: "Rebranding a Real Estate Firm for High-End Market Appeal",
        points: [
          "Conducted a brand audit and repositioned the firm for luxury property buyers",
          "Redesigned website and digital marketing strategy to attract high-net-worth clients",
          "Led a PR campaign that increased inquiries by 50% within six months"
        ]
      },
      {
        title: "Expanding a Coffee Brand into the International Market",
        points: [
          "Researched and identified lucrative export markets",
          "Developed branding and storytelling strategies to highlight Ethiopian coffee's heritage",
          "Launched a digital campaign that secured international buyers and distributors"
        ]
      }
    ]
  },
  // Placeholders for other team members
  "ebenezer-tesfaye": {
    name: "Ebenezer Tesfaye",
    role: "Director of Digital Innovation and Technology",
    title: "Digital Innovation & Technology Consultant",
    about: "Profile details to be added."
  },
  "natnael-melaku": {
    name: "Natnael Melaku",
    role: "Director of Business Development and Partnership",
    title: "Business Development & Partnerships Consultant",
    about: "Profile details to be added."
  }
};

const TeamMemberDetail = () => {
  const { id } = useParams();
  const member = teamMembersData[id as keyof typeof teamMembersData];
  
  if (!member) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#0A2463] mb-4">Team Member Not Found</h1>
            <Link to="/#team">
              <Button className="bg-[#0A2463] hover:bg-[#051a47]">
                <ArrowLeft className="mr-2" size={16} />
                Back to Team
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        {/* Header section with basic info */}
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
        
        {/* Core expertise section */}
        {member.expertise && (
          <div className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-[#0A2463] mb-8 pb-4 border-b">Core Expertise</h2>
                <div className="space-y-10">
                  {member.expertise.map((item, index) => (
                    <Card key={index} className="border-t-4 border-t-[#3E92CC]">
                      <CardHeader>
                        <CardTitle className="text-xl text-[#0A2463]">{index + 1}. {item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">{item.description}</p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {item.points.map((point, pointIndex) => (
                            <li key={pointIndex}>{point}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Key projects section */}
        {member.achievements && (
          <div className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-[#0A2463] mb-8 pb-4 border-b">Key Projects & Achievements</h2>
                <div className="space-y-6">
                  {member.achievements.map((project, index) => (
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
        )}
      </main>
      <Footer />
    </div>
  );
};

export default TeamMemberDetail;
