import { Info } from "lucide-react";
import FollowUpButton from "@/components/ui/FollowUpButton/FollowUpButton";
import { getNewContents } from "@/actions/new-content.actions";
import ErrorHeader from "@/components/ui/ErrorHeader/ErrorHeader";

interface NewContent {
  id: number;
  name: string;
  text: string;
  followUpLink: string;
}

/* const newContents: NewContent[] = [
  {
    id: 1,
    name: "Registration Process",
    text: "Learn about the step-by-step registration process for new students.",
    followUpLink:
      "https://www.emu.edu.tr/en/prospective-students/online-application/752",
  },
  {
    id: 2,
    name: "Campus Tour",
    text: "Take a virtual tour of the EMU campus and familiarize yourself with key locations.",
    followUpLink: "https://www.youtube.com/watch?v=cHo0KsEUBYs",
  },
  {
    id: 3,
    name: "Student Services",
    text: "Discover the various student services available to support your academic journey.",
    followUpLink:
      "https://www.emu.edu.tr/en/campus/registrars-office/student-services-office/718",
  },
]; */

export default async function NewContentData({ lang }: { lang?: "en" | "tr" }) {
  const newContents: NewContent[] = await getNewContents();

  if (!newContents || !newContents.length) {
    return <ErrorHeader lang={lang} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newContents.map((content) => (
        <div
          key={content.id}
          className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <Info className="w-5 h-5 mr-2 text-gray-700" />
            {content.name}
          </h2>
          <p className="text-lg text-gray-700 mb-4">{content.text}</p>
          <FollowUpButton url={content.followUpLink} text="Learn More" />
        </div>
      ))}
    </div>
  );
}
