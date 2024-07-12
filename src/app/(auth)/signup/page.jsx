import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            its sgn up
            go to  <Link href='/signin'>sign in</Link>
        </div>
    );
};

export default page;