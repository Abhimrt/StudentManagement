import React from 'react'
import { BiTask } from "react-icons/bi"
import { MdAssignmentAdd } from "react-icons/md"
import { AiOutlineProject } from "react-icons/ai"
import { MdOutlineDateRange } from "react-icons/md"
import { RiQuestionnaireFill } from "react-icons/ri"
import "@/css/main.css"

const Card1 = async (props) => {
  /*
    Content to be shared:  | Example
        number = "Integer" | //124
        type = "String"    | // students
  */
 const icons = {

 }
  return (
    <div className='profileCard'>
        <div className={`icons `} style={{background:props.color?props.color:"#d6d3d1"}}>
          {(props.type === "Queries") && <RiQuestionnaireFill className='text-4xl mx-auto mb-2' />}
          {(props.type === "Task") && <BiTask className='text-4xl mx-auto mb-2' />}
          {(props.type === "Assignment") && <MdAssignmentAdd className='text-4xl mx-auto mb-2' />}
          {(props.type === "Project") && <AiOutlineProject className='text-4xl mx-auto mb-2' />}
          {(props.type === "Test") && <MdOutlineDateRange className='text-4xl mx-auto mb-2' />}
        </div>
        <div className='w-7/12 mr-5' >
          <p className='font-bold text-3xl text-center' > {props.number}</p>
          <p className='text-gray-500 text-2xl'>{props.type}</p>
        </div>
    </div>
  )
}

export default Card1