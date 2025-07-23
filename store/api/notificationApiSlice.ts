import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const notificationApiSlice = createApi({
  reducerPath: "notificationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_API_URL_PRODUCTION
        : process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
    }/notifications`,
    credentials: "include",
  }),
  tagTypes: ["notification"],
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["notification"],
    }),
    markAsRead: builder.mutation({
      query: (id) => ({
        url: `/${id}/read`,
        method: "PATCH",
      }),
      invalidatesTags: ["notification"],
    }),
    markAllAsRead: builder.mutation({
      query: () => ({
        url: `/read-all`,
        method: "PATCH",
      }),
      invalidatesTags: ["notification"],
    }),
    clearAll: builder.mutation({
      query: () => ({
        url: `/clear-all`,
        method: "DELETE",
      }),
      invalidatesTags: ["notification"],
    }),
    getUnreadCount: builder.query({
      query: () => ({
        url: `/unread-count`,
        method: "GET",
      }),
      providesTags: ["notification"],
    }),
  }),
});

export const {
  useGetNotificationsQuery,
  useMarkAsReadMutation,
  useMarkAllAsReadMutation,
  useClearAllMutation,
  useGetUnreadCountQuery,
} = notificationApiSlice;
