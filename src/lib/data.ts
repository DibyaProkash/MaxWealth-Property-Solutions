
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
  description: string; // This will serve as summary
  fullContent?: string; // Optional: for more detailed content later
  image: string;
  dataAiHint: string;
  type: 'Blog' | 'Vlog';
  date: string;
  icon: LucideIcon;
  author?: string; // Optional
  tags?: string[]; // Optional
}

export const articlesData: Article[] = [
  {
    id: '1',
    title: 'Understanding Mortgage Rates in 2024',
    description: 'A deep dive into current mortgage trends and how they affect your buying power. This article explores various factors influencing rates.',
    fullContent: 'The landscape of mortgage rates in 2024 is shaped by a confluence of economic indicators, Federal Reserve policies, and global market dynamics. Understanding these elements is crucial for prospective homebuyers. Inflation remains a key concern, with central banks worldwide attempting to curb rising prices through monetary tightening. This typically translates to higher borrowing costs, including mortgages. However, the pace and extent of these increases can vary. We also delve into how different types of mortgages (fixed-rate, adjustable-rate) are impacted and what strategies buyers can employ to secure the best possible terms in this evolving environment. Furthermore, we analyze historical trends to provide context and discuss expert predictions for the remainder of the year.',
    image: 'https://placehold.co/800x450.png',
    dataAiHint: 'finance graph',
    type: 'Blog',
    date: '2024-07-15',
    icon: Newspaper,
    author: 'Jane Doe, Senior Financial Analyst',
    tags: ['mortgage rates', 'real estate', 'finance', '2024 trends'],
  },
  {
    id: '2',
    title: 'First-Time Home Buyer? Watch This First!',
    description: 'Our latest vlog covers essential tips for navigating your first home purchase, from saving for a down payment to understanding closing.',
    fullContent: 'Embarking on the journey of buying your first home is exciting, but it can also be overwhelming. This vlog breaks down the process into manageable steps. We start with the critical phase of financial preparation: assessing your budget, understanding your credit score, and strategies for saving an adequate down payment. We then discuss the importance of getting pre-approved for a mortgage and how this strengthens your position as a buyer. The vlog also covers tips for finding the right real estate agent, what to look for during home viewings, and the basics of making an offer. Finally, we demystify the closing process, explaining common terms and what to expect on closing day. Our goal is to empower you with knowledge and confidence as you take this significant step.',
    image: 'https://placehold.co/800x450.png',
    dataAiHint: 'home keys',
    type: 'Vlog',
    date: '2024-07-10',
    icon: Video,
    author: 'MaxWealth PS Team',
    tags: ['first-time buyer', 'home buying', 'vlog', 'financial tips'],
  },
  {
    id: '3',
    title: 'Saving Strategies for Your Down Payment',
    description: 'Practical advice on building your down payment fund effectively. Learn about different savings accounts and goal-setting.',
    fullContent: 'A significant hurdle for many aspiring homeowners is accumulating the down payment. This article provides actionable strategies to help you reach your savings goal. We explore various savings vehicles, such as high-yield savings accounts, money market accounts, and CDs, discussing their pros and cons. We also emphasize the importance of creating a realistic budget and identifying areas where you can cut expenses. Setting clear, achievable savings milestones and automating your contributions can significantly boost your progress. Additionally, we touch upon potential down payment assistance programs and gifts from family, outlining the regulations and implications involved. With discipline and a smart approach, saving for a down payment is an attainable goal.',
    image: 'https://placehold.co/800x450.png',
    dataAiHint: 'savings money',
    type: 'Blog',
    date: '2024-06-25',
    icon: Newspaper,
    author: 'John Smith, Financial Planner',
    tags: ['down payment', 'savings', 'budgeting', 'personal finance'],
  },
  {
    id: '4',
    title: 'The Future of Real Estate Technology',
    description: 'Exploring how tech is shaping the home buying and selling process, from AI-powered searches to virtual tours.',
    fullContent: 'Technology is revolutionizing the real estate industry at a rapid pace. This article examines the latest technological advancements and how they are transforming the experience for buyers, sellers, and agents. We look at the rise of AI-powered property search platforms that offer more personalized and predictive recommendations. Virtual and augmented reality are making remote property viewings more immersive and effective. Blockchain technology is being explored for its potential to streamline transactions and enhance security. We also discuss the impact of big data analytics on market forecasting and property valuation. Understanding these technological shifts is essential for anyone involved in the real estate market today and in the future.',
    image: 'https://placehold.co/800x450.png',
    dataAiHint: 'technology real estate',
    type: 'Blog',
    date: '2024-06-12',
    icon: Newspaper,
    author: 'Tech Forward Insights',
    tags: ['real estate tech', 'AI', 'virtual tours', 'proptech'],
  },
  {
    id: '5',
    title: 'Navigating Closing Costs: A Complete Guide',
    description: 'Understand all the fees involved when you close on your new home in this comprehensive vlog.',
    fullContent: 'Closing costs can often be an unexpected surprise for homebuyers. This vlog aims to demystify these expenses, providing a comprehensive overview of what they are and why they are necessary. We break down common closing costs, including lender fees (origination, underwriting, appraisal), third-party fees (title insurance, escrow, inspection), and prepaid items (property taxes, homeowners insurance). We explain who typically pays for which costs and how they can vary by location and lender. The vlog also offers tips on how to potentially reduce closing costs, such as negotiating with the seller or shopping around for services. Being well-informed about closing costs is key to a smooth and financially prepared home purchase.',
    image: 'https://placehold.co/800x450.png',
    dataAiHint: 'documents signature',
    type: 'Vlog',
    date: '2024-05-30',
    icon: Video,
    author: 'MaxWealth PS Finance Experts',
    tags: ['closing costs', 'home buying', 'vlog', 'real estate finance'],
  },
  {
    id: '6',
    title: 'Market Update Q3: Trends to Watch',
    description: 'An overview of the real estate market performance in the third quarter and predictions for what lies ahead.',
    fullContent: 'As we move through the third quarter, it\'s essential to stay updated on the latest real estate market trends. This article provides an analysis of Q3 performance, looking at key indicators such as sales volume, median prices, inventory levels, and days on market. We examine regional variations and the factors driving these trends, including interest rate movements, economic conditions, and buyer sentiment. Furthermore, we offer insights into what these trends might mean for the remainder ofthe year and into early 2025, helping both buyers and sellers make informed decisions in the current market landscape. We also highlight specific opportunities and challenges that may arise based on these evolving conditions.',
    image: 'https://placehold.co/800x450.png',
    dataAiHint: 'market chart',
    type: 'Blog',
    date: '2024-07-20',
    icon: Newspaper,
    author: 'Market Analysis Group',
    tags: ['market update', 'real estate trends', 'Q3 analysis', 'property market'],
  },
  {
    id: '7',
    title: 'Impact of Credit Score on Mortgages (Vlog)',
    description: 'Learn how your credit score affects your mortgage options, interest rates, and overall borrowing power in this informative vlog.',
    fullContent: 'Your credit score is one ofthe most critical factors when applying for a mortgage. In this vlog, we explain in simple terms what a credit score is, how it\'s calculated, and why it matters so much to lenders. We discuss how different credit score ranges can impact the interest rates you qualify for, the types of loan programs available to you, and even the amount you can borrow. The vlog also provides practical tips on how to check your credit report, dispute errors, and take steps to improve your credit score over time. Understanding the impact of your credit score is the first step towards securing the best possible mortgage terms for your new home.',
    image: 'https://placehold.co/800x450.png',
    dataAiHint: 'credit score',
    type: 'Vlog',
    date: '2024-05-15',
    icon: Video,
    author: 'CreditWise Advisors',
    tags: ['credit score', 'mortgage', 'vlog', 'interest rates', 'financing'],
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
    answer: 'The traditional down payment is 20% of the home\'s purchase price, but many loan programs allow for much lower down payments, some as low as 3% or even 0% for certain government-backed loans like VA or USDA loans. We can explore options that fit your financial situation.'
  },
  {
    id: 'faq3',
    question: 'What are closing costs?',
    answer: 'Closing costs are fees associated with finalizing your mortgage and purchasing the home. They typically range from 2% to 5% of the home\'s purchase price and can include expenses like appraisal fees, title insurance, loan origination fees, and pre-paid property taxes and insurance.'
  },
  {
    id: 'faq4',
    question: 'What is PITI?',
    answer: 'PITI stands for Principal, Interest, Taxes, and Insurance. This represents the total monthly housing payment. Principal is the portion that reduces your loan balance, Interest is the cost of borrowing, Taxes refer to property taxes, and Insurance is homeowners insurance.'
  },
  {
    id: 'faq5',
    question: 'Should I get pre-approved for a mortgage before looking for homes?',
    answer: 'Yes, absolutely! Getting pre-approved gives you a clear idea of how much you can afford, shows sellers you are a serious buyer, and can speed up the closing process once you find a home. It\'s a crucial first step in the home buying journey.'
  },
  {
    id: 'faq6',
    question: 'How long does the home buying process typically take?',
    answer: 'The home buying process can vary significantly, but on average, it can take anywhere from 30 to 60 days from the time your offer is accepted to closing day. The search for a home can take much longer, depending on market conditions and your specific needs.'
  }
];
