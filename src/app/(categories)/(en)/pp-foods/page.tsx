import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import PPFoodsData from "./PPFoodsData";

export const metadata: Metadata = {
  title: "PP Foods",
};
export default function PricePerformanceFoods() {
  return (
    <CategoryPost title="Price Performance Foods">
      <PPFoodsData lang="en" />
    </CategoryPost>
  );
}
