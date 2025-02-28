import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import EventsData from "../../(en)/events/EventsData";

export const metadata: Metadata = {
  title: "Etkinlikler",
};

/* const events = [
  {
    id: 1,
    name: "Oryantasyon Günleri",
    date: "2024-09-2",
    place: "DAÜ Aktivite Merkezi",
    googleMapsUrl: "https://maps.app.goo.gl/w5LpmBR1FN8j3FoL6",
    cost: "Öğrenciler için ücretsiz",
  },
  {
    id: 2,
    name: "Avrupa Hareketlilik Haftası",
    date: "2024-09-21",
    place: "Zambak Tatil Köyü",
    googleMapsUrl: "https://maps.app.goo.gl/UQ2aVFbn119kQPcV7",
    cost: "Ücretsiz",
  },
]; */

export default function page() {
  return (
    <CategoryPost title="Etkinlikler">
      <EventsData lang="tr" />
    </CategoryPost>
  );
}
