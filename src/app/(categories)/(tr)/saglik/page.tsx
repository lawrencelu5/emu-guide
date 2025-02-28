import Link from "next/link";
import { AlertTriangle } from "lucide-react";

import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import HealthData from "../../(en)/health/HealthData";

export const metadata: Metadata = {
  title: "Sağlık",
};

/* const healthFacilities: HealthFacility[] = [
  {
    id: 1,
    name: "DAÜ Sağlık Merkezi",
    type: "Hastane",
    location: "DAÜ Kampüsü",
    googleMapsUrl: "https://maps.app.goo.gl/ywL1Sa8FqCijTizA7",
  },
  {
    id: 2,
    name: "Gazimağusa Devlet Hastanesi",
    type: "Hastane",
    location: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/Qxt2Nw3XXtaPLCeB7",
  },
  {
    id: 3,
    name: "Gazimağusa Life Hastanesi",
    type: "Hastane",
    location: "City Mall Bölgesi",
    googleMapsUrl: "https://maps.app.goo.gl/Aj3Wp734JDZ5HgUp8",
  },
  {
    id: 4,
    name: "Gazimağusa Merkez Hastanesi",
    type: "Hastane",
    location: "Eşref Bitlis Cd",
    googleMapsUrl: "https://maps.app.goo.gl/bUmqfzp99hQsJErb7",
  },
  {
    id: 5,
    name: "Kunter Güven Hastanesi",
    type: "Hastane",
    location: "Anıt Kavşağı Bölgesi",
    googleMapsUrl: "https://maps.app.goo.gl/WBELJHP3Py7Tm8p37",
  },
  {
    id: 6,
    name: "MediPark Klinik",
    type: "Klinik",
    location: "Abant Sk",
    googleMapsUrl: "https://maps.app.goo.gl/x9iHAdrpXCzGYo249",
  },
  {
    id: 7,
    name: "Dentica",
    type: "Klinik",
    location: "Bayraktar Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/PKyLAsZrD3HymNz99",
  },
  {
    id: 8,
    name: "Başarır Diş Kliniği",
    type: "Klinik",
    location: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/kzugT5qHwjWGcier8",
  },
  {
    id: 9,
    name: "Sümer Eczanesi",
    type: "Eczane",
    location: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/Z9AMdrA3vYHJFpig7",
  },
  {
    id: 10,
    name: "Nasim Eczanesi",
    type: "Eczane",
    location: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/dwHiEcMiVEtgcAF49",
  },
  {
    id: 11,
    name: "Hande Besmel Eczanesi",
    type: "Eczane",
    location: "Salamis Yolu",
    googleMapsUrl: "https://maps.app.goo.gl/qJfUwkQSaDs9dgct9",
  },
]; */

export default function HealthPage() {
  return (
    <>
      <CategoryPost title="Sağlık Tesisleri">
        <HealthData lang="tr" />
      </CategoryPost>
      <div className="mt-10 p-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-lg shadow-md">
        <p className="flex items-center font-bold text-lg">
          <AlertTriangle className="w-6 h-6 mr-2" />
          Önemli Bilgi
        </p>
        <p className="mt-2 text-gray-700">
          Mesai saatleri dışındaki eczane hizmetleri için
          <Link
            href="https://www.kteb.org/dp/?lang=tr"
            className="text-blue-600 hover:underline ml-1"
          >
            buraya tıklayın.
          </Link>
        </p>
      </div>
    </>
  );
}
