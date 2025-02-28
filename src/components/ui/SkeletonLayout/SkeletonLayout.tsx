export default function SkeletonLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 flex flex-col gap-4`}>
      <div className="skeleton h-4 w-1/2" />
      <div className="space-y-2">
        <div className="skeleton h-4 w-1/2" />
        <div className="skeleton h-4 w-1/2" />
        <div className="skeleton h-4 w-1/2" />
        <div className="mt-4">
          <div className="skeleton h-32 w-full"></div>
        </div>
      </div>
    </div>
  );
}
