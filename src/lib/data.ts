
import React, { type SVGProps } from 'react';
import { Briefcase, SearchCheck, TrendingUp, Handshake, Users, Workflow, Building, Building2, Settings, CalculatorIcon, HelpCircle, BrainCircuit, Download, ListChecks, ConciergeBell, Home, Gem, Hotel, ShieldCheck, MapPin, BuildingIcon as DefaultBuildingIcon, Percent, Landmark, Plane, Utensils, Train, Sailboat, ShoppingCart, Trees, Sparkles, Lightbulb, BarChart2, Users2, Target, Scale, CheckCircle, ThumbsUp, Clock, Calendar, Award, MessageSquare, BookOpenCheck, FileSearch, Brain, Timer, Star, Camera as LucideCamera, Bus as LucideBus, DollarSign, FileText as LucideFileText, Linkedin, Mail, X as TwitterIcon, Instagram as InstagramIcon, Zap, BarChartBig, BadgePercent, Network, UserCog, SearchCode, Search as SearchIconLucide, BookOpen, Newspaper, Video, BookText, Clapperboard } from 'lucide-react';

// Import data from new segregated files for siteSearchableContent generation
import { articlesData as importedArticlesData } from './data/articles';
import { mediaTypeIcons as importedMediaTypeIcons, type MediaType as ImportedMediaType } from './data/media-types';
// Guides and Testimonials are not currently part of siteSearchableContent, so no direct import needed here for that.

// Helper icon component (if not directly from lucide-react or if a specific one is needed)
const BusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M8 6v6"/><path d="M16 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/></svg>
);

const CameraIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
);

// TestimonialsData is now in src/lib/data/testimonials.ts
// PartnersData (remains here for now)
export interface Partner {
  name: string;
  logo: string;
  dataAiHint: string;
}

export const partnersData: Partner[] = [
  { name: 'SecureBank', logo: 'https://placehold.co/150x60.png', dataAiHint: 'bank logo' },
  { name: 'RealtyPros', logo: 'https://placehold.co/150x60.png', dataAiHint: 'estate logo' },
  { name: 'LegalEase', logo: 'https://placehold.co/150x60.png', dataAiHint: 'law logo' },
  { name: 'InspectWell', logo: 'https://placehold.co/150x60.png', dataAiHint: 'inspection logo' },
  { name: 'BuildRight Homes', logo: 'https://placehold.co/150x60.png', dataAiHint: 'builder logo' },
  { name: 'FinanceGrowth', logo: 'https://placehold.co/150x60.png', dataAiHint: 'finance logo' },
  { name: 'CapitalTrust', logo: 'https://placehold.co/150x60.png', dataAiHint: 'investment logo' },
  { name: 'HomeInsure Co.', logo: 'https://placehold.co/150x60.png', dataAiHint: 'insurance logo' },
  { name: 'MortgageMasters', logo: 'https://placehold.co/150x60.png', dataAiHint: 'mortgage logo' },
];

// MediaType and mediaTypeIcons are now in src/lib/data/media-types.ts
// Article interface and articlesData are now in src/lib/data/articles.ts
// Guide interface and guidesData are now in src/lib/data/guides.ts

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: 'faq1',
    question: 'What is a good credit score to buy a house?',
    answer: 'Generally, a credit score of 620 or higher is needed to qualify for most conventional loans, but requirements can vary by lender and loan type. A score of 740 or above will typically get you the best interest rates. We can help you understand your credit report and suggest ways to improve your score if needed.'
  },
  {
    id: 'faq2',
    question: 'How much down payment do I need?',
    answer: 'The traditional down payment is 20% of the home\\\'s purchase price, but many loan programs allow for much lower down payments, some as low as 3% or even 0% for certain government-backed loans like VA or USDA loans. We can explore options that fit your financial situation.'
  },
  {
    id: 'faq3',
    question: 'What are closing costs?',
    answer: 'Closing costs are fees associated with finalizing your mortgage and purchasing the home. They typically range from 2% to 5% of the home\\\'s purchase price and can include expenses like appraisal fees, title insurance, loan origination fees, and pre-paid property taxes and insurance.'
  },
  {
    id: 'faq4',
    question: 'What is PITI?',
    answer: 'PITI stands for Principal, Interest, Taxes, and Insurance. This represents the total monthly housing payment. Principal is the portion that reduces your loan balance, Interest is the cost of borrowing, Taxes refer to property taxes, and Insurance is homeowners insurance.'
  },
  {
    id: 'faq5',
    question: 'Should I get pre-approved for a mortgage before looking for homes?',
    answer: 'Yes, absolutely! Getting pre-approved gives you a clear idea of how much you can afford, shows sellers you are a serious buyer, and can speed up the closing process once you find a home. It\\\'s a crucial first step in the home buying journey.'
  },
  {
    id: 'faq6',
    question: 'How long does the home buying process typically take?',
    answer: 'The home buying process can vary significantly, but on average, it can take anywhere from 30 to 60 days from the time your offer is accepted to closing day. The search for a home can take much longer, depending on market conditions and your specific needs.'
  }
];

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

export interface ServiceOffering {
  id: string;
  title: string;
  intro: string;
  features: string[];
  icon: LucideIcon;
}

export const servicesData: ServiceOffering[] = [
  {
    id: 's1',
    title: 'Full Buying Service',
    intro: 'Want MaxWealth PS to handle everything for you? We’ll handle every step of the process from search to settlement.',
    features: [
      'Property consultation',
      'Full property search',
      'Off-market opportunities',
      'Inspection & due diligence',
      'Negotiation/purchase',
      'Property Settlement'
    ],
    icon: Briefcase,
  },
  {
    id: 's2',
    title: 'Inspect & Negotiate',
    intro: 'Found a property you want to buy? Let MaxWealth PS negotiate the best deal possible for you.',
    features: [
      'Purchase strategy meeting',
      'Inspection & due diligence',
      'Negotiation/purchase',
      'Property settlement'
    ],
    icon: SearchCheck,
  },
  {
    id: 's3',
    title: 'Auction Bidding',
    intro: 'Win your real estate auction! We’ll do your auction bidding for you and make your property auction stress-free.',
    features: [
      'Auction strategy meeting',
      'Auction bidding service',
      'Contracts and purchase',
      'Property settlement'
    ],
    icon: Percent,
  }
];

export const aboutUsSubItems = [
  { href: '/about/our-company', label: 'Our Company', icon: DefaultBuildingIcon, description: 'Learn about our mission, vision, and values.' },
  { href: '/about/our-team', label: 'Our Team', icon: Users, description: 'Meet the professionals behind MaxWealth PS.' },
  { href: '/about/our-services', label: 'Our Services', icon: ConciergeBell, description: 'Explore the services we offer.' },
  { href: '/about/our-process', label: 'Our Process', icon: Workflow, description: 'Discover how we help you succeed.' },
];

export const resourceSubItems = [
  { href: '/resources/ai-tools', label: 'AI-Powered Tools', icon: BrainCircuit, description: 'Leverage intelligent financial tools.' },
  { href: '/resources/free-guides', label: 'Free Guides & E-Books', icon: Download, description: 'Access valuable downloadable resources.' },
  { href: '/resources/calculators', label: 'Financial Calculators', icon: CalculatorIcon, description: 'Estimate payments and affordability.' },
  { href: '/resources/roadmap', label: 'Home Buying Roadmap', icon: ListChecks, description: 'Navigate your path to homeownership.' },
  { href: '/resources/faq', label: 'FAQ', icon: HelpCircle, description: 'Find answers to common questions.' },
];

export interface WhoWeHelpItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  dataAiHint: string;
}

export const whoWeHelpData: WhoWeHelpItem[] = [
  {
    id: 'help1',
    slug: 'residential-home',
    title: 'Residential Home',
    description: 'Helping you find the perfect home, whether it’s your first or forever home. We ensure it meets your needs and long-term goals, making the buying process seamless and stress-free.',
    icon: Home,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'family home residential',
  },
  {
    id: 'help2',
    slug: 'investment-property',
    title: 'Investment Property',
    description: 'Guiding you to high-yield investment properties that match your financial objectives. Our expertise ensures you make informed decisions to grow your property portfolio and achieve strong returns.',
    icon: TrendingUp,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'investment chart property',
  },
  {
    id: 'help3',
    slug: 'commercial-property',
    title: 'Commercial Property',
    description: 'Assisting you in finding the right commercial space for your business needs. From office buildings to retail spaces, we help you secure the ideal location to support your growth.',
    icon: DefaultBuildingIcon,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'commercial building office',
  },
  {
    id: 'help4',
    slug: 'prestige-property',
    title: 'Prestige Property',
    description: 'Specialising in luxury homes that offer the highest level of comfort and style. We match you with properties that reflect your lifestyle and aspirations, ensuring a perfect fit.',
    icon: Gem,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'luxury mansion prestige',
  },
  {
    id: 'help5',
    slug: 'holiday-home',
    title: 'Holiday Home',
    description: 'Helping you discover the ideal holiday property, whether for personal enjoyment or investment. We find locations that offer relaxation and strong potential for future returns.',
    icon: Hotel,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'beach house holiday',
  },
  {
    id: 'help6',
    slug: 'property-management',
    title: 'Property Management',
    description: 'Offering professional property management services that protect your investment. We handle everything from tenant relations to maintenance, ensuring your property is well-maintained and profitable.',
    icon: ShieldCheck,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'property keys management',
  },
];

export interface ServiceLocationItem {
  id: string;
  slug: string;
  name: string;
  image: string;
  dataAiHint: string;
  tagline?: string;
  heroImage: string;
  heroImageAiHint: string;
}

export const serviceLocationsData: ServiceLocationItem[] = [
  { id: 'loc1', slug: 'sydney', name: 'Sydney', image: 'https://placehold.co/400x300.png', dataAiHint: 'Sydney opera house', tagline: 'Iconic landmarks and vibrant city living.', heroImage: 'https://placehold.co/1200x400.png', heroImageAiHint: 'Sydney harbour bridge' },
  { id: 'loc2', slug: 'melbourne', name: 'Melbourne', image: 'https://placehold.co/400x300.png', dataAiHint: 'Melbourne city tram', tagline: 'Culture, coffee, and a cosmopolitan lifestyle.', heroImage: 'https://placehold.co/1200x400.png', heroImageAiHint: 'Melbourne laneway art' },
  { id: 'loc3', slug: 'brisbane', name: 'Brisbane', image: 'https://placehold.co/400x300.png', dataAiHint: 'Brisbane story bridge', tagline: 'Sunny skies and a relaxed urban atmosphere.', heroImage: 'https://placehold.co/1200x400.png', heroImageAiHint: 'Brisbane river city' },
  { id: 'loc4', slug: 'gold-coast', name: 'Gold Coast', image: 'https://placehold.co/400x300.png', dataAiHint: 'Gold Coast surfers paradise', tagline: 'Famous beaches and a thriving entertainment scene.', heroImage: 'https://placehold.co/1200x400.png', heroImageAiHint: 'Gold Coast beach aerial' },
  { id: 'loc5', slug: 'adelaide', name: 'Adelaide', image: 'https://placehold.co/400x300.png', dataAiHint: 'Adelaide hills vineyard', tagline: 'Charming city with renowned wine regions nearby.', heroImage: 'https://placehold.co/1200x400.png', heroImageAiHint: 'Adelaide city park' },
  { id: 'loc6', slug: 'sunshine-coast', name: 'Sunshine Coast', image: 'https://placehold.co/400x300.png', dataAiHint: 'Sunshine Coast glasshouse mountains', tagline: 'Pristine beaches and lush hinterland.', heroImage: 'https://placehold.co/1200x400.png', heroImageAiHint: 'Sunshine Coast beach view' },
  { id: 'loc7', slug: 'newcastle-hunter-valley', name: 'Newcastle & Hunter Valley', image: 'https://placehold.co/400x300.png', dataAiHint: 'Hunter Valley wine tasting', tagline: 'Coastal city charm meets wine country elegance.', heroImage: 'https://placehold.co/1200x400.png', heroImageAiHint: 'Newcastle beach sunrise' },
  { id: 'loc8', slug: 'central-coast', name: 'Central Coast', image: 'https://placehold.co/400x300.png', dataAiHint: 'Central Coast beach town', tagline: 'Beautiful waterways and beaches north of Sydney.', heroImage: 'https://placehold.co/1200x400.png', heroImageAiHint: 'Central Coast lake Macquarie' },
  { id: 'loc9', slug: 'hobart', name: 'Hobart', image: 'https://placehold.co/400x300.png', dataAiHint: 'Hobart mount wellington', tagline: 'Historic charm and stunning natural beauty.', heroImage: 'https://placehold.co/1200x400.png', heroImageAiHint: 'Hobart historic waterfront' },
];

export interface AmenityContentItem {
  subTitle?: string;
  text: string;
  icon?: LucideIcon;
}

export interface AmenitySection {
  title: string;
  content: AmenityContentItem[];
  image: string;
  imageAiHint: string;
}

export interface LocationDetail {
  slug: string;
  name: string;
  pageIntro: string;
  tagline?: string;
  specificIntroParagraphs: string[];
  amenities: {
    transport: AmenitySection;
    shopsAndRestaurants: AmenitySection;
    leisure: AmenitySection;
  };
  touristLink: string;
  heroImage: string;
  heroImageAiHint: string;
}

const generatePlaceholderAmenities = (cityName: string): LocationDetail['amenities'] => ({
  transport: {
    title: "TRANSPORT",
    content: [
      { subTitle: "Train", text: `Discover convenient train routes connecting ${cityName} to major hubs. Efficient and scenic journeys await.`, icon: Train },
      { subTitle: "Bus Network", text: `Extensive bus networks provide easy access across ${cityName} and surrounding areas. Local and regional services available.`, icon: BusIcon },
      { text: `General public transport in ${cityName} is designed for accessibility and convenience, making it easy to explore the city and its attractions.`, icon: MapPin },
    ],
    image: 'https://placehold.co/600x450.png',
    imageAiHint: `transport ${cityName.toLowerCase()}`,
  },
  shopsAndRestaurants: {
    title: "SHOPS & RESTAURANTS",
    content: [
      { subTitle: "Retail Therapy", text: `${cityName} boasts a vibrant shopping scene, from boutique stores offering unique local crafts to major retail centers with global brands.`, icon: ShoppingCart },
      { subTitle: "Culinary Delights", text: `Explore diverse culinary delights, with a wide array of cafes, casual eateries, and fine dining restaurants catering to all tastes in ${cityName}.`, icon: Utensils },
    ],
    image: 'https://placehold.co/600x450.png',
    imageAiHint: `shopping ${cityName.toLowerCase()}`,
  },
  leisure: {
    title: "LEISURE & ATTRACTIONS",
    content: [
      { subTitle: "Culture & History", text: `Explore the rich cultural heritage of ${cityName} with its museums, galleries, and historic landmarks.`, icon: Landmark },
      { subTitle: "Parks & Nature", text: `Enjoy outdoor activities in beautiful parks and natural reserves surrounding ${cityName}. Perfect for hiking, picnics, and relaxation.`, icon: Trees },
      { subTitle: "Events & Entertainment", text: `The city offers a lively calendar of events, festivals, and entertainment options for all ages.`, icon: Sparkles },
    ],
    image: 'https://placehold.co/600x450.png',
    imageAiHint: `leisure ${cityName.toLowerCase()}`,
  },
});


export const locationDetailsData: LocationDetail[] = serviceLocationsData.map(loc => {
  if (loc.slug === 'central-coast') {
    return {
      slug: 'central-coast',
      name: 'Central Coast',
      pageIntro: 'Unlock Your Dream Property on the Central Coast',
      tagline: loc.tagline,
      specificIntroParagraphs: [
        "Looking to buy a home or investment property on the Central Coast, just one hour north of Sydney? The Central Coast boasts a beautiful array of suburbs surrounded by waterways and beaches, offering very natural settings yet close to major services at a more affordable price.",
        "From Gosford to Woy Woy, the prestigious beaches of Killcare, Avoca, or McMasters, the lakeside areas of Saratoga, The Entrance, Toukley, or Berkley Vale, and north to the Lake Macquarie area, our Central Coast buyers' agent has it covered! It makes perfect sense to engage our Central Coast buyers’ agent to uncover off-market opportunities that you'd never discover on your own.",
        "Securing a property on the Central Coast requires extensive and established connections to get ahead of other buyers. Our Central Coast buyers’ agent will help you uncover the ideal area and property types to suit your individual requirements and freely share their local knowledge."
      ],
      amenities: {
        transport: {
          title: "TRANSPORT",
          content: [
            { subTitle: "Train", text: "Every hour from Newcastle and every half-hour from Sydney, NSW TrainLink offers regular rail service to the Central Coast. The trip takes roughly one hour and thirty minutes from each location. For additional information, go to transportnsw.info.", icon: Train },
            { subTitle: "Ferry", text: "Daily services between Sydney (Palm Beach) and the Central Coast are provided by Palm Beach Ferries (Ettalong Beach).", icon: Sailboat },
            { subTitle: "Air", text: "About 115 kilometers and 1 hour and 15 minutes' driving separate Gosford from Newcastle Airport. About 85 kilometers and 1 hour and 20 minutes' journey separate Gosford from Sydney Airport.", icon: Plane }
          ],
          image: 'https://placehold.co/600x450.png',
          imageAiHint: 'train station Central Coast'
        },
        shopsAndRestaurants: {
          title: "SHOPS & RESTAURANTS",
          content: [
            { subTitle: "Dining Hotspots", text: "For 1950s-style pizza and tropical beverages, head to Tropicana Social Club in Woy Woy, or travel back another 20 years with a drink at Hotel Mezza in Wyong, which is situated in a former bank from the 1930s. Long Jetty's The Savoy, a former 1950s theater that has been transformed into a multi-purpose bar and restaurant with frequent movie screenings, is another heritage property that has been brought back to life. After undergoing a significant renovation, Hotel Gosford has once again established itself as a legendary bar; its slick Art Deco design pays homage to its 1920s roots. Terrigal, a coastal town, is home to the edgy Pocket Bar, which serves up creative drinks and mouthwatering bar snacks.", icon: Utensils },
            { subTitle: "Shopping Destinations", text: "Discover a mix of local boutiques, surf shops, and larger shopping centres like Erina Fair, offering a wide range of retail options.", icon: ShoppingCart }
          ],
          image: 'https://placehold.co/600x450.png',
          imageAiHint: 'restaurant cafe Central Coast'
        },
        leisure: {
          title: "LEISURE & ATTRACTIONS",
          content: [
            { subTitle: "Beaches & Waterways", text: "The Central Coast is a beach lover's paradise with an 87-kilometre coastline and over 40 beaches. Finding a piece of beach and taking advantage of the ocean lifestyle—whether that means splashing around at Toowoon Bay with the kids, dipping into the water at The Entrance Ocean Baths, or exploring the rock pools at MacMasters Beach or Pearl Beach—is practically a given when on vacation.", icon: Sailboat },
            { subTitle: "Natural Beauty", text: "Between Sydney and Newcastle, NSW's second-largest city, is the Central Coast. The area is introduced in Kate Grenville's classic historical novel The Hidden River, which is located in Broken Bay near the mouth of the lovely Hawkesbury River.", icon: Trees },
            { subTitle: "Local Attractions", text: "Pelican feeding time at Pelican Plaza, The Entrance, is a well-known sight on the Central Coast. At 3.30 pm every afternoon, Australia's largest aquatic birds, some with wingspans up to 2.8 meters, congregate here.", icon: CameraIcon },
            { subTitle: "Relaxation & Wellness", text: "At the cozy Bells Day Spa at Bells at Killcare, you may disconnect from your hectic schedule and re-establish a connection with the natural world by utilizing traditional goods and healing methods that were developed by indigenous Australians. The top-to-toe rituals are performed at the Vie Spa in the Pullman Magenta Beaches Resort using only organic, all-Australian products in a setting that exudes Japanese calm. Alternately, unwind in the opulent Roman Spa at Aztec Skin Clinic & Day Spa, complete with a fruit and cheese platter, before receiving a treatment with a Fijian influence.", icon: Sparkles }
          ],
          image: 'https://placehold.co/600x450.png',
          imageAiHint: 'beach Central Coast'
        }
      },
      touristLink: 'https://www.visitnsw.com/destinations/central-coast',
      heroImage: loc.heroImage,
      heroImageAiHint: loc.heroImageAiHint,
    };
  }
  return {
    slug: loc.slug,
    name: loc.name,
    pageIntro: `Unlock Your Dream Property in ${loc.name}`,
    tagline: loc.tagline,
    specificIntroParagraphs: [
      `Looking to buy a home or investment property in ${loc.name}? This vibrant region offers a unique blend of lifestyle and opportunity. Our expert buyers' agents at MaxWealth PS are ready to guide you.`,
      `${loc.name} features diverse suburbs, from bustling city centers to serene ${loc.slug.includes('coast') || loc.slug.includes('sydney') || loc.slug.includes('melbourne') ? 'coastal retreats' : 'natural landscapes'}. We can help you find the perfect match for your needs.`,
      `With our deep local knowledge and extensive network in ${loc.name}, we uncover off-market deals and provide you with a competitive edge. Let us make your property journey in ${loc.name} a success.`
    ],
    amenities: generatePlaceholderAmenities(loc.name),
    touristLink: '#', // Placeholder for other cities
    heroImage: loc.heroImage,
    heroImageAiHint: loc.heroImageAiHint,
  };
});


export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyChooseUsData: WhyChooseUsItem[] = [
  {
    id: 'wcu1',
    title: 'Industry Experience',
    description: 'With over two decades on the buyers’ side, we know how to successfully navigate the purchasing journey.',
    icon: Landmark,
  },
  {
    id: 'wcu2',
    title: 'Market Coverage',
    description: 'We have a team of residential & commercial specialists covering home buyers, property investors and commercial buyers.',
    icon: MapPin,
  },
  {
    id: 'wcu3',
    title: 'Results Orientated',
    description: 'Our commitment to excellence in service delivery makes us stand out from other agencies, saving you time and stress.',
    icon: Target,
  },
  {
    id: 'wcu4',
    title: 'Accurate Appraisals',
    description: 'Using the latest market data and local knowledge, we provide highly accurate property appraisals and independent opinions on the value of a subject property.',
    icon: Scale,
  },
  {
    id: 'wcu5',
    title: 'Extensive Network',
    description: 'We’ve got an extensive database of agents and the best contacts to give you the inside running, including access to off-market properties.',
    icon: Handshake,
  },
  {
    id: 'wcu6',
    title: 'Research & Data',
    description: 'With our own Suburb Selector™ portal and access to live property data from all major providers, we have the latest property intelligence.',
    icon: Lightbulb,
  },
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


export interface RecentPurchaseItem {
  id: string;
  category: 'Residential' | 'Commercial';
  name?: string; 
  city: string; 
  title: string; 
  details: { [key: string]: string }; 
  image: string;
  dataAiHint: string;
}
export const recentPurchasesData: RecentPurchaseItem[] = [
  { id: 'rp1', category: 'Commercial', name: 'Raji', city: 'Redfern, NSW', title: 'Sydney City-Fringe Freehold Trophy Asset - Owner Occupier', details: { 'Purchase Price': '$10,500,000', 'Appraisal': '$12,000,000', 'Location': 'Redfern', 'NLA': '1096m2 + 18 car spaces', 'LAND AREA': '584m4', 'ZONING': 'MU1 mixed-use', 'OTHER': 'Corner site, 300m from Redfern Station' }, image: 'https://placehold.co/600x400.png', dataAiHint: 'commercial building city' },
  { id: 'rp2', category: 'Commercial', name: 'Edgar', city: 'Brisbane, QLD', title: 'Set & Forget Investment with 10 year long lease to International Tenant', details: { 'ASKING PRICE': '$2,800,000', 'PURCHASE PRICE': '$2,665,200', 'LOCATION': 'Brisbane, QLD', 'ANNUAL NET RENT': '$160,000 Net + GST + Outgoings', 'NET YIELD': '6%', 'LEASE TERM': '5+% year lease to 2033', 'INCREASE': '4% or CPI', 'NLA': '762m2 + 9 car spaces', 'LAND': 'n/a', 'TENANT': 'International' }, image: 'https://placehold.co/600x400.png', dataAiHint: 'office building brisbane' },
  { id: 'rp3', category: 'Commercial', name: 'Myrtle Cottage', city: 'Spring Farm, NSW', title: 'NDIS in South-West Sydney - NFP Owner-Occupier', details: { 'Purchase Price': '$1,300,000', 'LOCATION': 'Spring Farm, NSW', 'NLA': '250m2', 'LAND AREA': '817m2', 'ZONING': 'R1 General Residential (allowing for community facilities)', 'TYPE': 'Freehold', 'USE': 'Proposed NDIS', 'SOURCED IN': '45 days' }, image: 'https://placehold.co/600x400.png', dataAiHint: 'community facility building' },
  { id: 'rp4', category: 'Residential', name: 'Raji', city: 'Wentworth Point, NSW', title: 'Modern Apartment with Water Views', details: { 'Purchase Price': '$850,000', 'Appraisal': '$870,000', 'Location': 'Wentworth Point', 'Bedrooms': '2', 'Bathrooms': '2', 'Parking': '1 car space', 'OTHER': 'Close to ferry and amenities' }, image: 'https://placehold.co/600x400.png', dataAiHint: 'apartment modern sydney' },
  { id: 'rp5', category: 'Residential', name: 'Edgar', city: 'Eastern Suburbs, VIC', title: 'Family Home in Leafy Suburb', details: { 'Purchase Price': '$1,200,000', 'Location': 'Eastern Suburbs, VIC', 'Bedrooms': '4', 'Bathrooms': '2.5', 'Land Size': '650m2', 'OTHER': 'Renovated kitchen, large backyard' }, image: 'https://placehold.co/600x400.png', dataAiHint: 'family house suburb' },
  { id: 'rp6', category: 'Residential', name: 'Myrtle Cottage', city: 'Eastern Suburbs, QLD', title: 'Charming Queenslander with Character', details: { 'Purchase Price': '$950,000', 'Location': 'Eastern Suburbs, QLD', 'Bedrooms': '3', 'Bathrooms': '1', 'Land Size': '500m2', 'OTHER': 'Original features, potential to extend' }, image: 'https://placehold.co/600x400.png', dataAiHint: 'queenslander house charming' },
];


export interface ServicePageCtaCardItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}
export const servicePageCtaCardsData: ServicePageCtaCardItem[] = [
  { id: 'cta1', title: 'UNSURE OF WHAT YOU WANT?', description: 'Are you feeling overwhelmed, frustrated, or simply tired of searching for real estate in the residential areas in Sydney, Brisbane, and other key locations?', icon: HelpCircle },
  { id: 'cta2', title: 'DON\\\'T HAVE THE TIME?', description: 'Have biased real estate agents taken you to homes and apartments that are way off the mark? Have they tried to convince you that buying a home is easy?', icon: Timer },
  { id: 'cta3', title: 'MISSED OUT AT AUCTIONS?', description: 'Have you had to try and cope at a property auction without any support? Have you missed out on several suitable homes for sale as a result?', icon: Award },
];

export interface ServicePageBenefitPoint {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}
export const servicePageBenefitPointsData: ServicePageBenefitPoint[] = [
  { id: 'bp1', title: 'ACCESS MORE PROPERTIES', description: 'We uncover off-market properties (silent listings) and pre-listings before they hit the market. If a house is for sale, we know about it', icon: DefaultBuildingIcon },
  { id: 'bp2', title: 'GET AHEAD OF OTHER BUYERS', description: 'Our experience and contacts give you the edge on other buyers.', icon: Users2 },
  { id: 'bp3', title: 'PAY THE RIGHT PRICE', description: 'Our vast and up-to-the-minute knowledge of real estate means we can provide a detailed appraisal on the value of your chosen property, then we negotiate hard to ensure you pay the best price.', icon: DollarSign },
  { id: 'bp4', title: 'SAVE TIME', description: 'We do all the hard work, plus we can tap into our extensive network to find your property much faster!', icon: Clock },
];

export interface HowWeHelpStep {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}
export const howWeHelpStepsData: HowWeHelpStep[] = [
  { id: 'hwh1', title: 'HELP YOU BUILD YOUR BRIEF', description: 'What are your must haves and nice to haves, and what price guides will actually match your brief? Are you confused by typical price guides?', icon: LucideFileText },
  { id: 'hwh2', title: 'RESEARCH, SHORT LIST & EVALUATE', description: 'Our buyers’ agents specialise in certain areas, for example, the main cities in NSW, VIC, and QLD. This means they can easily research the...', icon: FileSearch },
  { id: 'hwh3', title: 'HANDLE THE NEGOTIATIONS', description: 'How well do you rate your negotiation skills? Is it at an expert level? Do you like dealing with real estate agents? Our knowledge of the...', icon: Handshake },
];

export const genericServicePageTestimonial = {
  name: "Sarah & Jeff",
  role: "Northern Beaches Home Buyers",
  image: "https://placehold.co/150x150.png",
  dataAiHint: "couple happy northern beaches",
  quote: "Rich was on the ball all the time, he had off-market properties we didn’t have access to and took the hard work out of the process. We had a pretty tight brief and we probably wouldn’t have been able to find the house on our own. We couldn’t fault the experience, or fault working with Rich and would recommend using him to anyone."
};

export const awardsPlaceholderText = "Finalist – 2022 Award for Office Administrator of the Year - Michelle Derderyan. Multiple REINSW & REIQ Award Winner.";

export const memberLogos = [
  { id: 'ml1', hint: 'real estate institute logo' },
  { id: 'ml2', hint: 'property association logo' },
  { id: 'ml3', hint: 'industry body logo' },
  { id: 'ml4', hint: 'valuation board logo' },
  { id: 'ml5', hint: 'property institute logo' },
  { id: 'ml6', hint: 'certification program logo' },
];

export const buyerTypesData = [
  { value: "first_home_buyer", label: "First Home Buyer" },
  { value: "investor", label: "Investor" },
  { value: "upgrader", label: "Upgrader" },
  { value: "downsizer", label: "Downsizer" },
  { value: "commercial_buyer", label: "Commercial Buyer" },
  { value: "other", label: "Other" },
];


export interface DifferencePoint {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const maxWealthDifferenceData: DifferencePoint[] = [
  {
    id: 'diff1',
    title: 'Deep Market Expertise',
    description: 'Over two decades of navigating local markets, providing you unparalleled insights and successful outcomes.',
    icon: Zap, 
  },
  {
    id: 'diff2',
    title: 'Holistic Financial Strategy',
    description: 'We cover all aspects of home financing, from initial planning to securing investment properties and commercial assets.',
    icon: BarChartBig, 
  },
  {
    id: 'diff3',
    title: 'Client-Centric Results',
    description: 'Our commitment to service excellence ensures a stress-free journey tailored to your unique financial goals.',
    icon: ThumbsUp, 
  },
  {
    id: 'diff4',
    title: 'Precision Appraisals',
    description: 'Leveraging cutting-edge data and local knowledge for highly accurate property valuations and informed decisions.',
    icon: BadgePercent, 
  },
  {
    id: 'diff5',
    title: 'Exclusive Network Access',
    description: 'Gain an edge with our extensive database of agents and access to off-market opportunities.',
    icon: Network, 
  },
  {
    id: 'diff6',
    title: 'Advanced Research & AI Tools',
    description: 'Utilizing our proprietary "Suburb Selector™", AI insights, and live data for the latest property intelligence.',
    icon: SearchCode, 
  },
];

export interface ComprehensiveServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const comprehensiveServicesData: ComprehensiveServiceItem[] = [
  {
    id: 'cs1',
    icon: SearchCode,
    title: 'Property Search & Selection',
    description: 'Access to off-market properties and comprehensive market analysis across all major Australian cities.',
  },
  {
    id: 'cs2',
    icon: FileSearch,
    title: 'Due Diligence & Inspections',
    description: 'Thorough property evaluations, building inspections, and legal compliance checks.',
  },
  {
    id: 'cs3',
    icon: Handshake,
    title: 'Negotiation & Purchase',
    description: 'Expert negotiation to secure the best price and terms for your property purchase.',
  },
  {
    id: 'cs4',
    icon: TrendingUp,
    title: 'Investment Analysis',
    description: 'Comprehensive market analysis and investment potential assessment for each property.',
  },
  {
    id: 'cs5',
    icon: Award,
    title: 'Auction Bidding',
    description: 'Professional auction representation to secure your dream property at competitive prices.',
  },
  {
    id: 'cs6',
    icon: Briefcase,
    title: 'Settlement Support',
    description: 'Complete settlement coordination and post-purchase support services.',
  },
];

export interface ProcessStepItem {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
}

export const provenProcessStepsData: ProcessStepItem[] = [
  {
    id: 'step1',
    stepNumber: '01',
    title: 'Strategy Call',
    description: 'Free consultation to understand your needs and budget',
  },
  {
    id: 'step2',
    stepNumber: '02',
    title: 'Market Research',
    description: 'Comprehensive analysis of target areas and properties',
  },
  {
    id: 'step3',
    stepNumber: '03',
    title: 'Property Search',
    description: 'Access to on and off-market opportunities',
  },
  {
    id: 'step4',
    stepNumber: '04',
    title: 'Negotiation',
    description: 'Expert negotiation to secure the best deal',
  },
  {
    id: 'step5',
    stepNumber: '05',
    title: 'Settlement',
    description: 'Complete settlement support and handover',
  },
];

export type SearchableContentType = 'Page' | 'Media' | 'Service Type' | 'Location' | 'Team Member' | 'Resource' | 'FAQ';

export interface SearchResultItem {
  id: string;
  title: string;
  description: string; 
  href: string;
  type: SearchableContentType;
  keywords?: string[];
  category?: string; 
  icon?: LucideIcon; 
}

const staticPageKeywords = {
  home: ['home', 'main', 'landing page', 'maxwealth ps', 'financial planning', 'home buying'],
  aboutOverview: ['about us', 'company overview', 'team', 'services offered', 'our process'],
  ourCompany: ['mission', 'vision', 'values', 'company philosophy', 'about maxwealth ps'],
  ourTeam: ['team members', 'experts', 'advisors', 'financial planners', 'buyers advocates', 'jacqueline dwyer'],
  ourServices: ['services list', 'what we do', 'property buying services', 'investment services', 'commercial property help'],
  ourProcess: ['how we work', 'client journey', '5-step process', 'buying process'],
  media: ['articles', 'vlogs', 'videos', 'reels', 'blog', 'news', 'updates', 'insights'],
  resourcesOverview: ['tools', 'guides', 'calculators', 'faq', 'home buying roadmap', 'ai tools'],
  aiTools: ['ai document analyzer', 'personalized financial plan ai', 'ai market trend summarizer', 'home readiness quiz', 'artificial intelligence'],
  freeGuides: ['e-books', 'downloadable guides', 'checklists', 'home buying resources'],
  calculators: ['mortgage calculator', 'affordability calculator', 'closing cost estimator', 'financial tools'],
  roadmap: ['home buying steps', 'interactive roadmap', 'property purchase guide'],
  faq: ['frequently asked questions', 'common questions', 'answers', 'help'],
  contact: ['contact us', 'get in touch', 'phone number', 'email address', 'office location', 'book consultation'],
  feesExplained: ['our fees', 'pricing', 'buyers agent cost', 'service charges', 'consultation fee'],
};

export const siteSearchableContent: SearchResultItem[] = [
  // Static Pages
  { id: 's-home', title: 'MaxWealth PS Homepage', description: 'Your trusted partner in financial planning for home buying. Explore our services, resources, and expert team.', href: '/', type: 'Page', keywords: staticPageKeywords.home, icon: Home },
  { id: 's-about', title: 'About MaxWealth PS', description: 'Discover MaxWealth PS: our company, dedicated team, comprehensive services, and proven process for client success.', href: '/about', type: 'Page', keywords: staticPageKeywords.aboutOverview, icon: Building },
  { id: 's-our-company', title: 'Our Company', description: 'Learn about the mission, vision, and core values that drive MaxWealth PS in helping clients achieve their property goals.', href: '/about/our-company', type: 'Page', keywords: staticPageKeywords.ourCompany, icon: DefaultBuildingIcon },
  { id: 's-our-team', title: 'Our Expert Team', description: 'Meet the experienced professionals and buyer\'s advocates at MaxWealth PS, led by CEO Jacqueline Dwyer.', href: '/about/our-team', type: 'Page', keywords: staticPageKeywords.ourTeam, icon: Users },
  { id: 's-our-services', title: 'Our Comprehensive Services', description: 'Explore the range of property buying services offered by MaxWealth PS, including who we help and where we operate.', href: '/about/our-services', type: 'Page', keywords: staticPageKeywords.ourServices, icon: ConciergeBell },
  { id: 's-our-process', title: 'Our Streamlined Process', description: 'Learn about MaxWealth PS\'s proven 5-step process designed to guide you through every step of the home buying journey.', href: '/about/our-process', type: 'Page', keywords: staticPageKeywords.ourProcess, icon: Workflow },
  { id: 's-media', title: 'Media & Insights', description: 'Browse our collection of articles, vlogs, videos, and market updates on home financing and property trends.', href: '/media', type: 'Page', keywords: staticPageKeywords.media, icon: Newspaper },
  { id: 's-resources', title: 'MaxWealth PS Resources', description: 'Access financial calculators, AI-powered tools, free guides, an interactive roadmap, and FAQs to empower your home buying decisions.', href: '/resources', type: 'Page', keywords: staticPageKeywords.resourcesOverview, icon: BookOpen },
  { id: 's-ai-tools', title: 'AI-Powered Financial Tools', description: 'Utilize AI for document analysis, basic financial planning, market trend summaries, and home buying readiness assessment.', href: '/resources/ai-tools', type: 'Page', keywords: staticPageKeywords.aiTools, icon: BrainCircuit },
  { id: 's-free-guides', title: 'Free Guides & E-Books', description: 'Download valuable e-books, checklists, and guides to help you navigate the home buying process with confidence.', href: '/resources/free-guides', type: 'Page', keywords: staticPageKeywords.freeGuides, icon: Download },
  { id: 's-calculators', title: 'Financial Calculators', description: 'Estimate mortgage payments, home affordability, and closing costs with our straightforward financial calculators.', href: '/resources/calculators', type: 'Page', keywords: staticPageKeywords.calculators, icon: CalculatorIcon },
  { id: 's-roadmap', title: 'Interactive Home Buying Roadmap', description: 'Follow our step-by-step guide to navigate the path to homeownership. Track your progress locally.', href: '/resources/roadmap', type: 'Page', keywords: staticPageKeywords.roadmap, icon: ListChecks },
  { id: 's-faq-page', title: 'Frequently Asked Questions (FAQ)', description: 'Find answers to common questions about home financing, our services, and the property buying process.', href: '/resources/faq', type: 'Page', keywords: staticPageKeywords.faq, icon: HelpCircle },
  { id: 's-contact', title: 'Contact MaxWealth PS', description: 'Get in touch for a free consultation with our buyer\'s agents. Find our office details and send us a message.', href: '/contact', type: 'Page', keywords: staticPageKeywords.contact, icon: MessageCircle },
  { id: 's-fees', title: 'Our Fees Explained', description: 'Understand our transparent fee structure for buyer\'s agent services and book a free strategy call with Jacqueline Dwyer.', href: '/fees-explained', type: 'Page', keywords: staticPageKeywords.feesExplained, icon: DollarSign },

  // Media Content (Articles, Vlogs, etc.) - uses importedArticlesData
  ...importedArticlesData.map(article => ({
    id: `media-${article.id}`,
    title: article.title,
    description: article.description,
    href: `/media/${article.id}`, // Or /insights/${article.id} if that's the canonical URL
    type: 'Media' as SearchableContentType,
    keywords: [article.type.toLowerCase(), article.category.toLowerCase(), ...(article.tags || [])],
    category: article.category,
    icon: importedMediaTypeIcons[article.type as ImportedMediaType] || Newspaper, // Use imported mediaTypeIcons and MediaType
  })),

  // Service Types (Who We Help)
  ...whoWeHelpData.map(service => ({
    id: `service-type-${service.slug}`,
    title: `${service.title} Buying Services`,
    description: service.description,
    href: `/services/${service.slug}`,
    type: 'Service Type' as SearchableContentType,
    keywords: [service.title.toLowerCase(), 'property buying', 'buyer agent', service.slug.replace('-', ' ')],
    icon: service.icon,
  })),

  // Service Locations
  ...serviceLocationsData.map(location => ({
    id: `location-${location.slug}`,
    title: `Property Buyers Agent in ${location.name}`,
    description: location.tagline || `Expert buyer's agent services for ${location.name}. Discover properties in ${location.name}.`,
    href: `/locations/${location.slug}`,
    type: 'Location' as SearchableContentType,
    keywords: [location.name.toLowerCase(), 'buyer agent', 'property', location.slug.replace('-', ' '), 'real estate'],
    icon: MapPin,
  })),
  
  // Team Members
  ...teamMembersDetailedData.map(member => ({
    id: `team-${member.id}`,
    title: `${member.name} - ${member.title}`,
    description: member.bio.substring(0, 150) + '...',
    href: '/about/our-team', 
    type: 'Team Member' as SearchableContentType,
    keywords: [member.name.toLowerCase(), member.title.toLowerCase(), 'team', 'advisor', 'advocate'],
    icon: Users,
  })),

  // FAQs
  ...faqData.map(faq => ({
    id: `faq-item-${faq.id}`,
    title: faq.question,
    description: faq.answer.substring(0,150) + '...',
    href: '/resources/faq',
    type: 'FAQ' as SearchableContentType,
    keywords: ['faq', ...faq.question.toLowerCase().split(' ').slice(0,5)], 
    icon: HelpCircle
  }))
];
