import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import StationaryData from "../../(en)/stationery/StationaryData";

export const metadata: Metadata = {
  title: "Kırtasiye",
};

/* const stationaryShops: Stationary[] = [
  {
    id: 1,
    name: "Kampüs Copy Center",
    priceScale: "$$",
    place: "Alfam Vista",
    googleMapsUrl: "https://maps.app.goo.gl/XaP7Ko6ai8bCFZqx9",
    services: ["Baskı", "Klasik kırtasiye", "Ofis eşyaları"],
  },
  {
    id: 2,
    name: "Deniz Plaza",
    priceScale: "$$$",
    place: "Merkezi Derslikler",
    googleMapsUrl: "https://maps.app.goo.gl/REqKjwtF15mYtpqf6",
    services: [
      "Yüksek kalite baskı",
      "Resmi okul kitapları",
      "All kinds of stationary",
    ],
  },
  {
    id: 3,
    name: "Güneş Kırtasiye",
    priceScale: "$",
    place: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/kEZ1vf2w9X3TSWwG6",
    services: ["Ucuz Baskı", "Klasik kırtasiye"],
  },
  {
    id: 4,
    name: "Harmony Copy Center",
    priceScale: "$$",
    place: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/dVfPuVamM3ZgBYAz9",
    services: ["Baskı", "Kitaplar", "Muzik ile ilgili ürünler"],
  },
]; */

export default function StationaryPage() {
  return (
    <CategoryPost title="Kırtasiyeler">
      <StationaryData lang="tr" />
    </CategoryPost>
  );
}
