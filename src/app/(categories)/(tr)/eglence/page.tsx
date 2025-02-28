import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import EntertainmentData from "../../(en)/entertainment/EntertainmentData";

export const metadata: Metadata = {
  title: "Eğlence",
};

/* const entertainments: Entertainment[] = [
  {
    id: 1,
    name: "BARCODE",
    place: "Çember",
    googleMapsUrl:
      "https://maps.app.goo.gl/GvGaSmgWYrKzoUpn8?g_st=com.google.maps.preview.copy",
    priceRange: "$",
    comments: ["Uygun konum", "Rahat atmosfer", "Canlı müzik"],
  },
  {
    id: 2,
    name: "Jooker Live",
    place: "Çember",
    googleMapsUrl:
      "https://maps.app.goo.gl/2FeR2bsUdxoqYXie6?g_st=com.google.maps.preview.copy",
    priceRange: "$$",
    comments: ["İyi müzik", "Uygun konum", "Eğlenceli mekan"],
  },
  {
    id: 3,
    name: "Q Bar Mağusa",
    place: "Çember",
    googleMapsUrl:
      "https://maps.app.goo.gl/Yb4rxVEXGZPgChUd7?g_st=com.google.maps.preview.copy",
    priceRange: "$",
    comments: ["Kaliteli kokteyl", "İyi canlı müzik", "İyi güvenlik"],
  },
  {
    id: 4,
    name: "Passage N.199",
    place: "Çember",
    googleMapsUrl:
      "https://maps.app.goo.gl/qjb9wLoPmGK5ExYd8?g_st=com.google.maps.preview.copy",
    priceRange: "$$",
    comments: ["Canlı müzik", "İyi kokteyller", "Premium nargile"],
  },
  {
    id: 5,
    name: "Shelby Bar",
    place: "Çember",
    googleMapsUrl:
      "https://maps.app.goo.gl/9qjzpfxcme1hNThq5?g_st=com.google.maps.preview.copy",
    priceRange: "$$",
    comments: ["Uygun konum", "İyi müzik", "Alkol"],
  },
  {
    id: 6,
    name: "The Shamrock",
    place: "Kaliland",
    googleMapsUrl:
      "https://maps.app.goo.gl/r55fwNEtBGcQCk188?g_st=com.google.maps.preview.copy",
    priceRange: "$$$",
    comments: [
      "Bowling, bilardo ve futbol maçları",
      "Harika yiyecekler ve kokteyller",
      "İyi nargile",
    ],
  },
  {
    id: 7,
    name: "De Molay Bar",
    place: "Surlariçi",
    googleMapsUrl:
      "https://maps.app.goo.gl/4MCJsuxoafFzQBrbA?g_st=com.google.maps.preview.copy",
    priceRange: "$$",
    comments: [
      "Rahat ve huzurlu atmosfer",
      "İyi şovlar ve canlı müzik",
      "Kaliteli kokteyller",
    ],
  },
  {
    id: 8,
    name: "Monks Inn",
    place: "Surlariçi",
    googleMapsUrl:
      "https://maps.app.goo.gl/GVFWNxBg3jjpRFTQ8?g_st=com.google.maps.preview.copy",
    priceRange: "$$",
    comments: [
      "Premium kokteyller",
      "Rahat ortam",
      "İyi dış mekan oturma alanı",
    ],
  },
  {
    id: 9,
    name: "Caterina Cornaro House",
    place: "Surlariçi",
    googleMapsUrl:
      "https://maps.app.goo.gl/BX3zzVKMG63zUDTf8?g_st=com.google.maps.preview.copy",
    priceRange: "$$$",
    comments: ["Premium kokteyller", "Güzel atmosfer ve çevre", "İyi konum"],
  },
  {
    id: 10,
    name: "Hamam Inn Bar",
    place: "Surlariçi",
    googleMapsUrl:
      "https://maps.app.goo.gl/YqufdNwXCT1kG1bA9?g_st=com.google.maps.preview.copy",
    priceRange: "$$",
    comments: [
      "Canlı müzik",
      "Kaliteli kokteyller",
      "Rahat dış mekan oturma alanı",
    ],
  },
  {
    id: 11,
    name: "42 Café & Bar",
    place: "Surlariçi",
    googleMapsUrl:
      "https://maps.app.goo.gl/VhnANgDCY5UAhfP3A?g_st=com.google.maps.preview.copy",
    priceRange: "$",
    comments: ["Harika duvar sanatı", "Rahat ve huzurlu ortam", "Bilardo"],
  },
  {
    id: 12,
    name: "Rave Club",
    place: "Surlariçi",
    googleMapsUrl:
      "https://maps.app.goo.gl/29jZ8oAKYzqPcH2K8?g_st=com.google.maps.preview.copy",
    priceRange: "$$",
    comments: ["Kaliteli müzik", "Ücretsiz otopark", "İyi atmosfer"],
  },
  {
    id: 13,
    name: "Lion’s Garden",
    place: "Tuzla",
    googleMapsUrl:
      "https://maps.app.goo.gl/Fp6biTHNv3QSVCpZ7?g_st=com.google.maps.preview.copy",
    priceRange: "$$$",
    comments: ["İyi canlı müzik", "Kaliteli şovlar", "Nazik personel"],
  },
  {
    id: 14,
    name: "EMU Beach Club",
    place: "Tuzla",
    googleMapsUrl:
      "https://maps.app.goo.gl/gR4kMz4rD9ThAUWq7?g_st=com.google.maps.preview.copy",
    priceRange: "$",
    comments: [
      "Temiz deniz",
      "İyi kaliteli yiyecekler ve servis",
      "Güler yüzlü",
    ],
  },
  {
    id: 15,
    name: "Loof Beach",
    place: "Glapsides",
    googleMapsUrl:
      "https://maps.app.goo.gl/WLA1SxSfe4sYHi61A?g_st=com.google.maps.preview.copy",
    priceRange: "$$$",
    comments: [
      "Temiz deniz",
      "İyi kaliteli kahve ve yiyecekler",
      "Harika şovlar ve açık hava sineması",
    ],
  },
  {
    id: 16,
    name: "Citymall Sineması",
    place: "Citymall AVM",
    googleMapsUrl:
      "https://maps.google.com?q=City%20Mall,%20%C5%9Eht.%20%C4%B0brahim%20Kaz%C4%B1m%20Cd,%20Gazima%C4%9Fusa%2099450&ftid=0x14dfc9c8574dd179:0xa7392eff52e0b638&entry=gps&lucs=,94213531,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_st=com.google.maps.preview.copy",
    priceRange: "$$$",
    comments: [
      "İyi patlamış mısır",
      "Kaliteli salonlar ve ses sistemleri",
      "Güler yüzlü",
    ],
  },
]; */

export default function EntertainmentPage() {
  return (
    <CategoryPost title="DAÜ'de Eğlence">
      <EntertainmentData lang="tr" />
    </CategoryPost>
  );
}
