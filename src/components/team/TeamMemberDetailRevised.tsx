
import React from "react";
import { TeamMember } from "./TeamMemberTypes";
import { Button } from "@/components/ui/button";
import { Target, BarChart, Globe, Brain, Rocket, ArrowLeft, MapPin, Mail, Phone, Award, GraduationCap, Certificate } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import TechnicalProficienciesSection from "./TechnicalProficienciesSection";
import { Badge } from "@/components/ui/badge";

interface TeamMemberDetailRevisedProps {
  member: TeamMember;
}

const TeamMemberDetailRevised: React.FC<TeamMemberDetailRevisedProps> = ({ member }) => {
  const getIconForTitle = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("product") || lowerTitle.includes("leadership")) return <Target className="text-white" size={24} />;
    if (lowerTitle.includes("data") || lowerTitle.includes("optimization")) return <BarChart className="text-white" size={24} />;
    if (lowerTitle.includes("digital") || lowerTitle.includes("transformation")) return <Rocket className="text-white" size={24} />;
    if (lowerTitle.includes("strategic") || lowerTitle.includes("analysis")) return <Brain className="text-white" size={24} />;
    return <Globe className="text-white" size={24} />;
  };

  // If the member is Ebenezer, we'll show his technical proficiencies
  const isEbenezer = member.name.includes("Ebenezer");
  const isAmanuel = member.name.includes("Amanuel");
  
  // Tech skills for Ebenezer
  const techSkills = {
    advanced: ["Salesforce", "SAP Analytics", "Python/SQL"],
    expert: ["Power BI", "Google Analytics", "UX Design"],
    certified: ["Product Management (Product School)", "Cloud Computing (IBM)"]
  };

  return (
    <div className="bg-white">
      {/* Back button */}
      <div className="container mx-auto px-4 pt-24 pb-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-[#0A2463] hover:text-[#3E92CC] transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
            <div className="mb-8 md:mb-0 md:mr-8">
              {/* Placeholder for professional headshot */}
              <div className="w-48 h-48 rounded-full bg-gray-300 border-4 border-white shadow-lg mb-6 mx-auto md:mx-0">
                {/* Avatar would go here */}
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-2xl">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-[#0A2463] mb-2">{member.name}</h1>
              <h2 className="text-xl md:text-2xl text-[#3E92CC] mb-3">{member.title}</h2>
              <p className="text-lg text-gray-700 italic mb-6">
                {member.tagline || "Transforming brands through data-driven marketing strategies"}
              </p>

              {/* Contact Information - Show for Amanuel */}
              {isAmanuel && member.contact && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
                  {member.contact.location && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={16} className="text-[#3E92CC]" />
                      <span>{member.contact.location}</span>
                    </div>
                  )}
                  {member.contact.email && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail size={16} className="text-[#3E92CC]" />
                      <a href={`mailto:${member.contact.email}`} className="hover:text-[#3E92CC]">{member.contact.email}</a>
                    </div>
                  )}
                  {member.contact.phone && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone size={16} className="text-[#3E92CC]" />
                      <a href={`tel:${member.contact.phone}`} className="hover:text-[#3E92CC]">{member.contact.phone}</a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0A2463] mb-8 pb-2 border-b">About</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-gray-700">
                <p className="text-lg">
                  {member.about}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {isEbenezer ? (
                  <>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="bg-[#3E92CC] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Target className="text-white" size={24} />
                      </div>
                      <h3 className="font-medium">Product Leadership</h3>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="bg-[#3E92CC] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <BarChart className="text-white" size={24} />
                      </div>
                      <h3 className="font-medium">Data Analysis</h3>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="bg-[#3E92CC] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Rocket className="text-white" size={24} />
                      </div>
                      <h3 className="font-medium">Digital Transformation</h3>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="bg-[#3E92CC] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Brain className="text-white" size={24} />
                      </div>
                      <h3 className="font-medium">Strategic Thinking</h3>
                    </div>
                  </>
                ) : isAmanuel && member.keyStrengths ? (
                  <div className="col-span-2 flex flex-wrap gap-2">
                    {member.keyStrengths.map((strength, index) => (
                      <Badge key={index} className="bg-[#3E92CC] hover:bg-[#0A2463] text-white py-1.5 px-3 text-sm">
                        {strength}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  // Original icons for Sosena and others
                  <>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="bg-[#3E92CC] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Rocket className="text-white" size={24} />
                      </div>
                      <h3 className="font-medium">Strategy</h3>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="bg-[#3E92CC] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <BarChart className="text-white" size={24} />
                      </div>
                      <h3 className="font-medium">Analytics</h3>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="bg-[#3E92CC] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Globe className="text-white" size={24} />
                      </div>
                      <h3 className="font-medium">Global Marketing</h3>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="bg-[#3E92CC] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Target className="text-white" size={24} />
                      </div>
                      <h3 className="font-medium">Brand Design</h3>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section - Only for Amanuel */}
      {isAmanuel && (member.education || member.certifications) && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-[#0A2463] mb-8 pb-2 border-b">Education & Certifications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {member.education && (
                  <div>
                    <div className="flex items-center mb-4">
                      <GraduationCap size={24} className="text-[#3E92CC] mr-3" />
                      <h3 className="text-xl font-semibold text-[#0A2463]">Education</h3>
                    </div>
                    <ul className="space-y-3">
                      {member.education.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#3E92CC] mt-2 mr-2"></span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {member.certifications && (
                  <div>
                    <div className="flex items-center mb-4">
                      <Certificate size={24} className="text-[#3E92CC] mr-3" />
                      <h3 className="text-xl font-semibold text-[#0A2463]">Certifications</h3>
                    </div>
                    <ul className="space-y-3">
                      {member.certifications.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#3E92CC] mt-2 mr-2"></span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Core Expertise Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0A2463] mb-8 pb-2 border-b">Core Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Display expertise cards based on member data if available */}
              {member.expertise && member.expertise.map((item, index) => (
                <Card key={index} className="border-t-4 border-t-[#3E92CC] hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                      {getIconForTitle(item.title)}
                      <CardTitle className="text-lg text-[#0A2463] ml-2">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {item.points.slice(0, 3).map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
              
              {/* Fallback if no expertise data */}
              {(!member.expertise || member.expertise.length === 0) && (
                <div className="col-span-4 text-center py-8">
                  <p className="text-gray-500">Expertise details coming soon.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Proficiencies Section (only for Ebenezer) */}
      {isEbenezer && <TechnicalProficienciesSection skills={techSkills} />}

      {/* Key Achievements Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0A2463] mb-8 pb-2 border-b">Key Achievements</h2>
            
            {member.achievements && member.achievements.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {member.achievements.map((achievement, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index + 1}`} 
                    className="border border-gray-200 rounded-lg mb-4"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                      <div className="flex flex-col sm:flex-row sm:items-center text-left w-full">
                        <span className="font-semibold text-[#0A2463]">{achievement.title}</span>
                        {achievement.points[0] && (
                          <span className="ml-0 sm:ml-4 text-[#3E92CC] text-sm">{achievement.points[0]}</span>
                        )}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {achievement.points.slice(1).map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">Achievement details coming soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Philosophy & Approach Section */}
      <section className="py-12 bg-gray-50 bg-opacity-80">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0A2463] mb-8 pb-2 border-b">Philosophy & Approach</h2>
            
            <div className={`bg-gradient-to-r ${isEbenezer ? 'from-gray-900 to-gray-700 text-white' : 'from-gray-100 to-white text-gray-700'} p-8 rounded-lg shadow-sm border border-gray-200`}>
              <p className="text-xl text-center italic">
                {member.philosophy || "Marketing without measurable impact is just creativity. I bridge the gap between art and commerce to drive real business results."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="bg-[#0A2463] hover:bg-[#051a47] transition-colors w-full sm:w-auto"
              size="lg"
              onClick={() => window.location.href = "/#contact"}
            >
              {isEbenezer ? "Discuss Innovation Projects" : isAmanuel ? "Discuss Behavioral Marketing" : "Discuss Your Project"}
            </Button>
            
            <Button 
              variant="outline" 
              className="border-[#0A2463] text-[#0A2463] hover:bg-[#0A2463] hover:text-white w-full sm:w-auto"
              size="lg"
              onClick={() => window.location.href = "/#portfolio"}
            >
              {isEbenezer ? "View Tech Portfolio" : isAmanuel ? "View Case Studies" : "View Case Studies"}
            </Button>
            
            <Button 
              variant="ghost" 
              className="text-[#0A2463] hover:bg-gray-100 w-full sm:w-auto"
              size="lg"
              asChild
            >
              <Link to="/">Back to Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamMemberDetailRevised;
