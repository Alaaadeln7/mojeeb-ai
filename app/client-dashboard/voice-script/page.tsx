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

export default function VoiceScript() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectInquiry, setSelectInquiry] = useState<Inquiry | null>(null);
  const [openUpdateKeyword, setOpenUpdateKeyword] = useState<boolean>(false);

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

    chatbotId,
  } = useChatbot();

  return (
    <>
      <section className="p-5 sm:p-10 mb-20 space-y-6">
        <VoiceScriptHeader />

        <CallGreeting />

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
        />

        <KeywordBaseReplies
          chatbot={chatbot}
          setOpenUpdateKeyword={setOpenUpdateKeyword}
          setSelectInquiry={(inquiry) => setSelectInquiry(inquiry as Inquiry)}
        />
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
