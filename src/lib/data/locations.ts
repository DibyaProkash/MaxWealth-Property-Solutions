
import React, { type SVGProps } from 'react';
import type { LucideIcon } from 'lucide-react';
import { MapPin, Landmark, Train, Sailboat, Plane, Utensils, ShoppingCart, Trees, Sparkles, Target, Scale, Handshake, Lightbulb, Info } from 'lucide-react';
import { BusIcon, CameraIcon } from '@/components/icons/custom-icons';

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
  iconName?: string; 
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
      { subTitle: "Train", text: `Discover convenient train routes connecting ${cityName} to major hubs. Efficient and scenic journeys await.`, iconName: "Train" },
      { subTitle: "Bus Network", text: `Extensive bus networks provide easy access across ${cityName} and surrounding areas. Local and regional services available.`, iconName: "BusIcon" },
      { text: `General public transport in ${cityName} is designed for accessibility and convenience, making it easy to explore the city and its attractions.`, iconName: "MapPin" },
    ],
    image: 'https://placehold.co/600x450.png',
    imageAiHint: `transport ${cityName.toLowerCase()}`,
  },
  shopsAndRestaurants: {
    title: "SHOPS & RESTAURANTS",
    content: [
      { subTitle: "Retail Therapy", text: `${cityName} boasts a vibrant shopping scene, from boutique stores offering unique local crafts to major retail centers with global brands.`, iconName: "ShoppingCart" },
      { subTitle: "Culinary Delights", text: `Explore diverse culinary delights, with a wide array of cafes, casual eateries, and fine dining restaurants catering to all tastes in ${cityName}.`, iconName: "Utensils" },
    ],
    image: 'https://placehold.co/600x450.png',
    imageAiHint: `shopping ${cityName.toLowerCase()}`,
  },
  leisure: {
    title: "LEISURE & ATTRACTIONS",
    content: [
      { subTitle: "Culture & History", text: `Explore the rich cultural heritage of ${cityName} with its museums, galleries, and historic landmarks.`, iconName: "Landmark" },
      { subTitle: "Parks & Nature", text: `Enjoy outdoor activities in beautiful parks and natural reserves surrounding ${cityName}. Perfect for hiking, picnics, and relaxation.`, iconName: "Trees" },
      { subTitle: "Events & Entertainment", text: `The city offers a lively calendar of events, festivals, and entertainment options for all ages.`, iconName: "Sparkles" },
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
            { subTitle: "Train", text: "Every hour from Newcastle and every half-hour from Sydney, NSW TrainLink offers regular rail service to the Central Coast. The trip takes roughly one hour and thirty minutes from each location. For additional information, go to transportnsw.info.", iconName: "Train" },
            { subTitle: "Ferry", text: "Daily services between Sydney (Palm Beach) and the Central Coast are provided by Palm Beach Ferries (Ettalong Beach).", iconName: "Sailboat" },
            { subTitle: "Air", text: "About 115 kilometers and 1 hour and 15 minutes' driving separate Gosford from Newcastle Airport. About 85 kilometers and 1 hour and 20 minutes' journey separate Gosford from Sydney Airport.", iconName: "Plane" }
          ],
          image: 'https://placehold.co/600x450.png',
          imageAiHint: 'train station Central Coast'
        },
        shopsAndRestaurants: {
          title: "SHOPS & RESTAURANTS",
          content: [
            { subTitle: "Dining Hotspots", text: "For 1950s-style pizza and tropical beverages, head to Tropicana Social Club in Woy Woy, or travel back another 20 years with a drink at Hotel Mezza in Wyong, which is situated in a former bank from the 1930s. Long Jetty's The Savoy, a former 1950s theater that has been transformed into a multi-purpose bar and restaurant with frequent movie screenings, is another heritage property that has been brought back to life. After undergoing a significant renovation, Hotel Gosford has once again established itself as a legendary bar; its slick Art Deco design pays homage to its 1920s roots. Terrigal, a coastal town, is home to the edgy Pocket Bar, which serves up creative drinks and mouthwatering bar snacks.", iconName: "Utensils" },
            { subTitle: "Shopping Destinations", text: "Discover a mix of local boutiques, surf shops, and larger shopping centres like Erina Fair, offering a wide range of retail options.", iconName: "ShoppingCart" }
          ],
          image: 'https://placehold.co/600x450.png',
          imageAiHint: 'restaurant cafe Central Coast'
        },
        leisure: {
          title: "LEISURE & ATTRACTIONS",
          content: [
            { subTitle: "Beaches & Waterways", text: "The Central Coast is a beach lover's paradise with an 87-kilometre coastline and over 40 beaches. Finding a piece of beach and taking advantage of the ocean lifestyle—whether that means splashing around at Toowoon Bay with the kids, dipping into the water at The Entrance Ocean Baths, or exploring the rock pools at MacMasters Beach or Pearl Beach—is practically a given when on vacation.", iconName: "Sailboat" },
            { subTitle: "Natural Beauty", text: "Between Sydney and Newcastle, NSW's second-largest city, is the Central Coast. The area is introduced in Kate Grenville's classic historical novel The Hidden River, which is located in Broken Bay near the mouth of the lovely Hawkesbury River.", iconName: "Trees" },
            { subTitle: "Local Attractions", text: "Pelican feeding time at Pelican Plaza, The Entrance, is a well-known sight on the Central Coast. At 3.30 pm every afternoon, Australia's largest aquatic birds, some with wingspans up to 2.8 meters, congregate here.", iconName: "CameraIcon" },
            { subTitle: "Relaxation & Wellness", text: "At the cozy Bells Day Spa at Bells at Killcare, you may disconnect from your hectic schedule and re-establish a connection with the natural world by utilizing traditional goods and healing methods that were developed by indigenous Australians. The top-to-toe rituals are performed at the Vie Spa in the Pullman Magenta Beaches Resort using only organic, all-Australian products in a setting that exudes Japanese calm. Alternately, unwind in the opulent Roman Spa at Aztec Skin Clinic & Day Spa, complete with a fruit and cheese platter, before receiving a treatment with a Fijian influence.", iconName: "Sparkles" }
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
  iconName: string; 
}

export const whyChooseUsData: WhyChooseUsItem[] = [
  {
    id: 'wcu1',
    title: 'Industry Experience',
    description: 'With over two decades on the buyers’ side, we know how to successfully navigate the purchasing journey.',
    iconName: "Landmark",
  },
  {
    id: 'wcu2',
    title: 'Market Coverage',
    description: 'We have a team of residential & commercial specialists covering home buyers, property investors and commercial buyers.',
    iconName: "MapPin",
  },
  {
    id: 'wcu3',
    title: 'Results Orientated',
    description: 'Our commitment to excellence in service delivery makes us stand out from other agencies, saving you time and stress.',
    iconName: "Target",
  },
  {
    id: 'wcu4',
    title: 'Accurate Appraisals',
    description: 'Using the latest market data and local knowledge, we provide highly accurate property appraisals and independent opinions on the value of a subject property.',
    iconName: "Scale",
  },
  {
    id: 'wcu5',
    title: 'Extensive Network',
    description: 'We’ve got an extensive database of agents and the best contacts to give you the inside running, including access to off-market properties.',
    iconName: "Handshake",
  },
  {
    id: 'wcu6',
    title: 'Research & Data',
    description: 'With our own Suburb Selector™ portal and access to live property data from all major providers, we have the latest property intelligence.',
    iconName: "Lightbulb",
  },
];
