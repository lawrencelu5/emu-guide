import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import ForSalesData from "../../(en)/for-sale/ForSalesData";
import ContactUsBanner from "@/components/ui/ContactUsBanner/ContactUsBanner";

export const metadata: Metadata = {
  title: "Satılık",
};

// const saleItems: SaleItem[] = [];

export default function ForSalePage() {
  return (
    <>
      <CategoryPost title="Satılık Eşyalar">
        <ForSalesData lang="tr" />
      </CategoryPost>
      <ContactUsBanner text="Satış Yapmak İstiyorum" />
    </>
  );
}
