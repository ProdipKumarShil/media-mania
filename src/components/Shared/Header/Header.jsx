import Image from 'next/image';
import Logo from "@/assets/logos/logoCrop.png"
import Link from 'next/link';
import ModeToggle from '../DarkModeButton/ModeToggle';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Header = async () => {
  const session = await getServerSession(authOptions)
  return (
    <div className='flex justify-between items-center bg-white py-[30px] px-2'>
      <Link href="/">
        <Image src={Logo} height={200} width={200} alt='mediaMania' />
      </Link>

      <div className='hidden w-full md:block md:w-auto'>
        <div className='flex gap-2 items-center  '>
          <ul className='flex gap-2  text-xl text-black'>
            <li><Link href='/' className=''>Home</Link></li>
            <li><Link href='blogs' className='ps-8'>Project</Link></li>
            <li><Link href='blogs' className='p-8'>Blogs</Link></li>
            <li><Link href='about' className='pe-8'>About</Link></li>
          </ul>

          {session?.user && <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="active:scale-95 border-4 border-slate-300 cursor-pointer rounded-full">
                  <Image className="size-10 rounded-full" alt='user' width={100} height={100} src={session?.user?.image} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel><Link href='/dashboard'>Dashboard</Link></DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel><Link href='/#'>Theme</Link></DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel><Link href='/api/auth/signout?callbackUrl=/'>Logout</Link></DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </>}
          <ModeToggle />
        </div>
      </div>
    </div>

  );
};

export default Header;