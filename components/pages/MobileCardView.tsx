"use client";

import { Check, Loader, MoreHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";
import EnrollmentFormCardSkeleton from "../skeletons/EnrollmentFormCardSkeleton";

export default function MobileCardView({
  forms,
  actions = [],
  loading,
  columns = [],
}) {
  const t = useTranslations("DesktopTableViewEnrollmentForm");
  const direction = useTranslations()("direction");
  const isRTL = direction === "rtl";

  if (loading) {
    return <EnrollmentFormCardSkeleton />;
  }

  if (!forms || forms.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        {t("noForms")}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {forms.map((form) => (
        <Card key={form.id} className="p-3 mb-3 shadow-sm">
          <div className="space-y-2">
            {/* Header with name and status */}
            <div className="flex justify-between items-start gap-2">
              <h3 className="font-semibold text-base line-clamp-1">
                {form.name}
              </h3>
              <Badge
                variant={
                  form.status === "approved"
                    ? "success"
                    : form.status === "rejected"
                    ? "destructive"
                    : form.status === "pending"
                    ? "info"
                    : "secondary"
                }
                className="font-medium flex items-center gap-1"
              >
                {t(`status.${form.status}`)}
                {form.status === "approved" && <Check className="size-3" />}
                {form.status === "pending" && (
                  <Loader className="size-3 animate-spin" />
                )}
                {form.status === "rejected" && <X className="size-3" />}
              </Badge>
            </div>

            {/* Main content - responsive grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 text-sm">
              {columns.map((column) => (
                <div
                  key={`${form.id}-${column.accessor}`}
                  className={isRTL ? "text-right" : "text-left"}
                >
                  <p className="text-xs text-muted-foreground">
                    {t(`columns.${column.header}`)}
                  </p>
                  <p className="font-medium line-clamp-1">
                    {form[column.accessor] ?? "-"}
                  </p>
                </div>
              ))}
            </div>

            {/* Actions */}
            {actions.length > 0 && (
              <div className="flex justify-end pt-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 p-0"
                      aria-label={t("actions")}
                    >
                      <MoreHorizontal className="h-3.5 w-3.5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="border-0 shadow-lg min-w-[140px]"
                  >
                    {actions.map((action) => (
                      <DropdownMenuItem
                        key={action.label}
                        className={`text-xs px-3 py-2 ${
                          action.destructive ? "text-red-600" : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          action.onClick(form.id);
                        }}
                      >
                        <action.icon className="mr-2 h-3.5 w-3.5" />
                        {t(`actionLabels.${action.label}`)}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}
