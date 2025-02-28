import type { Metadata } from "next";
import CafesData from "../../(en)/cafes/CafesData";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";

export const metadata: Metadata = {
  title: "Kafeler",
};

/* const cafes: Cafe[] = [
  {
    name: "Yemen Coffee EMU",
    location: "EMU Kampüs Merkezi",
    googleMapsUrl:
      "https://maps.app.goo.gl/VutBQQyHeAmScayw7?g_st=com.google.maps.preview.copy",
    openTime: "08:00",
    closeTime: "01:00",
    studyScore: 7,
    priceRange: "$$$",
    comments: ["Güzel ortam", "Sevimli personel", "Konumu iyi"],
  },
  {
    name: "Jojo Cafe",
    location: "Bilgisayar Mühendisliği Bölümü",
    googleMapsUrl:
      "https://maps.app.goo.gl/jm81siDu6TrHbU5u8?g_st=com.google.maps.preview.copy",
    openTime: "07:00",
    closeTime: "19:00",
    studyScore: 9,
    priceRange: "$$",
    comments: [
      "Harika hizmet",
      "Sevimli personel",
      "Taze ev yapımı hamur işleri",
    ],
  },
  {
    name: "Rock Café EMU",
    location: "Bilgi Teknolojileri Bölümü",
    googleMapsUrl:
      "https://maps.app.goo.gl/CyT7TQ1FCCH8fBkQ8?g_st=com.google.maps.preview.copy",
    openTime: "08:00",
    closeTime: "17:00",
    studyScore: 7,
    priceRange: "$",
    comments: ["Harika kahve", "Sevimli personel", "Samimi ortam"],
  },
  {
    name: "DAU-SEN LOCAL",
    location: "EMU Kampüs Merkezi",
    googleMapsUrl:
      "https://maps.app.goo.gl/pk3EDijT6nLWjMYD7?g_st=com.google.maps.preview.copy",
    openTime: "07:00",
    closeTime: "21:00",
    studyScore: 8,
    priceRange: "$$$",
    comments: [
      "Sıcak ve sürdürülebilir bir ortam",
      "Rahat bir atmosfer",
      "Harika kahve ve lezzetli yiyecekler",
    ],
  },
  {
    name: "Sandra’s Café",
    location: "EMU Kampüs Merkezi",
    googleMapsUrl:
      "https://maps.app.goo.gl/KwBxqsKiu7wdT4Jt7?g_st=com.google.maps.preview.copy",
    openTime: "09:00",
    closeTime: "22:00",
    studyScore: 7,
    priceRange: "$",
    comments: ["İyi konum", "Bilardo", "Sevimli personel"],
  },
  {
    name: "Break Point",
    location: "EMU Kampüs Merkezi",
    googleMapsUrl:
      "https://maps.app.goo.gl/JbNv8HJxNybm5DVn6?g_st=com.google.maps.preview.copy",
    openTime: "08:00",
    closeTime: "20:00",
    studyScore: 5,
    priceRange: "$",
    comments: ["Uygun konum", "İyi kahve", "Samimi ortam"],
  },
  {
    name: "Crush",
    location: "EMU Kampüs Merkezi",
    googleMapsUrl:
      "https://maps.app.goo.gl/Mjx4nVM21FigFCww7?g_st=com.google.maps.preview.copy",
    openTime: "08:00",
    closeTime: "20:00",
    studyScore: 6,
    priceRange: "$$",
    comments: ["Güzel ortam", "Rahat yer", "Harika kahveler"],
  },
  {
    name: "Gloria Jean’s Coffeee Pop-Art",
    location: "Popart Yurdu",
    googleMapsUrl:
      "https://maps.google.com?ftid=0x14dfc976fbf615cb:0x44bf9d291d27dbe5&entry=gps",
    openTime: "09:00",
    closeTime: "23:00",
    studyScore: 9,
    priceRange: "$$$",
    comments: ["İyi atmosfer", "Harika kahve ve tatlılar", "Uygun konum"],
  },
  {
    name: "Gloria Jean’s Coffees EMU",
    location: "Salamis Yolu",
    googleMapsUrl:
      "https://maps.app.goo.gl/Za7QbbGAZFBfwPVMA?g_st=com.google.maps.preview.copy",
    openTime: "07:00",
    closeTime: "00:00",
    studyScore: 9,
    priceRange: "$$$",
    comments: ["Harika teras", "Kaliteli kahve", "Uygun konum"],
  },
  {
    name: "To Go Coffee Time",
    location: "Salamis Yolu",
    googleMapsUrl:
      "https://maps.app.goo.gl/85Zdt427DWiDhQgq5?g_st=com.google.maps.preview.copy",
    openTime: "08:30",
    closeTime: "23:30",
    studyScore: 7,
    priceRange: "$$",
    comments: ["Sakin ortam", "Doğru ve lezzetli kahve", "İyi konum"],
  },
  {
    name: "Motto Café Bistro",
    location: "Salamis Yolu",
    googleMapsUrl:
      "https://maps.app.goo.gl/ZLYZ1sVpcg6ekUot8?g_st=com.google.maps.preview.copy",
    openTime: "10:00",
    closeTime: "03:00",
    studyScore: 4,
    priceRange: "$$",
    comments: [
      "Harika erişim ve dış mekan alanı",
      "Harika nargile",
      "İyi hizmet",
    ],
  },
  {
    name: "Mackbear Coffee",
    location: "Novel Centre Point",
    googleMapsUrl:
      "https://maps.app.goo.gl/qSvJwGcjx8761Q5v7?g_st=com.google.maps.preview.copy",
    openTime: "08:00",
    closeTime: "01:00",
    studyScore: 8,
    priceRange: "$$$",
    comments: ["Ferah ortam", "İyi atmosfer", "Harika kahve"],
  },
  {
    name: "Okka Coffee",
    location: "Salamis Yolu",
    googleMapsUrl:
      "https://maps.app.goo.gl/LBdgRmLnE38KWA14A?g_st=com.google.maps.preview.copy",
    openTime: "08:00",
    closeTime: "01:00",
    studyScore: 3,
    priceRange: "$$",
    comments: [
      "Geniş kahve ve demleme seçenekleri",
      "Hızlı servis",
      "Premium nargile",
    ],
  },
  {
    name: "Exile Coffee and Wine",
    location: "Salamis Yolu",
    googleMapsUrl:
      "https://maps.app.goo.gl/wZtMJfGzq537vVXy8?g_st=com.google.maps.preview.copy",
    openTime: "08:30",
    closeTime: "23:00",
    studyScore: 5,
    priceRange: "$$$",
    comments: [
      "Harika kahve, içecekler ve dostluk ortamı",
      "Rahat atmosfer",
      "Sevimli personel",
    ],
  },
  {
    name: "Caffe Pascucci",
    location: "Salamis Yolu",
    googleMapsUrl:
      "https://maps.app.goo.gl/87wpiW1pC8pMuQbn9?g_st=com.google.maps.preview.copy",
    openTime: "09:00",
    closeTime: "23:00",
    studyScore: 8,
    priceRange: "$$",
    comments: ["Hızlı Wi-fi", "Rahat atmosfer", "İyi kahve"],
  },
  {
    name: "Cortado Espresso Bar",
    location: "Salamis Yolu",
    googleMapsUrl:
      "https://maps.app.goo.gl/BFeVvMhACR4VVbN18?g_st=com.google.maps.preview.copy",
    openTime: "09:00",
    closeTime: "00:00",
    studyScore: 9,
    priceRange: "$$$",
    comments: ["Hızlı servis", "Rahat atmosfer", "Güzel bahçe"],
  },
  {
    name: "Narin Eatery",
    location: "Salamis Yolu",
    googleMapsUrl:
      "https://maps.app.goo.gl/H6qucM67hn5eTEun7?g_st=com.google.maps.preview.copy",
    openTime: "08:00",
    closeTime: "00:00",
    studyScore: 6,
    priceRange: "$$",
    comments: ["Ücretsiz park", "Kaliteli yemek", "İyi hamur işleri ve kahve"],
  },
  {
    name: "Loof Coffee & Shopping",
    location: "Salamis Yolu",
    googleMapsUrl:
      "https://maps.app.goo.gl/5dnhN7viDGHpnUKv5?g_st=com.google.maps.preview.copy",
    openTime: "8:00",
    closeTime: "00:00",
    studyScore: 9,
    priceRange: "$$$",
    comments: ["Sevimli personel", "İyi kahve", "Ev yapımı hamur işleri"],
  },
  {
    name: "Coffee Corner Cakes",
    location: "Salamis Yolu",
    googleMapsUrl:
      "https://maps.app.goo.gl/N93U41z7nC3MBmVf9?g_st=com.google.maps.preview.copy",
    openTime: "08:00",
    closeTime: "00:00",
    studyScore: 7,
    priceRange: "$$$",
    comments: ["Sevimli personel", "İyi kahve", "Toplantı odası mevcut"],
  },
  {
    name: "MOC Ingate",
    location: "Ingate Otel",
    googleMapsUrl:
      "https://maps.app.goo.gl/N93U41z7nC3MBmVf9?g_st=com.google.maps.preview.copy",
    openTime: "08:00",
    closeTime: "00:00",
    studyScore: 10,
    priceRange: "$$$",
    comments: ["Sevimli personel", "İyi kahve", "Dost canlısı personel"],
  },
]; */

export default function page() {
  return (
    <CategoryPost title="DAÜ etrafindaki kafeler">
      <CafesData lang="tr" />
    </CategoryPost>
  );
}
