'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import {signIn } from 'next-auth/react'

const page = () => {
  return (
    <div className='p-10 flex gap-10 bg-slate-300'>
      <Button onClick={() => signIn()} variant="outline">Google</Button>
      <Button onClick={() => signIn()}>Github</Button>
    </div>
  )
}

export default page