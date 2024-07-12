import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className='flex justify-center items-center min-h-screen py-2 bg-slate-400'>
            <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>

                <div className='w-3/5 p-5'>
                    <p>Sign in</p>
                </div>

                <div className='w-2/5 bg-black text-white rounded-tr-2xl  rounded-br-2xl  py-36 px-12'>
                <h2 className='text-3xl font-bold mb-2'> Welcome To media Mania </h2>
                <div className='border-2 w-10 border-white inline-block mb-2'></div>
                <p  className='mb-6'>Fill up the From and start your Journey with us</p>
                <Link href='/signup' className='btn border-2 p-2 border-white rounded-2xl ' > Sign Up</Link>
                </div>

                 </div>
            </div>
        </div>
        </div>

    );
};

export default page;