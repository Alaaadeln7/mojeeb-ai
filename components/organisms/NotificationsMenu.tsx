"use client";
import { Button } from "@/components/ui/button";

import {
  Bell,
  Mail,
  AlertTriangle,
  CheckCircle,
  Info,
  Calendar,
} from "lucide-react";
import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

import useNotification from "@/hooks/useNotification";
import { cn } from "@/lib/utils";
import NotificationSkeleton from "../skeletons/NotificationSkeleton";
import formatDate from "@/utils/formatDate";
export default function NotificationsMenu({ t }) {
  const {
    unreadCount,
    notifications,
    loading,
    handleClearAll,
    handleMakeRead,
    handleMarkAllAsRead,
  } = useNotification();
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "message":
        return <Mail className="size-4 text-blue-500" />;
      case "alert":
        return <AlertTriangle className="size-4 text-yellow-500" />;
      case "success":
        return <CheckCircle className="size-4 text-green-500" />;
      case "info":
        return <Info className="size-4 text-gray-500" />;
      case "event":
        return <Calendar className="size-4 text-purple-500" />;
      default:
        return <Bell className="size-4 text-primary" />;
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full hover:bg-accent"
        >
          <Bell className="size-5" />
          {!loading && unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center"
            >
              {unreadCount > 9 ? "9+" : unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 p-0" align="end">
        <DropdownMenuLabel className="px-4 py-3 border-b">
          <div className="flex items-center justify-between">
            <span>{t("notifications.title")}</span>
            {!loading && unreadCount > 0 && (
              <Button
                onClick={() => handleMarkAllAsRead()}
                variant="link"
                size="sm"
                className="h-auto p-0"
              >
                {t("notifications.markAllRead")}
              </Button>
            )}
            <Button
              onClick={() => handleClearAll()}
              variant="link"
              size="sm"
              className="h-auto p-0"
            >
              {t("notifications.clearAll")}
            </Button>
          </div>
        </DropdownMenuLabel>

        <div className="max-h-[400px] overflow-y-auto">
          {loading ? (
            <NotificationSkeleton />
          ) : notifications?.length > 0 ? (
            notifications.map((notification) => (
              <DropdownMenuItem
                key={notification._id}
                className={cn(
                  "px-4 py-3 border-b last:border-b-0 hover:bg-accent/50 cursor-pointer transition-colors",
                  !notification.isRead && "bg-accent/50"
                )}
                onClick={() => handleMakeRead(notification._id)}
              >
                <div className="flex gap-3 w-full">
                  <div className="mt-0.5">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {notification.message}
                    </p>
                    <time className="text-xs text-muted-foreground mt-1 block">
                      {formatDate(notification.createdAt)}
                    </time>
                  </div>
                  {!notification.read && (
                    <div className="w-2 h-2 rounded-full bg-primary ml-auto mt-1.5" />
                  )}
                </div>
              </DropdownMenuItem>
            ))
          ) : (
            <div className="px-4 py-6 text-center text-sm text-muted-foreground">
              {t("notifications.empty")}
            </div>
          )}
        </div>

        {!loading && (
          <DropdownMenuItem className="justify-center border-t">
            <Button variant="ghost" size="sm">
              {t("notifications.viewAll")}
            </Button>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
