"use client";

import ErrorHeader from "@/components/ui/ErrorHeader/ErrorHeader";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string; message?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorHeader
      text={error.message ? error.message : "Bir şeyler ters gitti!"}
    >
      <button
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
        onClick={() => reset()}
      >
        Tekrar deneyin
      </button>
    </ErrorHeader>
  );
}
