import { PlusCircle } from "lucide-react";

export default function ContactUsBanner({ text }: { text: string }) {
  return (
    <div className="mt-12 text-center">
      <a
        href="/contact"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
      >
        <PlusCircle className="w-5 h-5 mr-2" />
        {text}
      </a>
    </div>
  );
}
