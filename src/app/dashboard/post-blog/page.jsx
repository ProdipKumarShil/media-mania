'use client'
import { Button } from '@/components/ui/button';
import { CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { z } from 'zod';
import TagsInput from './TagsInput';
import { useUser } from '@/lib/useUser/useUser';
import { usePostBlogMutation } from '@/redux/api/baseApi';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

const blogSchema = z.object({
  title: z.string(),
  heading: z.string(),
  primaryImage: z.string(),
  secondaryImage: z.string(),
  tags: z.array(z.string()).max(2, "You can select up to 2 tags"),
  text: z.string(),
  author: z.object({
    name: z.string(),
    email: z.string(),
    image: z.string()
  }),
  approved: z.boolean().optional()
})

const PostBlog = () => {
  const Router = useRouter()
  const [postBlog, {isLoading, isSuccess, isError}] = usePostBlogMutation()
  const {user, status} = useUser()
  const form = useForm({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: '',
      heading: '',
      primaryImage: '',
      secondaryImage: '',
      tags: [],
      text: '',
      author: {name: '', image: '', email: ''},
      approved: false
    }
  })
  const onSubmit = async (value) => {
    value.author = user
    value.approved = false
    console.log(value)
    try {
      const response = await postBlog(value).unwrap()
      console.log(response)
      if(response?.status){
        Router.push('/dashboard/my-blogs')
      }
    } catch (error) {
      console.log(error)
    }
  }

  if(status == 'loading') {
    return <p>loading...</p>
  }
  if (!user) {
    return <div>You need to be logged in to post a blog.</div>;
  }
  return (
    <Form {...form}>
      <CardTitle>Post a Blog</CardTitle>
      <form className='space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField control={form.control} name='title' render={({ field }) => (
          <FormItem>
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Input placeholder='Blog title' {...field} />
            </FormControl>
          </FormItem>
        )} />
        <FormField control={form.control} name='heading' render={({ field }) => (
          <FormItem>
            <FormLabel>Heading</FormLabel>
            <FormControl>
              <Input placeholder='Blog short description' {...field} />
            </FormControl>
          </FormItem>
        )} />
        <FormField control={form.control} name='primaryImage' render={({ field }) => (
          <FormItem>
            <FormLabel>Primary Image</FormLabel>
            <FormControl>
              <Input placeholder='This image shown top of the page' {...field} />
            </FormControl>
          </FormItem>
        )} />
        <FormField control={form.control} name='secondaryImage' render={({ field }) => (
          <FormItem>
            <FormLabel>Secondary Image</FormLabel>
            <FormControl>
              <Input placeholder='This image shown center of the page' {...field} />
            </FormControl>
          </FormItem>
        )} />
        <FormField control={form.control} name='tags' render={({ field }) => (
          <FormItem>
            <FormLabel>Tags</FormLabel>
            <FormControl>
              <TagsInput onTagsChange={field.onChange}/>
            </FormControl>
          </FormItem>
        )} />
        <FormField control={form.control} name='text' render={({ field }) => (
          <FormItem>
            <FormLabel>Text</FormLabel>
            <FormControl>
              <ReactQuill placeholder='Your main content' className='h-[250px] pb-[42px] border' theme="snow" {...field} />
            </FormControl>
          </FormItem>
        )} />
        {isLoading ? <Button disabled={true} type='submit' className='cursor-progress w-full mt-3 '><Loader2 className="mr-2 h-4 w-4 animate-spin" />Posting your blog</Button> : <Button type='submit' className=' w-full mt-3'>Post</Button>}
      </form>
    </Form>
  )
}

export default PostBlog