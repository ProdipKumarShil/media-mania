import Blog from "@/lib/models/Blog.model"
import connect from "@/lib/mongoose"
import { NextResponse } from "next/server"

export const GET = async (request) => {
  await connect()
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')

  const blogs = await Blog.find({
    title: { $regex: query, $options: 'i'}
  })

  return NextResponse.json(blogs)
}