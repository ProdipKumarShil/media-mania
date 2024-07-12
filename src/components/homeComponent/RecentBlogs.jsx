import Image from 'next/image';
import React from 'react';
import recentBlogImg from '../../../public/Image.png'
import lastrecentBlogImg from '../../../public/blog (4).png'
import blog1 from '../../../public/blog (3).png'
import blog2 from '../../../public/blog (2).png'
import { GiArmoredBoomerang } from "react-icons/gi";

const RecentBlogs = () => {
    return (
        <div className='my-10'>

            <h2 className='text-2xl font-semibold py-5'>Recent Blog</h2>

      <div  className='grid grid-cols-1 lg:grid-cols-3 gap-3 justify-center items-center'>

 {/* first recent blog with banner img */}

 <div className='col-span-3 lg:col-span-2'>

<Image
 src={recentBlogImg}
 alt='blog image'
 height={230}
 width={730}
 style={{ width: '100vw', height: 'auto' }}
 />

 <p className='text-xl font-semibold text-indigo-600 py-4'>Sunday , 1 Jan 2023</p>

 <div className='flex justify-between'>
 <h3 className='text-2xl font-semibold py-2'>UX review presentations</h3>
<GiArmoredBoomerang  className=' '/>
</div>
 
 <p className='text-[16px] text-gray-500'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>

 {/* tags  */}
 <div className='flex gap-4  items-center my-4'>
 <p className='text-xs font-medium  text-indigo-600 bg-gray-100 p-2 rounded-xl'>Design</p>
 <p className='text-xs font-medium  bg-blue-50 text-blue-700 p-2 rounded-xl'>Research</p>
 <p className='text-xs font-medium  text-pink-700 bg-pink-50 p-2 rounded-xl'>Presentation</p>
 </div>

</div>


    {/* secondary blogs  */}

   <div className='px-8 md:py-8 '>

   {/* blog 1 */}

   <div className=' flex flex-col justify-center items-center md:flex-row md:justify-around gap-2 p-4 md:p-0'>
         
         <Image
         src={blog1}
         alt='Blog Image'
         width={320}
         height={200}
         />

<div>
<p className='text-xl font-semibold text-indigo-600 py-4'>Sunday , 1 Jan 2023</p>
<h3 className='text-xl font-semibold'>Building your API Stack</h3>
<p className='text-[16px] text-gray-500 py-2'>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...</p>
<div className='flex justify-end'>
<GiArmoredBoomerang  className=' '/>
</div>

{/* tags  */}
<div className='flex gap-4  items-center my-4'>
<p className='text-xs font-medium  text-green-500 bg-green-60 p-2 rounded-xl'>Design</p>
<p className='text-xs font-medium  bg-pink-50 text-pink-700 p-2 rounded-xl'>Research</p>

</div>

</div>
    </div>


    {/* blog 2  */}

    <div className=' flex flex-col justify-center items-center md:flex-row md:justify-around gap-2 p-4 md:p-0'>
         
         <Image
         src={blog2}
         alt='Blog Image'
         width={320}
         height={200}
         />

<div>
<p className='text-xl font-semibold text-indigo-600 py-4'>Sunday , 1 Jan 2023</p>
<h3 className='text-xl font-semibold'>Building your API Stack</h3>
<p className='text-[16px] text-gray-500 py-2'>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag....</p>
<div className='flex justify-end'>
<GiArmoredBoomerang  className=' '/>
</div>

{/* tags  */}
<div className='flex gap-4  items-center my-4'>
<p className='text-xs font-medium  text-green-500 bg-green-60 p-2 rounded-xl'>Design</p>
<p className='text-xs font-medium  bg-pink-50 text-pink-700 p-2 rounded-xl'>Research</p>

</div>

</div>
    </div>

   </div>

      {/* last recent blog  */}

      <div className='col-span-3 flex flex-col lg:flex-row gap-3 justify-center items-center'>

<Image
src={lastrecentBlogImg}
alt='blog image'
height={230}
width={730}
style={{ width: '100vw', height: 'auto' }}
/>

<div>
<p className='text-xl font-semibold text-indigo-600 py-4'>Sunday , 1 Jan 2023</p>

<div className='flex justify-between'>
<h3 className='text-2xl font-semibold py-2'>UX review presentations</h3>
<GiArmoredBoomerang  className=' '/>
</div>

<p className='text-[16px] text-gray-500'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>

{/* tags  */}
<div className='flex gap-4  items-center my-4'>
<p className='text-xs font-medium  text-indigo-600 bg-gray-100 p-2 rounded-xl'>Design</p>
<p className='text-xs font-medium  bg-blue-50 text-blue-700 p-2 rounded-xl'>Research</p>
<p className='text-xs font-medium  text-pink-700 bg-pink-50 p-2 rounded-xl'>Presentation</p>
</div>
</div>

</div>

      </div>

        </div>
    );
};

export default RecentBlogs;