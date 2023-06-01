import React from 'react'
import Card1 from '@/components/Card1'
import { data } from '@/Data/Data'
import Progress from '@/components/Progress'
import { ResultData } from '@/Data/ResultData'
import Profile from '@/components/Profile'
import Calendar from '@/components/Calendar'
import Assignment from '@/components/Assignment'
import PieChart from '@/components/PieChart'


const page = () => {
  return (
    <div className='w-[98vw] m-auto overflow-hidden'>
      <div className='w-full px-1 md:px-5'>
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
        <div className="center  p-5 flex-col md:flex-row">
          <Progress data={ResultData} />
          <Profile data={data} />
        </div>
        {/* pie chart and event  */}
        <div className="center  p-5 flex-col md:flex-row" >
          <PieChart data={data.CurrentPercentage} label="Percentage" />
          {/* <PieChart data={data.ProjectStatus}  label = "Project Status"/> */}
          <Calendar />
        </div>
        {/* assignment and fee details */}
        <div className="flex items-center justify-around flex-col md:flex-row p-5">
          <Assignment data={data.AssigmentDetail.filterAssigment} />
          {/* fees detail start */}
          <div>
            <h3 class="font-bold ">Due Fees Detail:</h3>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-0 my-3 md:m-5  whitespace-nowrap">
              <table className="w-full  text-left text-gray-500">
                <thead className=" text-gray-700 uppercase bg-slate-200">
                  <tr>
                    <th scope="col" className="px-3 md:px-6 py-2 md-py-3">
                      Due Fees
                    </th>

                    <th scope="col" className="px-3 md:px-6 py-2 md-py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-3 md:px-6 py-2 md-py-3">{data.DuesFeesDetail.filterDuesFees.DueFees}</td>
                    <td className="px-3 md:px-6 py-2 md-py-3">{data.DuesFeesDetail.filterDuesFees.status}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* fees detail over */}
        </div>
      </div>
    </div>
  )
}

export default page