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
    <div className='w-[95vw] m-auto overflow-hidden'>
      <div className='w-full overflow-hidden'>
        {/* top links */}
        <div className=' grid  grid-auto-fit gap-4 '>
          <Card1
            number={data.NumberOfQueries}
            type="Queries"
            color="green"
          />
          <Card1
            number={data.NumberOfTask}
            type="Task"
            color="violet"
          />
          <Card1
            number={data.NumberOfAssigment}
            type="Assignment"
            color="yellow"
          />
          <Card1
            number={data.NumberOfProject}
            type="Project"
            color="blue"
          />
          <Card1
            number={data.NumberOfTest}
            type="Test"
            color="red"
          />
        </div>
        {/* graph and student profile */}
        <div className="grid  grid-auto-fit-lg place-items-center gap-4 my-5">
          <Progress data={data.StudentProgress} />
          <Profile data={data.StudentProfile} />
        </div>
        {/* pie chart and event  */}
        <div className="grid  grid-auto-fit-xl place-items-center gap-4  my-5" >
        
            <PieChart data={data.CurrentPercentage} label="Percentage" />
        
            <PieChart data={data.ProjectStatus} label="Project Status" />
        
          <Calendar />
        </div>
        {/* assignment and fee details */}
        <div className="flex items-center justify-around flex-col  md:flex-row p-5">
          <Assignment data={data.AssigmentDetail.filterAssigment} heading={"Assignment Details"} />
          {/* fees detail start */}
              <Assignment data={[
                {
                  "Fees": "Tuition",
                  "Total Fees": 125000,
                  "Due Fees": data.DuesFeesDetail.filterDuesFees.DueFees,
                  "Status": data.DuesFeesDetail.filterDuesFees.status,
                },{
                  "Fees": "Hostel",
                  "Total Fees": 65000,
                  "Due Fees": 0,
                  "Status": "Completed",
                }
              ]} heading={"Fees Details"} />
          {/* fees detail over */}
        </div>
      </div>
    </div>
  )
}

export default page