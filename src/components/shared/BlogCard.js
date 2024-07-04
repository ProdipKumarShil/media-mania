import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
import Image from 'next/image'

const BlogCard = ({ blog }) => {
  console.log(blog)
  return (
    <Card className="border-none shadow-none">
      <CardHeader className="p-0 mb-8">
        <Image src={blog?.image} width={500} height={300} style={{ width: '100%', height: '240px', objectFit: 'cover' }} quality={100} />
      </CardHeader>
      <CardContent className="p-0 space-y-3 mb-6">
        <p className='text-[#6941C6] font-semibold text-[14px]'>Orlando Diggs • 1 Jan 2023</p>
        <p className='text-[24px] font-semibold'>{blog?.title}</p>
        <p className='text-base text-[#667085]'>{(blog?.description).slice(0, 70)}...</p>
      </CardContent>
      <CardFooter className="flex gap-2 p-0">
        <p className='bg-[#F0F9FF] text-[#026AA2] rounded-full text-[14px] font-medium px-[10px] py-[2px]'>Product</p>
        <p className='bg-[#ECFDF3] text-[#027A48] rounded-full text-[14px] font-medium px-[10px] py-[2px]'>Software Development</p>
      </CardFooter>
    </Card>
  )
}

export default BlogCard