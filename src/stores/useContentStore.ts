
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Mission Content Type
interface MissionContent {
  title: string;
  paragraphs: string[];
}

// Service Item Type
export interface ServiceItem {
  id: string; 
  title: string;
  icon: string;
  sections: {
    title: string;
    content: string;
    type: "text" | "list";
    listItems?: string[];
  }[];
}

// Footer Content Type
export interface FooterContent {
  companyName: string;
  tagline: string;
  description: string;
  quickLinks: { label: string; href: string }[];
  contactInfo: {
    email: string;
    phone: string;
  };
  copyright: string;
}

// Team Member Type (simplified from TeamMemberTypes.ts)
export interface CMSTeamMember {
  id: string;
  name: string;
  role: string;
  imageSrc?: string;
}

// Content Store Interface
interface ContentStore {
  // Mission Section
  mission: MissionContent;
  updateMission: (mission: MissionContent) => void;
  
  // Services Section
  services: ServiceItem[];
  updateService: (id: string, service: Partial<ServiceItem>) => void;
  addService: (service: ServiceItem) => void;
  removeService: (id: string) => void;
  
  // Team Section
  teamMembers: CMSTeamMember[];
  updateTeamMember: (id: string, member: Partial<CMSTeamMember>) => void;
  addTeamMember: (member: CMSTeamMember) => void;
  removeTeamMember: (id: string) => void;
  
  // Footer Section
  footer: FooterContent;
  updateFooter: (footer: Partial<FooterContent>) => void;
}

// Default content
const defaultMission: MissionContent = {
  title: "Our Mission",
  paragraphs: [
    "At Paradigm Advisory, we believe businesses thrive when decisions are informed by a deep understanding of human behavior. Our mission is to bridge the gap between scientific insights and strategic business practices.",
    "We help organizations grow by applying principles from social psychology and behavioral economics to develop more effective marketing strategies, optimize decision-making processes, and create better customer experiences. Our science-based approach delivers measurable results that drive sustainable business growth."
  ]
};

const defaultServices: ServiceItem[] = [
  {
    id: "business",
    title: "Business Development",
    icon: "Briefcase",
    sections: [
      {
        title: "Investment Advisory",
        content: "",
        type: "list",
        listItems: [
          "Market entry strategy for foreign investors",
          "Legal and regulatory compliance",
          "Due diligence on investment opportunities",
          "Facilitation of joint ventures and partnerships"
        ]
      },
      {
        title: "Trade Facilitation",
        content: "",
        type: "list",
        listItems: [
          "Market intelligence and sector analysis",
          "Export and import advisory services",
          "Business matchmaking and networking",
          "Policy advocacy and government relations"
        ]
      }
    ]
  },
  {
    id: "marketing",
    title: "Marketing & Branding",
    icon: "BarChart",
    sections: [
      {
        title: "Market Entry & Business Launch",
        content: "We help companies successfully enter new markets through comprehensive research, strategy development, branding, and marketing execution tailored to your specific goals.",
        type: "text"
      },
      {
        title: "Rebranding & Brand Transformation",
        content: "Refresh your brand identity and market position through strategic repositioning, communication planning, internal alignment, and customer re-engagement strategies.",
        type: "text"
      }
    ]
  }
];

const defaultTeamMembers: CMSTeamMember[] = [
  {
    id: "ebenezer-tesfaye",
    name: "Ebenezer Tesfaye",
    role: "Director of Digital Innovation and Technology"
  },
  {
    id: "natnael-melaku",
    name: "Natnael Melaku",
    role: "Director of Business Development and Partnership"
  },
  {
    id: "sosena-samson",
    name: "Sosena Samson",
    role: "Director of Marketing & Branding"
  },
  {
    id: "amanuel-melaku",
    name: "Amanuel Melaku",
    role: "Co-founder & Lead – Behavioural Marketing and Customer Insights"
  }
];

const defaultFooter: FooterContent = {
  companyName: "Paradigm Advisory",
  tagline: "Where Science Meets Strategy",
  description: "Integrating social psychology and behavioral economics into strategic business decision-making.",
  quickLinks: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ],
  contactInfo: {
    email: "info@paradigmadvisory.com",
    phone: "+1 (555) 123-4567"
  },
  copyright: `© ${new Date().getFullYear()} Paradigm Advisory. All rights reserved.`
};

// Create store with persistence
export const useContentStore = create<ContentStore>()(
  persist(
    (set) => ({
      mission: defaultMission,
      updateMission: (mission) => set({ mission }),
      
      services: defaultServices,
      updateService: (id, updatedService) => 
        set((state) => ({
          services: state.services.map(service => 
            service.id === id ? { ...service, ...updatedService } : service
          )
        })),
      addService: (service) => 
        set((state) => ({
          services: [...state.services, service]
        })),
      removeService: (id) => 
        set((state) => ({
          services: state.services.filter(service => service.id !== id)
        })),

      teamMembers: defaultTeamMembers,
      updateTeamMember: (id, updatedMember) => 
        set((state) => ({
          teamMembers: state.teamMembers.map(member => 
            member.id === id ? { ...member, ...updatedMember } : member
          )
        })),
      addTeamMember: (member) => 
        set((state) => ({
          teamMembers: [...state.teamMembers, member]
        })),
      removeTeamMember: (id) => 
        set((state) => ({
          teamMembers: state.teamMembers.filter(member => member.id !== id)
        })),

      footer: defaultFooter,
      updateFooter: (updatedFooter) => 
        set((state) => ({
          footer: { ...state.footer, ...updatedFooter }
        })),
    }),
    {
      name: "paradigm-cms-storage"
    }
  )
);
