
import React from "react";
import ServiceCard from "./ServiceCard";
import { Briefcase, BarChart, LineChart } from "lucide-react";

const Services = () => {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A2463] mb-4">
          Our Services
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We offer a comprehensive suite of services designed to help your business grow through 
          science-backed strategies and execution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Business Development Services */}
          <ServiceCard 
            title="Business Development" 
            icon={<Briefcase className="w-6 h-6" />}
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">Investment Advisory</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Market entry strategy for foreign investors</li>
                  <li>Legal and regulatory compliance</li>
                  <li>Due diligence on investment opportunities</li>
                  <li>Facilitation of joint ventures and partnerships</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Trade Facilitation</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Market intelligence and sector analysis</li>
                  <li>Export and import advisory services</li>
                  <li>Business matchmaking and networking</li>
                  <li>Policy advocacy and government relations</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Legal and Regulatory Consulting</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Corporate structuring and licensing</li>
                  <li>Contract drafting and negotiation</li>
                  <li>Policy analysis and impact assessment</li>
                  <li>Risk assessment and dispute resolution</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Policy & Government Relations</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Advocacy for trade-friendly policies</li>
                  <li>Stakeholder engagement strategies</li>
                  <li>Compliance advisory on regulations</li>
                  <li>Public affairs strategy development</li>
                </ul>
              </div>
            </div>
          </ServiceCard>

          {/* Marketing Services */}
          <ServiceCard 
            title="Marketing & Branding" 
            icon={<BarChart className="w-6 h-6" />}
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">Market Entry & Business Launch</h4>
                <p className="text-gray-700">
                  We help companies successfully enter new markets through comprehensive research, 
                  strategy development, branding, and marketing execution tailored to your specific goals.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Rebranding & Brand Transformation</h4>
                <p className="text-gray-700">
                  Refresh your brand identity and market position through strategic repositioning, 
                  communication planning, internal alignment, and customer re-engagement strategies.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Industry Penetration & Market Expansion</h4>
                <p className="text-gray-700">
                  Expand your market reach through opportunity assessment, localized marketing campaigns, 
                  strategic partnerships, and optimized sales strategies.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Digital Marketing & Optimization</h4>
                <p className="text-gray-700">
                  Enhance your online presence and marketing ROI through social media strategy, SEO, 
                  paid advertising, data analytics, and audience engagement strategies.
                </p>
              </div>
            </div>
          </ServiceCard>

          {/* Product Services */}
          <ServiceCard 
            title="Product & Digital Growth" 
            icon={<LineChart className="w-6 h-6" />}
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">Product Management</h4>
                <p className="text-gray-700">
                  Comprehensive product strategy, development, optimization, and specialized B2B and 
                  Fintech product management services to drive innovation and growth.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Project Management</h4>
                <p className="text-gray-700">
                  Expert planning, execution, monitoring, and stakeholder management to ensure your 
                  projects are delivered on time and within budget.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Digital Solutions Development</h4>
                <p className="text-gray-700">
                  Development and implementation of digital platforms and solutions to digitize value chains 
                  and optimize business processes for maximum efficiency.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Strategic Partnerships & Development</h4>
                <p className="text-gray-700">
                  Cultivate strategic partnerships to drive growth and implement strategies to increase 
                  referrals and revenue through collaboration and networking.
                </p>
              </div>
            </div>
          </ServiceCard>
        </div>
      </div>
    </section>
  );
};

export default Services;
