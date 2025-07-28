import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function ConversationScriptSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <Card key={index} className="rounded-lg border p-4">
          <div className="flex flex-col gap-4">
            <div className="flex justify-end">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-8 rounded-full" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="flex items-start gap-2 max-w-[90%]">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <div className="flex flex-col items-end gap-2">
                    <Skeleton className="h-16 w-64 rounded-2xl rounded-tr-none" />
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-5 w-5 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="flex items-start gap-3 max-w-[90%]">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-20 w-72 rounded-2xl rounded-tl-none" />
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-4" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
