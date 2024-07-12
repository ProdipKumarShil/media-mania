import Blog from "@/lib/models/Blog.model"
import connect from "@/lib/mongoose"
import { NextResponse } from "next/server"

export const GET = async() => {
  try {
    await connect()
    const allBlogs = await Blog.find()
    const blogCount = allBlogs.length
    return NextResponse.json({count : blogCount, blogs: allBlogs}, {status: 200})
  } catch (error) {
    return NextResponse.json({status: false, message: 'Something went wrong'}, {status: 500})
  }
}
