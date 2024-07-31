import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

const SingleBlog = () => {
  return (
    <div>
      <Image className="w-full h-[458px] object-cover" quality={100} width={2000} height={2000} src='https://images.unsplash.com/photo-1696733585001-868eb49cbfa6?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Single Blog Image" />
      <div className="grid grid-cols-1 md:grid-cols-12 lg-screen">
        <div className=" w-full col-span-3">

        </div>
        <div className=" w-full col-span-9">
          <p className="text-[#6941C6] text-sm font-semibold mb-8">Sunday , 1 Jan 2023</p>
          <p className="text-4xl font-bold mb-8">Introduction to MongoDB with Mongoose</p>
          <p className="mb-8 text-base font-bold text-[#667085]">A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.</p>
          <Image className="w-full mb-8 h-[458px] object-cover" quality={100} width={2000} height={2000} src='https://images.unsplash.com/photo-1649336320848-d350bb92d685?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Single Blog Image" />
          <p className="mb-8 text-base font-bold text-[#667085]">A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.</p>
          <p className="mb-8 text-base font-bold text-[#667085]">A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.</p>
          <div className="w-full h-[200px] bg-zinc-300 mb-8 flex justify-center items-center"><p className="text-2xl font-bold ">Ad Banner</p></div>
          <p className="mb-8 text-base font-bold text-[#667085]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rerum. Ullam, iusto, eos dolor fuga molestias accusamus quibusdam sunt ad quisquam maxime vero reprehenderit quas ea quaerat. Excepturi quisquam ullam eaque tempora. Animi sapiente expedita repellat nemo consequatur rem. Voluptatibus, labore! Deserunt repellat optio vel laboriosam quaerat eum reiciendis, temporibus suscipit ex! Corporis, eius! Voluptate suscipit ut iusto repudiandae dolorum animi illo omnis nihil saepe cupiditate quos debitis, itaque possimus quisquam magnam deleniti commodi, minima accusantium? Et reiciendis sapiente dolorem. Voluptas quibusdam doloribus recusandae eveniet at architecto est sed rerum praesentium enim culpa libero odio perspiciatis aliquid omnis, dolor eos voluptate dolores! Cupiditate numquam accusantium quae error esse! At assumenda dolor tempore eligendi illo, dignissimos veritatis fugiat temporibus facere incidunt.</p>
          {/* comments */}
          <div className="">
            <div className="">
              <Input />
              <Button>Post</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog