"use client";
import { Bot, User, Play, Pause, Edit3, Copy, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { Inquiry, TranslationFunction } from "@/types/chatbot";
import ConversationScriptSkeleton from "@/components/skeletons/ConversationScriptSkeleton";

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
  getChatbotLoading = false,
  isPlaying,
  handlePlay,
  t,
}: ConversationScriptProps) {
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
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Edit3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="flex items-start gap-2 max-w-[90%]">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePlay?.(item._id);
                      }}
                      className="text-primary hover:bg-primary/10"
                    >
                      {isPlaying === item._id ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                    </Button>
                    <div className="flex flex-col items-end">
                      <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-primary-foreground rounded-2xl rounded-tr-none px-4 py-3">
                        <p className="text-sm">{item.question}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-muted-foreground">
                          Customer
                        </span>
                        <Avatar className="w-5 h-5">
                          <AvatarFallback className="bg-primary/10 text-primary text-xs">
                            <User className="w-3 h-3" />
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bot message */}
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
  );
}
