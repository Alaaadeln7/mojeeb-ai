import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ChatbotData {
  id: string;
  // Add other chatbot fields as needed
}

interface InquiryData {
  id?: string;
  question: string;
  answer: string;
  keyword?: string;
  chatbotId: string;
}

interface SpeakData {
  text: string;
}

export const chatbotApiSlice = createApi({
  reducerPath: "chatbotApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: `${
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_API_URL_PRODUCTION
        : process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
    }/chatbot`,
    credentials: "include",
  }),
  tagTypes: ["Chatbot", "Inquiry"],
  endpoints: (builder) => ({
    getChatbot: builder.query<
      ChatbotData,
      { chatbotId: string; page?: number; limit?: number }
    >({
      query: ({ chatbotId, page = 1, limit = 10 }) =>
        `/${chatbotId}?page=${page}&limit=${limit}`,
      providesTags: (result, error, arg) => [
        { type: "Chatbot", id: arg.chatbotId },
      ],
    }),

    updateChatbot: builder.mutation<
      ChatbotData,
      { id: string; [key: string]: string }
    >({
      query: ({ id, ...data }) => ({
        url: `/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Chatbot", id }],
    }),

    deleteChatbot: builder.mutation<{ message: string }, { id: string }>({
      query: ({ id }) => ({
        url: "/delete",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Chatbot", id }],
    }),

    addInquiry: builder.mutation<
      { message: string; inquiry: InquiryData },
      InquiryData
    >({
      query: (body) => ({
        url: "/create",
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, { chatbotId }) => [
        { type: "Chatbot", id: chatbotId },
        { type: "Inquiry", id: "LIST" },
      ],
    }),

    updateInquiry: builder.mutation<
      { message: string; inquiry: InquiryData },
      InquiryData
    >({
      query: (body) => ({
        url: "/update",
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error, { chatbotId }) => [
        { type: "Chatbot", id: chatbotId },
        { type: "Inquiry", id: "LIST" },
      ],
    }),

    deleteInquiry: builder.mutation<
      { message: string },
      { inquiryId: string; chatbotId: string }
    >({
      query: (body) => ({
        url: "/delete",
        method: "DELETE",
        body,
      }),
      invalidatesTags: (result, error, { chatbotId }) => [
        { type: "Chatbot", id: chatbotId },
        { type: "Inquiry", id: "LIST" },
      ],
    }),

    speak: builder.mutation<Blob, SpeakData>({
      query: (body) => ({
        url: "/speak",
        method: "POST",
        body,
        responseHandler: async (response) => {
          const blob = await response.blob();
          return blob;
        },
      }),
    }),
    createOrUpdateDescription: builder.mutation({
      query: (body) => ({
        url: "/add-description",
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, { chatbotId }) => [
        { type: "Chatbot", id: chatbotId },
        { type: "Inquiry", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetChatbotQuery,
  useUpdateChatbotMutation,
  useDeleteChatbotMutation,
  useAddInquiryMutation,
  useUpdateInquiryMutation,
  useDeleteInquiryMutation,
  useSpeakMutation,
  useCreateOrUpdateDescriptionMutation,
} = chatbotApiSlice;
