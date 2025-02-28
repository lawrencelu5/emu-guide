import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import CommunitiesData from "../../(en)/communities/CommunitiesData";

export const metadata: Metadata = {
  title: "Topluluklar",
};

/* const communities: Community[] = [
  {
    id: 1,
    name: "UltrAslan DAÜ",
    platform: "Hepsi",
    explanation:
      "Galatasaray taraftarlarının bir araya geldiği, favori futbol kulüplerini destekledikleri, güncellemeler paylaştıkları ve etkinlikler düzenledikleri DAÜ'deki canlı bir topluluk.",
    link: "https://bento.me/ultraslanunidau?fbclid=PAZXh0bgNhZW0CMTEAAaZHV2CbKzeLeEX9B3uofXFnM7PzBJj0tmoxwVL7x_b5aDDo0hu-8841zlc_aem_xkF3uhrH73hU0yIV11VRBA",
  },
  {
    id: 2,
    name: "DaüFeb",
    platform: "Instagram",
    explanation:
      "Fenerbahçe taraftarları için DAÜ'deki Instagram tabanlı bir topluluk. Kulüple ilgili haberler, güncellemeler ve tartışmalar sunar.",
    link: "https://www.instagram.com/daufeb2001?igsh=MW4xdnhwNDdraWcyeQ==",
  },
  {
    id: 3,
    name: "DaüBjk",
    platform: "Instagram",
    explanation:
      "Beşiktaş taraftarlarının DAÜ'de bir araya geldiği, haberleri paylaştığı ve taraftar etkinlikleri organize ettiği bir Instagram topluluğu.",
    link: "https://www.instagram.com/daubjk?igsh=MWl4am1weDB1a3N6eA==",
  },
  {
    id: 4,
    name: "Emuprovince",
    platform: "WhatsApp",
    explanation:
      "Akademik konulardan sosyal etkinliklere kadar çeşitli konuları tartışmak ve DAÜ'den benzer ilgi alanlarına sahip kişilerle tanışmak için WhatsApp gruplarımıza katılın.",
    link: "https://chat.whatsapp.com/DuxUqjZcYEQ2HpGP91dM7v",
  },
  {
    id: 5,
    name: "EMU E-Sports",
    platform: "Discord",
    explanation:
      "DAÜ'deki oyuncular ve e-spor meraklıları için bir Discord sunucusu. Oyun etkinliklerine, turnuvalara katılın ve favori e-spor başlıklarınız hakkında tartışın.",
    link: "https://discord.com/invite/hyu9jF8",
  },
  {
    id: 6,
    name: "EMU Software & AI",
    platform: "Hepsi",
    explanation:
      "DAÜ'de yazılım geliştirme ve yapay zeka alanına odaklanan bir topluluk. Tartışmalara katılın, projelerde işbirliği yapın ve en son teknoloji trendlerinden haberdar olun.",
    link: "https://linktr.ee/emusoft.ai",
  },
]; */

export default function CommunityPage() {
  return (
    <CategoryPost title="DAÜ Toplulukları">
      <CommunitiesData lang="tr" />
    </CategoryPost>
  );
}
