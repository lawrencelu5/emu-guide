import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import PPFoodsData from "../../(en)/pp-foods/PPFoodsData";

export const metadata: Metadata = {
  title: "FP Yemekler",
};

/* const ppFoods: PPFood[] = [
  {
    id: 1,
    name: "Tavuk Pilav",
    place: "Campüs Kafe",
    googleMapsUrl: "https://maps.app.goo.gl/6swCDoq8E5HhfAwY7",
    price: 130,
    comments: ["Ücretine göre yüksek değer", "Sağlıklı", "Hızlı servis"],
  },
]; */

export default function PricePerformanceFoods() {
  return (
    <CategoryPost title="Fiyat Performans Yemekler">
      <PPFoodsData lang="tr" />
    </CategoryPost>
  );
}
