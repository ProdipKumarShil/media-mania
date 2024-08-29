import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'

const BlogCard = ({ blog }) => {
  const {title, heading, primaryImage, createdAt, tags, _id, author} = blog
  return (
    <Card className="border-none shadow-none">
      <CardHeader className="p-0 mb-8">
        <Image alt='blog card' src={primaryImage} width={500} height={300} style={{ width: '100%', height: '240px', objectFit: 'cover' }} quality={100} />
      </CardHeader>
      <CardContent className="p-0 space-y-3 mb-6">
        <p className='text-[#6941C6] font-semibold text-[14px]'>{(author?.name.toUpperCase())} • {moment(createdAt).format('DD MMM YYYY')}</p>
        <Link href={`https://media-mania-three.vercel.app/blog/${_id}`} className='text-[24px] hover:underline font-semibold'>{title}</Link>
        <p className='text-base text-[#667085]'>{(heading).slice(0, 70)}...</p>
      </CardContent>
      <CardFooter className="flex gap-2 p-0">
        <p className='bg-[#F0F9FF] text-[#026AA2] rounded-full text-[14px] font-medium px-[10px] py-[2px] hover:underline'>{tags[0]}</p>
        <p className='bg-[#ECFDF3] text-[#027A48] rounded-full text-[14px] font-medium px-[10px] py-[2px] hover:underline '>{tags[1]}</p>
      </CardFooter>
    </Card>
  )
}

export default BlogCard