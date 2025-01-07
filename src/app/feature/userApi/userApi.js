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
    forgotPassword: builder.mutation({
      query: (newData) => ({
        url: `forgot-password`,
        method: 'PUT',
        body: newData
      })
    }),
    verifyOTP: builder.mutation({
      query: (newData) => ({
        url: `verify-forgot-password-otp`,
        method: 'PUT',
        body: newData
      })
    }),
    resetPassword: builder.mutation({
      query: (newData) => ({
        url: `reset-password`,
        method: 'PUT',
        body: newData
      })
    }),
    logoutUser: builder.mutation({
      query: (newData) => ({
        url: `logout`,
        method: 'POST',
        body: newData
      })
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUserRegisterMutation  , useUserLoginMutation , useFetchSingleUserQuery , useForgotPasswordMutation , useVerifyOTPMutation  , useResetPasswordMutation , useLogoutUserMutation } = userApi