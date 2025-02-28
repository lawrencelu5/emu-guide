import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import TransportationData from "../../(en)/transportation/TransportationData";

export const metadata: Metadata = {
  title: "Ulaşım",
};

/* const transportations: Transportation[] = [
  {
    id: 1,
    name: "DAÜ Servis Hizmeti",
    type: "bus",
    explanation:
      "Öğrenciler için kampüs ve şehir merkezi arasında ücretsiz servis hizmeti.",
    officialLink: "https://transportation.emu.edu.tr/en/bus-services",
  },
  {
    id: 2,
    name: "İtimat",
    type: "bus",
    explanation: "Lefkoşa'ya her saat özel otobüs servisi.",
    officialLink: "https://itimatgroup.com/toplu-ta%C5%9Fima",
  },
  {
    id: 2,
    name: "KIB-HAS",
    type: "bus",
    explanation: "Havaalanına gidip gelmek için otobüs servisi.",
    officialLink: "http://kibhas.org/",
  },
  {
    id: 3,
    name: "Kıbrıs Taksi",
    type: "taxi",
    explanation: "Her türlü ihtiyacınız için taksi hizmeti.",
    officialLink: "https://taksikktc.com/",
  },
]; */

export default function page() {
  return (
    <CategoryPost title="DAÜ Ulaşım Seçenekleri">
      <TransportationData lang="tr" />
    </CategoryPost>
  );
}
