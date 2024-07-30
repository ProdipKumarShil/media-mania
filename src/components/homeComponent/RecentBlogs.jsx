import Image from 'next/image';
import React from 'react';
import recentBlogImg from '../../../public/Image.png'
import lastrecentBlogImg from '../../../public/blog (4).png'
import blog1 from '../../../public/blog (3).png'
import blog2 from '../../../public/blog (2).png'
import { GiArmoredBoomerang } from "react-icons/gi";
import { CardFooter } from '../ui/card';

const RecentBlogs = () => {
  return (
    <div className="py-[30px]">
      <p className='text-[24px] font-semibold mb-8'>Recent blog posts</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <LeftCard />
        <div className="space-y-8">
          <RightCard />
          <RightCard />
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;

const LeftCard = () => {
  return (
    <div className="">
      <Image className='w-full h-[228px] object-cover mb-8' src={recentBlogImg} alt='Recent Blog' />
      <p className='text-[#6941C6] text-[14px] font-semibold mb-3'>Olivia Rhye • 1 Jan 2023</p>
      <p className='text-[24px] font-semibold mb-3'>UX review presentations</p>
      <p className='text-[#667085] text-base mb-6'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
      <div className="flex gap-2 p-0">
        <p className='bg-[#F0F9FF] text-[#026AA2] rounded-full text-[14px] font-medium px-[10px] py-[2px]'>Product</p>
        <p className='bg-[#ECFDF3] text-[#027A48] rounded-full text-[14px] font-medium px-[10px] py-[2px]'>Software Development</p>
      </div>
    </div>
  )
}

const RightCard = () => {
  return (
    <div className="sm:block md:grid md:grid-cols-12 gap-6">
      <Image src={blog1} className='w-full h-[200px] object-cover md:col-span-5 lg:col-span-6 mb-6 md:mb-0' alt='Image' />
      <div className="md:col-span-7 lg:col-span-6">
        <p className='text-[#6941C6] mb-3 text-[14px] font-semibold'>Phoenix Baker • 1 Jan 2023</p>
        <p className='text-[18px] font-semibold'>Migrating to Linear 101</p>
        <p className='text-[#667085] text-[16px] mb-6'>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...</p>
        <div className="flex gap-2 p-0">
          <p className='bg-[#F0F9FF] text-[#026AA2] rounded-full text-[14px] font-medium px-[10px] py-[2px]'>Product</p>
          <p className='bg-[#ECFDF3] text-[#027A48] rounded-full text-[14px] font-medium px-[10px] py-[2px]'>Software Development</p>
        </div>
      </div>
    </div>
  )
}