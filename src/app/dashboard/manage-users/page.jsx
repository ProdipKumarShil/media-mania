"use client"

import Image from "next/image"
import { MoreHorizontal, Search, Trash2 } from "lucide-react"

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
import { useGetUsersQuery } from "@/redux/api/baseApi"

const UserTable = ({user}) => {
  const handleDeleteUser = () => {
    console.log('first')
  }
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="User image"
          className="aspect-square rounded-md object-cover"
          height="40"
          src={user?.image}
          width="40"
        />
      </TableCell>
      <TableCell className="font-medium">
        {user?.name}
      </TableCell>
      <TableCell>
        <Badge variant="outline">Admin</Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        12 July, 10:42 AM
      </TableCell>
      <TableCell>
        <Button onClick={() => handleDeleteUser()} size='icon' variant='destructive'><Trash2 /></Button>
      </TableCell>
    </TableRow>
  )
}

const ManageUsers = () => {
  const {data, refetch} = useGetUsersQuery()
  
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
              {data?.users?.map(user => <UserTable key={user?._id} user={user}/>)}
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
