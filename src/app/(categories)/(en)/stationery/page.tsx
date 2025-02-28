import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import StationaryData from "./StationaryData";

export const metadata: Metadata = {
  title: "Stationery",
};

export default function StationaryPage() {
  return (
    <CategoryPost title="Stationery Shops">
      <StationaryData lang="en" />
    </CategoryPost>
  );
}
