import Blog from "@/lib/models/Blog.model"
import connect from "@/lib/mongoose"
import { NextResponse } from "next/server"

export const POST = async (request) => {
  try {
    await connect()
    const data = await request.json()
    const newPost = new Blog(data)
    await newPost.save()
    
    return new NextResponse(JSON.stringify({status: true, message: 'Blog created successfully'}), {status: 201})
  } catch (error) {
    return new NextResponse(JSON.stringify({status: false, message: 'Failed to create blog'}), {status: 500})
  }
}