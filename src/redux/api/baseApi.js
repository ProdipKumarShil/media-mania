import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api'}),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => '/blog/all-blogs'
    }),
    postFormData: builder.mutation({
      query: (formData) => ({
        url: '/user',
        method: 'POST',
        body: formData
      })
    }),
    postBlog: builder.mutation({
      query: (formData) => ({
        url: '/blog',
        method: 'POST',
        body: formData
      })
    })
  })
})

export const {useGetBlogsQuery, usePostFormDataMutation, usePostBlogMutation} = baseApi