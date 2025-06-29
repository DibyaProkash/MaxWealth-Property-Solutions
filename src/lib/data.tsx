
import React, { type SVGProps } from 'react';
import { 
  Briefcase, SearchCheck, TrendingUp, Handshake, Users, Workflow, Building, Building2 as DefaultBuildingIcon, Settings, 
  CalculatorIcon, HelpCircle, BrainCircuit, Download, ListChecks, ConciergeBell, Home, Gem, Hotel, 
  ShieldCheck, MapPin, Percent, Landmark, Plane, Utensils, Train, Sailboat, ShoppingCart, 
  Trees, Sparkles, Lightbulb, BarChart2, Users2 as UsersIcon2, Target, Scale, CheckCircle as CheckCircleIcon, 
  ThumbsUp, Clock, Calendar, Award, MessageCircle, BookOpenCheck, FileSearch, Brain, Timer, Star, 
  Camera as LucideCamera, Bus as LucideBus, DollarSign, FileText as LucideFileText, Linkedin, Mail, X as TwitterIcon, 
  Instagram as InstagramIcon, Zap, BarChartBig, BadgePercent, Network, UserCog, SearchCode, 
  Search as SearchIconLucide, BookOpen, Newspaper, Video, BookText, Clapperboard 
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Import data from new segregated files
import { articlesData } from './data/articles';
import { mediaTypeIcons, type MediaType } from './data/media-types';
import { faqData, type FaqItem } from './data/faqs';
import { teamMembersDetailedData, type TeamMemberDetailed } from './data/team';
import { serviceLocationsData, type ServiceLocationItem } from './data/locations';
// Guides data is fetched via API on its page, not needed for direct import here for siteSearchableContent unless we change that strategy.
// Testimonials data is fetched via API on its page.

// Partner data can remain here or be segregated later
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


// Data related to "About Us" page structure (could be segregated later if it grows)
export const aboutUsSubItems = [
  { href: '/about/our-company', label: 'Our Company', icon: DefaultBuildingIcon, description: 'Learn about our mission, vision, and values.' },
  { href: '/about/our-team', label: 'Our Team', icon: Users, description: 'Meet the professionals behind MaxWealth PS.' },
  { href: '/about/our-services', label: 'Our Services', icon: ConciergeBell, description: 'Explore the services we offer.' }, 
  { href: '/about/our-process', label: 'Our Process', icon: Workflow, description: 'Discover how we help you succeed.' },
];

// Data related to "Resources" page structure
export const resourceSubItems = [
  { href: '/resources/ai-tools', label: 'AI-Powered Tools', icon: BrainCircuit, description: 'Leverage intelligent financial tools.' },
  { href: '/resources/free-guides', label: 'Free Guides & E-Books', icon: Download, description: 'Access valuable downloadable resources.' },
  { href: '/resources/calculators', label: 'Financial Calculators', icon: CalculatorIcon, description: 'Estimate payments and affordability.' },
  { href: '/resources/roadmap', label: 'Home Buying Roadmap', icon: ListChecks, description: 'Navigate your path to homeownership.' },
  { href: '/resources/faq', label: 'FAQ', icon: HelpCircle, description: 'Find answers to common questions.' },
];

// "Who We Help" data (used on Our Services page and for individual service pages logic)
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
  { id: 'help1', slug: 'residential-home', title: 'Residential Home', description: 'Helping you find the perfect home, whether it’s your first or forever home. We ensure it meets your needs and long-term goals, making the buying process seamless and stress-free.', icon: Home, image: 'https://placehold.co/600x400.png', dataAiHint: 'family home residential' },
  { id: 'help2', slug: 'investment-property', title: 'Investment Property', description: 'Guiding you to high-yield investment properties that match your financial objectives. Our expertise ensures you make informed decisions to grow your property portfolio and achieve strong returns.', icon: TrendingUp, image: 'https://placehold.co/600x400.png', dataAiHint: 'investment chart property' },
  { id: 'help3', slug: 'commercial-property', title: 'Commercial Property', description: 'Assisting you in finding the right commercial space for your business needs. From office buildings to retail spaces, we help you secure the ideal location to support your growth.', icon: DefaultBuildingIcon, image: 'https://placehold.co/600x400.png', dataAiHint: 'commercial building office' },
  { id: 'help4', slug: 'prestige-property', title: 'Prestige Property', description: 'Specialising in luxury homes that offer the highest level of comfort and style. We match you with properties that reflect your lifestyle and aspirations, ensuring a perfect fit.', icon: Gem, image: 'https://placehold.co/600x400.png', dataAiHint: 'luxury mansion prestige' },
  { id: 'help5', slug: 'holiday-home', title: 'Holiday Home', description: 'Helping you discover the ideal holiday property, whether for personal enjoyment or investment. We find locations that offer relaxation and strong potential for future returns.', icon: Hotel, image: 'https://placehold.co/600x400.png', dataAiHint: 'beach house holiday' },
  { id: 'help6', slug: 'property-management', title: 'Property Management', description: 'Offering professional property management services that protect your investment. We handle everything from tenant relations to maintenance, ensuring your property is well-maintained and profitable.', icon: ShieldCheck, image: 'https://placehold.co/600x400.png', dataAiHint: 'property keys management' },
];


// Data specific to Service Detail pages (these are fairly static and used across multiple service pages)
export const genericServicePageTestimonial = {
  name: "Sarah & Jeff",
  role: "Northern Beaches Home Buyers",
  image: "https://placehold.co/150x150.png",
  dataAiHint: "couple happy northern beaches",
  quote: "Rich was on the ball all the time, he had off-market properties we didn’t have access to and took the hard work out of the process. We had a pretty tight brief and we probably wouldn’t have been able to find the house on our own. We couldn’t fault the experience, or fault working with Rich and would recommend using him to anyone."
};
export const awardsPlaceholderText = "Finalist – 2022 Award for Office Administrator of the Year - Michelle Derderyan. Multiple REINSW & REIQ Award Winner.";
export interface ServicePageCtaCardItem { id: string; title: string; description: string; icon: LucideIcon; }
export const servicePageCtaCardsData: ServicePageCtaCardItem[] = [
  { id: 'cta1', title: 'UNSURE OF WHAT YOU WANT?', description: 'Are you feeling overwhelmed, frustrated, or simply tired of searching for real estate in the residential areas in Sydney, Brisbane, and other key locations?', icon: HelpCircle },
  { id: 'cta2', title: 'DON\\\'T HAVE THE TIME?', description: 'Have biased real estate agents taken you to homes and apartments that are way off the mark? Have they tried to convince you that buying a home is easy?', icon: Timer },
  { id: 'cta3', title: 'MISSED OUT AT AUCTIONS?', description: 'Have you had to try and cope at a property auction without any support? Have you missed out on several suitable homes for sale as a result?', icon: Award },
];
export interface ServicePageBenefitPoint { id: string; title: string; description: string; icon: LucideIcon; }
export const servicePageBenefitPointsData: ServicePageBenefitPoint[] = [
  { id: 'bp1', title: 'ACCESS MORE PROPERTIES', description: 'We uncover off-market properties (silent listings) and pre-listings before they hit the market. If a house is for sale, we know about it', icon: DefaultBuildingIcon },
  { id: 'bp2', title: 'GET AHEAD OF OTHER BUYERS', description: 'Our experience and contacts give you the edge on other buyers.', icon: UsersIcon2 },
  { id: 'bp3', title: 'PAY THE RIGHT PRICE', description: 'Our vast and up-to-the-minute knowledge of real estate means we can provide a detailed appraisal on the value of your chosen property, then we negotiate hard to ensure you pay the best price.', icon: DollarSign },
  { id: 'bp4', title: 'SAVE TIME', description: 'We do all the hard work, plus we can tap into our extensive network to find your property much faster!', icon: Clock },
];
export interface HowWeHelpStep { id: string; title: string; description: string; icon: LucideIcon; }
export const howWeHelpStepsData: HowWeHelpStep[] = [
  { id: 'hwh1', title: 'HELP YOU BUILD YOUR BRIEF', description: 'What are your must haves and nice to haves, and what price guides will actually match your brief? Are you confused by typical price guides?', icon: LucideFileText },
  { id: 'hwh2', title: 'RESEARCH, SHORT LIST & EVALUATE', description: 'Our buyers’ agents specialise in certain areas, for example, the main cities in NSW, VIC, and QLD. This means they can easily research the...', icon: FileSearch },
  { id: 'hwh3', title: 'HANDLE THE NEGOTIATIONS', description: 'How well do you rate your negotiation skills? Is it at an expert level? Do you like dealing with real estate agents? Our knowledge of the...', icon: Handshake },
];


// Member Logos for Fees Explained Page (and potentially elsewhere)
export const memberLogos = [
  { id: 'ml1', hint: 'real estate institute logo' },
  { id: 'ml2', hint: 'property association logo' },
  { id: 'ml3', hint: 'industry body logo' },
  { id: 'ml4', hint: 'valuation board logo' },
  { id: 'ml5', hint: 'property institute logo' },
  { id: 'ml6', hint: 'certification program logo' },
];

// Buyer Types for Forms
export const buyerTypesData = [
  { value: "first_home_buyer", label: "First Home Buyer" },
  { value: "investor", label: "Investor" },
  { value: "upgrader", label: "Upgrader" },
  { value: "downsizer", label: "Downsizer" },
  { value: "commercial_buyer", label: "Commercial Buyer" },
  { value: "other", label: "Other" },
];

// Data for "Our Comprehensive Services" (used on About->Our Services & Homepage)
export interface ServiceOffering { id: string; title: string; intro: string; features: string[]; icon: LucideIcon; }
export const servicesData: ServiceOffering[] = [
  { id: 's1', title: 'Full Buying Service', intro: 'Want MaxWealth PS to handle everything for you? We’ll handle every step of the process from search to settlement.', features: [ 'Property consultation', 'Full property search', 'Off-market opportunities', 'Inspection & due diligence', 'Negotiation/purchase', 'Property Settlement' ], icon: Briefcase, },
  { id: 's2', title: 'Inspect & Negotiate', intro: 'Found a property you want to buy? Let MaxWealth PS negotiate the best deal possible for you.', features: [ 'Purchase strategy meeting', 'Inspection & due diligence', 'Negotiation/purchase', 'Property settlement' ], icon: SearchCheck, },
  { id: 's3', title: 'Auction Bidding', intro: 'Win your real estate auction! We’ll do your auction bidding for you and make your property auction stress-free.', features: [ 'Auction strategy meeting', 'Auction bidding service', 'Contracts and purchase', 'Property settlement' ], icon: Percent, }
];

// Data for "The MaxWealth PS Advantage" (Contact Page)
export interface DifferencePoint { id: string; title: string; description: string; icon: LucideIcon; }
export const maxWealthDifferenceData: DifferencePoint[] = [
  { id: 'diff1', title: 'Deep Market Expertise', description: 'Over two decades of navigating local markets, providing you unparalleled insights and successful outcomes.', icon: Zap, },
  { id: 'diff2', title: 'Holistic Financial Strategy', description: 'We cover all aspects of home financing, from initial planning to securing investment properties and commercial assets.', icon: BarChartBig, },
  { id: 'diff3', title: 'Client-Centric Results', description: 'Our commitment to service excellence ensures a stress-free journey tailored to your unique financial goals.', icon: ThumbsUp, },
  { id: 'diff4', title: 'Precision Appraisals', description: 'Leveraging cutting-edge data and local knowledge for highly accurate property valuations and informed decisions.', icon: BadgePercent, },
  { id: 'diff5', title: 'Exclusive Network Access', description: 'Gain an edge with our extensive database of agents and access to off-market opportunities.', icon: Network, },
  { id: 'diff6', title: 'Advanced Research & AI Tools', description: 'Utilizing our proprietary "Suburb Selector™", AI insights, and live data for the latest property intelligence.', icon: SearchCode, },
];

// Data for "Comprehensive Property Buyer Services" (Homepage, Our Services Page)
export interface ComprehensiveServiceItem { id: string; icon: LucideIcon; title: string; description: string; }
export const comprehensiveServicesData: ComprehensiveServiceItem[] = [
  {
    id: 'cs1',
    icon: Target,
    title: 'Assess Financial Goals and Strategies',
    description: 'We help you define clear financial goals and craft tailored strategies to achieve your property ambitions.',
  },
  {
    id: 'cs2',
    icon: CalculatorIcon,
    title: 'Evaluation of the Borrowing Capacity',
    description: 'Gain a clear understanding of your borrowing power with our thorough capacity evaluation and pre-qualification.',
  },
  {
    id: 'cs3',
    icon: CheckCircleIcon,
    title: 'Mortgage and Loan Approvals',
    description: 'Navigating the loan approval process seamlessly to secure the best mortgage options for your purchase.',
  },
  {
    id: 'cs4',
    icon: SearchCode,
    title: 'Property Search & Selection',
    description: 'Access to off-market properties and comprehensive market analysis across all major Australian cities.',
  },
  {
    id: 'cs5',
    icon: FileSearch,
    title: 'Due Diligence & Inspections',
    description: 'Thorough property evaluations, building inspections, and legal compliance checks.',
  },
  {
    id: 'cs6',
    icon: Handshake,
    title: 'Negotiation & Purchase',
    description: 'Expert negotiation to secure the best price and terms for your property purchase.',
  },
   {
    id: 'cs7',
    icon: Briefcase,
    title: 'Settlement Support',
    description: 'Complete settlement coordination and post-purchase support services.',
  },
  {
    id: 'cs8',
    icon: Award,
    title: 'Auction Bidding',
    description: 'Professional auction representation to secure your dream property at competitive prices.',
  },
  {
    id: 'cs9',
    icon: Home,
    title: 'Property Management',
    description: 'Comprehensive property management services to maximize your investment returns and minimize hassle.',
  },
  {
    id: 'cs10',
    icon: Settings,
    title: 'Property Renovation and improvement',
    description: 'Advising on value-adding renovations and improvements to enhance your property\'s worth and appeal.',
  },
  {
    id: 'cs11',
    icon: BarChart2,
    title: 'Portfolio Assessment and Valuation',
    description: 'Regular portfolio assessment and professional valuation to track performance and identify opportunities.',
  },
  {
    id: 'cs12',
    icon: TrendingUp,
    title: 'Investment and Portfolio Analysis',
    description: 'In-depth analysis of your existing portfolio and new investment opportunities to ensure optimal growth.',
  },
];


// Data for "Proven 5-Step Process" (Homepage)
export interface ProcessStepItem { id: string; stepNumber: string; title: string; description: string; }
export const provenProcessStepsData: ProcessStepItem[] = [
  { id: 'step1', stepNumber: '01', title: 'Strategy Call', description: 'Free consultation to understand your needs and budget', },
  { id: 'step2', stepNumber: '02', title: 'Market Research', description: 'Comprehensive analysis of target areas and properties', },
  { id: 'step3', stepNumber: '03', title: 'Property Search', description: 'Access to on and off-market opportunities', },
  { id: 'step4', stepNumber: '04', title: 'Negotiation', description: 'Expert negotiation to secure the best deal', },
  { id: 'step5', stepNumber: '05', title: 'Settlement', description: 'Complete settlement support and handover', },
];

// Data for Recent Purchases (Service Detail Page)
export interface RecentPurchaseItem { id: string; category: 'Residential' | 'Commercial'; name?: string; city: string; title: string; details: { [key: string]: string }; image: string; dataAiHint: string; }
export const recentPurchasesData: RecentPurchaseItem[] = [
  { id: 'rp1', category: 'Commercial', name: 'Raji', city: 'Redfern, NSW', title: 'Sydney City-Fringe Freehold Trophy Asset - Owner Occupier', details: { 'Purchase Price': '$10,500,000', 'Appraisal': '$12,000,000', 'Location': 'Redfern', 'NLA': '1096m2 + 18 car spaces', 'LAND AREA': '584m4', 'ZONING': 'MU1 mixed-use', 'OTHER': 'Corner site, 300m from Redfern Station' }, image: 'https://placehold.co/600x400.png', dataAiHint: 'commercial building city' },
  { id: 'rp2', category: 'Commercial', name: 'Edgar', city: 'Brisbane, QLD', title: 'Set & Forget Investment with 10 year long lease to International Tenant', details: { 'ASKING PRICE': '$2,800,000', 'PURCHASE PRICE': '$2,665,200', 'LOCATION': 'Brisbane, QLD', 'ANNUAL NET RENT': '$160,000 Net + GST + Outgoings', 'NET YIELD': '6%', 'LEASE TERM': '5+% year lease to 2033', 'INCREASE': '4% or CPI', 'NLA': '762m2 + 9 car spaces', 'LAND': 'n/a', 'TENANT': 'International' }, image: 'https://placehold.co/600x400.png', dataAiHint: 'office building brisbane' },
  { id: 'rp3', category: 'Commercial', name: 'Myrtle Cottage', city: 'Spring Farm, NSW', title: 'NDIS in South-West Sydney - NFP Owner-Occupier', details: { 'Purchase Price': '$1,300,000', 'LOCATION': 'Spring Farm, NSW', 'NLA': '250m2', 'LAND AREA': '817m2', 'ZONING': 'R1 General Residential (allowing for community facilities)', 'TYPE': 'Freehold', 'USE': 'Proposed NDIS', 'SOURCED IN': '45 days' }, image: 'https://placehold.co/600x400.png', dataAiHint: 'community facility building' },
  { id: 'rp4', category: 'Residential', name: 'Raji', city: 'Wentworth Point, NSW', title: 'Modern Apartment with Water Views', details: { 'Purchase Price': '$850,000', 'Appraisal': '$870,000', 'Location': 'Wentworth Point', 'Bedrooms': '2', 'Bathrooms': '2', 'Parking': '1 car space', 'OTHER': 'Close to ferry and amenities' }, image: 'https://placehold.co/600x400.png', dataAiHint: 'apartment modern sydney' },
  { id: 'rp5', category: 'Residential', name: 'Edgar', city: 'Eastern Suburbs, VIC', title: 'Family Home in Leafy Suburb', details: { 'Purchase Price': '$1,200,000', 'Location': 'Eastern Suburbs, VIC', 'Bedrooms': '4', 'Bathrooms': '2.5', 'Land Size': '650m2', 'OTHER': 'Renovated kitchen, large backyard' }, image: 'https://placehold.co/600x400.png', dataAiHint: 'family house suburb' },
  { id: 'rp6', category: 'Residential', name: 'Myrtle Cottage', city: 'Eastern Suburbs, QLD', title: 'Charming Queenslander with Character', details: { 'Purchase Price': '$950,000', 'Location': 'Eastern Suburbs, QLD', 'Bedrooms': '3', 'Bathrooms': '1', 'Land Size': '500m2', 'OTHER': 'Original features, potential to extend' }, image: 'https://placehold.co/600x400.png', dataAiHint: 'queenslander house charming' },
];

// Site Searchable Content
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

  ...articlesData.map(article => ({
    id: `media-${article.id}`,
    title: article.title,
    description: article.description,
    href: `/media/${article.id}`,
    type: 'Media' as SearchableContentType,
    keywords: [article.type.toLowerCase(), article.category.toLowerCase(), ...(article.tags || [])],
    category: article.category,
    icon: mediaTypeIcons[article.type as MediaType] || Newspaper,
  })),

  ...whoWeHelpData.map(service => ({
    id: `service-type-${service.slug}`,
    title: `${service.title} Buying Services`,
    description: service.description,
    href: `/services/${service.slug}`,
    type: 'Service Type' as SearchableContentType,
    keywords: [service.title.toLowerCase(), 'property buying', 'buyer agent', service.slug.replace('-', ' ')],
    icon: service.icon,
  })),

  ...serviceLocationsData.map(location => ({
    id: `location-${location.slug}`,
    title: `Property Buyers Agent in ${location.name}`,
    description: location.tagline || `Expert buyer's agent services for ${location.name}. Discover properties in ${location.name}.`,
    href: `/locations/${location.slug}`,
    type: 'Location' as SearchableContentType,
    keywords: [location.name.toLowerCase(), 'buyer agent', 'property', location.slug.replace('-', ' '), 'real estate'],
    icon: MapPin,
  })),
  
  ...teamMembersDetailedData.map(member => ({
    id: `team-${member.id}`,
    title: `${member.name} - ${member.title}`,
    description: member.bio.substring(0, 150) + '...',
    href: '/about/our-team', 
    type: 'Team Member' as SearchableContentType,
    keywords: [member.name.toLowerCase(), member.title.toLowerCase(), 'team', 'advisor', 'advocate'],
    icon: Users,
  })),

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
// Ensure all icons are imported if used here.
// For example, if a SearchResultItem has icon: Home, ensure Home from lucide-react is imported.
// Make sure all icons used in siteSearchableContent are imported.
// Example, Home is used for the homepage search result.
// Make sure it and others (Building, Users, ConciergeBell, etc.) are in the lucide-react import line.




