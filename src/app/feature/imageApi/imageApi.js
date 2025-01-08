import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import baseURL from '../../../utils/baseURL'

// Define a service using a base URL and expected endpoints
export const imageApi = createApi({
  reducerPath: 'imageApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseURL()}/all/` }),

  endpoints: (builder) => ({
        imageUploade : builder.mutation({
            query: (formData) => ({
                url: 'image-uploade',
                method: 'POST',
                body: formData,
            }),
        })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useImageUploadeMutation } = imageApi