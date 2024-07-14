import User from "@/lib/models/User.model"
import connect from "@/lib/mongoose"
import { NextResponse } from "next/server"

export const POST = async(request) => {
  try {
    const data = await request.json()
    await connect()
    const newUser = new User(data)
    await newUser.save()
    return NextResponse.json({status: true, message: 'User registered successfully'}, {status: 201})
  } catch (error) {
    return NextResponse.json({status: false, message: 'Failed to register user'}, {status: 500})
  }
}

export const GET = () => {
  return NextResponse.json({status: 'user route'})
}