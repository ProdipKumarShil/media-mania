'use client'

import BlogCard from '@/components/Shared/BlogCard/BlogCard'
import BlogCardSkeleton from '@/components/Shared/LoadingSkeleton/BlogCardSkeleton'
import { useGetBlogsQuery } from '@/redux/api/baseApi'
import React from 'react'

const BlogsPage = () => {
  const {isLoading, data} = useGetBlogsQuery('')
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div className='lg-screen'>
      <p className='text-3xl font-bold  py-5'>All Blogs</p>
      <hr className='mb-5' />
      <div className=' grid grid-cols-3 gap-x-8 gap-y-12'>
      {isLoading ? arr.map((val, index) => <BlogCardSkeleton key={index}/>) : data?.blogs?.map(blog => <BlogCard blog={blog} key={blog._id} />)}
      </div>
    </div>
  )
}

export default BlogsPage