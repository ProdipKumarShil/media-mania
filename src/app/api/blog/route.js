import Blog from "@/lib/models/Blog.model"
import connect from "@/lib/mongoose"
import { NextResponse } from "next/server"

export const POST = async (request) => {
  try {
    await connect()
    const data = await request.json()
    console.log(data)
    const newPost = new Blog(data)
    await newPost.save()
    return NextResponse.json({status: true, message: 'Blog created successfully'}, {status: 201})
  } catch (error) {
    console.log(error)
    return NextResponse.json({status: false, message: 'Failed to create blog'}, {status: 500})
  }
}

export const GET = async (request) => {
  try {
    const id = request.nextUrl.searchParams.get('id')
    await connect()
    const singleBlog = await Blog.findById(id)
    return NextResponse.json({status: true, blog: singleBlog}, {status: 200})
  } catch (error) {
    return NextResponse.json({status: false, message: 'Something went wrong!'}, {status: 500})
  }
}

export const DELETE = async(request) => {
  try {
    const id = request.nextUrl.searchParams.get('id')
    await connect()
    const deletedBlog = await Blog.findByIdAndDelete({_id: id})
    if(deletedBlog === null) {
      NextResponse.json({status: false, message: 'Blog does not found'}, {status: 500})
    }
    return NextResponse.json({status: true, deletedBlog, message: 'Blog deleted successfully!'}, {status: 200})
  } catch (error) {
    return NextResponse.json({status: false, message: 'Failed to delete blog!'}, {status: 500})
  }
}

export const PATCH = async(request) => {
  try {
    const id = request.nextUrl.searchParams.get('id')
    await connect()
    const approvedBlog = await Blog.findByIdAndUpdate(id, {approved: true})
    console.log(approvedBlog)
    return NextResponse.json({status: true, message: 'Blog approved'}, {status: 200})
  } catch (error) {
    console.log(error)
    return NextResponse.json({status: false, message: 'Something went wrong'}, {status: 500})
  }
}