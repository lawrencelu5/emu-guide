import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import ScholarshipsData from "./ScholarshipsData";

export const metadata: Metadata = {
  title: "Scholarships",
};

export default function ScholarshipsPage() {
  return (
    <CategoryPost title="EMU Scholarships">
      <ScholarshipsData lang="en" />
    </CategoryPost>
  );
}
