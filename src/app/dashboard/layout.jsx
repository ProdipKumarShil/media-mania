import Link from "next/link"
import {
  CircleUser,
  Home,
  Menu,
  Package2,
  Search,
  UserCheck2,
  PackagePlus,
  PenBox,
  ContainerIcon,
  MessageSquare,
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

const NavMenu = () => {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      <Link href='#' className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"><Home className="size-4" />Dashboard</Link>
      <Link href='#' className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"><PenBox className="size-4" />Write Blog</Link>
      <Link href='#' className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"><ContainerIcon className="size-4" />Your Blogs</Link>
      <Link href='#' className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"><PackagePlus className="size-4" />Manage Blogs</Link>
      <Link href='#' className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"><MessageSquare className="size-4" />Manage Comments</Link>
      <Link href='#' className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"><UserCheck2 className="size-4" />Manage Users</Link>
    </nav>
  )
}

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

const layout = ({ children }) => {
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
            <NavMenu />
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
              <NavMenu />
              <UpgradeCard />
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form >
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
                <Input type='search' placeholder='Search blogs' className='w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3' />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* user image here */}
              <Button variant='secondary' size='icon' className='rounded-full'><CircleUser className="size-5" /> <span className="sr-only">Toggle User Menu</span> </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>Home</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Dashboard</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Logout</DropdownMenuLabel>
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

