import { getGuides } from "@/actions/guide.actions";
import ErrorHeader from "@/components/ui/ErrorHeader/ErrorHeader";
import { BookOpen } from "lucide-react";
import FollowUpButton from "@/components/ui/FollowUpButton/FollowUpButton";

interface Guide {
  id: number;
  name: string;
  text: string;
  followUpLink: string;
}

/* const guides: Guide[] = [
  {
    id: 1,
    name: "Navigating EMU Campus",
    text: "A comprehensive guide to finding your way around the EMU campus, including key buildings and facilities.",
    followUpLink: "https://www.emu.edu.tr/campusmap",
  },
  {
    id: 2,
    name: "Student Life in Famagusta",
    text: "Everything you need to know about living in Famagusta as an EMU student, from accommodation to local attractions.",
    followUpLink: "https://www.emu.edu.tr/campus-life",
  },
  {
    id: 3,
    name: "How to go to the Nicosia",
    text: "A guide to navigate your way to Nicosia from EMU, including public transport options and travel tips.",
    followUpLink:
      "https://transportation.emu.edu.tr/en/announcements?pid=64&t=nicosia-emu-nicosia-free-student-bus-services",
  },
]; */

export default async function GuidesData({ lang }: { lang?: "en" | "tr" }) {
  const guides: Guide[] = await getGuides();

  if (!guides || !guides.length) {
    return <ErrorHeader lang={lang} />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {guides.map((guide) => (
        <div
          key={guide.id}
          className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <BookOpen className="w-6 h-6 mr-2 text-blue-500" />
            {guide.name}
          </h2>
          <p className="text-gray-600 mb-6">{guide.text}</p>
          <FollowUpButton url={guide.followUpLink} text={"Read more"} />
        </div>
      ))}
    </div>
  );
}
