"use client";

import { showToast } from "@/components/ui/sonner";
import {
  useClearAllMutation,
  useGetNotificationsQuery,
  useGetUnreadCountQuery,
  useMarkAllAsReadMutation,
  useMarkAsReadMutation,
} from "@/store/api/notificationApiSlice";

export default function useNotification() {
  const { data: notifications, isLoading: getNotificationsLoading } =
    useGetNotificationsQuery(undefined);
  const { data: unreadCount } = useGetUnreadCountQuery(undefined);
  const [clearAll, { isLoading: clearAllLoading }] = useClearAllMutation();
  const [markAsRead, { isLoading: markAsReadLoading }] =
    useMarkAsReadMutation();
  const [markAllAsRead, { isLoading: markAllAsReadLoading }] =
    useMarkAllAsReadMutation();
  const handleMakeRead = async (id: string) => {
    try {
      await markAsRead(id).unwrap();
    } catch (error) {
      console.error("Failed to mark notification as read:", error);
    }
  };
  const handleClearAll = async () => {
    try {
      await clearAll(undefined).unwrap();
    } catch (error) {
      console.error("Failed to clear notifications:", error);
    }
  };
  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead(undefined).unwrap();
    } catch (error) {
      console.error("Failed to mark all notifications as read:", error);
    }
  };
  return {
    unreadCount: unreadCount?.data.count || 0,
    notifications: notifications?.data || [],
    handleClearAll,
    handleMakeRead,
    handleMarkAllAsRead,
    loading:
      getNotificationsLoading ||
      clearAllLoading ||
      markAsReadLoading ||
      markAllAsReadLoading,
  };
}
