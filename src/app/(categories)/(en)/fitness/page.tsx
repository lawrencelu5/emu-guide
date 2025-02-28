import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import type { Metadata } from "next";
import FitnessData from "./FitnessData";

export const metadata: Metadata = {
  title: "Fitness",
};

export default function FitnessPage() {
  return (
    <CategoryPost title="Fitness Centers">
      <FitnessData lang="en" />
    </CategoryPost>
  );
}
