
import Image from 'next/image';
import Logo from "../../../../public/logo.png"
import People from "../../../../public/people.jpg"


import LoginBtn from './LoginBtn';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ModeToggle from '../DarkModeButton/ModeToggle';

const Header = () => {
  
    return (
      
    <div className='flex justify-between items-center bg-gray-100 p-2'>
      <Image
      src={Logo}
      height={200}
      width={200}
      alt='mediaMania'
      />
      
    <div className='hidden w-full md:block md:w-auto'>
    <div className='flex gap-2 items-center  '>
     <ul className='flex gap-2  text-xl text-black'>
        <li><Link href='/' className=''>Home</Link></li>
        <li><Link href='blogs' className='ps-8'>Project</Link></li>
        <li><Link href='blogs' className='p-8'>Blogs</Link></li>
        <li><Link href='about' className='pe-8'>About</Link></li>
      </ul>

<Button variant="default" className=
'text-xl'>login</Button>

<ModeToggle/>
     </div>
      
    </div>

{/* <div>
  <ul>
  <li><Link href='/' className=''>Home</Link></li>
        <li><Link href='blogs' className='p-8'>Project</Link></li>
        <li><Link href='blogs' className='p-8'>Blogs</Link></li>
        <li><Link href='about' className='p-8'>About</Link></li>
  </ul>
</div> */}

    </div>

    );
};

export default Header;