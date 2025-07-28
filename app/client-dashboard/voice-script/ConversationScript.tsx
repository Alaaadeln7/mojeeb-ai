"use client";

import {
  Bot,
  User,
  Play,
  Pause,
  Edit3,
  Copy,
  Trash2,
  Check,
  Loader,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { Inquiry, TranslationFunction } from "@/types/chatbot";
import ConversationScriptSkeleton from "@/components/skeletons/ConversationScriptSkeleton";
import { useState } from "react";
import ConfirmDeleteDialog from "@/components/molecules/ConfirmDeleteDialog";
import useChatbot from "@/hooks/useChatbot";
import UpdateScriptDialog from "@/components/molecules/UpdateScriptDialog";

interface ConversationScriptProps {
  selectedChatbot: Inquiry | null;
  setSelectedChatbot: (inquiry: Inquiry) => void;
  chatbot: Inquiry[];
  getChatbotLoading?: boolean;
  isPlaying?: string | null;
  handlePlay?: (id: string) => void;
  t: TranslationFunction;
}

export default function ConversationScript({
  chatbot,
  getChatbotLoading,
  isPlaying,
  t,
}: ConversationScriptProps) {
  const {
    handleDeleteInquiry,
    handleSpeak,
    speakLoading,
    chatbotId,
    handleUpdateInquiry,
  } = useChatbot();

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedCustomerId, setCopiedCustomerId] = useState<string | null>(null);
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [openUpdateScript, setOpenUpdateScript] = useState(false);
  const [selectInquiry, setSelectInquiry] = useState("");
  const [item, setItem] = useState<Inquiry | null>(null);

  if (!chatbot || chatbot.length === 0) {
    return (
      <Card className="rounded-lg p-8 text-center border border-dashed">
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-full bg-muted p-4">
            <User className="h-6 w-6 text-muted-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-medium">{t("noConversations")}</h3>
            <p className="text-sm text-muted-foreground mt-2">
              {t("noConversationsDescription")}
            </p>
          </div>
          <Button variant="outline" className="mt-2">
            {t("createScript")}
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <>
      <div className="space-y-4">
        {getChatbotLoading ? (
          <ConversationScriptSkeleton />
        ) : (
          chatbot.map((item) => (
            <Card
              key={item._id}
              role="button"
              tabIndex={0}
              aria-label={`Select conversation: ${item.question}`}
              className="rounded-lg border p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-end">
                  <div className="flex items-center space-x-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenUpdateScript(true);
                        setItem(item);
                      }}
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Edit3 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenConfirmDelete(true);
                        setSelectInquiry(item._id);
                      }}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="flex items-start gap-2 max-w-[90%]">
                      <div className="flex flex-col items-end">
                        <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-primary-foreground rounded-2xl rounded-tr-none px-4 py-3">
                          <p className="text-sm">{item.question}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-muted-foreground">
                            Customer
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSpeak({
                                voice: item.voice || "ar-XA-Standard-A",
                                text: item.question,
                                languageCode: "ar-XA",
                              });
                            }}
                            className="text-primary hover:bg-primary/10"
                          >
                            {isPlaying === item._id ? (
                              <Pause className="w-4 h-4" />
                            ) : speakLoading ? (
                              <Loader className="animate-spin size-4" />
                            ) : (
                              <Play className="w-4 h-4" />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={async (e) => {
                              e.stopPropagation();
                              try {
                                await navigator.clipboard.writeText(
                                  item.question
                                );
                                setCopiedCustomerId(item._id);
                                setTimeout(
                                  () => setCopiedCustomerId(null),
                                  1000
                                );
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            className="text-muted-foreground hover:text-primary"
                          >
                            {copiedCustomerId === item._id ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                          <Avatar className="w-5 h-5">
                            <AvatarFallback className="bg-primary/10 text-primary text-xs">
                              <User className="w-3 h-3" />
                            </AvatarFallback>
                          </Avatar>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="flex items-start gap-3 max-w-[90%]">
                      <Avatar className="w-8 h-8 flex-shrink-0">
                        <AvatarFallback className="bg-secondary text-secondary-foreground">
                          <Bot className="w-4 h-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <div className="bg-gradient-to-r from-[#3d4d58] to-[#1e262b] text-primary-foreground rounded-2xl rounded-tl-none px-4 py-3">
                          <p className="text-sm">{item.answer}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-muted-foreground">
                            AI Assistant
                          </span>
                          {item.voice && (
                            <>
                              <span className="text-xs text-muted-foreground">
                                •
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {item.voice}
                              </span>
                            </>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSpeak({
                                voice: item.voice || "ar-XA-Standard-A",
                                text: item.answer,
                                languageCode: "ar-XA",
                              });
                            }}
                            className="text-primary hover:bg-primary/10"
                          >
                            {isPlaying === item._id ? (
                              <Pause className="w-4 h-4" />
                            ) : speakLoading ? (
                              <Loader className="animate-spin size-4" />
                            ) : (
                              <Play className="w-4 h-4" />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={async (e) => {
                              e.stopPropagation();
                              try {
                                await navigator.clipboard.writeText(
                                  item.answer
                                );
                                setCopiedId(item._id);
                                setTimeout(() => setCopiedId(null), 1000);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            className="text-muted-foreground hover:text-primary"
                          >
                            {copiedId === item._id ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>

      {openConfirmDelete && (
        <ConfirmDeleteDialog
          open={openConfirmDelete}
          onClose={() => setOpenConfirmDelete(false)}
          onConfirm={async () =>
            await handleDeleteInquiry({
              chatbotId,
              inquiryId: selectInquiry,
            })
          }
        />
      )}

      {openUpdateScript && item && (
        <UpdateScriptDialog
          chatbotId={chatbotId}
          open={openUpdateScript}
          onClose={() => setOpenUpdateScript(false)}
          initialData={item}
          handleUpdateInquiry={handleUpdateInquiry}
        />
      )}
    </>
  );
}
