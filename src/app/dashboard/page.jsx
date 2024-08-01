import DBarChart from "@/components/Shared/DBarChart/DBarChart"
import DPieChart from "@/components/Shared/DPieChart/DPieChart"

const Dashboard = () => {
  return (
    <div className=''>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
        <DBarChart />
        <DPieChart />
      </div>
    </div>
  )
}

export default Dashboard