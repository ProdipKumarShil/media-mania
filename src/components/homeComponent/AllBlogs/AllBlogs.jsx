'use client'
import Image from 'next/image';
import React from 'react';
import { GiArmoredBoomerang } from 'react-icons/gi';
import { BsArrowUpRight } from "react-icons/bs";

import blog2 from '../../../../public/blog (2).png'
import BlogCard from '@/components/Shared/BlogCard/BlogCard';
import { useGetBlogsQuery } from '@/redux/api/baseApi';
import BlogCardSkeleton from '@/components/Shared/LoadingSkeleton/BlogCardSkeleton';

const AllBlogs = () => {
  const {isLoading, data} = useGetBlogsQuery('')
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div className='mb-5'>

      <h2 className='text-2xl font-semibold py-5'>All Blog Post</h2>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12'>
        {isLoading ? arr.map((val, index) => <BlogCardSkeleton key={index}/>) : data?.blogs?.map(blog => <BlogCard blog={blog} key={blog._id} />)}
      </div>
    </div>
  );
};

export default AllBlogs;