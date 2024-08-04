import Comment from "@/lib/models/Comment.model"
import connect from "@/lib/mongoose"
import { NextResponse } from "next/server"

export const GET = async (request) => {
  try {
    await connect()
    const { searchParams } = new URL(request.url)
    const blogId = searchParams.get('id')

    if (!blogId) {
      return NextResponse.json({ status: false, message: 'Missing blogId' }, { status: 400 })
    }

    const comments = await Comment.find({ blogId }).sort({createdAt: -1})
    const commentCount = comments.length
    if (commentCount == 0) {
      return NextResponse.json({ status: false, message: 'Comments not found', count: commentCount }, { status: 200 })
    }
    return NextResponse.json({ status: true, count: commentCount, comments }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ status: false, message: 'Something went wrong!' })
  }
}