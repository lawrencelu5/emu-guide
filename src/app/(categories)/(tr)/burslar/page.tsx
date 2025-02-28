import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import ScholarshipsData from "../../(en)/scholarships/ScholarshipsData";

export const metadata: Metadata = {
  title: "Burslar",
};

/* const scholarships: Scholarship[] = [
  {
    id: 1,
    name: "Uluslararası Öğrenci Bursu",
    explanation:
      "Akademik başarıya dayalı olarak uluslararası öğrencilere %50 veya %25 öğrenim ücreti indirimleri sunulmaktadır. Lisans ve doktora düzeyinde rekabetçi tam burslar da mevcuttur.",
    officialLink:
      "https://io.emu.edu.tr/en/students/prospective-students/scholarships",
  },
  {
    id: 2,
    name: "Her Şey Dahil Burslar",
    explanation:
      "Ortaokul mezunlarının en üst %1'ine verilen burs, öğrenim ücretini, konaklamayı ve yemekleri kapsar. Başvurular yıllık olarak değerlendirilir.",
    officialLink:
      "https://io.emu.edu.tr/en/students/prospective-students/scholarships",
  },
  {
    id: 3,
    name: "Öğrenim Ücreti Muafiyetleri",
    explanation:
      "Lisans başvuru sahipleri arasında en yüksek performans gösterenlere sunulan öğrenim ücreti muafiyetidir.",
    officialLink:
      "https://io.emu.edu.tr/en/students/prospective-students/scholarships",
  },
  {
    id: 4,
    name: "Yüksek Onur Ödülü",
    explanation:
      "Her fakülte veya okulda en yüksek GPA'ya sahip ilk 10 öğrenciye, asgari ücrete göre nakit ödüller verilir.",
    officialLink:
      "https://io.emu.edu.tr/en/students/prospective-students/scholarships",
  },
  {
    id: 5,
    name: "Spor Bursu",
    explanation:
      "Bireysel veya takım sporlarında olağanüstü performans sergileyen öğrencilere tam veya kısmi öğrenim/konaklama bursu sunulur.",
    officialLink:
      "https://io.emu.edu.tr/en/students/prospective-students/scholarships",
  },
  {
    id: 6,
    name: "Öğrenci Asistanlığı",
    explanation:
      "2.0 üzerinde GPA'ye sahip öğrencilere fakültelerde saatlik maaş karşılığında pozisyonlar sunulur.",
    officialLink:
      "https://io.emu.edu.tr/en/students/prospective-students/scholarships",
  },
  {
    id: 7,
    name: "Araştırma Asistanlığı",
    explanation:
      "Lisansüstü öğrenciler, öğrenim ücreti muafiyetleri ve maaş sunan tam veya yarı zamanlı pozisyonlara başvurabilirler.",
    officialLink:
      "https://io.emu.edu.tr/en/students/prospective-students/scholarships",
  },
  {
    id: 8,
    name: "Kardeş İndirimi",
    explanation:
      "DAÜ'de öğrenim gören kardeşlere %25-%75 oranında indirim sağlanır. Lisansüstü kardeşler %10 indirim alabilir.",
    officialLink:
      "https://io.emu.edu.tr/en/students/prospective-students/scholarships",
  },
  {
    id: 9,
    name: "KKTC Hükümeti Bursu",
    explanation:
      "KKTC veya Türkiye konsoloslukları aracılığıyla başarılı öğrenciler için burs başvurusu yapılabilir.",
    officialLink:
      "https://io.emu.edu.tr/en/students/prospective-students/scholarships",
  },
]; */

export default function ScholarshipsPage() {
  return (
    <CategoryPost title="DAÜ Bursları">
      <ScholarshipsData lang="tr" />
    </CategoryPost>
  );
}
