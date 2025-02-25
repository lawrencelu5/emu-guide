import Backlink from "@/components/ui/Backlink/Backlink";

export default function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="container mx-auto px-4 py-8">
      <Backlink message="Ana Sayfaya Geri Dön" />
      {children}
    </section>
  );
}
