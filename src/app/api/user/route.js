import User from "@/lib/models/User.model"
import connect from "@/lib/mongoose"
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'

export async function POST(req) {
  try {
    const body = await req.json()
    // check data exists
    if(!body?.email || !body?.password) {
      return NextResponse.json({message: 'All fields are required'}, {status: 400})
    }
    await connect()
    // check duplicate 
    const duplicate = await User.findOne({email: body.email}).lean().exec()
    if(duplicate){
      return NextResponse.json({message: 'Duplicate email'}, {status: 409})
    }
    const hashPassword = await bcrypt.hash(body.password, 10)
    body.password = hashPassword
    await User.create(body)
    return NextResponse.json({message: 'User Created', status: true}, {status: 201})
  } catch (error) {
    console.log(error)
    return NextResponse.json({message: 'Error', error, status: false}, {status: '500'})
  }
}

export const GET = async() => {
  try {
    await connect()
    const users = await User.find()
    return NextResponse.json({status: true, users})
  } catch (error) {
    return NextResponse.json({status: 'user route'})
  }
}

export const DELETE = async(request) => {
  try {
    await connect()
    const id = request.nextUrl.searchParams.get('id')
    const deletedUser = await User.findByIdAndDelete(id)
    if(deletedUser){
      return NextResponse.json({status: true, message: 'User deleted!'})
    }
    return NextResponse.json({status: false, message: 'Failed to delete user'})
  } catch (error) {
    return NextResponse.json({status: false, message: 'Something went wrong!'}, {status: 500})
  }
}