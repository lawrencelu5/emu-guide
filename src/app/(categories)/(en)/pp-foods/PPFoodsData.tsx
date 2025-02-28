import { MapPin, Banknote, MessageSquare, ExternalLink } from "lucide-react";

import type { Metadata } from "next";
import { getPPFoods } from "@/actions/ppfood.actions";
import ErrorHeader from "@/components/ui/ErrorHeader/ErrorHeader";

export const metadata: Metadata = {
  title: "PP Foods",
};

interface PPFood {
  id: number;
  name: string;
  place: string;
  googleMapsUrl: string;
  price: number;
  comments: string[];
}

/* const ppFoods: PPFood[] = [
  {
    id: 1,
    name: "Chicken & Rice",
    place: "Campus Cafe",
    googleMapsUrl: "https://goo.gl/maps/example1",
    price: 130,
    comments: ["Great value for money", "Healty", "Quick service"],
  },
]; */

export default async function PPFoodsData({ lang }: { lang?: "en" | "tr" }) {
  const ppFoods: PPFood[] = await getPPFoods();

  if (!ppFoods || !ppFoods.length) {
    return <ErrorHeader lang={lang} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ppFoods.map((food) => (
        <div
          key={food.id}
          className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {food.name}
          </h2>
          <div className="space-y-4">
            <p className="flex items-center text-gray-700">
              <MapPin className="w-5 h-5 mr-2" />
              <a
                href={food.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center"
              >
                {food.place}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </p>
            <p className="flex items-center text-green-600 text-lg font-bold">
              <Banknote className="w-5 h-5 mr-2" />
              {food.price.toFixed(2)} TL
            </p>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-900 flex items-center mb-2">
                <MessageSquare className="w-5 h-5 mr-2 text-gray-700" />
                {lang === "en" ? "Comments" : "Yorumlar"}
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {food.comments.map((comment, index) => (
                  <li key={index} className="text-sm text-gray-700">
                    {comment}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
