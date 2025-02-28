import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function FollowUpButton({
  url,
  text,
}: {
  url: string;
  text: string;
}) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
    >
      {text}
      <ExternalLink className="w-4 h-4 ml-2" />
    </Link>
  );
}
