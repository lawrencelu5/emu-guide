import { ReactNode } from "react";

interface CardBody {
  children?: ReactNode;
}

export default function CategoryBody({ children }: CardBody) {
  return (
    <>
      <div className="space-y-8">{children}</div>
    </>
  );
}
