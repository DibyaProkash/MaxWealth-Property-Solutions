
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
