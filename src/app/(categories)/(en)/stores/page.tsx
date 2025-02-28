import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import StoresData from "./StoresData";

export const metadata: Metadata = {
  title: "Stores",
};

export default function StoresPage() {
  return (
    <CategoryPost title="Explore Stores">
      <StoresData lang="en" />
    </CategoryPost>
  );
}
