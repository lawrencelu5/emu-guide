import { getNews } from "@/actions/news.actions";
import { Calendar } from "lucide-react";
import FollowUpButton from "@/components/ui/FollowUpButton/FollowUpButton";
import ErrorHeader from "@/components/ui/ErrorHeader/ErrorHeader";

interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
  followUpLink: string;
}

/* const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Orientation Days",
      content:
        "Details on the Orientation Days, organised for new students who have just started their university lives and joined the EMU Family, can be accessed via our internet page. You can also obtain all types of university-related information from the information desks set up on our campus.",
      date: "2024-09-7",
      followUpLink: "https://orientation.emu.edu.tr/DefaultEng.aspx",
    },
  ];
   */

export default async function NewsData({ lang }: { lang?: "en" | "tr" }) {
  const newsItems: NewsItem[] = await getNews();

  if (!newsItems || !newsItems.length) {
    return <ErrorHeader lang={lang} />;
  }

  return (
    <>
      {newsItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            {item.title}
          </h2>
          <p className="text-gray-500 mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-gray-400" />
            <span className="text-gray-600">
              {new Date(item.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">{item.content}</p>
          <FollowUpButton
            url={item.followUpLink}
            text={lang === "en" ? "Read more" : "Read more"}
          />
        </div>
      ))}
    </>
  );
}
