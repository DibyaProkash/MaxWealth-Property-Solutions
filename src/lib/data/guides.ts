
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
