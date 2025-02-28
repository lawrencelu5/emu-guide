import { ExternalLink, MapPin, Tag } from "lucide-react";
import ErrorHeader from "@/components/ui/ErrorHeader/ErrorHeader";
import { getDiscounts } from "@/actions/discount.actions";

interface Discount {
  id: number;
  name: string;
  place: string;
  googleMapsUrl: string;
  discountPrice: number;
  previousPrice: number;
}

const discounts: Discount[] = [
  {
    id: 1,
    name: "Itimat Student Deal",
    place: "Anit Roundabout",
    googleMapsUrl: "https://maps.app.goo.gl/Z2xcy5EyqHSLnG8t5",
    discountPrice: 150,
    previousPrice: 160,
  },
];

export default async function DiscountsData({ lang }: { lang?: "en" | "tr" }) {
  const discounts: Discount[] = await getDiscounts();

  if (!discounts || !discounts.length) {
    return <ErrorHeader lang={lang} />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {discounts.map((discount) => (
        <div
          key={discount.id}
          className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
            <Tag className="w-5 h-5 mr-2 text-gray-700" />
            {discount.name}
          </h2>
          <p className="flex items-center text-gray-700 mb-2">
            <MapPin className="w-4 h-4 mr-2" />
            <a
              href={discount.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center"
            >
              {discount.place}
              <ExternalLink className="w-3 h-3 ml-2 text-blue-600" />
            </a>
          </p>
          <p className="text-green-600 text-lg font-semibold mb-1">
            Now: {discount.discountPrice} TL
            <span className="text-gray-500 line-through ml-2">
              Was: {discount.previousPrice} TL
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
