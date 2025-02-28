import type { Metadata } from "next";
import ForSalesData from "./ForSalesData";
import ContactUsBanner from "@/components/ui/ContactUsBanner/ContactUsBanner";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";

export const metadata: Metadata = {
  title: "For Sale",
};

export default function ForSalePage() {
  return (
    <>
      <CategoryPost title="Items For Sale">
        <ForSalesData lang="en" />
      </CategoryPost>
      <ContactUsBanner text="Submit Sale Item Listing" />
    </>
  );
}
