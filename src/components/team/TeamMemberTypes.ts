
export interface ExpertiseItem {
  title: string;
  description: string;
  points: string[];
}

export interface AchievementItem {
  title: string;
  points: string[];
}

export interface ContactInfo {
  location?: string;
  email?: string;
  phone?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  title: string;
  about: string;
  tagline?: string;
  expertise?: ExpertiseItem[];
  achievements?: AchievementItem[];
  philosophy?: string;
  imageSrc?: string;
  contact?: ContactInfo;
  education?: string[];
  certifications?: string[];
  keyStrengths?: string[];
}
