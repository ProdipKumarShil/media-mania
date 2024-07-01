import { NextResponse } from "next/server"

export const GET = async(request) => {
  return new NextResponse(JSON.stringify({message: 'Media Mania Server Is Running'}), {status: 200})
}