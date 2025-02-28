import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import type { Metadata } from "next";
import FacultiesData from "./FacultiesData";

export const metadata: Metadata = {
  title: "Faculties",
};

export default function DepartmentsPage() {
  return (
    <CategoryPost title={"EMU Departments"}>
      <FacultiesData lang="en" />
    </CategoryPost>
  );
}
