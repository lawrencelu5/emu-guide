import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import DiscountsData from "../../(en)/discounts/DiscountsData";

export const metadata: Metadata = {
  title: "İndirimler",
};

/* 
const discounts: Discount[] = [
  {
    id: 1,
    name: "Itimat Öğrenci İndirini",
    place: "Anıt Çemberi",
    googleMapsUrl: "https://maps.app.goo.gl/Z2xcy5EyqHSLnG8t5",
    discountPrice: 150,
    previousPrice: 160,
  },
]; */

export default function StudentDiscountsPage() {
  return (
    <CategoryPost title="Öğrenci İndirimleri">
      <DiscountsData lang="tr" />
    </CategoryPost>
  );
}
