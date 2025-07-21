import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function EnrollmentFormCardSkeleton() {
  return (
    <div className="space-y-3">
      {[...Array(3)].map((_, index) => (
        <Card key={`skeleton-${index}`} className="p-3 mb-3 shadow-sm">
          <div className="space-y-3">
            {/* Header skeleton */}
            <div className="flex justify-between items-center">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-5 w-16" />
            </div>

            {/* Content skeleton */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
              {[...Array(5)].map((_, i) => (
                <div key={`skeleton-field-${i}`} className="space-y-1.5">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>

            {/* Actions skeleton */}
            <div className="flex justify-end">
              <Skeleton className="h-7 w-7 rounded-full" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
