import {
  useDeleteChatbotMutation,
  useUpdateChatbotMutation,
  useAddInquiryMutation,
  useGetChatbotQuery,
  useUpdateInquiryMutation,
  useDeleteInquiryMutation,
  useSpeakMutation,
} from "@/store/api/chatbotApiSlice";
import { showToast, toast } from "@/components/ui/sonner";
import useClient from "./useClient";
import {
  AddInquiryParams,
  Chatbot,
  DeleteInquiryParams,
  Inquiry,
  UpdateChatbotParams,
  UpdateInquiryParams,
} from "@/types/chatbot";
import { useState } from "react";

const handleError = (
  error: { data?: { message?: string } },
  action: string
): never => {
  console.error(`Failed to ${action}:`, error);
  const message = error?.data?.message || `Failed to ${action}`;
  toast(message);
  throw error;
};

const notifySuccess = (action: string): void => {
  showToast(`${action} successfully!`, "success");
};

export default function useChatbot() {
  const { currentClient } = useClient();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(5);
  const handlePageChange = (newPage: number): void => {
    setCurrentPage(newPage);
  };
  const handleLimitChange = (newLimit: number): void => {
    setCurrentLimit(newLimit);
  };
  const { data: chatbot, isLoading: getChatbotLoading } = useGetChatbotQuery(
    {
      chatbotId: currentClient?.chatbotId || "",
      page: currentPage,
      limit: currentLimit,
    },
    { skip: !currentClient?.chatbotId }
  );

  const [updateChatbot, { isLoading: updateChatbotLoading }] =
    useUpdateChatbotMutation();
  const [deleteChatbot, { isLoading: deleteChatbotLoading }] =
    useDeleteChatbotMutation();
  const [addInquiry, { isLoading: addInquiryLoading }] =
    useAddInquiryMutation();
  const [updateInquiry, { isLoading: updateInquiryLoading }] =
    useUpdateInquiryMutation();
  const [deleteInquiry, { isLoading: deleteInquiryLoading }] =
    useDeleteInquiryMutation();

  const [speak, { isLoading: speakLoading }] = useSpeakMutation();
  // Chatbot operations
  const handleUpdateChatbot = async (
    id: string,
    chatbotData: UpdateChatbotParams
  ): Promise<Chatbot> => {
    try {
      const response = await updateChatbot({ id, ...chatbotData }).unwrap();
      notifySuccess("Chatbot updated");
      return response.data;
    } catch (error: unknown) {
      return handleError(
        error as { data?: { message?: string } },
        "update chatbot"
      );
    }
  };

  const handleDeleteChatbot = async (id: string): Promise<void> => {
    try {
      await deleteChatbot(id).unwrap();
      notifySuccess("Chatbot deleted");
    } catch (error: unknown) {
      handleError(error as { data?: { message?: string } }, "delete chatbot");
    }
  };

  // Inquiry operations
  const handleAddInquiry = async ({
    question,
    answer,
    keyword,
  }: Omit<AddInquiryParams, "chatbotId">): Promise<Inquiry> => {
    if (!currentClient?.chatbotId) {
      throw new Error("No chatbot ID available");
    }

    try {
      const res = await addInquiry({
        question,
        answer,
        keyword,
        chatbotId: currentClient?.chatbotId,
      }).unwrap();

      if (res.data) notifySuccess("Inquiry added");
      return res.data;
    } catch (error: unknown) {
      return handleError(
        error as { data?: { message?: string } },
        "add inquiry"
      );
    }
  };

  const handleUpdateInquiry = async (
    inquiryData: UpdateInquiryParams
  ): Promise<Inquiry> => {
    try {
      const response = await updateInquiry(inquiryData).unwrap();
      showToast("Inquiry updated", "success");
      return response.data;
    } catch (error) {
      return handleError(
        error as { data?: { message?: string } },
        "update inquiry"
      );
    }
  };

  const handleDeleteInquiry = async (
    data: DeleteInquiryParams
  ): Promise<void> => {
    console.log(data);
    try {
      const res = await deleteInquiry(data).unwrap();
      if (res) showToast("Inquiry deleted", "success");
    } catch (error: unknown) {
      handleError(error as { data?: { message?: string } }, "delete inquiry");
    }
  };

  const handleSpeak = async (body) => {
    try {
      await speak(body);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    chatbot: chatbot?.data?.data || [],
    chatbotId: currentClient?.chatbotId || "",
    totalPages: chatbot?.data?.totalPages,
    total: chatbot?.data?.total,
    hasNextPage: chatbot?.data?.hasNextPage,
    hasPreviousPage: chatbot?.data?.hasPreviousPage,
    handleUpdateChatbot,
    handleDeleteChatbot,
    getChatbotLoading,
    updateChatbotLoading,
    deleteChatbotLoading,
    handleAddInquiry,
    addInquiryLoading,
    handleUpdateInquiry,
    updateInquiryLoading,
    deleteInquiryLoading,
    handleDeleteInquiry,
    handlePageChange,
    currentPage,
    handleLimitChange,
    currentLimit,
    speakLoading,
    handleSpeak,
  };
}
