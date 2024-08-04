import Comment from "@/lib/models/Comment.model"
import connect from "@/lib/mongoose"
import { NextResponse } from "next/server"

export const GET = async (request) => {
  try {
    await connect()
    const { searchParams } = new URL(request.url)
    const blogId = searchParams.get('id')
    const userEmail = searchParams.get('email')

    if (!blogId || !userEmail) {
      return NextResponse.json({status: false, message: 'Missing blogId or userEmail'}, {status: 400})
    }

    const comments = await Comment.find({blogId, userEmail})
    return NextResponse.json({status: true, comments}, {status: 200})
  } catch (error) {
    return NextResponse.json({status: false, message: 'Something went wrong!'})
  }
}