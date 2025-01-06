import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import baseURL from '../../../utils/baseURL'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseURL()}/user/` }),
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (newData) => ({
        url: `register`,
        method: 'POST',
        body: newData,
      })
    }),
    userLogin: builder.mutation({
      query: (newData) => ({
        url: `login`,
        method: 'POST',
        body: newData,
      })
    }),
    fetchSingleUser: builder.query({
      query: (id) => `single-user/${id}`
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUserRegisterMutation  , useUserLoginMutation , useFetchSingleUserQuery } = userApi