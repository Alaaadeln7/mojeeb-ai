// "use client";

import { Check, Loader, MoreHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";
import EnrollmentFormSkeleton from "../skeletons/EnrollmentFormSkeleton";

export default function DesktopTableView({
  columns,
  actions,
  loading,
  data,
  isRTL,
  setOpenDialog,
  setSelectItem,
  setOpenAcceptedDialog,
  setOpenRejectedDialog,
  setOpenDeleteDialog,
}) {
  const t = useTranslations("DesktopTableViewEnrollmentForm");

  if (loading) {
    return <EnrollmentFormSkeleton isRTL={isRTL} t={t} columns={columns} />;
  }

  const handleClick = (e, action, form) => {
    e.preventDefault();
    setSelectItem(form);
    if (action.label === "View Details") {
      setOpenDialog(true);
    } else if (action.label === "Approve") {
      setOpenAcceptedDialog(true);
    } else if (action.label === "Reject") {
      setOpenRejectedDialog(true);
    } else if (action.label === "Delete") {
      setOpenDeleteDialog(true);
    }
  };

  return (
    <Table className="">
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
        {data?.map((form, index) => (
          <TableRow
            key={form._id}
            className="border-b border-muted/30 hover:bg-muted/30 transition-colors animate-slide-in"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {columns.map((column) => (
              <TableCell
                key={`${form.id}-${column.accessor}`}
                className={isRTL ? "text-right" : "text-left"}
              >
                {column.customRender ? (
                  column.customRender(form[column.accessor])
                ) : column.badge ? (
                  <Badge
                    variant={
                      form.status === "accepted"
                        ? "success"
                        : form.status === "rejected"
                        ? "destructive"
                        : form.status === "pending"
                        ? "info"
                        : "secondary"
                    }
                    className="font-medium"
                  >
                    {t(`status.${form.status}`)}
                    {form.status === "accepted" && (
                      <Check className="ml-1 size-3" />
                    )}
                    {form.status === "pending" && (
                      <Loader className="ml-1 size-3" />
                    )}
                    {form.status === "rejected" && (
                      <X className="ml-1 size-3" />
                    )}
                  </Badge>
                ) : (
                  form[column.accessor]?.toString() || "-"
                )}
              </TableCell>
            ))}
            <TableCell className={isRTL ? "text-right" : "text-left"}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align={isRTL ? "start" : "end"}
                  className="border-0 shadow-lg"
                >
                  {actions?.map((action) => (
                    <DropdownMenuItem
                      key={action.label}
                      className={`flex items-center gap-3 ${
                        action.destructive ? "text-red-600" : ""
                      }`}
                      onClick={(e) => handleClick(e, action, form)}
                    >
                      <action.icon className="h-4 w-4" />
                      {t(`actionLabels.${action.label}`)}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
