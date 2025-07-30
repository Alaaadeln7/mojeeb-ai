"use client";

import { useState } from "react";
import AddConversationScriptModal from "./AddConversationScriptModal";
import CallGreeting from "./CallGreeting";
import KeywordBaseReplies from "./KeywordBaseReplies";
import MainConversationScript from "./MainConversationScript";
import VoiceScriptHeader from "./VoiceScriptHeader";
import useChatbot from "@/hooks/useChatbot";
import UpdateKeywordModal from "./UpdateKeywordModal";
import { Inquiry } from "@/types/chatbot";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DescriptionScript from "./DescriptionScript";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function VoiceScript() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectInquiry, setSelectInquiry] = useState<Inquiry | null>(null);
  const [openUpdateKeyword, setOpenUpdateKeyword] = useState<boolean>(false);
  const t = useTranslations("tabs");
  const {
    chatbot,
    getChatbotLoading,
    handleAddInquiry,
    addInquiryLoading,
    total,
    totalPages,
    currentPage,
    currentLimit,
    handlePageChange,
    handleLimitChange,
    hasPreviousPage,
    hasNextPage,
    description,
    chatbotId,
  } = useChatbot();

  return (
    <>
      <section className="p-5 sm:p-10 mb-20 space-y-6">
        <VoiceScriptHeader />

        <CallGreeting />

        <Tabs defaultValue="conversations">
          <TabsList className="w-full flex justify-center items-center">
            <TabsTrigger className="cursor-pointer" value="conversations">
              {t("conversations")}
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="description">
              {t("description")}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="conversations">
            <MainConversationScript
              setIsModalOpen={setIsModalOpen}
              chatbot={chatbot}
              getChatbotLoading={getChatbotLoading}
              total={total}
              totalPages={totalPages}
              currentPage={currentPage}
              currentLimit={currentLimit}
              handlePageChange={handlePageChange}
              handleLimitChange={handleLimitChange}
              hasPreviousPage={hasPreviousPage}
              hasNextPage={hasNextPage}
              description={description}
            />

            <KeywordBaseReplies
              chatbot={chatbot}
              setOpenUpdateKeyword={setOpenUpdateKeyword}
              setSelectInquiry={(inquiry) =>
                setSelectInquiry(inquiry as Inquiry)
              }
            />
          </TabsContent>
          <TabsContent value="description">
            <Card className="p-6 mt-6">
              <DescriptionScript description={description} />
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <AddConversationScriptModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        loading={addInquiryLoading}
        onConfirm={handleAddInquiry}
      />

      <UpdateKeywordModal
        setOpenUpdateKeyword={setOpenUpdateKeyword}
        openUpdateKeyword={openUpdateKeyword}
        chatbotId={chatbotId ?? ""}
        selectInquiry={selectInquiry}
      />
    </>
  );
}
