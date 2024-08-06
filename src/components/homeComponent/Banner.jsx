'use client'
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useGetBlogsQuery } from '@/redux/api/baseApi';
import moment from 'moment';
import Link from 'next/link';

// const Banner = () => {
//     return (
//         <div>
//              <div className='grid  justify-center md:grid-cols-2 items-center  p-5'>

//        <div className='me-10 flex justify-center'>
//        <Image
//        src={bannerjpg}
//        alt='banner'
//        className=' shadow-black shadow-xl '
//        height={600}
//        width={400}/>
//        </div>

//        <div className='ps-8 flex flex-col justify-center w-80 '>

//         <p className='my-10 text-xs text-gray-400'>Latest post</p>

//         <h2 className='text-4xl font-bold'>
//         Let a thousand programming publications bloom.

//         </h2>

//         <p className='my-10 text-xs text-gray-400'>December 28, 2019</p>

//           <Button variant='default'>Read more</Button>
//        </div>

//       </div>
//         </div>
//     );
// };

const Banner = () => {
  const { data } = useGetBlogsQuery()

  const animationVariant = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      delay: 0.5,
      transition: {
        duration: 0.5,
      }
    }
  }
  return (
    <div className="overflow-hidden">
      <div className="pb-28 ">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000
            })
          ]}
        >
          <CarouselContent>
            {
              data?.blogs?.map(data => (
                <CarouselItem key={data?._id} className="w-full">
                  <div className="p-1 relative">
                    <Image src={data?.primaryImage} alt='BannerImg' width={3000} height={2000} quality={100} className='w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover rounded-2xl filter brightness-75' />
                    <motion.div variants={animationVariant} initial='initial' whileInView='animate' className="bg-white p-3 md:p-[20px] lg:p-[40px] max-w-[598px] rounded-2xl shadow-md absolute z-50 md:left-7 lg:left-[64px] md:-bottom-[50px] lg:-bottom-[100px]">
                      <p className='bg-[#ECFDF3] inline  text-[#027A48] rounded-full text-[14px] font-medium px-[10px] py-[2px] hover:underline '>{data?.tags[1]}</p>
                      <Link href={`/blog/${data?._id}`} className='md:text-xl lg:text-[36px] pt-3 leading-10 font-semibold block mb-6'>{data?.title}</Link>
                      {/* <p href={`/blog/${data?._id}`} className='md:text-xl lg:text-[36px] leading-10 font-semibold mb-6'>{data?.title}</p> */}
                      <p className='font-semibold text-lg mb-6'>{(data?.heading).slice(0, 100)}...</p>
                      <div className="flex items-center gap-3">

                        <Image src={data?.author?.image} width={100} height={100} alt='blogger img' className='size-9 rounded-full' />
                        <div className="flex gap-5">
                          <p className='text-[#97989F] font-medium text-base'>{(data?.author?.name).toUpperCase()}</p>
                          <p className='text-[#97989F] '>{moment(data?.createdAt).format('DD MMM, YYYY')}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))
            }
            {/* {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="w-full">
                <div className="p-1 relative">
                  <Image src={'https://images.unsplash.com/photo-1718963927757-6ebadd0600d6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt='BannerImg' width={3000} height={2000} quality={100} className='w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover rounded-2xl filter brightness-75' />
                  <motion.div variants={animationVariant} initial='initial' whileInView='animate' className="bg-white p-3 md:p-[20px] lg:p-[40px] max-w-[598px] rounded-2xl shadow-md absolute z-50 md:left-7 lg:left-[64px] md:-bottom-[50px] lg:-bottom-[100px]">
                    <p className='md:text-xl lg:text-[36px] leading-10 font-semibold mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit nisi, nobis vel impedit in saepe?</p>
                    <div className="flex items-center gap-3">
                      <div className="size-9 rounded-full bg-slate-600"></div>
                      <div className="flex gap-5">
                        <p className='text-[#97989F] font-medium text-base'>John duo</p>
                        <p className='text-[#97989F] '>05 Aug, 3030</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))} */}
          </CarouselContent>
        </Carousel>
      </div >
    </div>
  )
}

export default Banner;