import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import { AlertTriangle } from "lucide-react";
import type { Metadata } from "next";
import HealthData from "./HealthData";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Health",
};

export default function HealthPage() {
  return (
    <>
      <CategoryPost title="Health Facilities">
        <HealthData lang="en" />
      </CategoryPost>
      <div className="mt-10 p-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 rounded-lg shadow-md">
        <p className="flex items-center font-bold text-lg">
          <AlertTriangle className="w-6 h-6 mr-2" />
          Important Notice
        </p>
        <p className="mt-2 text-gray-700">
          For after-hours pharmacy services, please check the
          <Link
            href="https://www.kteb.org/dp/?lang=en"
            className="text-blue-600 hover:underline ml-1"
          >
            After Hours Pharmacy list
          </Link>
          .
        </p>
      </div>
    </>
  );
}
