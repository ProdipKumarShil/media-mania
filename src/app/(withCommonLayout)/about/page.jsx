import Image from 'next/image';
import React from 'react';

import blogBanner from '@/assets/imgs/bannerab.jpg'
import team1 from '@/assets/imgs/tmg-4.png'
import team2 from '@/assets/imgs/tmg-1.png'
import team3 from '@/assets/imgs/tmg-2.png'
const page = () => {
    return (
        <div >
           <h2 className='text-4xl md:text-8xl mt-10 mb-28 text-center font-bold font-sans'>
           We belive that <br />
            Freedom of express should be <br /> available to everyone
           </h2>

       <div   className='flex flex-col 
        justify-center items-center'   style={{
            background: 'linear-gradient(to bottom, transparent 40%, #eeecbc 20%)',
          }}
        >
       <Image
           src={blogBanner}
           alt='banner'
           height={400}
           width={720}
           />

           <div className='flex flex-col md:flex-row px-32  gap-4  font-serif justify-center items-center py-10 '>

                      <div>
                        <h4 className=' text-xxl py-4'>Our Story</h4>
                        <p className=' text-6xl'> Good for people,
                            good for the planet </p>
                      </div>

                      <div>
                      <p className='text-xl '>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ad, voluptatum voluptates sapiente quo inventore ducimus corporis eius, provident impedit doloremque mollitia, soluta voluptatem nulla cumque earum! Nulla dolorum autem quidem, cumque facere doloremque dolore neque deleniti consectetur, eveniet dignissimos.
                      </p>
                      <p className='text-xl pt-10'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ad, voluptatum voluptates sapiente quo inventore ducimus corporis eius, provident impedit doloremque mollitia, soluta voluptatem nulla cumque earum! Nulla dolorum autem quidem, cumque facere doloremque dolore neque deleniti consectetur, eveniet dignissimos.
                      </p>
                      </div>
           </div>


       </div>


       <div>
              <div className='text-center py-4'>
              <p className='text-xxl font-semibold'>Behind The Scene</p>

<p className='text-4xl'>Here is the team at the helm
of the ship</p>

              </div>
                    {/* images  */}
               <div className='grid grid-cols-1 md:grid-cols-3'>
                        <div className=' flex flex-col justify-center items-center text-center'>
                            <Image
                            src={team1}
                            width={200}
                            height={200}
                            alt='mentors'
                            />
                            
                            <p className='text-xl font-sans font-semibold'>Thomas Reece
                            </p>
                            <p className='text-xxl'>Co-Founder
                            </p>
                        </div>
                        <div className=' flex flex-col justify-center items-center text-center'>
                            <Image
                            src={team2}
                            width={200}
                            height={200}
                            alt='mentors'
                            />
                            
                            <p className='text-xl font-sans font-semibold'>Thomas Reece
                            </p>
                            <p className='text-xxl'>Co-Founder
                            </p>
                        </div>
                        <div className=' flex flex-col justify-center items-center text-center'>
                            <Image
                            src={team3}
                            width={200}
                            height={200}
                            alt='mentors'
                            />
                            
                            <p className='text-xl font-sans font-semibold'>Thomas Reece
                            </p>
                            <p className='text-xxl'>Co-Founder
                            </p>
                        </div>
               </div>
       </div>

        </div>
    );
};

export default page;