import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
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
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/blog?id=${id}`,
        method: 'DELETE'
      })
    }),
    approvePost: builder.mutation({
      query: (id) => ({
        url: `/blog?id=${id}`,
        method: 'PATCH'
      })
    }),
    pendingBlogs: builder.query({
      query: () => '/blog/pending-blogs'
    }),
    getUsers: builder.query({
      query: () => '/user'
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/user?id=${id}`,
        method: 'DELETE'
      })
    }),
    comment: builder.mutation({
      query: (commentData) => ({
        url: '/comment',
        method: 'POST',
        body: commentData
      })
    }),
    getComment: builder.query({
      query: ({ id, email }) => ({
        url: `/comment/commentsByBlog?id=${id}&email=${email}`,
        method: 'GET',
        params: { id, email }
      })
    }),
    getAllComments: builder.query({
      query: () => '/comment'
    }),
    deleteComment: builder.mutation({
      query: (id) => ({
        url: `/comment?id=${id}`,
        method: 'DELETE'
      })
    }),
    recentBlogs: builder.query({
      query: () => '/blog/latest-blog'
    }),
    blogsByEmail: builder.query({
      query: (email) => ({
        url: `/blog/blogs?email=${email}`,
        method: 'GET'
      })
    }),
    searchBlogs: builder.query({
      query: (query) => ({
        url: '/blog/search',
        method: 'GET',
        params: {q: query}
      })
    })
  })
})

export const { useGetBlogsQuery, usePostFormDataMutation, usePostBlogMutation, useDeletePostMutation, usePendingBlogsQuery, useApprovePostMutation, useGetUsersQuery, useCommentMutation, useGetCommentQuery, useGetAllCommentsQuery, useDeleteCommentMutation, useDeleteUserMutation, useRecentBlogsQuery, useBlogsByEmailQuery, useSearchBlogsQuery } = baseApi