import { getSaleItems } from "@/actions/sale-item.actions";
import ErrorHeader from "@/components/ui/ErrorHeader/ErrorHeader";
import { ExternalLink, ShoppingBag } from "lucide-react";

interface SaleItem {
  id: number;
  name: string;
  price: number;
  contactLink: string;
}

// const saleItems: SaleItem[] = [];

export default async function ForSalesData({ lang }: { lang?: "en" | "tr" }) {
  const saleItems: SaleItem[] = await getSaleItems();

  if (!saleItems || !saleItems.length) {
    return <ErrorHeader lang={lang} />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {saleItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <ShoppingBag className="w-5 h-5 mr-2 text-gray-700" />
            {item.name}
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            {lang === "en" ? "Price" : "Fiyat"}:
            <span className="font-medium">{item.price} TL</span>
          </p>
          <a
            href={item.contactLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline flex items-center"
          >
            {lang === "en" ? "Contact Seller" : "Satıcıya Ulaş"}
            <ExternalLink className="w-4 h-4 ml-2 text-blue-600" />
          </a>
        </div>
      ))}
    </div>
  );
}
