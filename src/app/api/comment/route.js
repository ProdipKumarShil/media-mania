import Comment from "@/lib/models/Comment.model"
import connect from "@/lib/mongoose"
import { NextResponse } from "next/server"

export const GET = async() => {
  try {
    await connect()
    const allComments = await Comment.find()
    const length = allComments.length
    return NextResponse.json({status: true, count: length, comments: allComments})
  } catch (error) {
    return NextResponse.json({status: false, message: 'Something went wrong!'})    
  }
}

export const POST = async(request) => {
  try {
    await connect()
    const data = await request.json()
    const newComment = new Comment(data)
    await newComment.save()
    return NextResponse.json({status: true, message: 'Success'}, {status: 200})
  } catch (error) {
    return NextResponse.json({status: false, message: 'Something Went wrong'}, {status: 500})
  }
}

export const DELETE = async(request) => {
  try {
    await connect()
    const id = request.nextUrl.searchParams.get('id')
    const deletedComment = await Comment.findByIdAndDelete(id)
    if(deletedComment){
      return NextResponse.json({status: true, message: 'Comment deleted'}, {status: 200})
    }
  } catch (error) {
    return NextResponse.json({status: false, message: 'Something went wrong'})
  }
}