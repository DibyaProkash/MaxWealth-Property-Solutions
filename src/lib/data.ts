
import React, { type SVGProps } from 'react';
import { Newspaper, Video, type LucideIcon, BookText, Clapperboard, Briefcase, SearchCheck, TrendingUp, Handshake, Users, Workflow, Building, Building2, Settings, CalculatorIcon, HelpCircle, BrainCircuit, Download, ListChecks, ConciergeBell, Home, Gem, Hotel, ShieldCheck, MapPin, BuildingIcon as DefaultBuildingIcon, Percent, Landmark, Plane, Utensils, Train, Sailboat, ShoppingCart, Trees, Sparkles, Lightbulb, BarChart2, Users2, Target, Scale, CheckCircle, ThumbsUp, Clock, Calendar, Award, MessageCircle, BookOpenCheck, FileSearch, Brain, Timer, Star, Camera as LucideCamera, Bus as LucideBus, DollarSign, FileText as LucideFileText, Linkedin, Mail, X as TwitterIcon, Instagram as InstagramIcon, Zap, BarChartBig, BadgePercent, Network, UserCog, SearchCode, Search as SearchIconLucide } from 'lucide-react';


// Helper icon component (if not directly from lucide-react or if a specific one is needed)
// For example, a BusIcon if not in lucide or a custom one:
const BusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M8 6v6"/><path d="M16 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/></svg>
);

const CameraIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
);


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

export type MediaType = 'Blog' | 'Vlog' | 'Video' | 'Reel' | 'Article';

export const mediaTypeIcons: Record<MediaType, LucideIcon> = {
  'Blog': BookText,
  'Vlog': Clapperboard,
  'Video': Video,
  'Reel': Clapperboard,
  'Article': Newspaper,
};


export interface Article {
  id: string;
  title: string;
  description: string;
  fullContent?: string;
  image: string;
  dataAiHint: string;
  type: MediaType;
  category: string;
  date: string;
  icon: LucideIcon;
  author?: string;
  tags?: string[];
  readTime?: string;
  views?: string;
}

export const articlesData: Article[] = [
  {
    id: '1',
    title: 'Understanding Mortgage Rates in 2024',
    description: 'A deep dive into current mortgage trends and how they affect your buying power. This article explores various factors influencing rates.',
    fullContent: 'The 2024 mortgage market presents a dynamic environment for prospective homebuyers. Several key factors are influencing interest rates. Firstly, the Federal Reserve\\\'s monetary policy plays a pivotal role. Any adjustments to the federal funds rate can create ripple effects across the lending industry, impacting mortgage rates directly.\\n\\nSecondly, inflation trends continue to be a significant determinant. High inflation often leads to higher interest rates as lenders seek to protect the real value of their returns. Conversely, if inflation cools, we might see some stabilization or even a slight decrease in rates. Economic growth, unemployment figures, and overall market sentiment also contribute to the complex equation of mortgage rate fluctuations. For instance, a robust economy might lead to increased demand for housing and potentially higher rates, while economic uncertainty could have the opposite effect.\\n\\nIt\\\'s also crucial to consider the type of mortgage. Fixed-rate mortgages offer stability over the loan term, locking in a rate regardless of market changes. Adjustable-rate mortgages (ARMs) typically start with a lower rate but can change periodically based on market indexes. Understanding the nuances of each can help buyers make informed decisions. We advise consulting with a financial advisor to navigate these complexities and find the best mortgage product for your specific situation.',
    image: 'https://placehold.co/800x450.png',
    dataAiHint: 'finance graph',
    type: 'Article',
    category: 'Market Analysis',
    date: '2024-07-15',
    icon: Newspaper,
    author: 'Jane Doe, Senior Financial Analyst',
    tags: ['mortgage rates', 'real estate', 'finance', '2024 trends'],
    readTime: '7 min read',
    views: '1.2k',
  },
  {
    id: '2',
    title: 'First-Time Home Buyer? Watch This First!',
    description: 'Our latest vlog covers essential tips for navigating your first home purchase, from saving for a down payment to understanding closing.',
    fullContent: 'Welcome, future homeowners! Buying your first home is a monumental step, and this vlog is designed to guide you through the essentials. We begin by emphasizing financial preparedness. This involves a thorough assessment of your current financial health – your income, expenses, debts, and most importantly, your credit score. A higher credit score generally unlocks better mortgage terms. We also discuss practical strategies for saving for a down payment, which can often seem like the biggest hurdle. Setting up a dedicated savings account and automating contributions are excellent starting points.\\n\\nNext, we dive into the pre-approval process. Obtaining a mortgage pre-approval before you start house hunting is crucial. It gives you a clear budget, shows sellers you\\\'re a serious buyer, and can expedite the offer process. Choosing the right real estate agent is another key topic. Look for an agent with experience in your desired area and a good understanding of first-time buyer needs. During the home search, we advise creating a list of "must-haves" versus "nice-to-haves" to stay focused. When you find "the one," making a competitive offer involves more than just the price; contingencies like inspection and financing are also vital. Finally, we demystify the closing process, explaining the various documents you\\\'ll sign and the costs involved. Our aim is to equip you with the knowledge to make this journey as smooth as possible.',
    image: 'https://placehold.co/800x450.png',
    dataAiHint: 'home keys',
    type: 'Vlog',
    category: 'Buyer\\\'s Guide',
    date: '2024-07-10',
    icon: Video,
    author: 'MaxWealth PS Team',
    tags: ['first-time buyer', 'home buying', 'vlog', 'financial tips'],
    readTime: '10 min read',
    views: '3.1k',
  },
  {
    id: '3',
    title: 'Saving Strategies for Your Down Payment',
    description: 'Practical advice on building your down payment fund effectively. Learn about different savings accounts and goal-setting.',
    fullContent: 'Saving for a down payment is often the first major financial challenge for aspiring homeowners. This article outlines effective strategies to build your fund. Start by setting a clear goal: determine how much you need based on typical home prices in your target area and the type of mortgage you might pursue. Once you have a target, create a detailed budget to track your income and expenses. Identify areas where you can reduce spending – dining out, subscriptions, or entertainment – and redirect those funds towards your down payment savings.\\n\\nConsider opening a high-yield savings account specifically for your down payment. These accounts often offer better interest rates than traditional savings accounts, helping your money grow faster. Automating your savings by setting up regular transfers from your checking account to your down payment fund can also be highly effective, ensuring consistency. Explore if your employer offers any programs or if there are government-backed down payment assistance programs you might qualify for. Sometimes, financial gifts from family can contribute, but be sure to understand any rules or tax implications. Remember, consistency and discipline are key. Even small, regular contributions can add up significantly over time.',
    image: 'https://placehold.co/800x450.png',
    dataAiHint: 'savings money',
    type: 'Blog',
    category: 'Finance & Economics',
    date: '2024-06-25',
    icon: Newspaper,
    author: 'John Smith, Financial Planner',
    tags: ['down payment', 'savings', 'budgeting', 'personal finance'],
    readTime: '6 min read',
    views: '875',
  },
  {
    id: '4',
    title: 'The Future of Real Estate Technology',
    description: 'Exploring how tech is shaping the home buying and selling process, from AI-powered searches to virtual tours.',
    fullContent: 'The real estate industry is undergoing a significant transformation driven by technology. AI-powered search platforms are becoming increasingly sophisticated, offering personalized property recommendations based on user behavior and preferences, going beyond simple keyword searches. Virtual Reality (VR) and Augmented Reality (AR) are revolutionizing property viewings. VR tours allow potential buyers to explore homes remotely in immersive detail, saving time and effort, especially for out-of-town buyers. AR can help visualize renovations or furniture placements within a space.\\n\\nBlockchain technology is also emerging as a potential game-changer. Its proponents suggest it could streamline transactions, enhance security, and improve transparency in property records and ownership transfers, though widespread adoption is still in its early stages. Big data analytics are providing deeper insights into market trends, property valuations, and investment opportunities, empowering both consumers and professionals. Furthermore, mobile apps continue to offer convenient access to listings, mortgage calculators, and communication tools. As these technologies mature and integrate, the home buying and selling process is set to become more efficient, data-driven, and user-centric.',
    image: 'https://placehold.co/800x450.png',
    dataAiHint: 'technology real estate',
    type: 'Article',
    category: 'Property Trends',
    date: '2024-06-12',
    icon: Newspaper,
    author: 'Tech Forward Media',
    tags: ['real estate tech', 'AI', 'virtual tours', 'proptech'],
    readTime: '8 min read',
    views: '1.5k',
  },
  {
    id: '5',
    title: 'Navigating Closing Costs: A Complete Guide',
    description: 'Understand all the fees involved when you close on your new home in this comprehensive vlog.',
    fullContent: 'Closing costs are a collection of fees paid at the final stage of a real estate transaction. They typically amount to 2-5% of the home\\\'s purchase price. This vlog provides a breakdown. Lender fees are a significant component, including loan origination fees (for processing the loan), underwriting fees (for assessing risk), and appraisal fees (to determine the property\\\'s market value). Title-related fees cover title searches (to ensure the seller has clear ownership) and title insurance (protecting the lender and buyer from future title disputes).\\n\\nEscrow fees are paid to a neutral third party that handles the funds and documents during the closing process. You\\\'ll also encounter recording fees, charged by local governments to record the sale publicly. Prepaid items are another category, often including upfront payments for property taxes and homeowners insurance, which are held in an escrow account by the lender. It\\\'s important to review your Loan Estimate carefully, which outlines these costs early in the process, and compare it to the Closing Disclosure you receive a few days before closing. Understanding these costs helps you budget effectively and avoid surprises on closing day. Don\\\'t hesitate to ask your lender or real estate agent to clarify any fees you don\\\'t understand.',
    image: 'https://placehold.co/800x450.png',
    dataAiHint: 'documents signature',
    type: 'Vlog',
    category: 'Buyer\\\'s Guide',
    date: '2024-05-30',
    icon: Video,
    author: 'MaxWealth PS Finance Experts',
    tags: ['closing costs', 'home buying', 'vlog', 'real estate finance'],
    readTime: '9 min read',
    views: '2.2k',
  },
  {
    id: '6',
    title: 'Market Update Q3: Trends to Watch',
    description: 'An overview of the real estate market performance in the third quarter and predictions for what lies ahead.',
    fullContent: 'The third quarter of the year often provides critical insights into the real estate market\\\'s trajectory. Key trends we are observing include shifts in inventory levels. In many areas, while still historically low, inventory has seen a slight uptick, potentially offering buyers more choices. Median home prices continue to show resilience, though the pace of appreciation may be moderating compared to previous periods. Interest rates remain a dominant factor influencing buyer affordability and market activity. Days on market (DOM) figures are also important to watch; a decrease in DOM suggests a faster-moving market, while an increase might indicate a cooling trend.\\n\\nRegional variations are prominent. Some metropolitan areas might experience continued high demand, while others could see more balanced conditions. We are also monitoring the impact of broader economic factors such as employment rates and consumer confidence on housing demand. Looking ahead, these Q3 trends will likely shape market dynamics for the remainder of the year and into early next year. Buyers should stay informed about local conditions and be prepared to act decisively when opportunities arise. Sellers should work with experienced agents to price their homes competitively based on current market realities.',
    image: 'https://placehold.co/800x450.png',
    dataAiHint: 'market chart',
    type: 'Blog',
    category: 'Market Analysis',
    date: '2024-07-20',
    icon: Newspaper,
    author: 'Market Analysis Group',
    tags: ['market update', 'real estate trends', 'Q3 analysis', 'property market'],
    readTime: '5 min read',
    views: '950',
  },
  {
    id: '7',
    title: 'Impact of Credit Score on Mortgages (Vlog)',
    description: 'Learn how your credit score affects your mortgage options, interest rates, and overall borrowing power in this informative vlog.',
    fullContent: 'Your credit score is a three-digit number that lenders use to assess your creditworthiness, essentially how likely you are to repay borrowed money. This vlog explains its profound impact on your mortgage journey. A higher credit score generally translates to lower interest rates, which can save you tens of thousands of dollars over the life of your loan. It can also mean access to a wider range of loan products and potentially lower down payment requirements.\\n\\nConversely, a lower credit score might result in higher interest rates, making your monthly payments more expensive, or it could even make it difficult to qualify for a mortgage at all with some lenders. We discuss the primary factors that influence your credit score: payment history (making payments on time is crucial), amounts owed (your credit utilization ratio), length of credit history, new credit (opening too many accounts quickly can be negative), and credit mix (having different types of credit). The vlog provides actionable advice on how to obtain your credit report (you\\\'re entitled to a free one annually from each major bureau), review it for errors, and strategies for improving your score over time. Building and maintaining good credit is a vital step towards favorable mortgage terms.',
    image: 'https://placehold.co/800x450.png',
    dataAiHint: 'credit score',
    type: 'Video',
    category: 'Finance & Economics',
    date: '2024-05-15',
    icon: Video,
    author: 'CreditWise Advisors',
    tags: ['credit score', 'mortgage', 'vlog', 'interest rates', 'financing'],
    readTime: '11 min read',
    views: '2.8k',
  },
   {
    id: '8',
    title: 'Investment Strategies for Real Estate',
    description: 'Explore different strategies for investing in real estate, from rental properties to REITs and flipping houses.',
    fullContent: 'Investing in real estate can be a powerful way to build wealth, but it\\\'s important to choose the right strategy. This article explores several popular approaches. Direct ownership of rental properties involves buying a property and leasing it out to tenants. This can provide regular cash flow and long-term appreciation but also requires active management. Real Estate Investment Trusts (REITs) offer a more passive way to invest by allowing you to buy shares in companies that own and operate income-producing real estate. This provides diversification and liquidity, similar to stocks.\\n\\nHouse flipping involves buying undervalued properties, renovating them, and selling them for a profit. This strategy can offer quick returns but also carries higher risk and requires significant expertise in renovation and market timing. Real estate wholesaling is another strategy where an investor contracts a home with a seller, then finds an interested party to buy it without actually taking ownership of the property. Crowdfunding platforms have also emerged, allowing multiple investors to pool funds for larger real estate projects. Each strategy has its own risk-reward profile, capital requirements, and time commitment. It\\\'s crucial to research thoroughly and consider your financial goals and risk tolerance before diving in. Consulting with a financial advisor specializing in real estate can help you determine the best path for your investment journey.',
    image: 'https://placehold.co/800x450.png',
    dataAiHint: 'investment strategy chart',
    type: 'Article',
    category: 'Investment Strategy',
    date: '2024-07-25',
    icon: Newspaper,
    author: 'InvestPro Group',
    tags: ['investment', 'real estate', 'strategy', 'rentals', 'REITs'],
    readTime: '9 min read',
    views: '1.9k',
  },
  {
    id: '9',
    title: 'Quick Guide to Home Loan Types',
    description: 'A 60-second reel explaining the basic differences between FHA, VA, Conventional, and USDA loans.',
    fullContent: 'This quick guide covers the main types of home loans. Conventional loans are not insured or guaranteed by the federal government. FHA loans are insured by the Federal Housing Administration and are popular with first-time buyers due to lower down payment requirements. VA loans are available to eligible veterans, active-duty military personnel, and surviving spouses, often with no down payment. USDA loans help moderate- to low-income homebuyers purchase homes in eligible rural areas, also often with no down payment. Each has specific eligibility criteria and benefits.',
    image: 'https://placehold.co/400x711.png',
    dataAiHint: 'mobile phone video',
    type: 'Reel',
    category: 'Buyer\\\'s Guide',
    date: '2024-07-28',
    icon: Clapperboard,
    author: 'MaxWealth PS Shorts',
    tags: ['home loans', 'fha', 'va', 'usda', 'mortgage types', 'reel'],
    readTime: '1 min watch',
    views: '5.5k',
  },
];


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

export interface Guide {
  id: string;
  title: string;
  description: string;
  image: string;
  dataAiHint: string;
  downloadLink?: string;
  category: string;
}

export const guidesData: Guide[] = [
  {
    id: 'guide1',
    title: 'The Ultimate First-Time Home Buyer\\\'s Guide',
    description: 'Everything you need to know, from saving for a down payment to getting the keys. This comprehensive e-book walks you through each step of the journey.',
    image: 'https://placehold.co/400x300.png',
    dataAiHint: 'ebook cover house',
    downloadLink: '#',
    category: 'E-Book',
  },
  {
    id: 'guide2',
    title: 'Investment Property Handbook: Strategies for Success',
    description: 'Learn how to identify lucrative investment properties, secure financing, and manage your portfolio for long-term growth.',
    image: 'https://placehold.co/400x300.png',
    dataAiHint: 'investment property',
    downloadLink: '#',
    category: 'E-Book',
  },
  {
    id: 'guide3',
    title: 'Refinancing Your Mortgage: A Smart Move?',
    description: 'Discover the pros and cons of refinancing, when it makes sense, and how to navigate the process to potentially save money.',
    image: 'https://placehold.co/400x300.png',
    dataAiHint: 'calculator money',
    downloadLink: '#',
    category: 'Guide',
  },
  {
    id: 'guide4',
    title: 'Checklist: Home Buying Documents',
    description: 'A handy checklist of all the documents you\\\'ll typically need when applying for a mortgage and purchasing a home.',
    image: 'https://placehold.co/400x300.png',
    dataAiHint: 'checklist documents',
    downloadLink: '#',
    category: 'Checklist',
  },
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


// --- New Data for Service Pages ---

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
  name?: string; // e.g., Raji, Edgar, Myrtle Cottage
  city: string; // e.g., Redfern, NSW
  title: string; // e.g., Sydney City-Fringe Freehold Trophy Asset...
  details: { [key: string]: string }; // For Purchase Price, Appraisal, etc.
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
    icon: Zap, // Represents energy, expertise
  },
  {
    id: 'diff2',
    title: 'Holistic Financial Strategy',
    description: 'We cover all aspects of home financing, from initial planning to securing investment properties and commercial assets.',
    icon: BarChartBig, // Represents comprehensive coverage/strategy
  },
  {
    id: 'diff3',
    title: 'Client-Centric Results',
    description: 'Our commitment to service excellence ensures a stress-free journey tailored to your unique financial goals.',
    icon: ThumbsUp, // Represents client satisfaction, positive results
  },
  {
    id: 'diff4',
    title: 'Precision Appraisals',
    description: 'Leveraging cutting-edge data and local knowledge for highly accurate property valuations and informed decisions.',
    icon: BadgePercent, // Represents accuracy, value
  },
  {
    id: 'diff5',
    title: 'Exclusive Network Access',
    description: 'Gain an edge with our extensive database of agents and access to off-market opportunities.',
    icon: Network, // Represents connections, network
  },
  {
    id: 'diff6',
    title: 'Advanced Research & AI Tools',
    description: 'Utilizing our proprietary "Suburb Selector™", AI insights, and live data for the latest property intelligence.',
    icon: SearchCode, // Represents research, tech, AI
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

// Search Functionality Data
export type SearchableContentType = 'Page' | 'Media' | 'Service Type' | 'Location' | 'Team Member' | 'Resource' | 'FAQ';

export interface SearchResultItem {
  id: string;
  title: string;
  description: string; // Snippet or description
  href: string;
  type: SearchableContentType;
  keywords?: string[];
  category?: string; // e.g., For Media: 'Market Analysis', 'Buyer\'s Guide'
  icon?: LucideIcon; // Optional icon for the result type
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

  // Media Content (Articles, Vlogs, etc.)
  ...articlesData.map(article => ({
    id: `media-${article.id}`,
    title: article.title,
    description: article.description,
    href: `/media/${article.id}`,
    type: 'Media' as SearchableContentType,
    keywords: [article.type.toLowerCase(), article.category.toLowerCase(), ...(article.tags || [])],
    category: article.category,
    icon: mediaTypeIcons[article.type] || Newspaper,
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
  
  // Team Members (Basic search on name and title)
  ...teamMembersDetailedData.map(member => ({
    id: `team-${member.id}`,
    title: `${member.name} - ${member.title}`,
    description: member.bio.substring(0, 150) + '...', // Snippet of bio
    href: '/about/our-team', // Link to team page, could be individual if pages existed
    type: 'Team Member' as SearchableContentType,
    keywords: [member.name.toLowerCase(), member.title.toLowerCase(), 'team', 'advisor', 'advocate'],
    icon: Users,
  })),

  // FAQs (Individual FAQs)
  ...faqData.map(faq => ({
    id: `faq-item-${faq.id}`,
    title: faq.question,
    description: faq.answer.substring(0,150) + '...',
    href: '/resources/faq', // Or link to /resources/faq#${faq.id} if possible with deep linking
    type: 'FAQ' as SearchableContentType,
    keywords: ['faq', ...faq.question.toLowerCase().split(' ').slice(0,5)], // some keywords from question
    icon: HelpCircle
  }))
];
// Ensure all icons are imported if used here.
// For example, if a SearchResultItem has icon: Home, ensure Home from lucide-react is imported.
// Make sure all icons used in siteSearchableContent are imported.
// Example, Home is used for the homepage search result.
// Make sure it and others (Building, Users, ConciergeBell, etc.) are in the lucide-react import line.

