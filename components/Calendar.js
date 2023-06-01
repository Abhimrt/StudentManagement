
import React from 'react'
import {AiOutlineRight} from "react-icons/ai"

const Calendar = () => {
    const week = ["Sun","Mon","Tues","Wed","Thrus","Fri","Sat"]
    const title = ["Team Meetup","Retrospective","","illustration","","Traning",""]
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const next7 = []
    for(let i = 0;i<7;i++){
        next7.push(new Date(new Date().setDate(new Date().getDate() + i)))
    }
  return (
    <div>
        <h3 className='font-bold mb-3 translate-x-[-10px]'>Event Details</h3>
        <div className='component w-[350px] space-y-4'>
        {
            next7.map((e,i)=>(
                <div className='center space-x-5 mb-3 w-full whitespace-nowrap' key={i}>
                    
            {/* date */}
            <div className='w-[70px] '>
                
                <h3 className='capitalize  relative'> {i==0 && <AiOutlineRight className='absolute text-blue-900 translate-x-[-18px]  translate-y-1' title='today' />} {e.getDate()} {month[e.getMonth()]}</h3>
                <p className='text-sm text-gray-400'>{week[e.getDay()]}</p>
            </div>
            {/* events list */}
                {
                    title[i]!=""?(
                        <div className='py-1 px-5 shadow-lg rounded-full w-full  text-center bg-blue-300'>
                            <h3>
                               {title[i]}
                            </h3>
                            <p className='text-sm text-gray-500'>10:00 am</p>


                        </div>
                    ):(<div  className='py-1 px-5 shadow-lg rounded-full w-full  text-center bg-gray-300'>
                        <h3>
                          No Event
                        </h3>
                    </div>)
                }
            </div>
            ))
        }
    </div>
    </div>
  )
}

export default Calendar