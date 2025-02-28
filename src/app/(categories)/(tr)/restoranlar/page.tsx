import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import RestaurantsData from "../../(en)/restaurants/RestaurantsData";

export const metadata: Metadata = {
  title: "Restoranlar",
};

/* const cafes: Cafe[] = [
  {
    name: "Ekor Vista",
    location: "Alfam Vista",
    googleMapsUrl: "https://maps.app.goo.gl/jU9wFTwvqoYJzCgi7",
    openTime: "07:00",
    closeTime: "00:00",
    studyScore: 7,
    priceRange: "$$",
    comments: ["İyi yemekler", "Her zaman yer var", "Popüler mekan"],
  },
  {
    name: "Miami Restaurant",
    location: "Prime Yurdu",
    googleMapsUrl: "https://maps.app.goo.gl/jU9wFTwvqoYJzCgi7",
    openTime: "11:00",
    closeTime: "20:00",
    studyScore: 5,
    priceRange: "$",
    comments: ["Tabak başına ödeme", "Temiz ve sağlıklı yemekler", "Sessiz"],
  },
  {
    name: "Twister Cafe",
    location: "Ugursal Yurdu",
    googleMapsUrl: "https://maps.app.goo.gl/Ehus6ehBBXu4qbYs9",
    openTime: "11:00",
    closeTime: "00:00",
    studyScore: 5,
    priceRange: "$",
    comments: ["Hızlı", "Sessiz", "Uygun fiyatlar"],
  },
  {
    name: "Jojo Cafe",
    location: "Bilgisayar Mühendisliği Binası",
    googleMapsUrl: "https://maps.app.goo.gl/sPhhxqCWg73to7fRA",
    openTime: "07:00",
    closeTime: "19:00",
    studyScore: 9,
    priceRange: "$$",
    comments: ["Çalışmak için en iyi yer", "İyi yemek", "Prizler mevcut"],
  },
  {
    name: "Baron Cafe",
    location: "Hukuk Fakültesi Binası",
    googleMapsUrl: "https://maps.app.goo.gl/on3ztvvgFTpGTf3t9",
    openTime: "07:00",
    closeTime: "19:00",
    studyScore: 6,
    priceRange: "$$",
    comments: ["Her zaman yer var", "Yemek ve market mevcut", "Merkezi konum"],
  },
  {
    name: "Tabledot Restaurant",
    location: "Doğu Akdeniz Üniversitesi",
    googleMapsUrl: "https://maps.app.goo.gl/obRKJpGnz2gSFg1B7",
    openTime: "07:00",
    closeTime: "19:00",
    studyScore: 6,
    priceRange: "$$",
    comments: ["Popüler mekan", "Merkezi konum", "Klima mevcut"],
  },
  {
    name: "The King of Chicken Burger",
    location: "Kampüs Girişi",
    googleMapsUrl: "https://maps.app.goo.gl/N2dUbD1uKRyDQBL48",
    openTime: "11:30",
    closeTime: "10:00",
    studyScore: 6,
    priceRange: "$$",
    comments: ["Büyük porsiyonlar", "Yavaş servis", "Gruplar için ideal"],
  },
  {
    name: "Sandras Cafe",
    location: "Merkez Derslik",
    googleMapsUrl: "https://maps.app.goo.gl/JAiuxVeezR5YWNS7A",
    openTime: "07:00",
    closeTime: "19:00",
    studyScore: 7,
    priceRange: "$$",
    comments: ["Temiz", "Bilardo ve langırt var", "Market mevcut"],
  },
  {
    name: "Sultan Cafe",
    location: "Ozay Oral Kütüphanesi",
    googleMapsUrl: "https://maps.app.goo.gl/n2tmnWstt4d58aZr5",
    openTime: "07:00",
    closeTime: "19:00",
    studyScore: 7,
    priceRange: "$",
    comments: [
      "Sınav haftalarında 7-24 açık",
      "Çok dostane",
      "Market ve kafe var",
    ],
  },
  {
    name: "R&D Cafe",
    location: "Eğitim Fakültesi",
    googleMapsUrl: "https://maps.app.goo.gl/atJum7j5HEnveN729",
    openTime: "07:00",
    closeTime: "19:00",
    studyScore: 6,
    priceRange: "$$",
    comments: ["Büyük mekan", "İyi yemekler ve kahve", "Market mevcut"],
  },
  {
    name: "Sosla Bi Döner",
    location: "Çember",
    googleMapsUrl: "https://maps.app.goo.gl/73uUhX1GdkpLTqvx7",
    openTime: "07:00",
    closeTime: "02:00",
    studyScore: 5,
    priceRange: "$",
    comments: ["Ucuz", "Hızlı", "Kampüs dışında"],
  },
  {
    name: "Crunchy",
    location: "Çember",
    googleMapsUrl: "https://maps.app.goo.gl/wmCygC6vCypMMnM86",
    openTime: "12:00",
    closeTime: "03:00",
    studyScore: 7,
    priceRange: "$$",
    comments: ["İyi kalite", "Lezzetli", "Sessiz"],
  },
  {
    name: "Red Bear Restaurant",
    location: "İsmet İnönü Bulvarı",
    googleMapsUrl: "https://maps.app.goo.gl/CuFghNdNM5HCpKJA8",
    openTime: "08:00",
    closeTime: "00:00",
    studyScore: 7,
    priceRange: "$$",
    comments: ["İyi kalite", "Lezzetli", "Sessiz"],
  },
  {
    name: "Şampiyon Restaurant",
    location: "İsmet İnönü Bulvarı",
    googleMapsUrl: "https://maps.app.goo.gl/cUAC9wKx5YZAkyQx7",
    openTime: "10:00",
    closeTime: "21:00",
    studyScore: 5,
    priceRange: "$$",
    comments: ["İyi kalite", "Lezzetli", "Sessiz"],
  },
]; */

export default function page() {
  return (
    <CategoryPost title="DAÜ yakınlarındaki restoranlar">
      <RestaurantsData lang="tr" />
    </CategoryPost>
  );
}
