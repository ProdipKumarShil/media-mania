import AllBlogs from "@/components/homeComponent/AllBlogs/AllBlogs";
import Banner from "@/components/homeComponent/Banner";
import RecentBlogs from "@/components/homeComponent/RecentBlogs";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";


const page = () => {
    return (
      <div className='lg-screen'>
       
      <Banner/>
      <RecentBlogs/>
      <AllBlogs/>

      </div>
    );
};

export default page;