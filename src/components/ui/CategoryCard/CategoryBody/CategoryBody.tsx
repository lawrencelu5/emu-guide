import { ReactNode, Suspense } from "react";
import SkeletonLayout from "../../SkeletonLayout/SkeletonLayout";

interface CardBody {
  children?: ReactNode;
}

export default async function CategoryBody({ children }: CardBody) {
  return <Suspense fallback={<SkeletonLayout />}>{children}</Suspense>;
}
