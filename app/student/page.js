import React from 'react'
import Card1 from '@/components/Card1'
import { data } from '@/Data/Data'
import Progress from '@/components/Progress'
import { ResultData } from '@/Data/ResultData'
import Profile from '@/components/Profile'
import Calendar from '@/components/Calendar'
import Assignment from '@/components/Assignment'

const page = () => {
  return (
    <div className='w-[98vw] m-auto overflow-hidden'>
      <div className='w-full px-5'>
        {/* top links */}
        <div className=' flex justify-center md:justify-between items-center flex-wrap '>
            <Card1
                number={data.NumberOfQueries}
                type="Number of Queries"
            />
            <Card1
                number={data.NumberOfTask}
                type="Number of Task"
            />
            <Card1
                number={data.NumberOfAssigment}
                type="Number of Assignment"
            />
            <Card1
                number={data.NumberOfProject}
                type="Number of Project"
            />
            <Card1
                number={data.NumberOfTest}
                type="Number of Test"
            />
        </div>
        {/* graph and student profile */}
        <div className="center p-5 flex-col md:flex-row">
            <Progress data={ResultData}  />
            <Profile data={data} />
        </div>
        {/* pie chart and event  */}
        <div className="center  p-5 flex-col md:flex-row" >
            <Progress data={ResultData}  />
            <Calendar/>
        </div>
        {/* assignment and fee details */}
        <div className="flex items-center justify-between flex-col md:flex-row p-5">
          <Assignment data = {data.AssigmentDetail.filterAssigment}/>
          <Card1
                number={data.DuesFeesDetail.filterDuesFees.DueFees}
                type="Pending Fee"
                className="w-[350px]"
            />
        </div>
      </div>
    </div>
  )
}

export default page