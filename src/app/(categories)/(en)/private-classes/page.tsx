import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import PrivateClassesData from "./PrivateClassesData";
import ContactUsBanner from "@/components/ui/ContactUsBanner/ContactUsBanner";

export const metadata: Metadata = {
  title: "Private Classes",
};

export default function page() {
  return (
    <>
      <CategoryPost title="Private Classes">
        <PrivateClassesData lang="en" />
      </CategoryPost>
      <ContactUsBanner text="I Want to Give Private Class" />
    </>
  );
}
