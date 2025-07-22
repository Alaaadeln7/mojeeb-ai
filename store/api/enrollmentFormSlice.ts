import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const enrollmentFormApiSlice = createApi({
  reducerPath: "enrollmentFormApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_API_URL_PRODUCTION
        : process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
    }/enrollment-form`,
    credentials: "include",
  }),
  tagTypes: ["enrollmentForm"],
  endpoints: (builder) => ({
    createEnrollmentForm: builder.mutation({
      query: (formData) => ({
        url: "/create",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["enrollmentForm"],
    }),
    getAllEnrollmentForms: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["enrollmentForm"],
    }),
    acceptedEnrollmentForm: builder.mutation({
      query: ({ id }) => ({
        url: `/accepted-status/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["enrollmentForm"],
    }),
    rejectedEnrollmentForm: builder.mutation({
      query: ({ id }) => ({
        url: `/rejected-status/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["enrollmentForm"],
    }),
    deleteEnrollmentForm: builder.mutation({
      query: ({ id }) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["enrollmentForm"],
    }),
    searchEnrollmentForms: builder.query({
      query: (searchQuery) => ({
        url: `/search?query=${searchQuery}`,
        method: "GET",
      }),
      providesTags: ["enrollmentForm"],
    }),
  }),
});

export const {
  useCreateEnrollmentFormMutation,
  useGetAllEnrollmentFormsQuery,
  useAcceptedEnrollmentFormMutation,
  useRejectedEnrollmentFormMutation,
  useDeleteEnrollmentFormMutation,
  useSearchEnrollmentFormsQuery,
} = enrollmentFormApiSlice;
