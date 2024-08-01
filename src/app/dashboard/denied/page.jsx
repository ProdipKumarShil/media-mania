import Link from "next/link"

const page = () => {
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <div className="">
        <p className='text-5xl font-bold text-red-500 '>Denied</p> <br />
        <p className="text-center text-sm">Go to <Link className="font-semibold underline" href='/dashboard'>Dashboard</Link></p>
      </div>
    </div>
  )
}

export default page