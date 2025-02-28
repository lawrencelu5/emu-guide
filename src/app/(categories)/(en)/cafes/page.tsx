import type { Metadata } from "next";
import CafesData from "./CafesData";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";

export const metadata: Metadata = {
  title: "Cafes",
};

export default function page() {
  return (
    <CategoryPost title="Cafes near EMU">
      <CafesData lang={"en"} />
    </CategoryPost>
  );
}
