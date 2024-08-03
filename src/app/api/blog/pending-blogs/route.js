import Blog from "@/lib/models/Blog.model"
import connect from "@/lib/mongoose"
import { NextResponse } from "next/server"

export const GET = async() => {
  try {
    await connect()
    const allBlogs = await Blog.find()
    const pendingBlogs = allBlogs.filter((blog) => blog.approved == false)
    const count = pendingBlogs.length
    return NextResponse.json({status: true, count, pendingBlogs}, {status: 200})
  } catch (error) {
    console.log(error)
    return NextResponse.json({status: false, message: 'Something went wrong'}, {status: 500})
  }
}