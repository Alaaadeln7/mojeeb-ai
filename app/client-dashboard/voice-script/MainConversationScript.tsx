"use client";

import { MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ConversationScript from "./ConversationScript";
import { MainConversationScriptProps } from "@/types/chatbot";
import { useTranslations } from "next-intl";
import ConversationScriptPagination from "@/components/molecules/ConversationScriptPagination";
import { useState } from "react";

export default function MainConversationScript({
  setIsModalOpen,
  chatbot,
  getChatbotLoading,
  total,
  totalPages,
  currentPage,
  currentLimit,
  handlePageChange,
  handleLimitChange,
  hasPreviousPage,
  hasNextPage,
}: MainConversationScriptProps) {
  const t = useTranslations("MainConversationScript");
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setPageIndex(1);
  };

  return (
    <>
      <Card className="p-6 mt-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary rounded-lg">
              <MessageSquareText className="text-primary-foreground size-5" />
            </div>
            <h3 className="text-2xl font-semibold text-primary">
              {t("title")}
            </h3>
          </div>
        </div>

        {/* Content area */}
        <Card className="p-4 mb-6 border-none shadow-none outline-none">
          <ConversationScript
            chatbot={chatbot}
            getChatbotLoading={getChatbotLoading}
            t={t}
          />
        </Card>
        {total > 5 && (
          <ConversationScriptPagination
            pageIndex={pageIndex - 1}
            pageSize={pageSize}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageSizeChange}
            total={total}
            currentPage={currentPage}
            currentLimit={currentLimit}
            handlePageChange={handlePageChange}
            handleLimitChange={handleLimitChange}
            hasPreviousPage={hasPreviousPage}
            hasNextPage={hasNextPage}
          />
        )}
        <Button onClick={() => setIsModalOpen(true)} className="colored-btn">
          {t("addButton")}{" "}
        </Button>
      </Card>
    </>
  );
}
