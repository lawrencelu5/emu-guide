import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import PrivateClassesData from "../../(en)/private-classes/PrivateClassesData";
import ContactUsBanner from "@/components/ui/ContactUsBanner/ContactUsBanner";

export const metadata: Metadata = {
  title: "Özel Dersler",
};

/* const privateClasses: PrivateClass[] = [
  {
    id: 1,
    name: "MATH151",
    price: 400,
    contactLink: "https://www.linkedin.com/in/ata-atasoy-67b496209/",
  },
  {
    id: 2,
    name: "CMPE231",
    price: 400,
    contactLink:
      "https://www.instagram.com/ccakmakfurkan?igsh=Mnl5YjZmZmw2Y2t1",
  },
  {
    id: 3,
    name: "CMPE371",
    price: 400,
    contactLink:
      "https://www.instagram.com/ccakmakfurkan?igsh=Mnl5YjZmZmw2Y2t1",
  },
];
 */
export default function page() {
  return (
    <>
      <CategoryPost title="Özel Dersler">
        <PrivateClassesData lang="tr" />
      </CategoryPost>
      <ContactUsBanner text="Özel Ders Vermek İstiyorum" />
    </>
  );
}
