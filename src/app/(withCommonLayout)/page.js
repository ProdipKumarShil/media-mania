import AllBlogs from "@/components/homeComponent/AllBlogs/AllBlogs";
import Banner from "@/components/homeComponent/Banner";
import RecentBlogs from "@/components/homeComponent/RecentBlogs";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";


const page = () => {
    return (
      <div className='lg-screen'>
       
      {/* <Banner/> */}
      <RecentBlogs/>
      {/* <AllBlogs/>

      <Pagination >
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination> */}

      </div>
    );
};

export default page;