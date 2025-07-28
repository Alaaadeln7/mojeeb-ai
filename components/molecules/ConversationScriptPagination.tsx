"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { ConversationScriptPaginationProps } from "@/types/chatbot";

export default function ConversationScriptPagination({
  currentPage,
  pageIndex,
  pageSize,
  total,
  totalPages,
  currentLimit,
  hasPreviousPage,
  hasNextPage,
  onPageChange,
  handleLimitChange,
}: ConversationScriptPaginationProps) {
  const showingFrom = pageIndex * pageSize + 1;
  const showingTo = Math.min((pageIndex + 1) * pageSize, total);
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-2 bg-muted/50 rounded-lg">
      <div className="text-sm text-muted-foreground">
        Showing {showingFrom} to {showingTo} of {total} entries
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center gap-2">
          <Label htmlFor="rows-per-page" className="text-sm whitespace-nowrap">
            Rows per page:
          </Label>
          <Select
            value={`${currentLimit}`}
            onValueChange={(value) => handleLimitChange(Number(value))}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={currentLimit} />
            </SelectTrigger>
            <SelectContent>
              {[5, 10, 15, 20, 25, 30].map((size) => (
                <SelectItem key={size} value={`${size}`}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            className="size-8 p-0"
            onClick={() => onPageChange(0)}
            disabled={!hasPreviousPage}
          >
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">First page</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="size-8 p-0"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={!hasPreviousPage}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>
          <div className="flex items-center justify-center text-sm w-12">
            {currentPage} / {totalPages}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="size-8 p-0"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={!hasNextPage}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="size-8 p-0"
            onClick={() => onPageChange(totalPages)}
            disabled={!hasNextPage}
          >
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Last page</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
