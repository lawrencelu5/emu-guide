import type { Metadata } from "next";
import DiscountsData from "./DiscountsData";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";

export const metadata: Metadata = {
  title: "Discounts",
};

export default function StudentDiscountsPage() {
  return (
    <CategoryPost title="Student Discounts">
      <DiscountsData lang={"en"} />
    </CategoryPost>
  );
}
