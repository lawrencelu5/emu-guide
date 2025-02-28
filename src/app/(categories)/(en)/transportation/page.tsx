import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import TransportationData from "./TransportationData";

export const metadata: Metadata = {
  title: "Transportation",
};

export default function page() {
  return (
    <CategoryPost title="EMU Transportation Options">
      <TransportationData lang="en" />
    </CategoryPost>
  );
}
