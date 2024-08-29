import Link from "next/link"
import {
  CircleUser,
  Menu,
  Package2,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import DashboardNav from "@/components/DashboardComponents/DashboardNav"
import ModeToggle from "@/components/Shared/DarkModeButton/ModeToggle"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/authOptions"
import Image from "next/image"

const UpgradeCard = () => {
  return (
    <div className="mt-auto p-4">
      <Card x-chunk='dashboard-02-chunk-0'>
        <CardHeader className='p-2 pt-0 md:p-4'>
          <CardTitle>Upgrade to pro</CardTitle>
          <CardDescription>Remove all ads</CardDescription>
        </CardHeader>
        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
          <Button size='sm' className='w-full'>Upgrade</Button>
        </CardContent>
      </Card>
    </div>
  )
}

const layout = async({ children }) => {
  const session = await getServerSession(authOptions)
  // console.log(session)
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href='/' className="flex items-center gap-2 font-semibold"><Package2 className="size-6 " />
              <span>Media Mania</span>
            </Link>
          </div>
          <div className="flex-1">
            {/* Side menus */}
            <DashboardNav />
          </div>
          <UpgradeCard />
        </div>
      </div>

      {/* sm device menu */}
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='outline' size='icon' className='shrink-0 md:hidden'><Menu className="size-5" /> <span className="sr-only">Toggle Navigation</span></Button>
            </SheetTrigger>
            <SheetContent side='left' className='flex flex-col'>
              {/* side menus */}
              <DashboardNav />
              <UpgradeCard />
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* user image here */}
              <Button variant='secondary' size='icon' className='rounded-full'><Image className="size-9 rounded-full" src={session?.user?.image} alt='userImg' width={100} height={100}/></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel><Link href='/'>Home</Link></DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel><Link href='/blogs'>Blogs</Link></DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel className='flex items-center justify-between'><p>Theme</p> <ModeToggle /></DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel><Link href='https://media-mania-three.vercel.app/api/auth/signout?callbackUrl=/'>Logout</Link></DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        {/* child pages */}
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {/* pages */}
          {children}
        </main>
      </div>
    </div>
  )
}

export default layout

