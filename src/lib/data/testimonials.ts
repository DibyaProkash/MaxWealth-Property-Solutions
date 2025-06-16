
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
