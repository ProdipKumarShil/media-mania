import Blog from "@/lib/models/Blog.model"
import connect from "@/lib/mongoose"
import { NextResponse } from "next/server"

export const GET = async() => {
  try {
    await connect()
    const allBlogs = await Blog.find()
    const blogCount = allBlogs.length
    return new NextResponse(JSON.stringify({count : blogCount, blogs: allBlogs}))
  } catch (error) {
    return new NextResponse(JSON.stringify({status: false, message: 'Something went wrong'}), {status: 500})
  }
}
