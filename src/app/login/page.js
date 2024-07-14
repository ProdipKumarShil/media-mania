'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { signIn } from 'next-auth/react'
import LoginPage from './LoginPage'

const page = () => {
  return (
    <div className='p-10 bg-slate-200'>
      <div className='max-w-screen-sm mx-auto'>
        <LoginPage />
        <div className='flex gap-4 mt-3'>
          <Button className="w-full" onClick={() => signIn()} variant="outline">Google</Button>
          <Button className="w-full" onClick={() => signIn()}>Github</Button>
        </div>
      </div>

    </div>
  )
}

export default page