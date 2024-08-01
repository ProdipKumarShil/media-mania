import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-start gap-2 mx-10'>
            <p> &#169; 2024</p>
         <ul className='flex gap-4'>
            <li>twitter</li>
            <li>linkdin</li>
            <li>email</li>
            <li>Rss</li>
            <li>Rss</li>
            <li><Link href='/dashboard'>Dashboard</Link></li>
         </ul>
        </div>
    );
};

export default Footer;