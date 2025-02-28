import { getFaculties } from "@/actions/faculty.actions";
import ErrorHeader from "@/components/ui/ErrorHeader/ErrorHeader";
import FollowUpButton from "@/components/ui/FollowUpButton/FollowUpButton";

interface Department {
  id: number;
  name: string;
  description: string;
  officialPageUrl: string;
}

/* const departments: Department[] = [
  {
    id: 1,
    name: "Architecture",
    description:
      "Focuses on architectural design, urban planning, and sustainable building practices.",
    officialPageUrl: "https://arch.emu.edu.tr",
  },
  {
    id: 2,
    name: "Arts & Sciences",
    description:
      "Offers a wide range of programs in natural sciences, social sciences, and humanities.",
    officialPageUrl: "https://fas.emu.edu.tr",
  },
  {
    id: 3,
    name: "Business & Economics",
    description:
      "Provides education in various business disciplines, economics, and management.",
    officialPageUrl: "https://be.emu.edu.tr",
  },
  {
    id: 4,
    name: "Communication and Media Studies",
    description:
      "Covers areas such as journalism, public relations, and digital media.",
    officialPageUrl: "https://fcms.emu.edu.tr",
  },
  {
    id: 5,
    name: "Dentistry",
    description:
      "Offers comprehensive education in dental sciences and clinical practice.",
    officialPageUrl: "https://dent.emu.edu.tr",
  },
  {
    id: 6,
    name: "Education",
    description:
      "Prepares future educators with modern teaching methodologies and practices.",
    officialPageUrl: "https://educ.emu.edu.tr",
  },
  {
    id: 7,
    name: "Engineering",
    description:
      "Covers various engineering disciplines including civil, electrical, and mechanical engineering.",
    officialPageUrl: "https://eng.emu.edu.tr",
  },
  {
    id: 8,
    name: "Health Sciences",
    description:
      "Focuses on various aspects of health care, including nursing and physiotherapy.",
    officialPageUrl: "https://shs.emu.edu.tr",
  },
  {
    id: 9,
    name: "Law",
    description:
      "Provides comprehensive legal education covering national and international law.",
    officialPageUrl: "https://law.emu.edu.tr",
  },
  {
    id: 10,
    name: "Medicine",
    description:
      "Offers medical education with a focus on both clinical practice and research.",
    officialPageUrl: "https://med.emu.edu.tr",
  },
  {
    id: 11,
    name: "Pharmacy",
    description:
      "Provides education in pharmaceutical sciences and pharmacy practice.",
    officialPageUrl: "https://pharm.emu.edu.tr",
  },
  {
    id: 12,
    name: "Tourism",
    description:
      "Focuses on hospitality management, tourism planning, and related fields.",
    officialPageUrl: "https://tourism.emu.edu.tr",
  },
]; */

export default async function FacultiesData({ lang }: { lang?: "en" | "tr" }) {
  const departments: Department[] = await getFaculties();

  if (!departments || !departments.length) {
    return <ErrorHeader lang={lang} />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {departments.map((dept) => (
        <div
          key={dept.id}
          className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {dept.name}
          </h2>
          <p className="text-gray-600 mb-6">{dept.description}</p>
          <FollowUpButton
            url={dept.officialPageUrl}
            text={lang === "en" ? "Official Page" : "Resmi Sayfa"}
          />
        </div>
      ))}
    </div>
  );
}
