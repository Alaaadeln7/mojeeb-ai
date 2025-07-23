import { Skeleton } from "../ui/skeleton";

export default function NotificationSkeleton() {
  return (
    <div className="space-y-3 px-4 py-3">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex gap-3 w-full">
          <Skeleton className="h-4 w-4 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-3/4" />
            <Skeleton className="h-2 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}
