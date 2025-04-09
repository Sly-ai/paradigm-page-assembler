
import { TeamMember } from "./TeamMemberTypes";

// Type-safe team member data
export const teamMembersData: Record<string, TeamMember> = {
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
