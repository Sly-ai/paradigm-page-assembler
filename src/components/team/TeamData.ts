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
  // Complete profile for Ebenezer
  "ebenezer-tesfaye": {
    name: "Ebenezer Tesfaye Beyene",
    role: "Director of Digital Innovation and Technology",
    title: "Certified Product & Project Manager",
    tagline: "Driving growth through user-centric digital solutions",
    about: "Certified Product Leader with 10+ years' experience in FMCG and digital transformation. Spearheaded award-winning platforms at HEINEKEN Ethiopia and Kifiya Financial Technologies, delivering measurable impact through AI-driven solutions and process innovation. Combines technical expertise in Salesforce, SAP, and data analytics with strategic business acumen.",
    expertise: [
      {
        title: "Product Leadership",
        description: "Developing and managing digital products from conception to market success.",
        points: [
          "B2B/B2C platform development",
          "Cross-functional team leadership",
          "Agile product roadmapping"
        ]
      },
      {
        title: "Data-Driven Optimization",
        description: "Leveraging data to optimize product performance and business outcomes.",
        points: [
          "AI/ML implementation (Sales Cloud Einstein)",
          "Predictive analytics (Pendo, Power BI)",
          "Process efficiency gains"
        ]
      },
      {
        title: "Digital Transformation",
        description: "Guiding organizations through technological evolution and systems integration.",
        points: [
          "Salesforce Commerce Cloud",
          "SAP S/4HANA integration",
          "Payment system innovation"
        ]
      },
      {
        title: "Strategic Analysis",
        description: "Applying analytical frameworks to drive business strategy and growth.",
        points: [
          "SWOT/PESTEL frameworks",
          "System thinking methodologies",
          "Market penetration strategies"
        ]
      }
    ],
    achievements: [
      {
        title: "HEINEKEN Ethiopia Digital Transformation",
        points: [
          "30% sales revenue increase via Distributor Management System",
          "11% pandemic revenue recovery through B2B platform launch",
          "Successfully integrated SAP with Salesforce for streamlined operations"
        ]
      },
      {
        title: "Kifiya Financial Technologies Innovation",
        points: [
          "30% SME liquidity boost via invoice discounting platform",
          "20% collection efficiency gain with AI-driven reminders",
          "Launched mobile payment platform with 98% uptime performance"
        ]
      },
      {
        title: "Ablaze Labs Market Entry",
        points: [
          "15% Q1 market penetration for gaming platform",
          "Developed user acquisition strategy resulting in 22% month-over-month growth",
          "Implemented analytics framework driving 18% conversion optimization"
        ]
      },
      {
        title: "Superpower Revenue Growth",
        points: [
          "40% revenue growth through strategic partnerships",
          "Established B2B partnership program with 15 enterprise clients",
          "Optimized product roadmap based on real-time user feedback"
        ]
      }
    ],
    philosophy: "Technology should solve real problems – my approach blends data rigor with human-centered design to create solutions that scale."
  },
  "natnael-melaku": {
    name: "Natnael Melaku Kokeb",
    role: "Director of Business Development and Partnership",
    title: "Business & Legal Strategist",
    tagline: "Driving Impact at the Crossroads of Business, Policy, and Innovation",
    about: "Natnael Melaku Kokeb is a forward-thinking legal and business strategist with a proven track record of delivering results in high-stakes environments. With over a decade of experience spanning law, fintech, international development, and trade diplomacy, experienced in leading organizations to foster investment, strengthen bilateral trade relations, and deliver member value.",
    expertise: [
      {
        title: "Leadership & Governance",
        description: "Overseeing operations, financial management, and stakeholder engagement while shaping strategic agendas.",
        points: [
          "Strategic organizational leadership",
          "Government and private sector liaison",
          "Financial management and oversight",
          "Stakeholder relationship management",
          "National and international representation"
        ]
      },
      {
        title: "Innovation & Entrepreneurship",
        description: "Bringing innovative solutions to underserved markets and scaling venture impact.",
        points: [
          "Fintech solution development",
          "Grant acquisition and management",
          "Investor relationship cultivation",
          "Market entry strategy",
          "Scaling business operations"
        ]
      },
      {
        title: "Policy & Legal Advisory",
        description: "Providing expert guidance on regulatory frameworks, governance, and institutional reforms.",
        points: [
          "Election law and political governance",
          "Regulatory due diligence",
          "Investment advisory services",
          "Public-private legal frameworks",
          "Institutional reform implementation"
        ]
      },
      {
        title: "Global Networks & Influence",
        description: "Leveraging international connections to promote cross-border collaboration and market entry.",
        points: [
          "Cross-border business facilitation",
          "International market entry support",
          "Global advisory leadership",
          "Trade diplomacy and negotiation",
          "Network development and management"
        ]
      }
    ],
    achievements: [
      {
        title: "AmCham Ethiopia Leadership",
        points: [
          "Successfully leading daily operations and financial management",
          "Established key relationships with government bodies and foreign missions",
          "Effectively represented member interests at national and international levels",
          "Shaped the Chamber's strategic agenda for maximum impact"
        ]
      },
      {
        title: "Fintech Innovation",
        points: [
          "Co-founded Axiom Financial Technologies S.C. for underserved markets",
          "Secured competitive UNDP COVID-19 response grant",
          "Cultivated investor relationships to scale venture impact",
          "Developed innovative financial solutions for underbanked populations"
        ]
      },
      {
        title: "Legal & Policy Impact",
        points: [
          "Advised National Election Board of Ethiopia on critical reforms",
          "Contributed to regulatory frameworks with Mesfin Tafesse & Associates",
          "Collaborated with the Clinton Foundation on impactful initiatives",
          "Supported the World Bank's Scaling Solar Program implementation"
        ]
      },
      {
        title: "Global Recognition & Leadership",
        points: [
          "Selected as a prestigious Chevening Scholar",
          "Appointed as Mandela Washington Fellow",
          "Serving as Global Advisor to the Global Chamber",
          "Active member of the Chartered Management Institute (CMI)"
        ]
      }
    ],
    philosophy: "Success in today's interconnected world requires not just legal or business expertise in isolation, but the ability to navigate their intersection with diplomacy, cultural intelligence, and strategic foresight."
  },
  "amanuel-melaku": {
    name: "Amanuel Melaku",
    role: "Co-founder & Lead – Behavioural Marketing and Customer Insights",
    title: "Behavioral Marketing & Consumer Psychology Specialist",
    tagline: "Transforming consumer insights into strategic business advantage",
    about: "Amanuel Melaku is a seasoned business development and marketing strategist with deep expertise in behavioral marketing and consumer psychology. He holds a Bachelor's degree in Marketing Management and a Master's degree in Social Psychology from Addis Ababa University. With a rich background spanning fintech, tech startups, and consulting, Amanuel has a proven track record of driving customer engagement, sales growth, and brand visibility. His strategic approach blends marketing with insights from social psychology, allowing him to craft compelling, value-driven customer experiences.",
    expertise: [
      {
        title: "Behavioral Marketing Strategy",
        description: "Designing marketing strategies rooted in behavioral science principles.",
        points: [
          "Behavioral economics application in marketing",
          "Psychological triggers and persuasion techniques",
          "Decision-making pattern analysis",
          "Value proposition alignment with psychological needs",
          "Cognitive bias identification and leveraging"
        ]
      },
      {
        title: "Qualitative Consumer Research",
        description: "Conducting qualitative research to uncover consumer motivations and behaviors.",
        points: [
          "In-depth customer interviews and focus groups",
          "Ethnographic research methods",
          "Journey mapping and experience analysis",
          "Motivation and pain point identification",
          "Cultural and contextual influence assessment"
        ]
      },
      {
        title: "Communication Optimization",
        description: "Enhancing communication strategies through evidence-based psychological insights.",
        points: [
          "Messaging framework development",
          "Storytelling and narrative construction",
          "Visual and verbal cue optimization",
          "Emotional resonance mapping",
          "Cross-cultural communication adaptation"
        ]
      },
      {
        title: "Customer Experience Design",
        description: "Creating memorable customer experiences based on psychological principles.",
        points: [
          "Behavioral touchpoint optimization",
          "Service delivery enhancement",
          "Loyalty program psychological design",
          "Customer feedback integration systems",
          "Behavioral change implementation"
        ]
      }
    ],
    achievements: [
      {
        title: "Fintech Customer Acquisition Strategy",
        points: [
          "Developed behavioral marketing strategy increasing customer acquisition by 45%",
          "Redesigned onboarding experience reducing abandonment rate by 30%",
          "Implemented psychological triggers increasing customer referrals by 60%",
          "Created behavioral segmentation model improving campaign targeting efficiency"
        ]
      },
      {
        title: "E-commerce Conversion Optimization",
        points: [
          "Applied behavioral economics principles to increase checkout completion by 35%",
          "Redesigned product descriptions based on psychological triggers, boosting sales by 28%",
          "Implemented social proof mechanisms increasing new customer conversion by 40%",
          "Created urgency-based marketing campaigns that improved seasonal sales by 53%"
        ]
      },
      {
        title: "Telecommunications Customer Retention",
        points: [
          "Designed loyalty program based on behavioral psychology principles, reducing churn by 25%",
          "Developed communication strategy that increased customer satisfaction scores by 38%",
          "Created customer feedback loops that improved service delivery and reduced complaints",
          "Implemented behavioral incentives that increased premium service adoption by 42%"
        ]
      },
      {
        title: "Financial Services Customer Research",
        points: [
          "Led qualitative research uncovering key emotional drivers in financial decision-making",
          "Developed customer segmentation model based on psychological profiles and behaviors",
          "Created financial education program aligned with behavioral change principles",
          "Advised on service design improvements based on customer psychology insights"
        ]
      }
    ],
    philosophy: "Understanding the 'why' behind customer behaviors is the key to creating meaningful connections and sustainable growth. True marketing success comes from aligning business objectives with genuine human needs and motivations."
  }
};
