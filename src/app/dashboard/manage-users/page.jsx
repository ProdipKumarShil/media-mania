"use client"

import Image from "next/image"
import { Search, Trash2 } from "lucide-react"

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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { useDeleteUserMutation, useGetUsersQuery } from "@/redux/api/baseApi"
import { toast } from "@/components/ui/use-toast"
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import moment from "moment"

const UserTable = ({ user, refetch }) => {
  const [deleteUser, { isLoading }] = useDeleteUserMutation()
  const handleDeleteUser = async () => {
    const response = await deleteUser(user?._id).unwrap()
    if (response?.status) {
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
          src={user?.image}
          width="50"
        />
      </TableCell>
      <TableCell className="font-medium">
        {user?.name}
      </TableCell>
      <TableCell>
        <Badge variant="outline">{user?.role == 'admin' ? <div className="size-2 rounded-full bg-red-500 mr-3"></div> : <div className="size-2 rounded-full bg-green-500 mr-3"></div>} {user?.role} </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {moment(user?.createdAt).format('LT, DD MMM YYYY')}
      </TableCell>
      <TableCell>
        <Dialog>
          <DialogTrigger><Button size='icon' variant='destructive'><Trash2 /></Button></DialogTrigger>
          <DialogContent>
            <p className="text-2xl font-bold text-center">Are you sure?</p>
            <p className="text-center">This user will permanently deleted</p>
            <DialogClose asChild>
              <Button onClick={handleDeleteUser} variant='destructive'>Delete</Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
        {/* <Button onClick={() => handleDeleteUser()} size='icon' variant='destructive'><Trash2 /></Button> */}
      </TableCell>
    </TableRow>
  )
}

const ManageUsers = () => {
  const { data, refetch } = useGetUsersQuery()

  return (
    <div>
      <Card>
        <CardHeader className='flex-row justify-between items-center'>
          <div className="">
            <CardTitle className='mb-1'>Users</CardTitle>
            <CardDescription>
              Manage all users based on their activities
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
              {data?.users?.map(user => <UserTable key={user?._id} refetch={refetch} user={user} />)}
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

export default ManageUsers
