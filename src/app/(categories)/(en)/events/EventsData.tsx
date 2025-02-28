import { getEvents } from "@/actions/events.actions";
import ErrorHeader from "@/components/ui/ErrorHeader/ErrorHeader";
import { Calendar, MapPin, Banknote, ExternalLink } from "lucide-react";

interface Event {
  id: number;
  name: string;
  date: string;
  place: string;
  googleMapsUrl: string;
  cost: string;
}

/* const events = [
  {
    id: 1,
    name: "Orientation Days",
    date: "2024-09-2",
    place: "EMU Activity Center",
    googleMapsUrl: "https://maps.app.goo.gl/w5LpmBR1FN8j3FoL6",
    cost: "Free for students",
  },
  {
    id: 2,
    name: "European Mobility Week",
    date: "2024-09-21",
    place: "Zambak Holiday Village",
    googleMapsUrl: "https://maps.app.goo.gl/UQ2aVFbn119kQPcV7",
    cost: "Free",
  },
];
 */

export default async function EventsData({ lang }: { lang?: "en" | "tr" }) {
  const events: Event[] = await getEvents();

  if (!events || !events.length) {
    return <ErrorHeader lang={lang} />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            {event.name}
          </h2>
          <div className="space-y-3">
            <p className="flex items-center text-gray-700">
              <Calendar className="w-5 h-5 mr-2" />
              {new Date(event.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="flex items-center text-gray-700">
              <MapPin className="w-5 h-5 mr-2" />
              <a
                href={event.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center"
              >
                {event.place}
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </p>
            <p className="flex items-center text-green-600 font-semibold">
              <Banknote className="w-5 h-5 mr-2" />
              {event.cost}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
