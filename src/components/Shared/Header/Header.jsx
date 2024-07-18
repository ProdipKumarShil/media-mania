import Image from 'next/image';
import Logo from "@/assets/logos/logoCrop.png"
import Link from 'next/link';
import ModeToggle from '../DarkModeButton/ModeToggle';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { Button } from '@/components/ui/button';

const Header = async() => {
  const session = await getServerSession(authOptions)
  return (
    <div className='flex justify-between items-center bg-white py-[30px] lg-screen'>
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

          {session?.user && <Image className="size-10 rounded-full" alt='user' width={100} height={100} src={session?.user?.image} />}
          {session ? <Link href='/api/auth/signout?callbackUrl=/'><Button>Logout</Button></Link> : <Link href='/api/auth/signin'><Button>Login</Button></Link>}
          <ModeToggle />
        </div>
      </div>
    </div>

  );
};

export default Header;