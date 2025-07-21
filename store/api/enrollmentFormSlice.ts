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
  }),
});

export const {
  useCreateEnrollmentFormMutation,
  useGetAllEnrollmentFormsQuery,
} = enrollmentFormApiSlice;
