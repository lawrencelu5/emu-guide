import { ReactNode } from "react";
import CategoryBody from "./CategoryBody/CategoryBody";
import CategoryHeader from "./CategoryHeader/CategoryHeader";

interface CardProp {
  title: string;
  children?: ReactNode;
}

export default function CategoryPost({ title, children }: CardProp) {
  return (
    <>
      <CategoryHeader title={title} />
      <CategoryBody>{children}</CategoryBody>
    </>
  );
}
