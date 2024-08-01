import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'


const BlogCardSkeleton = () => {
  return (
    <div>
      <Skeleton className='mb-8' height={237} /> 
      <div className="space-y-3 mb-6">
        <Skeleton className='mb-3' />
        <Skeleton className='mb-3' height={35}/>
        <Skeleton count={2} />
      </div>
      <div className="grid grid-cols-3 gap-2 ">
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  )
}

export default BlogCardSkeleton