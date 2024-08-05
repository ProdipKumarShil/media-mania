'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Skeleton } from '@/components/ui/skeleton'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import { useUser } from '@/lib/useUser/useUser'
import { useCommentMutation, useGetCommentQuery } from '@/redux/api/baseApi'
import { zodResolver } from '@hookform/resolvers/zod'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const commentSchema = z.object({
  name: z.string().optional(),
  userName: z.string().optional(),
  userEmail: z.string().optional(),
  userImg: z.string().optional(),
  comment: z.string()
})

const BlogComment = ({ id }) => {
  const user = useUser()?.user
  const [comment, { isLoading }] = useCommentMutation()
  const { data, isLoading: commentLoading, refetch } = useGetCommentQuery({ id: id, email: user?.email })

  const form = useForm({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      blogId: '',
      userName: '',
      userEmail: '',
      userImg: '',
      comment: ''
    }
  })

  const onSubmit = async (value) => {
    const commentData = { blogId: id, userName: user?.name, userEmail: user?.email, userImg: user?.image, comment: value?.comment }
    const response = await comment(commentData).unwrap()
    form.reset()
    if (response.status) {
      refetch()
      toast({
        title: 'Successful',
        description: `Commented as '${user?.name}'`
      })
    } else {
      toast({
        variant: "destructive",
        title: 'Failed',
        description: `Failed to add comment`
      })
    }
  }

  const commentIsLoading = () => {
    if(isLoading && commentLoading){
      return true
    } else {
      return false
    }
  }
  console.log(commentIsLoading())
  return (
    <div className="">
      <h2 className='text-2xl font-semibold py-5'>Comments</h2>
      <Form {...form} className="mb-8">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField control={form.control} name='comment' render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea className='mb-4' placeholder='Write your comment' {...field} />
              </FormControl>
            </FormItem>
          )} />
          <Button type='submit'>Post</Button>
        </form>
      </Form>
      {/* comments */}
      <div className="">
        {commentIsLoading() && <CommentSkeleton />}
        {
          data?.status ? data?.comments.map((data) => <Comment comment={data} key={data?._id} />) : <h1 className='text-center my-5 text-xl font-semibold'>No comment found!</h1>
        }
      </div>
    </div>
  )
}

export default BlogComment

const CommentSkeleton = () => {
  return (
    <div className="p-4 mb-6">
      <div className="flex items-center gap-4 mb-4">
        <Skeleton className='size-14 rounded-full' />
        <div className="space-y-1">
          <Skeleton className='w-44 h-4' />
          <Skeleton className='w-28 h-4' />
        </div>
      </div>
      <div className="mb-4 space-y-2">
        <Skeleton className='h-3 w-full' />
        <Skeleton className='h-3 w-full' />
        <Skeleton className='h-3 w-2/3' />
      </div>
      <hr />
    </div>
  )
}

const Comment = ({ comment }) => {
  const { userName, userImg, comment: txt, createdAt } = comment
  return (
    <div className="p-4 mb-6">
      <div className="flex items-center gap-4 mb-4">
        {/* image placeholder */}
        <Image src={userImg} alt='user img' width={56} height={56} className='rounded-full' />
        <div className="space-y-1">
          <p className="font-bold text-lg">{userName}</p>
          <p className="text-sm font-semibold text-slate-500">{moment().format('DD MMMM, YYYY')}</p>
        </div>
      </div>
      <p className="mb-4">{txt}</p>
      <hr />
    </div>
  )
}