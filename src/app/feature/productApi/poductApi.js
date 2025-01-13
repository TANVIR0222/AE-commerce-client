import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseURL from "../../../utils/baseURL";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseURL()}/product/` }),
  tagTypes: ['Product'],

  endpoints: (builder) => ({
    fetchProduct : builder.query({
      query: ({ category, selectedColour, sizes, subCategory, minPrice }) => {
        // Use query parameters to send the filters
        const params = new URLSearchParams();
        if (category) params.append('category', category.join(','));
        if (selectedColour) params.append('selectedColour', selectedColour.join(','));
        if (sizes) params.append('sizes', sizes.join(','));
        if (subCategory) params.append('subCategory', subCategory.join(','));
        if (minPrice) params.append('minPrice', minPrice);
        return {
          url: `all-product?${params.toString()}`,  // Append query params to the URL
        };
      },
      providesTags: ['Product']
    }),
    getProductById: builder.mutation({
      query: (id) => ({
        url: `multipul-product`,
        method: 'POST',
        body: { id: id }, // Send IDs as an array in the body
      }),
      invalidatesTags: ['Product'], // Invalidate cache if necessary
    }),
    getSingleProductById: builder.query({
      query: (id) => `single-product/${id}`,
      providesTags: ['Product']
    }),
  }),
    
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useFetchProductQuery ,  useGetProductByIdMutation  , useGetSingleProductByIdQuery} = productApi;
