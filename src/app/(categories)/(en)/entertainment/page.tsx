import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import EntertainmentData from "./EntertainmentData";

export const metadata: Metadata = {
  title: "Entertainment",
};
export default function EntertainmentPage() {
  return (
    <CategoryPost title="Entertainment in EMU">
      <EntertainmentData lang={"en"} />
    </CategoryPost>
  );
}
