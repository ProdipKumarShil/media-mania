'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { useUser } from '@/lib/useUser/useUser'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const commentSchema = z.object({
  name: z.string(),
  userName: z.string(),
  userEmail: z.string(),
  userImg: z.string(),
  comment: z.string()
})

const BlogComment = () => {
  const user = useUser()?.user
  
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
    console.log(value)
    console.log('first')
    // const commentData = 
  }

  return (
    <div className="">
      <h2 className='text-2xl font-semibold py-5'>Comments</h2>
      <Form {...form} className="mb-8">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField control={form.control} name='comment' render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea className='mb-4'  placeholder='Write your comment' {...field} />
              </FormControl>
            </FormItem>
          )} />
          <Button type='submit'>Post</Button>
        </form>
      </Form>
      {/* comments */}
      <div className="">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  )
}

export default BlogComment

const Comment = () => {
  return (
    <div className="p-4 mb-6">
      <div className="flex items-center gap-4 mb-4">
        {/* image placeholder */}
        <div className="size-14 rounded-full bg-slate-200 "></div>
        <div className="space-y-1">
          <p className="font-bold text-lg">John Duo</p>
          <p className="text-sm font-semibold text-slate-500">02 July, 2023</p>
        </div>
      </div>
      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione unde, sint animi debitis quia atque possimus, nulla, incidunt architecto velit nostrum! Laboriosam animi id repellat molestias mollitia repudiandae? Deleniti, iusto.</p>
      <hr />
    </div>
  )
}