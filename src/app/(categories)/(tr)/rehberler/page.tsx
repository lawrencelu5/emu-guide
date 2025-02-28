import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import GuidesData from "../../(en)/guides/GuidesData";

export const metadata: Metadata = {
  title: "Rehberler",
};

/* const guides: Guide[] = [
  {
    id: 1,
    name: "DAÜ Kampüsü'nde Yol Bulma",
    text: "DAÜ kampüsündeki önemli binalar ve tesisler dahil olmak üzere kampüste yolunuzu bulmanız için kapsamlı bir rehber.",
    followUpLink: "https://www.emu.edu.tr/campusmap",
  },
  {
    id: 2,
    name: "Mağusa'da Öğrenci Hayatı",
    text: "DAÜ öğrencisi olarak Mağusa'da yaşam hakkında bilmeniz gereken her şey, konaklamadan yerel cazibe merkezlerine kadar.",
    followUpLink: "https://www.emu.edu.tr/campus-life",
  },
  {
    id: 3,
    name: "Lefkoşa'ya Nasıl Gidilir?",
    text: "DAÜ'den Lefkoşa'ya gitmenin yolları, toplu taşıma seçenekleri ve seyahat ipuçları içeren bir rehber.",
    followUpLink:
      "https://transportation.emu.edu.tr/en/announcements?pid=64&t=nicosia-emu-nicosia-free-student-bus-services",
  },
]; */

export default function GuidesPage() {
  return (
    <CategoryPost title="Rehberler">
      <GuidesData lang="tr" />
    </CategoryPost>
  );
}
