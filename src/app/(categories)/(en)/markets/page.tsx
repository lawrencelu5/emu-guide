import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import MarketsData from "./MarketsData";

export const metadata: Metadata = {
  title: "Markets",
};

export default function MarketsPage() {
  return (
    <CategoryPost title="Markets">
      <MarketsData lang="en" />
    </CategoryPost>
  );
}
