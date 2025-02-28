import { Users } from "lucide-react";
import ErrorHeader from "@/components/ui/ErrorHeader/ErrorHeader";
import { getCommunities } from "@/actions/community.actions";
import FollowUpButton from "@/components/ui/FollowUpButton/FollowUpButton";

interface Community {
  id: number;
  name: string;
  platform: string;
  explanation: string;
  link: string;
}

/* const communities: Community[] = [
  {
    id: 1,
    name: "UltrAslan DAÜ",
    platform: "All",
    explanation:
      "A vibrant community for Galatasaray fans at EMU, where members come together to support their favorite football club, share updates, and organize events.",
    link: "https://bento.me/ultraslanunidau?fbclid=PAZXh0bgNhZW0CMTEAAaZHV2CbKzeLeEX9B3uofXFnM7PzBJj0tmoxwVL7x_b5aDDo0hu-8841zlc_aem_xkF3uhrH73hU0yIV11VRBA",
  },
  {
    id: 2,
    name: "DaüFeb",
    platform: "Instagram",
    explanation:
      "An Instagram-based community for Fenerbahçe fans at EMU, providing updates, news, and discussions on everything related to the club.",
    link: "https://www.instagram.com/daufeb2001?igsh=MW4xdnhwNDdraWcyeQ==",
  },
  {
    id: 3,
    name: "DaüBjk",
    platform: "Instagram",
    explanation:
      "A space for Beşiktaş fans at EMU to connect, share news, and organize fan-related activities through Instagram.",
    link: "https://www.instagram.com/daubjk?igsh=MWl4am1weDB1a3N6eA==",
  },
  {
    id: 4,
    name: "Emuprovince",
    platform: "WhatsApp",
    explanation:
      "Join our WhatsApp groups to discuss various topics, ranging from academic subjects to social events, and meet like-minded peers from EMU.",
    link: "https://chat.whatsapp.com/DuxUqjZcYEQ2HpGP91dM7v",
  },
  {
    id: 5,
    name: "EMU E-Sports",
    platform: "Discord",
    explanation:
      "A Discord server for gamers and e-sports enthusiasts at EMU. Participate in gaming events, tournaments, and discussions on your favorite e-sports titles.",
    link: "https://discord.com/invite/hyu9jF8",
  },
  {
    id: 6,
    name: "EMU Software & AI",
    platform: "All",
    explanation:
      "A community dedicated to software development and artificial intelligence at EMU. Join discussions, collaborate on projects, and stay updated on the latest tech trends.",
    link: "https://linktr.ee/emusoft.ai",
  },
]; */

export default async function CommunitiesData({
  lang,
}: {
  lang?: "en" | "tr";
}) {
  const communities: Community[] = await getCommunities();

  if (!communities || !communities.length) {
    return <ErrorHeader lang={lang} />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {communities.map((community) => (
        <div
          key={community.id}
          className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2 text-gray-700" />
            {community.name}
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            Platform: <span className="font-medium">{community.platform}</span>
          </p>
          <p className="text-gray-600 mb-4">{community.explanation}</p>
          <FollowUpButton
            url={community.link}
            text={lang === "en" ? "Join Community" : "Topluluğa Katıl"}
          />
        </div>
      ))}
    </div>
  );
}
