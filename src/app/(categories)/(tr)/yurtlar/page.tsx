import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Banknote,
  ExternalLink,
  Home,
  MessageSquare,
} from "lucide-react";

import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import DormitoriesData from "../../(en)/dormitories/DormitoriesData";

export const metadata: Metadata = {
  title: "Yurtlar",
};

/* interface Dormitory {
  id: number
  name: string
  place: string
  googleMapsUrl: string
  priceRange: '$' | '$$' | '$$$'
  officialPageUrl: string
  facilities: string[]
  comments: string[]
} */

/* const dormitories = [
  {
    id: 1,
    name: "Alfam Student Dormitory",
    place: "Ana Kampüs",
    googleMapsUrl: "https://maps.app.goo.gl/PhiKd4k6wJW1DDsb7",
    priceRange: "$$$",
    officialPageUrl: "https://www.alfamcyprus.com/",
    facilities: ["Wi-Fi", "Air Conditioning", "Gym", "Laundry"],
    comments: ["Modern and clean", "Great location"],
  },
  {
    id: 2,
    name: "Ugursal Student Dormitory",
    place: "Ana Kampüs",
    googleMapsUrl: "https://maps.app.goo.gl/ub9yUoV87SEhQcjr7",
    priceRange: "$$",
    officialPageUrl:
      "https://dormitories.emu.edu.tr/en/dormitories/privately-owned-campus-dormitories/ugursal",
    facilities: ["Wi-Fi", "Shared Kitchen", "Study Rooms"],
    comments: ["Affordable", "Good community"],
  },
  {
    id: 3,
    name: "Longson Student Dormitory",
    place: "Ana Kampüs",
    googleMapsUrl: "https://maps.app.goo.gl/WtCYaZHgE8zXDd4B7",
    priceRange: "$$",
    officialPageUrl:
      "https://dormitories.emu.edu.tr/en/dormitories/privately-owned-campus-dormitories/longson",
    facilities: ["Wi-Fi", "Air Conditioning", "Shared Bathrooms"],
    comments: ["Convenient location", "Cafeteria", "Student kitchens"],
  },
  {
    id: 4,
    name: "Inn Dorm Student Dormitory",
    place: "Ana Kampüs",
    googleMapsUrl: "https://goo.gl/maps/inn-dorm",
    priceRange: "$",
    officialPageUrl:
      "https://dormitories.emu.edu.tr/en/dormitories/privately-owned-campus-dormitories/inn-dorm",
    facilities: ["Cafeteria", "Interior Garden", "Sea View Rooms"],
    comments: ["Basic but comfortable", "Friendly staff"],
  },
  {
    id: 5,
    name: "Prime Living Student Dormitory",
    place: "Ana Kampüs",
    googleMapsUrl: "https://maps.app.goo.gl/fmCqkQbUYD4nZDkVA",
    priceRange: "$$$",
    officialPageUrl:
      "https://dormitories.emu.edu.tr/en/dormitories/privately-owned-campus-dormitories/prime-living",
    facilities: ["Electric generator", "Gym", "Copy center"],
    comments: ["Safe", "Top-notch facilities"],
  },
  {
    id: 6,
    name: "Ramen Student Dormitory",
    place: "Ana Kampüs",
    googleMapsUrl: "https://maps.app.goo.gl/Ajeusbf9xM47aqEx8",
    priceRange: "$",
    officialPageUrl:
      "https://dormitories.emu.edu.tr/en/dormitories/privately-owned-campus-dormitories/ramen",
    facilities: [
      "Restaurant",
      "Exchange Office",
      "Room cleaning twice per week",
    ],
    comments: ["Clean", "Basic amenities"],
  },
  {
    id: 7,
    name: "Golden Plus Dormitory",
    place: "Güney Kampüs",
    googleMapsUrl: "https://maps.app.goo.gl/nSMZJ1mNJ7SomYPi6",
    priceRange: "$$",
    officialPageUrl: "https://www.emu.edu.tr/dormitories/golden-plus",
    facilities: ["Male/female Seperate Blocks", "Gym", "Project & Study Room"],
    comments: ["Premium", "Great value"],
  },
  {
    id: 8,
    name: "Novel Centre Point Dormitory",
    place: "Güney Kampüs",
    googleMapsUrl: "https://goo.gl/maps/novel-centre-point",
    priceRange: "$$$",
    officialPageUrl: "https://www.emu.edu.tr/dormitories/novel-centre-point",
    facilities: [
      "24 hour hot and cold running water",
      "Room service",
      "Swimming pool",
    ],
    comments: ["Luxurious", "Very comfortable"],
  },
  {
    id: 9,
    name: "Astra Plus Dormitory",
    place: "Güney Kampüs",
    googleMapsUrl: "https://maps.app.goo.gl/WTw9d2aJS2BmbJyo7",
    priceRange: "$$$",
    officialPageUrl:
      "https://dormitories.emu.edu.tr/en/dormitories/privately-owned-campus-dormitories/astra-plus",
    facilities: ["Gym", "Laundry", "Hairdresser"],
    comments: ["Good facilities", "Great value"],
  },
  {
    id: 10,
    name: "Pop Art Dormitory",
    place: "Güney Kampüs",
    googleMapsUrl: "https://maps.app.goo.gl/jqnStSiCQkqAYsgK6",
    priceRange: "$$$",
    officialPageUrl:
      "https://dormitories.emu.edu.tr/en/dormitories/privately-owned-campus-dormitories/pop-art",
    facilities: ["Gym", "Gloria Jeans", "Cinema"],
    comments: ["Modern design", "Comfortable"],
  },
  {
    id: 11,
    name: "Nural Dormitory",
    place: "Güney Kampüs",
    googleMapsUrl: "https://maps.app.goo.gl/U4V1bM42nVWU1xdRA",
    priceRange: "$$",
    officialPageUrl:
      "https://dormitories.emu.edu.tr/en/dormitories/privately-owned-campus-dormitories/nural",
    facilities: ["Laundry facilities", "Generator", "Fitness Center"],
    comments: ["Market(7/24)", "Friendly staff"],
  },
  {
    id: 12,
    name: "Grand Aras Dormitory",
    place: "Güney Kampüs",
    googleMapsUrl: "https://maps.app.goo.gl/UvcUYZEw6w3ZMttJ8",
    priceRange: "$$",
    officialPageUrl:
      "https://dormitories.emu.edu.tr/en/dormitories/privately-owned-campus-dormitories/grand-aras",
    facilities: ["Gym", "Library", "Key Card System"],
    comments: ["Good location", "Well maintained"],
  },
]; */

export default function page() {
  return (
    <CategoryPost title="DAÜ Yurtları">
      <DormitoriesData lang="tr" />
    </CategoryPost>
  );
}
