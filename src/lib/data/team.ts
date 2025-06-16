
import type { LucideIcon } from 'lucide-react'; // Keep if icons are used in interfaces, else remove

export interface TeamMemberDetailed {
  id: string;
  name: string;
  title: string;
  image: string;
  dataAiHint: string;
  bio: string; // Full bio for modal
  shortBio: string; // Shorter bio for card display
  location: string; // e.g., "Sydney & NSW"
  credentials: string[]; // Array of strings for credentials
  specialties?: string[];
  yearsOfExperience: string; // e.g., "15+ Years"
  socialLinks?: {
    linkedin?: string;
    email?: string;
    twitter?: string;
    instagram?: string;
  };
}

export const teamMembersDetailedData: TeamMemberDetailed[] = [
  {
    id: 'tm1',
    name: 'Jacqueline Dwyer',
    title: 'CEO & Founder, Lead Buyers Advocate',
    image: 'https://placehold.co/300x300.png',
    dataAiHint: 'woman professional portrait',
    bio: "Jacqueline, the esteemed CEO and Founder of MaxWealth PS, is more than a licensed financial advisor; she's a seasoned property investor and professional economist with over two decades of experience in the property industry. Her expertise extends to prestige real estate & luxury property in key metropolitan areas. Jacqueline has a keen focus on development sites, commercial properties, and investment markets nationwide.",
    shortBio: "Jacqueline leads our operations with over 20 years in premium property markets. She's secured over $100M in properties for clients.",
    location: "Sydney & NSW",
    credentials: ["Licensed Real Estate Agent", "Certified Property Investment Adviser", "Member - REBAA", "Professional Economist"],
    specialties: ['Prestige Real Estate', 'Investment Strategy', 'Negotiation', 'Market Analysis', 'Development Sites'],
    yearsOfExperience: "20+ Years",
    socialLinks: {
      linkedin: '#',
      email: 'mailto:jacqueline.dwyer@example.com',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 'tm2',
    name: 'Alice Johnson',
    title: 'Senior Financial Advisor',
    image: 'https://placehold.co/300x300.png',
    dataAiHint: 'woman portrait smiling',
    bio: 'Alice has over 10 years of experience in financial planning, specializing in mortgage structuring and first-time home buyer programs. She is passionate about empowering clients to make sound financial decisions for their future and navigating the complexities of property investment with ease and confidence.',
    shortBio: 'Alice specializes in Melbourne\'s dynamic market, helping first-time buyers and investors navigate complex property decisions.',
    location: "Melbourne & VIC",
    credentials: ["Licensed Buyers Advocate", "Registered Valuer", "REIV Member"],
    specialties: ['Mortgage Planning', 'First-Time Home Buyers', 'Debt Management', 'Investment Properties'],
    yearsOfExperience: "10+ Years",
    socialLinks: {
      linkedin: '#',
      email: 'mailto:alice.johnson@example.com',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 'tm3',
    name: 'Bob Williams',
    title: 'Investment Portfolio Manager',
    image: 'https://placehold.co/300x300.png',
    dataAiHint: 'man portrait professional',
    bio: 'Bob is an expert in real estate investment analysis and portfolio growth. He helps clients identify high-potential properties and develop long-term investment strategies to maximize returns and build substantial wealth through property.',
    shortBio: 'Bob focuses on Queensland\'s growth markets, with expertise in emerging suburbs and new development opportunities for savvy investors.',
    location: "Brisbane & QLD",
    credentials: ["Licensed Property Professional", "Qualified Property Valuer", "REIQ Member"],
    specialties: ['Property Investment', 'Portfolio Management', 'Risk Assessment', 'New Developments', 'Growth Areas'],
    yearsOfExperience: "12+ Years",
    socialLinks: {
      linkedin: '#',
      email: 'mailto:bob.williams@example.com',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 'tm4',
    name: 'Carol Davis',
    title: 'Client Relations & Operations Lead',
    image: 'https://placehold.co/300x300.png',
    dataAiHint: 'person friendly portrait',
    bio: 'Carol ensures a smooth and positive experience for all MaxWealth PS clients. She manages client communications and oversees operational efficiency to deliver top-tier service. Her attention to detail and dedication are key to our client success.',
    shortBio: "Carol ensures seamless client experiences, managing communications and operations with a focus on efficiency and satisfaction.",
    location: "National Operations",
    credentials: ["Client Service Excellence Cert.", "Operations Management Diploma"],
    specialties: ['Client Servicing', 'Process Optimization', 'Team Coordination', 'Dispute Resolution'],
    yearsOfExperience: "8+ Years",
    socialLinks: {
      linkedin: '#',
      email: 'mailto:carol.davis@example.com',
      twitter: '#',
      instagram: '#'
    }
  }
];


export interface ServicePageAdvocate {
  id: string;
  name: string;
  title: string;
  image: string;
  dataAiHint: string;
}

export const servicePageAdvocates: ServicePageAdvocate[] = [
  { id: 'spa1', name: 'Rich Harvey', title: 'CEO & Founder', image: 'https://placehold.co/200x250.png', dataAiHint: 'man portrait ceo' },
  { id: 'spa2', name: 'Matt Corbett', title: 'PRINCIPAL - BUYERS\\\' ADVOCATE', image: 'https://placehold.co/200x250.png', dataAiHint: 'man portrait professional' },
  { id: 'spa3', name: 'Nick Taylor-Fick', title: 'PRINCIPAL - BUYERS\\\' ADVOCATE', image: 'https://placehold.co/200x250.png', dataAiHint: 'man portrait smiling' },
  { id: 'spa4', name: 'Munro Donen', title: 'DIRECTOR & PRINCIPAL, PROPERTYBUYER EAST', image: 'https://placehold.co/200x250.png', dataAiHint: 'person portrait director' },
  { id: 'spa5', name: 'Niki McComb', title: 'SENIOR BUYERS\\\' ADVOCATE', image: 'https://placehold.co/200x250.png', dataAiHint: 'woman portrait senior' },
  { id: 'spa6', name: 'Kevin Mason', title: 'SENIOR BUYERS\\\' ADVOCATE', image: 'https://placehold.co/200x250.png', dataAiHint: 'man portrait advocate' },
  { id: 'spa7', name: 'Anthony Knight', title: 'SENIOR BUYERS\\\' ADVOCATE', image: 'https://placehold.co/200x250.png', dataAiHint: 'man portrait formal' },
  { id: 'spa8', name: 'Glen Sainsbury', title: 'PRINCIPAL - BUYERS\\\' ADVOCATE', image: 'https://placehold.co/200x250.png', dataAiHint: 'person portrait principal' },
  { id: 'spa9', name: 'Robyn Toohey', title: 'SENIOR BUYERS\\\' ADVOCATE', image: 'https://placehold.co/200x250.png', dataAiHint: 'woman portrait experienced' },
  { id: 'spa10', name: 'Angela Murray', title: 'SENIOR BUYERS\\\' ADVOCATE', image: 'https://placehold.co/200x250.png', dataAiHint: 'woman portrait friendly' },
  { id: 'spa11', name: 'Amanda Jones', title: 'PRINCIPAL - BUYERS\\\' ADVOCATE', image: 'https://placehold.co/200x250.png', dataAiHint: 'woman portrait leader' },
  { id: 'spa12', name: 'Tass Pattas', title: 'SENIOR BUYERS ADVOCATE', image: 'https://placehold.co/200x250.png', dataAiHint: 'man portrait confident' },
  { id: 'spa13', name: 'Michelle Derderyan', title: 'DIRECTOR OF OPERATIONS', image: 'https://placehold.co/200x250.png', dataAiHint: 'woman portrait operations' },
  { id: 'spa14', name: 'Peter Domjen', title: 'DIRECTOR, BUSINESS DEVELOPMENT & CLIENT STRATEGY', image: 'https://placehold.co/200x250.png', dataAiHint: 'man portrait strategy' },
  { id: 'spa15', name: 'Lisa Schapiro', title: 'BUYERS\\\' ADVOCATE - PROPERTYBUYER EAST', image: 'https://placehold.co/200x250.png', dataAiHint: 'woman portrait associate' },
  { id: 'spa16', name: 'Jodie Gottlieb', title: 'ASSOCIATE BUYERS\\\' ADVOCATE - PROPERTYBUYER EAST', image: 'https://placehold.co/200x250.png', dataAiHint: 'person portrait associate' },
  { id: 'spa17', name: 'Stan Rosenberg', title: 'ASSOCIATE BUYERS\\\' ADVOCATE - PROPERTYBUYER EAST', image: 'https://placehold.co/200x250.png', dataAiHint: 'man portrait senior associate' },
];
