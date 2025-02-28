import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import type { Metadata } from "next";
import EventsData from "./EventsData";

export const metadata: Metadata = {
  title: "Events",
};

export default function page() {
  return (
    <CategoryPost title="EMU Events">
      <EventsData lang={"en"} />
    </CategoryPost>
  );
}
