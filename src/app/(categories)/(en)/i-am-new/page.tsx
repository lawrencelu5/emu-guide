import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import NewContentData from "./NewContentData";

export const metadata: Metadata = {
  title: "I am new",
};

export default function NewToEmuPage() {
  return (
    <CategoryPost title="I am new to EMU">
      <NewContentData lang="en" />
    </CategoryPost>
  );
}
