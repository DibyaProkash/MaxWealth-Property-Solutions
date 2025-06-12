
import { Newspaper, Video, type LucideIcon } from 'lucide-react';

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  dataAiHint: string;
  quote: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    name: 'Sarah L.',
    role: 'First-Time Homeowner',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman happy',
    quote: "MaxWealth PS made my dream of owning a home a reality! Their guidance was invaluable, and they explained everything so clearly. I felt supported every step of the way.",
    rating: 5,
  },
  {
    name: 'John B.',
    role: 'Property Investor',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'man professional',
    quote: "As an investor, I need sharp, reliable financial advice. MaxWealth PS consistently delivers. Their expertise in complex financing is top-notch.",
    rating: 5,
  },
  {
    name: 'The Garcia Family',
    role: 'Upgrading Their Home',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'family portrait',
    quote: "We were nervous about selling our old home and buying a new one simultaneously. The team at MaxWealth PS streamlined the financial process and gave us peace of mind.",
    rating: 5,
  },
  {
    name: 'Emily K.',
    role: 'Refinancing Client',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'person thinking',
    quote: "Refinancing seemed complicated, but MaxWealth PS made it simple and saved me a significant amount on my monthly payments. Highly recommend their services!",
    rating: 5,
  },
  {
    name: 'David W.',
    role: 'Second Home Buyer',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'man smiling',
    quote: "The MaxWealth team helped us secure financing for our vacation home. Their process was efficient and they found us a great rate.",
    rating: 5,
  },
  {
    name: 'Lisa P.',
    role: 'Real Estate Developer',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman business',
    quote: "For larger projects, MaxWealth PS has been an indispensable partner in structuring our financing. Professional and knowledgeable.",
    rating: 5,
  }
];

export interface Partner {
  name: string;
  logo: string;
  dataAiHint: string;
}

export const partnersData: Partner[] = [
  { name: 'SecureBank', logo: 'https://placehold.co/150x60.png?text=SecureBank&font=sans-serif', dataAiHint: 'bank logo' },
  { name: 'RealtyPros', logo: 'https://placehold.co/150x60.png?text=RealtyPros&font=sans-serif', dataAiHint: 'estate logo' },
  { name: 'LegalEase', logo: 'https://placehold.co/150x60.png?text=LegalEase&font=sans-serif', dataAiHint: 'law logo' },
  { name: 'InspectWell', logo: 'https://placehold.co/150x60.png?text=InspectWell&font=sans-serif', dataAiHint: 'inspection logo' },
  { name: 'BuildRight Homes', logo: 'https://placehold.co/150x60.png?text=BuildRight&font=sans-serif', dataAiHint: 'builder logo' },
  { name: 'FinanceGrowth', logo: 'https://placehold.co/150x60.png?text=FinanceGrowth&font=sans-serif', dataAiHint: 'finance logo' },
  { name: 'CapitalTrust', logo: 'https://placehold.co/150x60.png?text=CapitalTrust&font=sans-serif', dataAiHint: 'investment logo' },
  { name: 'HomeInsure Co.', logo: 'https://placehold.co/150x60.png?text=HomeInsure&font=sans-serif', dataAiHint: 'insurance logo' },
  { name: 'MortgageMasters', logo: 'https://placehold.co/150x60.png?text=MortgagePro&font=sans-serif', dataAiHint: 'mortgage logo' },
];

export interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  dataAiHint: string;
  type: 'Blog' | 'Vlog';
  date: string;
  icon: LucideIcon;
  link: string;
}

export const articlesData: Article[] = [
  {
    id: '1',
    title: 'Understanding Mortgage Rates in 2024',
    description: 'A deep dive into current mortgage trends and how they affect your buying power.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'finance graph',
    type: 'Blog',
    date: '2024-07-15',
    icon: Newspaper,
    link: '#',
  },
  {
    id: '2',
    title: 'First-Time Home Buyer? Watch This First!',
    description: 'Our latest vlog covers essential tips for navigating your first home purchase.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'home keys',
    type: 'Vlog',
    date: '2024-07-10',
    icon: Video,
    link: '#',
  },
  {
    id: '3',
    title: 'Saving Strategies for Your Down Payment',
    description: 'Practical advice on building your down payment fund effectively.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'savings money',
    type: 'Blog',
    date: '2024-06-25',
    icon: Newspaper,
    link: '#',
  },
  {
    id: '4',
    title: 'The Future of Real Estate Technology',
    description: 'Exploring how tech is shaping the home buying and selling process.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'technology real estate',
    type: 'Blog',
    date: '2024-06-12',
    icon: Newspaper,
    link: '#',
  },
  {
    id: '5',
    title: 'Navigating Closing Costs: A Complete Guide',
    description: 'Understand all the fees involved when you close on your new home.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'documents signature',
    type: 'Vlog',
    date: '2024-05-30',
    icon: Video,
    link: '#',
  },
  {
    id: '6',
    title: 'Market Update Q3: Trends to Watch',
    description: 'An overview of the real estate market performance in the third quarter and predictions.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'market chart',
    type: 'Blog',
    date: '2024-07-20',
    icon: Newspaper,
    link: '#',
  },
  {
    id: '7',
    title: 'Impact of Credit Score on Mortgages (Vlog)',
    description: 'Learn how your credit score affects your mortgage options in this informative vlog.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'credit score',
    type: 'Vlog',
    date: '2024-05-15',
    icon: Video,
    link: '#',
  },
];
