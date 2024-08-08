'use client'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import Image from 'next/image'
import blog from '@/assets/imgs/blogImage.png'
import { useRecentBlogsQuery } from '@/redux/api/baseApi'
import moment from "moment"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"



const RecentlyPostedBlogs = () => {
  const { data, isLoading } = useRecentBlogsQuery()
  if(isLoading){
    return (
      <div className="flex flex-col gap-8">
        <LoadingSideBlogCard />
        <LoadingSideBlogCard />
        <LoadingSideBlogCard />
        <LoadingSideBlogCard />
      </div>
    )
  }
  
  return (
    <div className="flex flex-col gap-8">
      {data?.blogs.map(blog => <SideBlogCard key={blog?._id} blog={blog}/>)}
    </div>
  )
}

export default RecentlyPostedBlogs

const SideBlogCard = ({blog}) => {
  const {primaryImage, title, createdAt, author, tags, _id} = blog
  return (
    <Card className="border-none shadow-none">
      <CardHeader className="p-0 mb-3">
        <Image alt='img' src={primaryImage} width={500} height={300} style={{ width: '100%', height: '160px', objectFit: 'cover' }} quality={100} />
      </CardHeader>
      <CardContent className="p-0 space-y-1 mb-2">
        <p className='text-[#6941C6] font-semibold text-[14px]'>{(author?.name.toUpperCase())} • {moment(createdAt).format('DD MMM YYYY')}</p>
        <Link href={`/blog/${_id}`} className='text-xl font-semibold hover:underline'>{title}</Link>
      </CardContent>
      <CardFooter className="flex gap-2 p-0">
        <p className='bg-[#F0F9FF] text-[#026AA2] rounded-full text-[14px] font-medium px-[10px] py-[2px]'>{tags[0]}</p>
        <p className='bg-[#ECFDF3] text-[#027A48] rounded-full text-[14px] font-medium px-[10px] py-[2px]'>{tags[1]}</p>
      </CardFooter>
    </Card>
  )
}

const LoadingSideBlogCard = () => {
  return (
    <Card className="border-none shadow-none">
      <CardHeader className="p-0 mb-3">
        <Skeleton className='h-40' />
      </CardHeader>
      <CardContent className="p-0 space-y-2 mb-2">
        <Skeleton className='h-3 w-20' />
        <Skeleton className='h-5 w-40'/>
      </CardContent>
      <CardFooter className="flex gap-2 p-0">
        <Skeleton className='rounded-full h-6 w-16'/>
        <Skeleton className='rounded-full h-6 w-16'/>
      </CardFooter>
    </Card>
  )
}

