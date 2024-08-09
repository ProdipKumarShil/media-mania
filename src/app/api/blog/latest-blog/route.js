import Blog from "@/lib/models/Blog.model"
import connect from "@/lib/mongoose"
import { NextResponse } from "next/server"

export const GET = async() => {
  try {
    await connect()
    const approvedBlogs = await Blog.find({approved: true}).sort({createdAt: -1}).limit(4)
    const blogCount = approvedBlogs.length
    return NextResponse.json({count : blogCount, blogs: approvedBlogs}, {status: 200})
  } catch (error) {
    return NextResponse.json({status: false, message: 'Something went wrong'}, {status: 500})
  }
}