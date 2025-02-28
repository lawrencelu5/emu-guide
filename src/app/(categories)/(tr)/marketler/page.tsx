import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import MarketsData from "../../(en)/markets/MarketsData";

export const metadata: Metadata = {
  title: "Marketler",
};

/* const markets: Market[] = [
  {
    id: 1,
    name: "Koop Market",
    place: "Alfam Vista",
    googleMapsUrl: "https://maps.app.goo.gl/Vjv3Yqm5R5eEFeVF8",
    priceScale: "$$",
  },
  {
    id: 2,
    name: "Molto",
    place: "Prime Living",
    googleMapsUrl: "https://maps.app.goo.gl/CA1kqMC8b8qWPxjc8",
    priceScale: "$$",
  },
  {
    id: 3,
    name: "B1 Market",
    place: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/1ShWcUPJNXgDWpXFA",
    priceScale: "$",
  },
  {
    id: 4,
    name: "Cilem Off Licence",
    place: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/MWDLV5XfLSJzSmBw7",
    priceScale: "$",
  },
  {
    id: 5,
    name: "Unimar",
    place: "City Mall",
    googleMapsUrl: "https://maps.app.goo.gl/Ls29PgEf4an3John7",
    priceScale: "$$",
  },
  {
    id: 6,
    name: "Macro Supermarket",
    place: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/9DJ7N843RvvVuvhg8",
    priceScale: "$$",
  },
  {
    id: 6,
    name: "Belediye Pazarı",
    place: "Terminal",
    googleMapsUrl: "https://maps.app.goo.gl/LQjQGyCpyPqrmkYL7",
    priceScale: "$",
  },
  {
    id: 6,
    name: "Molto",
    place: "Terminal",
    googleMapsUrl: "https://maps.app.goo.gl/cPmKvEF7xBdCCvcY7",
    priceScale: "$$",
  },
]; */

export default function MarketsPage() {
  return (
    <CategoryPost title="Marketler">
      <MarketsData lang="tr" />
    </CategoryPost>
  );
}
