import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import NewContentData from "../../(en)/i-am-new/NewContentData";

export const metadata: Metadata = {
  title: "Yeni Geldim",
};

/* const newContents: NewContent[] = [
  {
    id: 1,
    name: "Kayıt Süreci",
    text: "Yeni öğrenciler için adım adım kayıt sürecini öğrenin.",
    followUpLink:
      "https://www.emu.edu.tr/en/prospective-students/online-application/752",
  },
  {
    id: 2,
    name: "Kampüs Turu",
    text: "DAÜ kampüsünde sanal bir tur atın ve önemli yerlerle tanışın.",
    followUpLink: "https://www.youtube.com/watch?v=cHo0KsEUBYs",
  },
  {
    id: 3,
    name: "Öğrenci Hizmetleri",
    text: "Akademik yolculuğunuzu destekleyen çeşitli öğrenci hizmetlerini keşfedin.",
    followUpLink:
      "https://www.emu.edu.tr/en/campus/registrars-office/student-services-office/718",
  },
];
 */
export default function NewToEmuPage() {
  return (
    <CategoryPost title="DAÜ'de Yeniyim">
      <NewContentData lang="tr" />
    </CategoryPost>
  );
}
