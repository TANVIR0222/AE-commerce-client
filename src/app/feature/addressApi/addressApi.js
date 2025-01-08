import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseURL from "../../../utils/baseURL";

// Define a service using a base URL and expected endpoints
export const addressApi = createApi({
  reducerPath: "addressApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseURL()}/address/` }),
  tagTypes: ["Address"],
  endpoints: (builder) => ({
    addNewAddress: builder.mutation({
      query: (body) => ({
        url: `add-address/${body.id}`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Address"],
    }),
    getAddressSingleUser: builder.query({
        query: (id) => `get-single-user-address/${id}`,
        providesTags: ["Address"],
    }),
    deleteAddress:builder.mutation({
        query: (id) => ({
            url: `delete-address/${id}`,
            method: "DELETE",
        }),
        invalidatesTags: ["Address"],
    }),
    updateAddress : builder.mutation({
        query: (body) => ({
            url: `update-address/${body.id}`,
            method: "PUT",
            body: body,
        }),
        invalidatesTags: ["Address"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddNewAddressMutation , useGetAddressSingleUserQuery , useDeleteAddressMutation , useUpdateAddressMutation } = addressApi;  // eslint-disable-line
