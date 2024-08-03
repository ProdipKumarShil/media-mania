import SideBlogCard from "@/components/Shared/BlogCard/SideBlogCard"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

const SingleBlog = async({params}) => {
  const response = await fetch(`http://localhost:3000/api/blog?id=${params.blogId}`)
  const post = await response.json()
  const {title, heading, primaryImage, secondaryImage, tags, author, text, timestamps } = post?.blog
  return (
    <div>
      <Image className="w-full h-[458px] object-cover mb-8" quality={100} width={2000} height={2000} src={primaryImage} alt="Single Blog Image" />
      <div className="grid gap-8 grid-cols-1 md:grid-cols-12 lg-screen">
        <div className="order-2 md:order-1 w-full md:col-span-4 lg:col-span-3">
          <div className="w-full h-[200px] bg-zinc-300 mb-8 flex justify-center items-center">
            <p className="text-xl font-bold">Ad Block</p>
          </div>
          <div className="w-full h-[200px] bg-zinc-300 mb-8 flex justify-center items-center">
            <p className="text-xl font-bold">Ad Block</p>
          </div>
          <p className="text-lg font-bold mb-4">Recently Posted</p>
          <div className="flex flex-col gap-8">
            <SideBlogCard />
            <SideBlogCard />
            <SideBlogCard />
            <SideBlogCard />
          </div>
        </div>
        <div className=" order-1 md:order-2 w-full md:col-span-8 lg:col-span-9">
          <p className="text-[#6941C6] text-sm font-semibold mb-8">Sunday , 1 Jan 2023</p>
          <p className="text-4xl font-bold mb-8">{title}</p>
          <p className="mb-8 prose lg:prose-xl">{heading}</p>
          <Image className="w-full mb-8 h-[458px] object-cover" quality={100} width={2000} height={2000} src={secondaryImage} alt="Single Blog Image" />
          <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: text }} />
          {/* <p className="mb-8 text-base font-bold text-[#667085]">A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.</p>
          <p className="mb-8 text-base font-bold text-[#667085]">A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.</p>
          <div className="w-full h-[200px] bg-zinc-300 mb-8 flex justify-center items-center"><p className="text-2xl font-bold ">Ad Banner</p></div>
          <p className="mb-8 text-base font-bold text-[#667085]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rerum. Ullam, iusto, eos dolor fuga molestias accusamus quibusdam sunt ad quisquam maxime vero reprehenderit quas ea quaerat. Excepturi quisquam ullam eaque tempora. Animi sapiente expedita repellat nemo consequatur rem. Voluptatibus, labore! Deserunt repellat optio vel laboriosam quaerat eum reiciendis, temporibus suscipit ex! Corporis, eius! Voluptate suscipit ut iusto repudiandae dolorum animi illo omnis nihil saepe cupiditate quos debitis, itaque possimus quisquam magnam deleniti commodi, minima accusantium? Et reiciendis sapiente dolorem. Voluptas quibusdam doloribus recusandae eveniet at architecto est sed rerum praesentium enim culpa libero odio perspiciatis aliquid omnis, dolor eos voluptate dolores! Cupiditate numquam accusantium quae error esse! At assumenda dolor tempore eligendi illo, dignissimos veritatis fugiat temporibus facere incidunt.</p> */}
          {/* comments */}
          <div className="w-full h-[200px] bg-zinc-300 my-8 flex justify-center items-center"><p className="text-2xl font-bold ">Ad Banner</p></div>
          <div className="">
            <h2 className='text-2xl font-semibold py-5'>Comments</h2>
            <div className="mb-8">
              <Textarea className='mb-4' placeholder='Write your comment' />
              <Button>Post</Button>
            </div>
            {/* comments */}
            <div className="">
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog

const Comment = () => {
  return (
    <div className="p-4 mb-6">
      <div className="flex items-center gap-4 mb-4">
        {/* image placeholder */}
        <div className="size-14 rounded-full bg-slate-200 "></div>
        <div className="space-y-1">
          <p className="font-bold text-lg">John Duo</p>
          <p className="text-sm font-semibold text-slate-500">02 July, 2023</p>
        </div>
      </div>
      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione unde, sint animi debitis quia atque possimus, nulla, incidunt architecto velit nostrum! Laboriosam animi id repellat molestias mollitia repudiandae? Deleniti, iusto.</p>
      <hr />
    </div>
  )
}