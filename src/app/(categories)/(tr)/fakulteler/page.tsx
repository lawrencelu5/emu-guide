import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import FacultiesData from "../../(en)/faculties/FacultiesData";

export const metadata: Metadata = {
  title: "Fakülteler",
};

/* const departments: Department[] = [
  {
    id: 1,
    name: "Mimarlık",
    description:
      "Mimari tasarım, kentsel planlama ve sürdürülebilir bina uygulamaları üzerine odaklanır.",
    officialPageUrl: "https://arch.emu.edu.tr",
  },
  {
    id: 2,
    name: "Fen ve Edebiyat",
    description:
      "Doğa bilimleri, sosyal bilimler ve beşeri bilimlerde geniş bir program yelpazesi sunar.",
    officialPageUrl: "https://fas.emu.edu.tr",
  },
  {
    id: 3,
    name: "İşletme ve Ekonomi",
    description:
      "Çeşitli iş disiplinlerinde, ekonomi ve yönetimde eğitim sunar.",
    officialPageUrl: "https://be.emu.edu.tr",
  },
  {
    id: 4,
    name: "İletişim ve Medya Çalışmaları",
    description:
      "Gazetecilik, halkla ilişkiler ve dijital medya gibi alanları kapsar.",
    officialPageUrl: "https://fcms.emu.edu.tr",
  },
  {
    id: 5,
    name: "Diş Hekimliği",
    description:
      "Diş hekimliği bilimleri ve klinik uygulamalarda kapsamlı eğitim sunar.",
    officialPageUrl: "https://dent.emu.edu.tr",
  },
  {
    id: 6,
    name: "Eğitim",
    description:
      "Gelecek öğretmenleri modern öğretim metodolojileri ve uygulamaları ile hazırlar.",
    officialPageUrl: "https://educ.emu.edu.tr",
  },
  {
    id: 7,
    name: "Mühendislik",
    description:
      "İnşaat, elektrik ve makine mühendisliği gibi çeşitli mühendislik disiplinlerini kapsar.",
    officialPageUrl: "https://eng.emu.edu.tr",
  },
  {
    id: 8,
    name: "Sağlık Bilimleri",
    description:
      "Hemşirelik ve fizyoterapi gibi sağlık hizmetlerinin çeşitli yönlerine odaklanır.",
    officialPageUrl: "https://shs.emu.edu.tr",
  },
  {
    id: 9,
    name: "Hukuk",
    description:
      "Ulusal ve uluslararası hukuk üzerine kapsamlı bir hukuk eğitimi sunar.",
    officialPageUrl: "https://law.emu.edu.tr",
  },
  {
    id: 10,
    name: "Tıp",
    description: "Klinik uygulama ve araştırma odaklı tıp eğitimi sunar.",
    officialPageUrl: "https://med.emu.edu.tr",
  },
  {
    id: 11,
    name: "Eczacılık",
    description:
      "Farmasötik bilimler ve eczane uygulamaları üzerine eğitim sunar.",
    officialPageUrl: "https://pharm.emu.edu.tr",
  },
  {
    id: 12,
    name: "Turizm",
    description:
      "Konaklama yönetimi, turizm planlaması ve ilgili alanlara odaklanır.",
    officialPageUrl: "https://tourism.emu.edu.tr",
  },
]; */

export default function DepartmentsPage() {
  return (
    <CategoryPost title="DAÜ Bölümleri">
      <FacultiesData lang="tr" />
    </CategoryPost>
  );
}
