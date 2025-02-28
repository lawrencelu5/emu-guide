import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import GuidesData from "./GuidesData";

export const metadata: Metadata = {
  title: "Guides",
};

export default function GuidesPage() {
  return (
    <CategoryPost title="Guides">
      <GuidesData lang="en" />
    </CategoryPost>
  );
}
