import { ReactNode, Suspense } from "react";
import SkeletonLayout from "../../SkeletonLayout/SkeletonLayout";

interface CardBody {
  children?: ReactNode;
}

export default async function CategoryBody({ children }: CardBody) {
  return (
    <div className="space-y-8">
      <Suspense fallback={<SkeletonLayout />}>{children}</Suspense>
    </div>
  );
}
