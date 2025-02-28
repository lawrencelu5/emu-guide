import { ReactNode } from "react";

interface ErrorProp {
  text?: string;
  children?: ReactNode;
  lang?: "en" | "tr" | undefined;
}

export default function ErrorHeader({ text, children, lang }: ErrorProp) {
  return (
    <section className="w-full py-0 md:py-12 lg:py-24 xl:py-32">
      <div className="container mx-auto max-w-screen-lg px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl/none">
              {text}
              {lang
                ? lang === "en"
                  ? "No results found."
                  : "Sonuç bulunamadı."
                : ""}
            </h1>
          </div>
          {children && children}
        </div>
      </div>
    </section>
  );
}
