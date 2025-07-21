import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "../ui/skeleton";

export default function EnrollmentFormSkeleton({ columns, isRTL, t }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-b border-muted/50">
          {columns?.map((column) => (
            <TableHead
              key={column.header}
              className={`font-semibold ${isRTL ? "text-right" : "text-left"}`}
            >
              {t(`columns.${column.header}`)}
            </TableHead>
          ))}
          <TableHead
            className={`font-semibold ${isRTL ? "text-right" : "text-left"}`}
          >
            {t("actions")}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[...Array(5)].map((_, rowIndex) => (
          <TableRow
            key={`skeleton-row-${rowIndex}`}
            className="border-b border-muted/30"
          >
            {columns.map((column, colIndex) => (
              <TableCell key={`skeleton-cell-${rowIndex}-${colIndex}`}>
                <Skeleton className="h-6 w-full" />
              </TableCell>
            ))}
            <TableCell>
              <Skeleton className="h-8 w-8 rounded-full" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
