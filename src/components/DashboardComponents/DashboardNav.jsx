'use client'
import { useUser } from '@/lib/useUser/useUser'
import { ContainerIcon, Home, MessageSquare, PackagePlus, PenBox, PersonStanding, PersonStandingIcon, UserCheck2, UserCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { BsPerson } from 'react-icons/bs'
import Skeleton from 'react-loading-skeleton'

const DashboardNav = () => {
  const { user, status } = useUser()
  if (status == 'loading') {
    return (
      <div className="">
        <p>loading</p>
        <Skeleton />
      </div>
    )
  }
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {user?.role !== 'admin' && <Link href='/profile' className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"><UserCircle className="size-4" />Profile</Link>}
      {user?.role == 'admin' && <>
        <Link href='/dashboard' className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"><Home className="size-4" />Dashboard</Link>
        <Link href='/dashboard/manage-blogs' className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"><PackagePlus className="size-4" />Manage Blogs</Link>
        <Link href='/dashboard/manage-comments' className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"><MessageSquare className="size-4" />Manage Comments</Link>
        <Link href='/dashboard/manage-users' className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"><UserCheck2 className="size-4" />Manage Users</Link>
      </>}
      <Link href='/dashboard/post-blog' className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"><PenBox className="size-4" />Post Blog</Link>
      <Link href='/dashboard/my-blogs' className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"><ContainerIcon className="size-4" />Your Blogs</Link>
    </nav>
  )
}
export default DashboardNav