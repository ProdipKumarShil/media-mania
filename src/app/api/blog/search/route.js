import Blog from "@/lib/models/Blog.model"
import connect from "@/lib/mongoose"
import { NextResponse } from "next/server"

export const GET = async (request) => {
  await connect()
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')

  let blogs
  if (!query) {
    blogs = await Blog.find()
  } else {
    blogs = await Blog.find({
      title: { $regex: query, $options: 'i' }
    })
  }

  const count = blogs.length

  return NextResponse.json({status: true, count, blogs})
}