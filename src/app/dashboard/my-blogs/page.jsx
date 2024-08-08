"use client"

import Image from "next/image"
import { Eye, MoreHorizontal, Search, Trash2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { useBlogsByEmailQuery, useDeletePostMutation } from "@/redux/api/baseApi"
import { useUser } from "@/lib/useUser/useUser"
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import moment from "moment"

export const UserTable = ({ blog, refetch }) => {
  const [deletePost, { isLoading }] = useDeletePostMutation()

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
          height="30"
          src={blog?.primaryImage}
          width="30"
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

const MyBlogs = () => {
  const user = useUser()
  const email = user?.user?.email
  const {data} = useBlogsByEmailQuery(email)
  return (
    <div>
      <Card>
        <CardHeader className='flex-row justify-between items-center'>
          <div className="">
            <CardTitle className='mb-1'>Your Blogs</CardTitle>
            <CardDescription>
              Your all posted blogs
            </CardDescription>
          </div>
          <div className="">
            <form >
              <div className="relative">
                <Search className="absolute left-2.5 top-[12px] size-4 text-muted-foreground" />
                <Input type='search' placeholder='Search blogs' className='w-full appearance-none bg-background pl-8 shadow-none ' />
              </div>
            </form>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="hidden md:table-cell">Created at</TableHead>
                <TableHead>
                  Actions
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.blogs?.map(blog => <UserTable blog={blog} key={blog?._id} />)}
            </TableBody>
          </Table>
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

export default MyBlogs
