import { ExternalLink, Bus, CarTaxiFront } from "lucide-react";
import { getTransportations } from "@/actions/transportation.actions";
import ErrorHeader from "@/components/ui/ErrorHeader/ErrorHeader";

interface Transportation {
  id: number;
  name: string;
  type: string;
  explanation: string;
  officialLink: string;
}

/* const transportations: Transportation[] = [
  {
    id: 1,
    name: "EMU Shuttle Service",
    type: "bus",
    explanation:
      "Free shuttle service for students between campus and city center.",
    officialLink: "https://transportation.emu.edu.tr/en/bus-services",
  },
  {
    id: 2,
    name: "İtimat",
    type: "bus",
    explanation:
      "Private bus service for going and coming from Nicosia every hour.",
    officialLink: "https://itimatgroup.com/toplu-ta%C5%9Fima",
  },
  {
    id: 2,
    name: "KIB-HAS",
    type: "bus",
    explanation: "Private bus service for going and coming from airport.",
    officialLink: "http://kibhas.org/",
  },
  {
    id: 3,
    name: "Kıbrıs Taxi",
    type: "taxi",
    explanation: "Taxi service for pretty much anything you need.",
    officialLink: "https://taksikktc.com/",
  },
]; */

export default async function TransportationData({
  lang,
}: {
  lang?: "en" | "tr";
}) {
  const transportations: Transportation[] = await getTransportations();

  if (!transportations || !transportations.length) {
    return <ErrorHeader lang={lang} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {transportations.map((transport) => (
        <div
          key={transport.id}
          className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-800">
            {transport.type === "bus" ? (
              <Bus className="w-5 h-5 mr-2 text-gray-500" />
            ) : (
              <CarTaxiFront className="w-5 h-5 mr-2 text-gray-500" />
            )}
            {transport.name}
          </h2>
          <p className="text-gray-600 mb-4">{transport.explanation}</p>
          <a
            href={transport.officialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline flex items-center font-semibold"
          >
            {lang === "en" ? "Official Page" : "Resmi Sayfa"}
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </div>
      ))}
    </div>
  );
}
