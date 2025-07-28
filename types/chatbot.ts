export interface Inquiry {
  _id: string;
  question: string;
  answer: string;
  keyword: string;
  role: "user" | "ai";
  createdAt: string;
  updatedAt: string;
  voice?: string;
}
export interface AddConversationScriptModalProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

export interface FormValues {
  question: string;
  answer: string;
  keyword: string;
}

export interface Chatbot {
  id: string;
  name: string;
  // Add other chatbot properties as needed
  inquiries: Inquiry[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Inquiry {
  id: string;
  question: string;
  answer: string;
  keyword: string;
  chatbotId: string;
  createdAt: string;
  updatedAt: string;
  voice?: string;
}

export type TranslationFunction = (
  key: string,
  values?: Record<string, string | number> | undefined
) => string;

export interface UpdateChatbotParams {
  id: string;
  name?: string;
  // Include other updatable fields
}

export interface AddInquiryParams {
  question: string;
  answer: string;
  keyword: string;
  chatbotId: string;
}

export interface UpdateInquiryParams {
  id: string;
  question?: string;
  answer?: string;
  keyword?: string;
  chatbotId: string;
}

export interface DeleteInquiryParams {
  id: string;
  chatbotId: string;
}

export interface MainConversationScriptProps {
  setIsModalOpen: (open: boolean) => void;
  chatbot: Inquiry[];
  getChatbotLoading: boolean;
  handleDeleteInquiry: (params: {
    chatbotId: string;
    inquiryId: string;
  }) => Promise<void>;
  deleteInquiryLoading: boolean;
  chatbotId: string;
  total: number;
  totalPage: number;
  title?: string;
  totalPages: number;
  currentPage: number;
  currentLimit: number;
  handlePageChange: (page: number) => void;
  handleLimitChange: (newLimit: number) => void;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface ConversationScriptPaginationProps {
  currentPage: number;
  pageIndex: number;
  pageSize: number;
  total: number;
  totalPages: number;
  currentLimit: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  onPageChange: (pageIndex: number) => void;
  handleLimitChange: (newLimit: number) => void;
}
