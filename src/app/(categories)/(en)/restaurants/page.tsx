import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import RestaurantsData from "./RestaurantsData";

export const metadata: Metadata = {
  title: "Restaurants",
};

export default function page() {
  return (
    <CategoryPost title="Restaurants near EMU">
      <RestaurantsData lang="en" />
    </CategoryPost>
  );
}
