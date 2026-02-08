// Collection cover images
import collectionLivingSocial from "@/assets/collections/collection-living-social.jpg";
import collectionPrivateSleeping from "@/assets/collections/collection-private-sleeping.jpg";
import collectionKitchenDining from "@/assets/collections/collection-kitchen-dining.jpg";
import collectionWorkCreative from "@/assets/collections/collection-work-creative.jpg";
import collectionWellnessRelaxation from "@/assets/collections/collection-wellness-relaxation.jpg";
import collectionUtilitySpecial from "@/assets/collections/collection-utility-special.jpg";

// Living & Social items
import livingRoom from "@/assets/collections/living-room.jpg";
import familyLounge from "@/assets/collections/family-lounge.jpg";
import balconySitout from "@/assets/collections/balcony-sitout.jpg";
import homeTheater from "@/assets/collections/home-theater.jpg";
import barLounge from "@/assets/collections/bar-lounge.jpg";
import gameRoom from "@/assets/collections/game-room.jpg";

// Private & Sleeping items
import masterBedroom from "@/assets/collections/master-bedroom.jpg";
import guestBedroom from "@/assets/collections/guest-bedroom.jpg";
import kidsBedroom from "@/assets/collections/kids-bedroom.jpg";
import walkInCloset from "@/assets/collections/walk-in-closet.jpg";
import spaBathroom from "@/assets/collections/spa-bathroom.jpg";
import readingNook from "@/assets/collections/reading-nook.jpg";

// Kitchen & Dining items
import kitchen from "@/assets/collections/kitchen.jpg";
import diningArea from "@/assets/collections/dining-area.jpg";
import breakfastNook from "@/assets/collections/breakfast-nook.jpg";
import walkInPantry from "@/assets/collections/walk-in-pantry.jpg";
import wineCellar from "@/assets/collections/wine-cellar.jpg";
import outdoorKitchen from "@/assets/collections/outdoor-kitchen.jpg";

// Work & Creative items
import homeOffice from "@/assets/collections/home-office.jpg";
import studyRoom from "@/assets/collections/study-room.jpg";
import techRoom from "@/assets/collections/tech-room.jpg";
import artStudio from "@/assets/collections/art-studio.jpg";
import musicRoom from "@/assets/collections/music-room.jpg";
import workshop from "@/assets/collections/workshop.jpg";

// Wellness & Relaxation items
import bathroom from "@/assets/collections/bathroom.jpg";
import yogaMeditation from "@/assets/collections/yoga-meditation.jpg";
import sunroom from "@/assets/collections/sunroom.jpg";
import spaSauna from "@/assets/collections/spa-sauna.jpg";
import indoorPool from "@/assets/collections/indoor-pool.jpg";
import indoorGarden from "@/assets/collections/indoor-garden.jpg";

// Utility & Special items
import laundryRoom from "@/assets/collections/laundry-room.jpg";
import mudroom from "@/assets/collections/mudroom.jpg";
import storageRoom from "@/assets/collections/storage-room.jpg";
import kidsPlayroom from "@/assets/collections/kids-playroom.jpg";
import petRoom from "@/assets/collections/pet-room.jpg";
import secretRoom from "@/assets/collections/secret-room.jpg";

export interface SpaceItem {
  title: string;
  slug: string;
  image: string;
  type: "Core" | "Enhanced";
  phrase?: string;
  description: string;
}

export interface Collection {
  id: string;
  title: string;
  tagline: string;
  image: string;
  coreSpaces: SpaceItem[];
  enhancedSpaces: SpaceItem[];
}

/** Helper to find a collection + space by their slugs */
export function findSpaceBySlug(collectionId: string, spaceSlug: string): { collection: Collection; space: SpaceItem } | null {
  const collection = collections.find((c) => c.id === collectionId);
  if (!collection) return null;
  const space =
    collection.coreSpaces.find((s) => s.slug === spaceSlug) ??
    collection.enhancedSpaces.find((s) => s.slug === spaceSlug);
  if (!space) return null;
  return { collection, space };
}

export const collections: Collection[] = [
  {
    id: "living-social",
    title: "Living & Social Collection",
    tagline: "Spaces designed to connect, entertain, and relax in style.",
    image: collectionLivingSocial,
    coreSpaces: [
      {
        title: "Living Room / Hall",
        slug: "living-room",
        image: livingRoom,
        type: "Core",
        phrase: "The heart of every home",
        description: "A thoughtfully designed essential living space blending comfort and elegance. The living room serves as the central gathering point of every home — where families connect, guests are welcomed, and memories are made. Our premium wood-themed interiors bring warmth and sophistication to this foundational space, combining plush seating, natural materials, and ambient lighting for an inviting atmosphere.",
      },
      {
        title: "Family Lounge",
        slug: "family-lounge",
        image: familyLounge,
        type: "Core",
        phrase: "Where families gather",
        description: "A cozy yet refined space where the whole family comes together. Designed with sectional seating, soft textures, and warm wooden accents, the family lounge creates an environment that encourages togetherness. Every element is chosen to promote relaxation and bonding, from the carefully layered lighting to the rich, earthy color palette.",
      },
      {
        title: "Balcony / Sit-out",
        slug: "balcony-sitout",
        image: balconySitout,
        type: "Core",
        phrase: "An open-air retreat",
        description: "An open-air sanctuary that extends your living space outdoors. Featuring premium wooden flooring, curated greenery, and comfortable lounge seating, the balcony sit-out becomes your personal retreat. Designed to capture the beauty of golden-hour light and evening breezes, it transforms any apartment or home into a resort-like experience.",
      },
    ],
    enhancedSpaces: [
      {
        title: "Home Theater",
        slug: "home-theater",
        image: homeTheater,
        type: "Enhanced",
        phrase: "Cinema-grade entertainment",
        description: "A luxury entertainment room designed for an immersive cinematic experience. Dark wood paneling, premium recliner seating, and carefully engineered ambient LED lighting create the perfect movie-watching environment. Every acoustic detail is considered to deliver cinema-grade sound in the comfort of your home.",
      },
      {
        title: "Bar / Lounge Area",
        slug: "bar-lounge",
        image: barLounge,
        type: "Enhanced",
        phrase: "Sophisticated evenings at home",
        description: "An elegant space for entertaining and unwinding with style. Custom wooden cabinetry houses your finest spirits, while warm backlighting creates an intimate ambiance. Modern bar stools and premium countertops complete the experience — a dedicated lounge that transforms hosting into an art form.",
      },
      {
        title: "Game Room",
        slug: "game-room",
        image: gameRoom,
        type: "Enhanced",
        phrase: "Fun meets luxury",
        description: "Where leisure and luxury converge in a space designed for recreation and joy. Featuring a professional-grade pool table, soft ambient lighting, and refined wooden finishes, the game room offers a premium entertainment experience. It's a space that brings people together through play, without compromising on elegance.",
      },
    ],
  },
  {
    id: "private-sleeping",
    title: "Private & Sleeping Collection",
    tagline: "Personal sanctuaries crafted for comfort and privacy.",
    image: collectionPrivateSleeping,
    coreSpaces: [
      {
        title: "Master Bedroom",
        slug: "master-bedroom",
        image: masterBedroom,
        type: "Core",
        phrase: "Your personal haven",
        description: "The ultimate personal retreat, where luxury meets tranquility. Rich wooden headboards, layered textiles, and carefully curated lighting create a serene environment for rest and rejuvenation. Every detail — from the flooring to the ceiling accents — is designed to envelop you in warmth and calm.",
      },
      {
        title: "Guest Bedroom",
        slug: "guest-bedroom",
        image: guestBedroom,
        type: "Core",
        phrase: "Welcoming warmth for guests",
        description: "A graciously appointed space that makes every guest feel at home. Thoughtful touches like quality linens, warm wood furniture, and soft ambient lighting ensure your visitors experience the same comfort and elegance that defines your entire home.",
      },
      {
        title: "Kids Bedroom",
        slug: "kids-bedroom",
        image: kidsBedroom,
        type: "Core",
        phrase: "Playful yet peaceful",
        description: "A vibrant yet calming space designed to inspire young minds. Natural wood elements provide warmth and durability, while the layout encourages both creative play and restful sleep. Every piece is selected for safety, functionality, and a touch of whimsy.",
      },
    ],
    enhancedSpaces: [
      {
        title: "Walk-in Closet",
        slug: "walk-in-closet",
        image: walkInCloset,
        type: "Enhanced",
        phrase: "Organized elegance",
        description: "A beautifully organized dressing space that transforms your daily routine into a luxury experience. Custom wooden shelving, integrated lighting, and thoughtful compartmentalization ensure every garment, accessory, and personal item has its place — all within a setting that feels like a high-end boutique.",
      },
      {
        title: "Spa Bathroom",
        slug: "spa-bathroom",
        image: spaBathroom,
        type: "Enhanced",
        phrase: "A daily indulgence",
        description: "A spa-inspired bathroom that elevates everyday rituals into moments of pure indulgence. Natural stone, warm wood accents, and rainfall showerheads create a sanctuary for self-care. Soft lighting and premium fixtures complete the resort-like atmosphere.",
      },
      {
        title: "Reading Nook",
        slug: "reading-nook",
        image: readingNook,
        type: "Enhanced",
        phrase: "A quiet escape",
        description: "A charming, intimate corner dedicated to the joy of reading. Built-in wooden bookshelves, a plush armchair, and soft, focused lighting create the perfect environment for losing yourself in a great book. It's a sanctuary of stillness in a busy world.",
      },
    ],
  },
  {
    id: "kitchen-dining",
    title: "Kitchen & Dining Collection",
    tagline: "Functional elegance for everyday cooking and shared meals.",
    image: collectionKitchenDining,
    coreSpaces: [
      {
        title: "Kitchen",
        slug: "kitchen",
        image: kitchen,
        type: "Core",
        phrase: "Where flavors come alive",
        description: "A premium modular kitchen where culinary artistry meets functional design. Rich wooden cabinetry, stone countertops, and state-of-the-art appliances come together in a space that inspires creativity. From meal prep to fine cooking, every surface and storage solution is optimized for flow and efficiency.",
      },
      {
        title: "Dining Area",
        slug: "dining-area",
        image: diningArea,
        type: "Core",
        phrase: "Meals made memorable",
        description: "An elegant dining space designed for shared moments and memorable meals. A solid wood dining table anchors the room, surrounded by comfortable seating and warm, inviting lighting. The design celebrates the art of gathering — where food, conversation, and connection come together beautifully.",
      },
      {
        title: "Breakfast Nook",
        slug: "breakfast-nook",
        image: breakfastNook,
        type: "Core",
        phrase: "Bright mornings start here",
        description: "A sun-drenched corner designed for leisurely mornings and casual meals. Built-in wooden bench seating, a compact table, and natural light create an intimate spot that makes every breakfast feel special. It's the perfect blend of cozy charm and modern functionality.",
      },
    ],
    enhancedSpaces: [
      {
        title: "Walk-in Pantry",
        slug: "walk-in-pantry",
        image: walkInPantry,
        type: "Enhanced",
        phrase: "Everything within reach",
        description: "A meticulously organized storage space that keeps your kitchen running smoothly. Custom wooden shelving and smart compartments ensure every ingredient, appliance, and utensil is easily accessible. The walk-in pantry combines utility with beauty, making organization effortless.",
      },
      {
        title: "Wine Cellar",
        slug: "wine-cellar",
        image: wineCellar,
        type: "Enhanced",
        phrase: "A connoisseur's corner",
        description: "A temperature-controlled retreat for wine enthusiasts. Custom wooden racks, atmospheric lighting, and stone accents create a space worthy of your finest vintages. Whether hosting a tasting or selecting the evening's pairing, the wine cellar adds a layer of sophistication to your home.",
      },
      {
        title: "Outdoor Kitchen",
        slug: "outdoor-kitchen",
        image: outdoorKitchen,
        type: "Enhanced",
        phrase: "Al fresco culinary art",
        description: "An alfresco cooking space that brings the joy of outdoor dining to life. Premium wood and stone construction, built-in grilling stations, and comfortable seating areas create the perfect setting for garden parties, family barbecues, and sunset dinners under the open sky.",
      },
    ],
  },
  {
    id: "work-creative",
    title: "Work & Creative Collection",
    tagline: "Inspiring environments for focus, creation, and innovation.",
    image: collectionWorkCreative,
    coreSpaces: [
      {
        title: "Home Office",
        slug: "home-office",
        image: homeOffice,
        type: "Core",
        phrase: "Productivity meets comfort",
        description: "A refined workspace where productivity and comfort coexist in harmony. A solid wood desk, ergonomic seating, and intelligent cable management create an environment designed for deep work. Natural lighting and warm tones reduce fatigue and boost focus throughout the day.",
      },
      {
        title: "Study Room",
        slug: "study-room",
        image: studyRoom,
        type: "Core",
        phrase: "A space for deep focus",
        description: "A quiet, distraction-free environment designed for learning and concentration. Floor-to-ceiling bookshelves, a generous work surface, and ambient lighting create the ideal study setting. The warm wood palette promotes calm and clarity, making extended study sessions productive and comfortable.",
      },
      {
        title: "Tech Room",
        slug: "tech-room",
        image: techRoom,
        type: "Core",
        phrase: "Built for the digital age",
        description: "A high-performance space engineered for modern technology needs. From multi-monitor setups to server racks, this room blends cutting-edge functionality with premium wood finishes. Smart ventilation and cable management ensure a clean, efficient workspace for tech enthusiasts and professionals alike.",
      },
    ],
    enhancedSpaces: [
      {
        title: "Art Studio",
        slug: "art-studio",
        image: artStudio,
        type: "Enhanced",
        phrase: "Where creativity flows",
        description: "A light-filled creative space designed to inspire artistic expression. High ceilings, natural wood easels, and ample storage for supplies create a studio that nurtures the creative process. North-facing light and neutral tones provide the perfect canvas for painters, sculptors, and designers.",
      },
      {
        title: "Music Room",
        slug: "music-room",
        image: musicRoom,
        type: "Enhanced",
        phrase: "Sound meets soul",
        description: "An acoustically designed room where music comes alive. Sound-dampening wooden panels, instrument storage, and performance-quality lighting create a space for practice, recording, and private concerts. Every surface is tuned to enhance sound quality while maintaining visual elegance.",
      },
      {
        title: "Workshop",
        slug: "workshop",
        image: workshop,
        type: "Enhanced",
        phrase: "Craft your vision",
        description: "A fully equipped maker's space for hands-on projects and craftsmanship. Sturdy wooden workbenches, organized tool storage, and durable surfaces support everything from woodworking to model building. It's a space where ideas take physical form through skill and creativity.",
      },
    ],
  },
  {
    id: "wellness-relaxation",
    title: "Wellness & Relaxation Collection",
    tagline: "Tranquil retreats for mind, body, and soul.",
    image: collectionWellnessRelaxation,
    coreSpaces: [
      {
        title: "Bathroom",
        slug: "bathroom",
        image: bathroom,
        type: "Core",
        phrase: "Refined daily rituals",
        description: "A beautifully appointed bathroom that transforms daily routines into moments of tranquility. Natural stone, warm wood vanities, and premium fixtures create a spa-like atmosphere. Thoughtful lighting and ventilation ensure comfort and freshness in every detail.",
      },
      {
        title: "Yoga / Meditation Room",
        slug: "yoga-meditation",
        image: yogaMeditation,
        type: "Core",
        phrase: "Inner peace, by design",
        description: "A serene space dedicated to mindfulness and physical wellness. Bamboo and wood elements, soft natural lighting, and a minimalist design philosophy create the ideal environment for yoga, meditation, and inner reflection. It's a personal retreat that nurtures both body and mind.",
      },
      {
        title: "Sunroom",
        slug: "sunroom",
        image: sunroom,
        type: "Core",
        phrase: "Bathed in natural light",
        description: "A luminous space that celebrates the beauty of natural light. Floor-to-ceiling windows, warm wooden frames, and comfortable seating invite you to slow down and bask in sunshine. The sunroom serves as a bright, energizing space for reading, relaxation, or indoor gardening.",
      },
    ],
    enhancedSpaces: [
      {
        title: "Spa / Sauna",
        slug: "spa-sauna",
        image: spaSauna,
        type: "Enhanced",
        phrase: "Resort luxury at home",
        description: "A private wellness sanctuary that brings five-star spa luxury into your home. Cedar wood paneling, integrated steam systems, and ambient lighting create a deeply relaxing environment. From saunas to cold plunge spaces, every element is designed for complete rejuvenation.",
      },
      {
        title: "Indoor Pool",
        slug: "indoor-pool",
        image: indoorPool,
        type: "Enhanced",
        phrase: "Serenity in motion",
        description: "A stunning aquatic space that combines fitness with luxury. Natural stone surrounds, warm wood decking, and soft underwater lighting create a resort-like atmosphere. Whether for morning laps or evening relaxation, the indoor pool is the ultimate lifestyle enhancement.",
      },
      {
        title: "Indoor Garden",
        slug: "indoor-garden",
        image: indoorGarden,
        type: "Enhanced",
        phrase: "Nature within walls",
        description: "A lush, green oasis that brings the beauty of nature indoors. Custom wooden planters, integrated irrigation systems, and carefully selected plant species create a living garden within your home. It purifies the air, soothes the senses, and adds a vibrant, organic dimension to your interior.",
      },
    ],
  },
  {
    id: "utility-special",
    title: "Utility & Special Collection",
    tagline: "Smart, purposeful spaces for every unique need.",
    image: collectionUtilitySpecial,
    coreSpaces: [
      {
        title: "Laundry Room",
        slug: "laundry-room",
        image: laundryRoom,
        type: "Core",
        phrase: "Efficiency with elegance",
        description: "A beautifully designed utility space that makes laundry a pleasant task. Custom wooden cabinetry, countertop folding areas, and smart storage solutions transform this essential room into a model of efficiency and style. Warm finishes ensure even utility spaces reflect your home's premium character.",
      },
      {
        title: "Mudroom",
        slug: "mudroom",
        image: mudroom,
        type: "Core",
        phrase: "The organized entryway",
        description: "A practical yet elegant transition space between the outdoors and your home's interior. Built-in wooden cubbies, bench seating, and hooks keep shoes, coats, and bags organized. The mudroom ensures your main living spaces stay clutter-free while making a beautiful first impression.",
      },
      {
        title: "Storage Room",
        slug: "storage-room",
        image: storageRoom,
        type: "Core",
        phrase: "A place for everything",
        description: "An intelligently organized space designed to keep your home clutter-free. Custom wooden shelving systems, labeled compartments, and maximized vertical space ensure every seasonal item, keepsake, and household essential has a dedicated home.",
      },
    ],
    enhancedSpaces: [
      {
        title: "Kids Playroom",
        slug: "kids-playroom",
        image: kidsPlayroom,
        type: "Enhanced",
        phrase: "Imagination unleashed",
        description: "A vibrant, safe space designed to spark creativity and adventure. Rounded wooden furniture, colorful storage bins, and soft play areas encourage imaginative play while keeping everything organized. It's a room where childhood memories are made, surrounded by quality and care.",
      },
      {
        title: "Pet Room",
        slug: "pet-room",
        image: petRoom,
        type: "Enhanced",
        phrase: "Designed for your companions",
        description: "A dedicated space that caters to your furry family members with the same care and quality as every other room. Built-in feeding stations, cozy sleeping nooks, and durable, easy-to-clean surfaces ensure your pets enjoy comfort and style in their own premium retreat.",
      },
      {
        title: "Secret Room",
        slug: "secret-room",
        image: secretRoom,
        type: "Enhanced",
        phrase: "A hidden wonder",
        description: "A concealed, enchanting space that adds an element of mystery and delight to your home. Hidden behind a bookshelf or secret panel, this room can serve as a private office, a reading retreat, or a personal vault — all crafted with the same premium wood finishes that define your home.",
      },
    ],
  },
];
