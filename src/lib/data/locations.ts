
// src/lib/data/locations.ts

// No React or LucideIcon imports needed here as iconName is a string.
// Custom icon components like BusIcon, CameraIcon are defined in custom-icons.tsx
// and resolved in the UI component layer (e.g., CityLocationPage).

export interface ServiceLocationItem {
  id: string;
  slug: string;
  name: string;
  image: string; // This will be used for BOTH card and hero
  dataAiHint: string; // For the image
  tagline?: string;
  heroImage: string; // Will be identical to 'image'
  heroImageAiHint: string; // Will be identical to 'dataAiHint'
}

export const serviceLocationsData: ServiceLocationItem[] = [
  { 
    id: 'loc1', 
    slug: 'sydney', 
    name: 'Sydney', 
    image: '/city-backgrounds/sydney.jpg', 
    dataAiHint: 'sydney city opera', 
    tagline: 'Iconic landmarks and vibrant city living.', 
    heroImage: '/city-backgrounds/sydney.jpg', 
    heroImageAiHint: 'sydney city opera' 
  },
  { 
    id: 'loc2', 
    slug: 'melbourne', 
    name: 'Melbourne', 
    image: '/city-backgrounds/melbourne.jpg', 
    dataAiHint: 'melbourne city tram', 
    tagline: 'Culture, coffee, and a cosmopolitan lifestyle.', 
    heroImage: '/city-backgrounds/melbourne.jpg', 
    heroImageAiHint: 'melbourne city tram' 
  },
  { 
    id: 'loc3', 
    slug: 'brisbane', 
    name: 'Brisbane', 
    image: '/city-backgrounds/brisbane.jpg', 
    dataAiHint: 'brisbane story bridge', 
    tagline: 'Sunny skies and a relaxed urban atmosphere.', 
    heroImage: '/city-backgrounds/brisbane.jpg', 
    heroImageAiHint: 'brisbane story bridge' 
  },
  { 
    id: 'loc4', 
    slug: 'gold-coast', 
    name: 'Gold Coast', 
    image: '/city-backgrounds/gold-coast.jpg', 
    dataAiHint: 'gold coast surfers', 
    tagline: 'Famous beaches and a thriving entertainment scene.', 
    heroImage: '/city-backgrounds/gold-coast.jpg', 
    heroImageAiHint: 'gold coast surfers' 
  },
  { 
    id: 'loc5', 
    slug: 'adelaide', 
    name: 'Adelaide', 
    image: '/city-backgrounds/adelaide.jpg', 
    dataAiHint: 'adelaide hills wine', 
    tagline: 'Charming city with renowned wine regions nearby.', 
    heroImage: '/city-backgrounds/adelaide.jpg', 
    heroImageAiHint: 'adelaide hills wine' 
  },
  { 
    id: 'loc6', 
    slug: 'sunshine-coast', 
    name: 'Sunshine Coast', 
    image: '/city-backgrounds/sunshine-coast.jpg', 
    dataAiHint: 'sunshine coast beach', 
    tagline: 'Pristine beaches and lush hinterland.', 
    heroImage: '/city-backgrounds/sunshine-coast.jpg', 
    heroImageAiHint: 'sunshine coast beach' 
  },
  { 
    id: 'loc7', 
    slug: 'newcastle-hunter-valley', 
    name: 'Newcastle & Hunter Valley', 
    image: '/city-backgrounds/newcastle-hunter-valley.jpg', 
    dataAiHint: 'hunter valley vineyard', 
    tagline: 'Coastal city charm meets wine country elegance.', 
    heroImage: '/city-backgrounds/newcastle-hunter-valley.jpg', 
    heroImageAiHint: 'hunter valley vineyard' 
  },
  { 
    id: 'loc8', 
    slug: 'central-coast', 
    name: 'Central Coast', 
    image: '/city-backgrounds/central-coast.jpg', 
    dataAiHint: 'central coast nsw', 
    tagline: 'Beautiful waterways and beaches north of Sydney.', 
    heroImage: '/city-backgrounds/central-coast.jpg', 
    heroImageAiHint: 'central coast nsw' 
  },
  { 
    id: 'loc9', 
    slug: 'hobart', 
    name: 'Hobart', 
    image: '/city-backgrounds/hobart.jpg', 
    dataAiHint: 'hobart mount wellington', 
    tagline: 'Historic charm and stunning natural beauty.', 
    heroImage: '/city-backgrounds/hobart.jpg', 
    heroImageAiHint: 'hobart mount wellington' 
  },
  { 
    id: 'loc10', 
    slug: 'singapore', 
    name: 'Singapore', 
    image: '/city-backgrounds/singapore.jpg', 
    dataAiHint: 'singapore city skyline', 
    tagline: 'A global hub of innovation and luxury living.', 
    heroImage: '/city-backgrounds/singapore.jpg', 
    heroImageAiHint: 'singapore city skyline' 
  },
  { 
    id: 'loc11', 
    slug: 'new-york', 
    name: 'New York', 
    image: '/city-backgrounds/new-york.jpg', 
    dataAiHint: 'new york city', 
    tagline: 'The city that never sleeps, offering diverse properties.', 
    heroImage: '/city-backgrounds/new-york.jpg', 
    heroImageAiHint: 'new york city' 
  },
  { 
    id: 'loc12', 
    slug: 'london', 
    name: 'London', 
    image: '/city-backgrounds/london.jpg', 
    dataAiHint: 'london city big ben', 
    tagline: 'Historic charm meets modern sophistication.', 
    heroImage: '/city-backgrounds/london.jpg', 
    heroImageAiHint: 'london city big ben' 
  },
  { 
    id: 'loc13', 
    slug: 'paris', 
    name: 'Paris', 
    image: '/city-backgrounds/paris.jpg', 
    dataAiHint: 'paris eiffel tower', 
    tagline: 'Experience elegance in the City of Lights.', 
    heroImage: '/city-backgrounds/paris.jpg', 
    heroImageAiHint: 'paris eiffel tower' 
  },
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
    image: 'https://placehold.co/600x450.png', // Standard placeholder, can be customized per city if needed
    imageAiHint: `transport ${cityName.toLowerCase().replace(/\s+/g, ' ')}`,
  },
  shopsAndRestaurants: {
    title: "SHOPS & RESTAURANTS",
    content: [
      { subTitle: "Retail Therapy", text: `${cityName} boasts a vibrant shopping scene, from luxury boutiques offering unique local crafts to major retail centers with global brands.`, iconName: "ShoppingCart" },
      { subTitle: "Culinary Delights", text: `Explore diverse culinary delights, with a wide array of cafes, casual eateries, and fine dining restaurants catering to all tastes in ${cityName}.`, iconName: "Utensils" },
    ],
    image: 'https://placehold.co/600x450.png',
    imageAiHint: `shopping ${cityName.toLowerCase().replace(/\s+/g, ' ')}`,
  },
  leisure: {
    title: "LEISURE & ATTRACTIONS",
    content: [
      { subTitle: "Culture & History", text: `Explore the rich cultural heritage of ${cityName} with its world-class museums, galleries, and historic landmarks.`, iconName: "Landmark" },
      { subTitle: "Parks & Nature", text: `Enjoy outdoor activities in beautiful parks and natural reserves surrounding ${cityName}. Perfect for recreation, picnics, and relaxation.`, iconName: "Trees" },
      { subTitle: "Events & Entertainment", text: `The city offers a lively calendar of events, festivals, and entertainment options for all ages.`, iconName: "Sparkles" },
    ],
    image: 'https://placehold.co/600x450.png',
    imageAiHint: `leisure ${cityName.toLowerCase().replace(/\s+/g, ' ')}`,
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
      heroImage: loc.heroImage, // Uses the image from ServiceLocationItem
      heroImageAiHint: loc.heroImageAiHint, // Uses the hint from ServiceLocationItem
    };
  }
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
    touristLink: loc.slug === 'sydney' ? 'https://www.sydney.com/' : 
                 loc.slug === 'melbourne' ? 'https://www.visitmelbourne.com/' :
                 loc.slug === 'brisbane' ? 'https://www.visitbrisbane.com.au/' :
                 loc.slug === 'gold-coast' ? 'https://www.destinationgoldcoast.com/' :
                 loc.slug === 'adelaide' ? 'https://southaustralia.com/destinations/adelaide' :
                 loc.slug === 'sunshine-coast' ? 'https://www.visitsunshinecoast.com/' :
                 loc.slug === 'newcastle-hunter-valley' ? 'https://www.visitnsw.com/destinations/hunter/hunter-valley' : // Or Newcastle specific
                 loc.slug === 'hobart' ? 'https://www.discovertasmania.com.au/places/hobart-and-south/' :
                 loc.slug === 'singapore' ? 'https://www.visitsingapore.com/' :
                 loc.slug === 'new-york' ? 'https://www.nycgo.com/' :
                 loc.slug === 'london' ? 'https://www.visitlondon.com/' :
                 loc.slug === 'paris' ? 'https://en.parisinfo.com/' : '#',
    heroImage: loc.heroImage,
    heroImageAiHint: loc.heroImageAiHint,
  };
});

// Filter out any nulls if some slugs in serviceLocationsData didn't match the detailed criteria above
// This ensures all entries in locationDetailsData are valid LocationDetail objects
export const locationDetailsData: LocationDetail[] = baseLocationDetails.filter(Boolean) as LocationDetail[];


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

    