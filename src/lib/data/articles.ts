
import type { LucideIcon } from 'lucide-react';
import { Newspaper, Video, BookText, Clapperboard } from 'lucide-react'; // Ensure all icons used in articlesData are here
import type { MediaType } from './media-types';

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
  icon: LucideIcon; // Actual icon component for direct imports (e.g., siteSearchableContent)
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
    icon: BookText, // Changed from Newspaper to BookText for variety if type is 'Blog'
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
    icon: BookText, // Changed from Newspaper to BookText for 'Blog'
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
