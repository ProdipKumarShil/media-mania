'use client'

import BlogCard from '@/components/shared/BlogCard'
import { useGetBlogsQuery } from '@/redux/api/baseApi'
import React from 'react'

const BlogsPage = () => {
  const {isLoading, data} = useGetBlogsQuery('')
  return (
    <div>
      <p className='text-3xl font-bold text-center p-5'>Hello from blogs page</p>
      <div className='lg-screen grid grid-cols-3 gap-4'>
        {data?.blogs?.map(blog => <BlogCard blog={blog} key={blog._id} />)}
      </div>
    </div>
  )
}

export default BlogsPage