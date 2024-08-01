"use client"

import Image from "next/image"
import { MoreHorizontal, Search } from "lucide-react"

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

const UserTable = () => {
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="User image"
          className="aspect-square rounded-md object-cover"
          height="30"
          src="/placeholder.svg"
          width="30"
        />
      </TableCell>
      <TableCell className="font-medium">
        User Name
      </TableCell>
      <TableCell>
        <Badge variant="outline">Admin</Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        12 July, 10:42 AM
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Make Admin</DropdownMenuItem>
            <DropdownMenuItem>Remove Admin</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  )
}

const ManageComments = () => {
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
              <UserTable />
              <UserTable />
              <UserTable />
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
