import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Backlink({ message }: { message: string }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors duration-300"
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      {message}
    </Link>
  );
}
