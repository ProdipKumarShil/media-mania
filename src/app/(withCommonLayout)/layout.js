import Header from '@/components/Shared/Header/Header'
import React from 'react'
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Footer from '@/components/Shared/Footer/Footer';

const CommonLayout = async ({ children }) => {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <Header session={session} />
        {children}
      <Footer />
    </div>
  )
}

export default CommonLayout