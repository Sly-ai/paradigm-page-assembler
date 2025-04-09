
import React from "react";
import { TeamMember } from "./TeamMemberTypes";
import { Button } from "@/components/ui/button";
import { Rocket, Palette, Globe, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

interface TeamMemberDetailRevisedProps {
  member: TeamMember;
}

const TeamMemberDetailRevised: React.FC<TeamMemberDetailRevisedProps> = ({ member }) => {
  return (
    <div className="bg-white">
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
                "Transforming brands through data-driven marketing strategies"
              </p>
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
                  I am a results-driven marketing strategist specializing in brand launches, business transformations, and market expansion across diverse sectors including Telecom, FMCG, and Real Estate. My data-driven approach combines innovative marketing techniques with actionable business insights to deliver measurable growth, enhanced customer engagement, and sustainable market success.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
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
                    <Palette className="text-white" size={24} />
                  </div>
                  <h3 className="font-medium">Brand Design</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0A2463] mb-8 pb-2 border-b">Core Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <Card className="border-t-4 border-t-[#3E92CC] hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center mb-2">
                    <Rocket className="mr-2 text-[#3E92CC]" size={24} />
                    <CardTitle className="text-lg text-[#0A2463]">Market Entry Strategies</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Go-to-market strategy development</li>
                    <li>Competitive market analysis</li>
                    <li>Multi-channel launch campaigns</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="border-t-4 border-t-[#3E92CC] hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center mb-2">
                    <Palette className="mr-2 text-[#3E92CC]" size={24} />
                    <CardTitle className="text-lg text-[#0A2463]">Brand Transformation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Brand repositioning</li>
                    <li>Rebranding communications</li>
                    <li>Customer re-engagement</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="border-t-4 border-t-[#3E92CC] hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center mb-2">
                    <Globe className="mr-2 text-[#3E92CC]" size={24} />
                    <CardTitle className="text-lg text-[#0A2463]">Market Expansion</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>New market identification</li>
                    <li>Localized strategy development</li>
                    <li>Partnership building</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Card 4 */}
              <Card className="border-t-4 border-t-[#3E92CC] hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center mb-2">
                    <BarChart className="mr-2 text-[#3E92CC]" size={24} />
                    <CardTitle className="text-lg text-[#0A2463]">Digital Optimization</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Performance marketing</li>
                    <li>Conversion optimization</li>
                    <li>Data-driven analytics</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0A2463] mb-8 pb-2 border-b">Key Achievements</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg mb-4">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex flex-col sm:flex-row sm:items-center text-left w-full">
                    <span className="font-semibold text-[#0A2463]">Telecom Super App Launch</span>
                    <span className="ml-0 sm:ml-4 text-[#3E92CC] text-sm">50% download increase in 3 months</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700">Full GTM strategy development, including market research, user acquisition strategies, and integrated marketing campaigns.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg mb-4">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex flex-col sm:flex-row sm:items-center text-left w-full">
                    <span className="font-semibold text-[#0A2463]">FMCG Market Penetration</span>
                    <span className="ml-0 sm:ml-4 text-[#3E92CC] text-sm">80% retail coverage achieved</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700">Award-winning awareness campaign with strategic partnerships with local distributors and retailers.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex flex-col sm:flex-row sm:items-center text-left w-full">
                    <span className="font-semibold text-[#0A2463]">Premium Juice Brand</span>
                    <span className="ml-0 sm:ml-4 text-[#3E92CC] text-sm">60% brand awareness</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700">35% sales exceeded projections in the first quarter with strategic social media launch campaign and targeted advertising strategy.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Philosophy & Approach Section */}
      <section className="py-12 bg-gray-50 bg-opacity-80">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0A2463] mb-8 pb-2 border-b">Philosophy & Approach</h2>
            
            <div className="bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-sm border border-gray-200">
              <p className="text-xl text-center italic text-gray-700">
                "Marketing without measurable impact is just creativity. I bridge the gap between art and commerce to drive real business results."
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
              onClick={() => window.location.href = "#contact"}
            >
              Discuss Your Project
            </Button>
            
            <Button 
              variant="outline" 
              className="border-[#0A2463] text-[#0A2463] hover:bg-[#0A2463] hover:text-white w-full sm:w-auto"
              size="lg"
              onClick={() => window.location.href = "#portfolio"}
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamMemberDetailRevised;
