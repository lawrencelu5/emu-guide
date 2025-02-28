import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import NewsData from "./NewsData";

export const metadata: Metadata = {
  title: "News",
};

export default function page() {
  return (
    <CategoryPost title="EMU News">
      <NewsData />
    </CategoryPost>
  );
}
