import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import banner from '../../public/banner.jpg'

const page = () => {
    return (
      <div className='grid grid-rows-2 justify-center md:grid-cols-2 items-center bg-gray-100 p-10'>
       
       <div className='me-10 flex justify-center'>
       <Image
       src={banner}
       alt='banner'
       className=' shadow-black shadow-xl '
       height={600}
       width={400}/>
       </div>

       <div className='ps-8 flex flex-col justify-center w-80 '>

        <p className='my-10 text-xs text-gray-400'>Latest post</p>

        <h2 className='text-4xl font-bold'>
        Let a thousand programming publications bloom.
       
        </h2>

        <p className='my-10 text-xs text-gray-400'>December 28, 2019</p>
          
          <Button variant='default'>Read more</Button>
       </div>

      </div>
    );
};

export default page;