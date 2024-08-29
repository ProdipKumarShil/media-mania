"use client"

import Image from "next/image"
import { Check, Eye, Search, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { useApprovePostMutation, useDeletePostMutation, useGetBlogsQuery, usePendingBlogsQuery, useSearchBlogsQuery } from "@/redux/api/baseApi"
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import moment from "moment"
import { toast } from "@/components/ui/use-toast"
import { useState } from "react"

const UserTable = ({ blog, pendingBlog, refetch, pendingBlogsRefetch }) => {
  const [deletePost, { isLoading }] = useDeletePostMutation()
  const [approvePost, { isLoading: approveLoading }] = useApprovePostMutation()

  const handleApprove = async () => {
    const response = await approvePost(blog?._id).unwrap()
    pendingBlogsRefetch()
    refetch()
    if (response.status) {
      toast({
        title: 'Success',
        description: `${response?.message}`
      })
    }
  }

  const handleDelete = async () => {
    const response = await deletePost(blog?._id).unwrap()
    if (response.status) {
      refetch()
      toast({
        title: "Success",
        description: `${response?.message}`
      })
    }
  }
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="User image"
          className="aspect-square rounded-md object-cover"
          height="50"
          src={blog?.primaryImage}
          width="50"
        />
      </TableCell>
      <TableCell className="font-medium">
        {blog?.title}
      </TableCell>
      <TableCell>
        {blog?.author?.name}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {moment(blog?.createdAt).format("Do MMM YYYY")}
      </TableCell>
      <TableCell className='space-x-3'>
        <Dialog>
          <DialogTrigger>
            <Button size='icon' variant='outline'><Eye /></Button>
          </DialogTrigger>
          <DialogContent className='max-w-[800px]'>
            <div className="space-y-4">
              <Image src={blog?.primaryImage} alt="Blog image" className="w-full h-80 object-cover" width={500} height={100} />
              <p className="text-xl font-bold">{blog?.title}</p>
              <p>{blog?.heading}</p>
            </div>
          </DialogContent>
        </Dialog>
        {pendingBlog && (
          <Dialog>
            <DialogTrigger><Button className='bg-green-500 hover:bg-green-400' size='icon' variant='destructive'><Check /></Button></DialogTrigger>
            <DialogContent>
              <p className="text-2xl font-bold text-center">Are you sure?</p>
              <p className="text-center">This blog will approved and show in publicly</p>
              <DialogClose>
                <Button onClick={() => handleApprove()} className='bg-green-500 hover:bg-green-400'>Approve</Button>
              </DialogClose>
            </DialogContent>
          </Dialog>
        )}
        <Dialog>
          <DialogTrigger><Button size='icon' variant='destructive'><Trash2 /></Button></DialogTrigger>
          <DialogContent>
            <p className="text-2xl font-bold text-center">Are you sure?</p>
            <p className="text-center">This blog will permanently deleted</p>
            <DialogClose asChild>
              <Button onClick={handleDelete} variant='destructive'>Delete</Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  )
}


const ManageBlogs = () => {
  const { data: pendingBlogs, isLoading: pendingBlogsLoading, refetch: pendingBlogsRefetch } = usePendingBlogsQuery()

  const [searchItem, setSearchItem] = useState('')
  // console.log(searchItem)
  const { data, refetch, isLoading } = useSearchBlogsQuery(searchItem)
  const handleInput = (e) => {
    setSearchItem(e.target.value)
  }

  return (
    <div className="space-y-6">
      {(pendingBlogs?.count > 0) && (
        <Card>
          <CardHeader className='flex-row justify-between items-center'>
            <div className="">
              <CardTitle className='mb-1'>Pending Blogs</CardTitle>
              <CardDescription>
                Pending blogs, Approve or delete it
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Image</span>
                  </TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead className="hidden md:table-cell">Created at</TableHead>
                  <TableHead>
                    Actions
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingBlogs?.pendingBlogs?.map((blog) => <UserTable refetch={refetch} pendingBlogsRefetch={pendingBlogsRefetch} pendingBlog={true} key={blog?._id} blog={blog} />)}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <div className="text-xs text-muted-foreground">
              Showing <strong>1-10</strong> of <strong>32</strong> users
            </div>
          </CardFooter>
        </Card>
      )}

      <Card>
        <CardHeader className='flex-row justify-between items-center'>
          <div className="">
            <CardTitle className='mb-1'>Blogs</CardTitle>
            <CardDescription>
              Manage all Blogs. If it doesn&apos;t follow our guideline, delete it
            </CardDescription>
          </div>
          <div className="">
            {/* <form > */}
            <div className="relative">
              <Search className="absolute left-2.5 top-[12px] size-4 text-muted-foreground" />
              <Input value={searchItem} onChange={handleInput} type='search' placeholder='Search blogs' className='w-full appearance-none bg-background pl-8 shadow-none ' />
            </div>
            {/* </form> */}
          </div>
        </CardHeader>
        <CardContent>
          {data?.count == 0 && <p className="text-2xl font-bold text-center py-20">&apos;{`${searchItem}`}&apos; Not Found</p>}
          {!data?.count == 0 && <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Username</TableHead>
                <TableHead className="hidden md:table-cell">Created at</TableHead>
                <TableHead>
                  Actions
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.blogs?.map((blog) => <UserTable refetch={refetch} key={blog?._id} blog={blog} />)}
            </TableBody>
          </Table>}
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>32</strong> users
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ManageBlogs
