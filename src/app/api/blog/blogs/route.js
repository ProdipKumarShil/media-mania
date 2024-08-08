import Blog from "@/lib/models/Blog.model"
import connect from "@/lib/mongoose"
import { NextResponse } from "next/server"

export const GET = async(request) => {
  try {
    const email = request.nextUrl.searchParams.get('email')
    await connect()
    const blogs = await Blog.find({'author.email': email})
    return NextResponse.json({status: true, blogs}, {status: 200})
  } catch (error) {
    return NextResponse.json({status: false, message: 'Something went wrong!'}, {status: 500})
  }
}