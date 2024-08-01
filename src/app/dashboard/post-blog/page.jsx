'use client'
import { Button } from '@/components/ui/button';
import { CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PostBlog = () => {
  const [value, setValue] = useState('');
  return (
    <div className='space-y-4'>
      <CardTitle>Post a Blog</CardTitle>
      <div className="">
        <p className='text-slate-700 text-sm font-semibold mb-1'>Title</p>
        <Input placeholder='Blog Title' />
      </div>
      <div className="">
        <p className='text-slate-700 text-sm font-semibold mb-1'>Image URL</p>
        <Input placeholder='Image URL' />
      </div>
      <div className="">
        <ReactQuill className='h-[250px] border' theme="snow" value={value} onChange={setValue} />
      </div>
      <Button className='mt-12 w-full'>Post</Button>
    </div>
  )
}

export default PostBlog