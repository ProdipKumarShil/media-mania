import React from 'react';
import bannerImg from '../../../public/banner.jpg'
import Image from 'next/image';

const page = () => {
    return (
        <div className='grid grid-row-1 md:grid-cols-3 gap-2 justify-around items-center m-5 md:m-20'>
            <div className='col-span-2'>
            <Image
            src={bannerImg}
            alt='banner'
            height={500}
            width={720}
            className='drop-shadow-xl m-4 pe-2'
            />
            </div>

            <div className=' flex flex-col m-2 ps-4'>
                <p className=' 
                 text-gray-400'>Latest post</p>
                <h2 className='text-3xl font-bold  '>Mastering the Art of Code: A Journey Through Programming, Debugging, and Software Development</h2>
                <p className=' text-gray-400'>jan 28,2020 / JS</p>
            </div>
          
        </div>
    );
};

export default page;