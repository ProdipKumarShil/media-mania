import Blog from "@/lib/models/Blog.model"
import Comment from "@/lib/models/Comment.model"
import connect from "@/lib/mongoose"
import moment from "moment"
import { NextResponse } from "next/server"

export const GET = async () => {
  try {
    await connect()
    const currentDate = moment()
    const fiveMonthsAgo = currentDate.clone().subtract(4, 'months').startOf('month').toDate();
    const currentMonthStart = currentDate.startOf('month').toDate();

    const blogData = await Blog.aggregate([
      {
        $match: { createdAt: { $gte: fiveMonthsAgo } }
      },
      {
        $group: {
          _id: { $month: '$createdAt' },
          posts: { $sum: 1 }
        }
      },
      { $sort: { '_id': 1 } }
    ])

    const commentData = await Comment.aggregate([
      {
        $match: { createdAt: { $gte: fiveMonthsAgo } }
      },
      {
        $group: {
          _id: { $month: '$createdAt' },
          comments: { $sum: 1 }
        }
      },
      { $sort: { '_id': 1 } }
    ])

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const currentMonth = currentDate.month()
    console.log(currentMonth)
    const last5Months = Array.from({ length: 5 }, (_, i) => {
      const monthIndex = (currentMonth - i + 12) % 12
      return monthIndex
    }).reverse()
    console.log(last5Months)

    const data = last5Months.map(monthIndex => {
      const blog = blogData.find(b => b._id === monthIndex + 1) || { posts: 0 }
      const comment = commentData.find(c => c._id === monthIndex + 1) || { comments: 0 }

      return {
        month: months[monthIndex],
        posts: blog.posts,
        comments: comment.comments
      }
    })

    // const categoryData = await Blog.aggregate([
    //   {$unwind: '$tags'},
    //   {
    //     $group: {
    //       _id: '$tags',
    //       visitors: {$sum: 1}
    //     }
    //   },
    //   {
    //     $project: {
    //       _id: 0,
    //       category: {$toUpper: '$_id'},
    //       visitors: 1,
    //       fill: {
    //         $switch: {
    //           branches: [
    //             {case: {$eq: ['$_id', 'gaming']}}
    //           ]
    //         }
    //       }
    //     }
    //   }
    // ])

    return NextResponse.json({ status: true, data })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ status: false, message: 'Something went wrong' }, { status: 500 })
  }
}