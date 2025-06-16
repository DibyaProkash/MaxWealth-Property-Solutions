
import type { LucideIcon } from 'lucide-react'; // Keep if icons are used in interfaces, else remove

export interface TeamMemberDetailed {
  id: string;
  name: string;
  title: string;
  image: string;
  dataAiHint: string;
  bio: string;
  specialties?: string[];
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
    image: 'https://placehold.co/400x450.png', 
    dataAiHint: 'woman professional portrait',
    bio: "Jacqueline, the esteemed CEO and Founder of MaxWealth PS, is more than a licensed financial advisor; she's a seasoned property investor and professional economist with over two decades of experience in the property industry. Her expertise extends to prestige real estate & luxury property in key metropolitan areas. Jacqueline has a keen focus on development sites, commercial properties, and investment markets nationwide.",
    specialties: ['Prestige Real Estate', 'Investment Strategy', 'Negotiation', 'Market Analysis'],
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
    bio: 'Alice has over 10 years of experience in financial planning, specializing in mortgage structuring and first-time home buyer programs. She is passionate about empowering clients to make sound financial decisions.',
    specialties: ['Mortgage Planning', 'First-Time Home Buyers', 'Debt Management'],
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
    bio: 'Bob is an expert in real estate investment analysis and portfolio growth. He helps clients identify high-potential properties and develop long-term investment strategies.',
    specialties: ['Property Investment', 'Portfolio Management', 'Risk Assessment'],
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
    bio: 'Carol ensures a smooth and positive experience for all MaxWealth PS clients. She manages client communications and oversees operational efficiency to deliver top-tier service.',
    specialties: ['Client Servicing', 'Process Optimization', 'Team Coordination'],
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
