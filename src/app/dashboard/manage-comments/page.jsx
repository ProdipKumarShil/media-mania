"use client"

import Image from "next/image"
import { Search, Trash2 } from "lucide-react"

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
import { useDeleteCommentMutation, useGetAllCommentsQuery } from "@/redux/api/baseApi"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import moment from "moment"
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"

const CommentData = ({ comment: singleComment, refetch }) => {
  const [deleteComment, { isLoading }] = useDeleteCommentMutation()
  const handleDeleteComment = async(id) => {
    const response = await deleteComment(id).unwrap()
    if (response?.status) {
      refetch()
      toast({
        title: "Success",
        description: `${response?.message}`
      })
    } else {
      toast({
        variant: "destructive",
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
          src={singleComment?.userImg}
          width="30"
        />
      </TableCell>
      <TableCell className="font-medium">
        {singleComment?.userName}
      </TableCell>
      <TableCell>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="cursor-pointer">{(singleComment?.comment).slice(0, 25)}...</p>
            </TooltipTrigger>
            <TooltipContent>
              <p>{singleComment?.comment}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {moment(singleComment?.createdAt).format('DD MMMM, YYYY')}
      </TableCell>
      <TableCell>
        <Dialog>
          <DialogTrigger><Button size='icon' variant='destructive'><Trash2 /></Button></DialogTrigger>
          <DialogContent>
            <p className="text-2xl font-bold text-center">Are you sure?</p>
            <p className="text-center">This comment will permanently deleted</p>
            <DialogClose asChild>
              <Button onClick={() => handleDeleteComment(singleComment?._id)} size='' variant='destructive'>Delete</Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  )
}

const ManageComments = () => {
  const { data, refetch } = useGetAllCommentsQuery()
  return (
    <div>
      <Card>
        <CardHeader className='flex-row justify-between items-center'>
          <div className="">
            <CardTitle className='mb-1'>Comments</CardTitle>
            <CardDescription>
              Manage all Comments
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
                  <span className="sr-only">User Image</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Comment</TableHead>
                <TableHead className="hidden md:table-cell">Commented at</TableHead>
                <TableHead>
                  Actions
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                data?.comments?.map((comment) => <CommentData key={comment?._id} comment={comment} refetch={refetch} />)
              }
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

export default ManageComments
