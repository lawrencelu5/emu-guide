import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import CommunitiesData from "./CommunitiesData";

export const metadata: Metadata = {
  title: "Communuties",
};

export default function CommunityPage() {
  return (
    <CategoryPost title="EMU Communities">
      <CommunitiesData lang={"en"} />
    </CategoryPost>
  );
}
