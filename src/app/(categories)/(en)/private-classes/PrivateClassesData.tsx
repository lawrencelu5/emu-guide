import { ExternalLink, Book } from "lucide-react";
import { getPrivateClasses } from "@/actions/private-class.actions";
import ErrorHeader from "@/components/ui/ErrorHeader/ErrorHeader";

interface PrivateClass {
  id: number;
  name: string;
  price: number;
  contactLink: string;
}

/* const privateClasses: PrivateClass[] = [
  {
    id: 1,
    name: "MATH151",
    price: 400,
    contactLink: "https://www.linkedin.com/in/ata-atasoy-67b496209/",
  },
  {
    id: 2,
    name: "CMPE231",
    price: 400,
    contactLink:
      "https://www.instagram.com/ccakmakfurkan?igsh=Mnl5YjZmZmw2Y2t1",
  },
  {
    id: 3,
    name: "CMPE371",
    price: 400,
    contactLink:
      "https://www.instagram.com/ccakmakfurkan?igsh=Mnl5YjZmZmw2Y2t1",
  },
]; */

export default async function PrivateClassesData({
  lang,
}: {
  lang?: "en" | "tr";
}) {
  const privateClasses: PrivateClass[] = await getPrivateClasses();

  if (!privateClasses || !privateClasses.length) {
    return <ErrorHeader lang={lang} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {privateClasses.map((classItem) => (
        <div
          key={classItem.id}
          className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <Book className="w-5 h-5 mr-2 text-gray-700" />
            {classItem.name}
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            {lang === "en" ? "Price" : "Fiyat"}:{" "}
            <span className="font-medium">{classItem.price} TL</span>
          </p>
          <a
            href={classItem.contactLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline flex items-center"
          >
            {lang === "en" ? "Contact" : "Ulaş"}
            <ExternalLink className="w-4 h-4 ml-2 text-blue-600" />
          </a>
        </div>
      ))}
    </div>
  );
}
