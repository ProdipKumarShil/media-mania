import {withAuth} from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    // console.log(req.nextUrl.pathname)
    // console.log(req.nextauth.token.role)

    if(req.nextUrl.pathname.startsWith('/dashboard/manage-blogs') && req.nextauth.token.role != 'admin') {
      return NextResponse.rewrite(new URL('/denied', req.url))
    }
  },
  {
    callbacks: {
      authorized: ({token}) => !!token
    }
  }
)

export const config = {matcher: ['/dashboard/manage-blogs']}