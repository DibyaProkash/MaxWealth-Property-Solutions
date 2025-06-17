
// src/lib/data/locations.ts

// No React or LucideIcon imports needed here as iconName is a string.
// Custom icon components like BusIcon, CameraIcon are defined in custom-icons.tsx
// and resolved in the UI component layer (e.g., CityLocationPage).

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
  // Adding international cities for consistency, though they might be hardcoded in AchievementsSection
  { id: 'loc10', slug: 'singapore', name: 'Singapore', image: 'https://placehold.co/400x300.png', dataAiHint: 'Singapore city skyline', tagline: 'A global hub of innovation and luxury living.', heroImage: 'https://placehold.co/1200x400.png', heroImageAiHint: 'Singapore skyline merlion' },
  { id: 'loc11', slug: 'new-york', name: 'New York', image: 'https://placehold.co/400x300.png', dataAiHint: 'New York city skyline', tagline: 'The city that never sleeps, offering diverse properties.', heroImage: 'https://placehold.co/1200x400.png', heroImageAiHint: 'New York skyline statue liberty' },
  { id: 'loc12', slug: 'london', name: 'London', image: 'https://placehold.co/400x300.png', dataAiHint: 'London city skyline', tagline: 'Historic charm meets modern sophistication.', heroImage: 'https://placehold.co/1200x400.png', heroImageAiHint: 'London skyline big ben' },
  { id: 'loc13', slug: 'paris', name: 'Paris', image: 'https://placehold.co/400x300.png', dataAiHint: 'Paris city skyline', tagline: 'Experience elegance in the City of Lights.', heroImage: 'https://placehold.co/1200x400.png', heroImageAiHint: 'Paris skyline eiffel tower' },
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
      { subTitle: "Public Transit", text: `Explore convenient public transit options connecting ${cityName} to major hubs and local attractions. Efficient and scenic journeys await.`, iconName: "Train" },
      { subTitle: "Connectivity", text: `Extensive networks provide easy access across ${cityName} and surrounding areas. Local and regional services available.`, iconName: "BusIcon" },
      { text: `General public transport in ${cityName} is designed for accessibility and convenience, making it easy to explore the city and its attractions.`, iconName: "MapPin" },
    ],
    image: 'https://placehold.co/600x450.png',
    imageAiHint: `transport ${cityName.toLowerCase()}`,
  },
  shopsAndRestaurants: {
    title: "SHOPS & RESTAURANTS",
    content: [
      { subTitle: "Retail Therapy", text: `${cityName} boasts a vibrant shopping scene, from luxury boutiques offering unique local crafts to major retail centers with global brands.`, iconName: "ShoppingCart" },
      { subTitle: "Culinary Delights", text: `Explore diverse culinary delights, with a wide array of cafes, casual eateries, and fine dining restaurants catering to all tastes in ${cityName}.`, iconName: "Utensils" },
    ],
    image: 'https://placehold.co/600x450.png',
    imageAiHint: `shopping ${cityName.toLowerCase()}`,
  },
  leisure: {
    title: "LEISURE & ATTRACTIONS",
    content: [
      { subTitle: "Culture & History", text: `Explore the rich cultural heritage of ${cityName} with its world-class museums, galleries, and historic landmarks.`, iconName: "Landmark" },
      { subTitle: "Parks & Nature", text: `Enjoy outdoor activities in beautiful parks and natural reserves surrounding ${cityName}. Perfect for recreation, picnics, and relaxation.`, iconName: "Trees" },
      { subTitle: "Events & Entertainment", text: `The city offers a lively calendar of events, festivals, and entertainment options for all ages.`, iconName: "Sparkles" },
    ],
    image: 'https://placehold.co/600x450.png',
    imageAiHint: `leisure ${cityName.toLowerCase()}`,
  },
});

const baseLocationDetails = serviceLocationsData.map(loc => {
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
  // Generic generation for other Australian cities based on serviceLocationsData
  if (['sydney', 'melbourne', 'brisbane', 'gold-coast', 'adelaide', 'sunshine-coast', 'newcastle-hunter-valley', 'hobart'].includes(loc.slug)) {
    return {
      slug: loc.slug,
      name: loc.name,
      pageIntro: `Unlock Your Dream Property in ${loc.name}`,
      tagline: loc.tagline,
      specificIntroParagraphs: [
        `Looking to buy a home or investment property in ${loc.name}? This vibrant region offers a unique blend of lifestyle and opportunity. Our expert buyers' agents at MaxWealth Property Services are ready to guide you.`,
        `${loc.name} features diverse suburbs, from bustling city centers to serene ${loc.slug.includes('coast') || loc.slug.includes('sydney') || loc.slug.includes('melbourne') ? 'coastal retreats' : 'natural landscapes'}. We can help you find the perfect match for your needs.`,
        `With our deep local knowledge and extensive network in ${loc.name}, we uncover off-market deals and provide you with a competitive edge. Let us make your property journey in ${loc.name} a success.`
      ],
      amenities: generatePlaceholderAmenities(loc.name),
      touristLink: '#', 
      heroImage: loc.heroImage,
      heroImageAiHint: loc.heroImageAiHint,
    };
  }
  return null; // For international cities, we'll add them explicitly below
}).filter(Boolean) as LocationDetail[];


export const locationDetailsData: LocationDetail[] = [
  ...baseLocationDetails,
  {
    slug: "singapore",
    name: "Singapore",
    pageIntro: "Unlock Your Dream Property in Singapore",
    tagline: "A global hub of innovation, culture, and luxury living.",
    specificIntroParagraphs: [
      "Discover the vibrant property market of Singapore, a city-state renowned for its economic dynamism, world-class infrastructure, and lush green spaces. MaxWealth Property Services offers expert guidance for navigating this unique and competitive market.",
      "Whether you're seeking a modern condominium in the bustling city center, a landed property in a serene residential enclave, or a strategic investment opportunity, our team provides tailored solutions to meet your aspirations in Singapore.",
      "With our in-depth local knowledge and international network, we help clients secure premium properties, understand complex regulations, and maximize their investments in one of Asia's most desirable locations."
    ],
    amenities: generatePlaceholderAmenities("Singapore"),
    heroImage: 'https://placehold.co/1200x400.png',
    heroImageAiHint: "Singapore skyline merlion",
    touristLink: 'https://www.visitsingapore.com'
  },
  {
    slug: "new-york",
    name: "New York",
    pageIntro: "Unlock Your Dream Property in New York",
    tagline: "The city that never sleeps, offering unparalleled property diversity.",
    specificIntroParagraphs: [
      "Explore the iconic real estate landscape of New York City with MaxWealth Property Services. From chic Manhattan apartments to charming Brooklyn brownstones and luxurious Hamptons retreats, we provide expert assistance.",
      "Navigating the New York property market requires specialized knowledge. Our team offers insights into neighborhood dynamics, market trends, and investment potential to help you find your perfect property.",
      "Whether you're a local buyer or an international investor, we streamline the purchasing process, ensuring a smooth transaction for your dream home or investment in the Big Apple."
    ],
    amenities: generatePlaceholderAmenities("New York"),
    heroImage: 'https://placehold.co/1200x400.png',
    heroImageAiHint: "New York skyline statue liberty",
    touristLink: 'https://www.nycgo.com'
  },
  {
    slug: "london",
    name: "London",
    pageIntro: "Unlock Your Dream Property in London",
    tagline: "Historic charm meets modern sophistication in this global capital.",
    specificIntroParagraphs: [
      "MaxWealth Property Services guides you through London's diverse and prestigious property market. From historic townhouses in Kensington to contemporary apartments in Canary Wharf, we cater to all preferences.",
      "Understanding the nuances of London's various boroughs and market conditions is key. Our experienced consultants provide personalized advice and access to exclusive listings.",
      "Whether for primary residence, investment, or a pied-à-terre, we assist clients in securing their ideal London property, navigating one of the world's most dynamic real estate environments."
    ],
    amenities: generatePlaceholderAmenities("London"),
    heroImage: 'https://placehold.co/1200x400.png',
    heroImageAiHint: "London skyline big ben",
    touristLink: 'https://www.visitlondon.com'
  },
  {
    slug: "paris",
    name: "Paris",
    pageIntro: "Unlock Your Dream Property in Paris",
    tagline: "Experience the epitome of elegance and romance in the City of Lights.",
    specificIntroParagraphs: [
      "Discover the enchanting Parisian property market with MaxWealth Property Services. From classic Haussmannian apartments to charming artist studios and luxurious hôtels particuliers, we offer bespoke assistance.",
      "Our team provides expert insights into the arrondissements of Paris, helping you find properties that match your lifestyle and investment goals in this timeless city.",
      "Let us help you navigate the French real estate process, ensuring a seamless acquisition of your dream Parisian home or investment, embracing the unique charm and sophistication of Paris."
    ],
    amenities: generatePlaceholderAmenities("Paris"),
    heroImage: 'https://placehold.co/1200x400.png',
    heroImageAiHint: "Paris skyline eiffel tower",
    touristLink: 'https://en.parisinfo.com'
  }
];


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

