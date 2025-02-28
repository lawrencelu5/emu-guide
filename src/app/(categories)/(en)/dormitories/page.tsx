import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import DormitoriesData from "./DormitoriesData";

export const metadata: Metadata = {
  title: "Dormitories",
};

export default function page() {
  return (
    <CategoryPost title="EMU Dormitories">
      <DormitoriesData lang={"en"} />
    </CategoryPost>
  );
}
