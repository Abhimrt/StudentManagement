import React from 'react'
import Card1 from '@/components/Card1'
import { data } from '@/Data/Data'
import Progress from '@/components/Progress'
// import { ResultData } from '@/Data/ResultData'
import Profile from '@/components/Profile'
import Calendar from '@/components/Calendar'
import Assignment from '@/components/Table'
import PieChart from '@/components/PieChart'


const page = () => {
  return (
    <div className='w-[98vw] m-auto overflow-hidden'>
      <div className='w-full px-1 md:px-5'>
        {/* top links */}
        <div className=' flex justify-center md:justify-between items-center flex-wrap '>
          <Card1
            number={data.NumberOfQueries}
            type="Queries"
          />
          <Card1
            number={data.NumberOfTask}
            type="Task"
          />
          <Card1
            number={data.NumberOfAssigment}
            type="Assignment"
          />
          <Card1
            number={data.NumberOfProject}
            type="Project"
          />
          <Card1
            number={data.NumberOfTest}
            type="Test"
          />
        </div>
        {/* graph and student profile */}
        <div className="center  p-5 flex-col md:flex-row">
          <Progress data={data.StudentProgress} />
          <Profile data={data.StudentProfile} />
        </div>
        {/* pie chart and event  */}
        <div className="center  p-5 flex-col md:flex-row basis-3" >
          <div className='w-full md:w-1/3'>
            <PieChart data={data.CurrentPercentage} label="Percentage" />
          </div>
          <div className="w-full md:w-1/3">
            <PieChart data={data.ProjectStatus} label="Project Status" />
          </div>
          <Calendar />
        </div>
        {/* assignment and fee details */}
        <div className="flex items-center justify-around flex-col md:flex-row p-5">
          <Assignment data={data.AssigmentDetail.filterAssigment} heading={"Assignment Details"} />
          {/* fees detail start */}
              <Assignment data={[
                {
                  "Due Fees": data.DuesFeesDetail.filterDuesFees.DueFees,
                  "Status": data.DuesFeesDetail.filterDuesFees.status,
                }
              ]} heading={"Fees Details"} />
          {/* fees detail over */}
        </div>
      </div>
    </div>
  )
}

export default page