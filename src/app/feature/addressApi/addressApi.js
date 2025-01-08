import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseURL from "../../../utils/baseURL";

// Define a service using a base URL and expected endpoints
export const addressApi = createApi({
  reducerPath: "addressApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseURL()}/address/` }),
  endpoints: (builder) => ({
    addNewAddress: builder.mutation({
      query: (body) => ({
        url: `add-address/${body.id}`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddNewAddressMutation } = addressApi;
