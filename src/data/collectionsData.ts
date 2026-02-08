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
  image: string;
  type: "Core" | "Enhanced";
  phrase?: string;
}

export interface Collection {
  id: string;
  title: string;
  tagline: string;
  image: string;
  coreSpaces: SpaceItem[];
  enhancedSpaces: SpaceItem[];
}

export const collections: Collection[] = [
  {
    id: "living-social",
    title: "Living & Social Collection",
    tagline: "Spaces designed to connect, entertain, and relax in style.",
    image: collectionLivingSocial,
    coreSpaces: [
      { title: "Living Room / Hall", image: livingRoom, type: "Core", phrase: "The heart of every home" },
      { title: "Family Lounge", image: familyLounge, type: "Core", phrase: "Where families gather" },
      { title: "Balcony / Sit-out", image: balconySitout, type: "Core", phrase: "An open-air retreat" },
    ],
    enhancedSpaces: [
      { title: "Home Theater", image: homeTheater, type: "Enhanced", phrase: "Cinema-grade entertainment" },
      { title: "Bar / Lounge Area", image: barLounge, type: "Enhanced", phrase: "Sophisticated evenings at home" },
      { title: "Game Room", image: gameRoom, type: "Enhanced", phrase: "Fun meets luxury" },
    ],
  },
  {
    id: "private-sleeping",
    title: "Private & Sleeping Collection",
    tagline: "Personal sanctuaries crafted for comfort and privacy.",
    image: collectionPrivateSleeping,
    coreSpaces: [
      { title: "Master Bedroom", image: masterBedroom, type: "Core", phrase: "Your personal haven" },
      { title: "Guest Bedroom", image: guestBedroom, type: "Core", phrase: "Welcoming warmth for guests" },
      { title: "Kids Bedroom", image: kidsBedroom, type: "Core", phrase: "Playful yet peaceful" },
    ],
    enhancedSpaces: [
      { title: "Walk-in Closet", image: walkInCloset, type: "Enhanced", phrase: "Organized elegance" },
      { title: "Spa Bathroom", image: spaBathroom, type: "Enhanced", phrase: "A daily indulgence" },
      { title: "Reading Nook", image: readingNook, type: "Enhanced", phrase: "A quiet escape" },
    ],
  },
  {
    id: "kitchen-dining",
    title: "Kitchen & Dining Collection",
    tagline: "Functional elegance for everyday cooking and shared meals.",
    image: collectionKitchenDining,
    coreSpaces: [
      { title: "Kitchen", image: kitchen, type: "Core", phrase: "Where flavors come alive" },
      { title: "Dining Area", image: diningArea, type: "Core", phrase: "Meals made memorable" },
      { title: "Breakfast Nook", image: breakfastNook, type: "Core", phrase: "Bright mornings start here" },
    ],
    enhancedSpaces: [
      { title: "Walk-in Pantry", image: walkInPantry, type: "Enhanced", phrase: "Everything within reach" },
      { title: "Wine Cellar", image: wineCellar, type: "Enhanced", phrase: "A connoisseur's corner" },
      { title: "Outdoor Kitchen", image: outdoorKitchen, type: "Enhanced", phrase: "Al fresco culinary art" },
    ],
  },
  {
    id: "work-creative",
    title: "Work & Creative Collection",
    tagline: "Inspiring environments for focus, creation, and innovation.",
    image: collectionWorkCreative,
    coreSpaces: [
      { title: "Home Office", image: homeOffice, type: "Core", phrase: "Productivity meets comfort" },
      { title: "Study Room", image: studyRoom, type: "Core", phrase: "A space for deep focus" },
      { title: "Tech Room", image: techRoom, type: "Core", phrase: "Built for the digital age" },
    ],
    enhancedSpaces: [
      { title: "Art Studio", image: artStudio, type: "Enhanced", phrase: "Where creativity flows" },
      { title: "Music Room", image: musicRoom, type: "Enhanced", phrase: "Sound meets soul" },
      { title: "Workshop", image: workshop, type: "Enhanced", phrase: "Craft your vision" },
    ],
  },
  {
    id: "wellness-relaxation",
    title: "Wellness & Relaxation Collection",
    tagline: "Tranquil retreats for mind, body, and soul.",
    image: collectionWellnessRelaxation,
    coreSpaces: [
      { title: "Bathroom", image: bathroom, type: "Core", phrase: "Refined daily rituals" },
      { title: "Yoga / Meditation Room", image: yogaMeditation, type: "Core", phrase: "Inner peace, by design" },
      { title: "Sunroom", image: sunroom, type: "Core", phrase: "Bathed in natural light" },
    ],
    enhancedSpaces: [
      { title: "Spa / Sauna", image: spaSauna, type: "Enhanced", phrase: "Resort luxury at home" },
      { title: "Indoor Pool", image: indoorPool, type: "Enhanced", phrase: "Serenity in motion" },
      { title: "Indoor Garden", image: indoorGarden, type: "Enhanced", phrase: "Nature within walls" },
    ],
  },
  {
    id: "utility-special",
    title: "Utility & Special Collection",
    tagline: "Smart, purposeful spaces for every unique need.",
    image: collectionUtilitySpecial,
    coreSpaces: [
      { title: "Laundry Room", image: laundryRoom, type: "Core", phrase: "Efficiency with elegance" },
      { title: "Mudroom", image: mudroom, type: "Core", phrase: "The organized entryway" },
      { title: "Storage Room", image: storageRoom, type: "Core", phrase: "A place for everything" },
    ],
    enhancedSpaces: [
      { title: "Kids Playroom", image: kidsPlayroom, type: "Enhanced", phrase: "Imagination unleashed" },
      { title: "Pet Room", image: petRoom, type: "Enhanced", phrase: "Designed for your companions" },
      { title: "Secret Room", image: secretRoom, type: "Enhanced", phrase: "A hidden wonder" },
    ],
  },
];
