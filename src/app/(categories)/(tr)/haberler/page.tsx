import type { Metadata } from "next";
import CategoryPost from "@/components/ui/CategoryCard/CategoryPost";
import NewsData from "../../(en)/news/NewsData";

export const metadata: Metadata = {
  title: "Haberler",
};

/* const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Oryantasyon Günleri",
    content:
      "Yeni öğrencilerimizin üniversite yaşamına başlamaları ve DAÜ ailesine katılmaları dolayısıyla düzenlenen Oryantasyon Günleri ile ilgili detayları internet sayfamızdan öğrenebilir, kampüs içerisine kurulan danışma masalarından her türlü bilgiye ulaşabilirsiniz.",
    date: "2024-09-7",
    followUpLink: "https://orientation.emu.edu.tr/Default.aspx",
  },
]; */

export default function page() {
  return (
    <CategoryPost title="DAÜ Haberleri">
      <NewsData lang="tr" />
    </CategoryPost>
  );
}
