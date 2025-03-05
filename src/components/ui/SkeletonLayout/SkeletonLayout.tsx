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
      <div className="flex animate-pulse">
        <div className="ms-4 mt-2 w-full">
          <p className="h-4 bg-gray-200 rounded-full"></p>

          <ul className="mt-5 space-y-3">
            <li className="w-full h-4 bg-gray-200 rounded-full"></li>
            <li className="w-full h-4 bg-gray-200 rounded-full"></li>
            <li className="w-full h-4 bg-gray-200 rounded-full"></li>
            <li className="w-full h-32 bg-gray-200 rounded-md"></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
