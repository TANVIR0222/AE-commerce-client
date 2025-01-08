import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import baseURL from '../../../utils/baseURL'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseURL()}/user/` }),
  tagTypes: ["User"],

  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (newData) => ({
        url: `register`,
        method: 'POST',
        body: newData,
      }),
      invalidatesTags: ['User'],
    }),
    userLogin: builder.mutation({
      query: (newData) => ({
        url: `login`,
        method: 'POST',
        body: newData,
      }),
      invalidatesTags:  ['User'],
    }),
    fetchSingleUser: builder.query({
      query: (id) => `single-user/${id}`,
      providesTags: (result, error, id) => [{ type: 'User', id }],
    }),
    forgotPassword: builder.mutation({
      query: (newData) => ({
        url: `forgot-password`,
        method: 'PUT',
        body: newData
      }),
      invalidatesTags: ['User'],
    }),
    verifyOTP: builder.mutation({
      query: (newData) => ({
        url: `verify-forgot-password-otp`,
        method: 'PUT',
        body: newData
      }),
      invalidatesTags: ['User'],
    }),
    resetPassword: builder.mutation({
      query: (newData) => ({
        url: `reset-password`,
        method: 'PUT',
        body: newData
      }),
      invalidatesTags: ['User'],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: `logout`,
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),
    updateUserInformation: builder.mutation({
      query: (body) => ({
        url: `update-information/${body.id}`,
        method: 'PUT',
        body: body
      }),
      invalidatesTags: ['User'],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUserRegisterMutation  , useUserLoginMutation , useFetchSingleUserQuery , useForgotPasswordMutation , useVerifyOTPMutation  , useResetPasswordMutation , useLogoutUserMutation  , useUpdateUserInformationMutation } = userApi