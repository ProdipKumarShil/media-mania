'use client'

import DBarChart from "@/components/Shared/DBarChart/DBarChart"
import DPieChart from "@/components/Shared/DPieChart/DPieChart"
import { useGetChartQuery } from "@/redux/api/baseApi"

const Dashboard = () => {
  const { data } = useGetChartQuery()
  // console.log(data)
  // console.log(data?.categoryData)
  return (
    <div className=''>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
        <DBarChart chartData={data?.data} />
        <DPieChart pieData={data?.categoryData}/>
      </div>
    </div>
  )
}

export default Dashboard