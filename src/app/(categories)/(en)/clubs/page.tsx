import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import ClubsData from "./ClubsData";

export const metadata: Metadata = {
  title: "Clubs",
};

export default function page() {
  return (
    <CategoryPost title="EMU Clubs">
      <ClubsData lang={"en"} />
    </CategoryPost>
  );
}
