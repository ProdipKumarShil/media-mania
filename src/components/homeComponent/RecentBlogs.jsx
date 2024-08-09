'use client'
import Image from 'next/image';
import React from 'react';
import recentBlogImg from '../../../public/Image.png'
import lastrecentBlogImg from '../../../public/blog (4).png'
import blog1 from '../../../public/blog (3).png'
import blog2 from '../../../public/blog (2).png'
import { useRecentBlogsQuery } from '@/redux/api/baseApi';
import Link from 'next/link';
import moment from 'moment';

const RecentBlogs = () => {
  const {data, isLoading} = useRecentBlogsQuery()
  
  if(isLoading){
    return <p>Loading...</p>
  }
  
  const {primaryImage, title, heading, author, tags, _id, createdAt} = data?.blogs[3]
  return (
    <div className="">
      <div className="py-[30px]">
        <p className='text-[24px] font-semibold mb-8'>Recent blog posts</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LeftCard blog={data?.blogs[0]}/>
          <div className="space-y-8">
            <RightCard blog={data?.blogs[1]} />
            <RightCard blog={data?.blogs[2]}/>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-[30px]">
        <Image className='w-full h-[246px] object-cover' width={3000} height={1000} src={primaryImage} alt='blog 2' />
        <div className="">
          <p className='text-[#6941C6] text-[14px] font-semibold mb-3'>{(author?.name.toUpperCase())} • {moment(createdAt).format('DD MMM YYYY')}</p>
          <Link href={`/blog/${_id}`} className='text-[24px] font-semibold mb-3 hover:underline'>{title}</Link>
          <p className='text-[#667085] text-base mb-6'>{heading.slice(0, 350)}...</p>
          <div className="flex gap-2 p-0">
            <p className='bg-[#F0F9FF] text-[#026AA2] rounded-full text-[14px] font-medium px-[10px] py-[2px] hover:underline'>{tags[0]}</p>
            <p className='bg-[#ECFDF3] text-[#027A48] rounded-full text-[14px] font-medium px-[10px] py-[2px] hover:underline'>{tags[1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;

const LeftCard = ({blog}) => {
  const {primaryImage, title, heading, author, tags, _id, createdAt} = blog
  return (
    <div className="">
      <Image className='w-full h-[228px] object-cover mb-8' src={primaryImage} height={1000} width={3000} alt='Recent Blog' />
      <p className='text-[#6941C6] text-[14px] font-semibold mb-3'>{(author?.name.toUpperCase())} • {moment(createdAt).format('DD MMM YYYY')}</p>
      <Link href={`/blog/${_id}`} className='text-[24px] hover:underline font-semibold mb-3'>{title}</Link>
      <p className='text-[#667085] text-base mb-6'>{heading}</p>
      <div className="flex gap-2 p-0">
        <p className='bg-[#F0F9FF] text-[#026AA2] rounded-full text-[14px] font-medium px-[10px] py-[2px]'>{tags[0]}</p>
        <p className='bg-[#ECFDF3] text-[#027A48] rounded-full text-[14px] font-medium px-[10px] py-[2px]'>{tags[1]}</p>
      </div>
    </div>
  )
}

const RightCard = ({blog}) => {
  const {primaryImage, title, heading, author, tags, _id, createdAt} = blog

  return (
    <div className="sm:block md:grid md:grid-cols-12 gap-6">
      <Image src={primaryImage} width={3000} height={1000} className='w-full h-[200px] object-cover md:col-span-5 lg:col-span-6 mb-6 md:mb-0' alt='Image' />
      <div className="md:col-span-7 lg:col-span-6">
        <p className='text-[#6941C6] mb-3 text-[14px] font-semibold'>{(author?.name).toUpperCase()} • {moment(createdAt).format('DD MMM YYYY')}</p>
        <Link href={`/blog/${_id}`} className='text-[18px] hover:underline font-semibold'>{title}</Link>
        <p className='text-[#667085] text-[16px] mb-6'>{heading.slice(0, 80)}...  </p>
        <div className="flex gap-2 p-0">
          <p className='bg-[#F0F9FF] text-[#026AA2] rounded-full text-[14px] font-medium px-[10px] py-[2px] hover:underline cursor-pointer'>{tags[0]}</p>
          <p className='bg-[#ECFDF3] text-[#027A48] rounded-full text-[14px] font-medium px-[10px] py-[2px] hover:underline cursor-pointer'>{tags[1]}</p>
        </div>
      </div>
    </div>
  )
}