'use client'

import BlogCard from '@/components/Shared/BlogCard/BlogCard'
import BlogCardSkeleton from '@/components/Shared/LoadingSkeleton/BlogCardSkeleton'
import { useGetBlogsQuery } from '@/redux/api/baseApi'
import React from 'react'

const BlogsPage = () => {
  const {isLoading, data} = useGetBlogsQuery('')
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div>
      <p className='text-3xl font-bold text-center p-5'>Hello from blogs page</p>
      <div className='lg-screen grid grid-cols-3 gap-x-8 gap-y-12'>
      {isLoading ? arr.map((val, index) => <BlogCardSkeleton key={index}/>) : data?.blogs?.map(blog => <BlogCard blog={blog} key={blog._id} />)}
      </div>
    </div>
  )
}

export default BlogsPage