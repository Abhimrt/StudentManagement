import React from 'react'
import {FcQuestions,FcParallelTasks} from "react-icons/fc"
import {MdAssignmentAdd} from "react-icons/md"
import {AiOutlineProject} from "react-icons/ai"
import {SiTestcafe} from "react-icons/si"

const Card1 = (props) => {
  /*
    Content to be shared:  | Example
        number = "Integer" | //124
        type = "String"    | // number of students
  */
  return (
    <div className='component m-2 my-4 md:m-5'>
      <div>
        {(props.type === "Number of Queries")&& <FcQuestions className='text-4xl mx-auto mb-2'/>}
        {(props.type === "Number of Task")&& <FcParallelTasks className='text-4xl mx-auto mb-2'/>}
        {(props.type === "Number of Assignment")&& <MdAssignmentAdd className='text-4xl mx-auto mb-2 text-red-900'/>}
        {(props.type === "Number of Project")&& <AiOutlineProject className='text-4xl mx-auto mb-2 text-blue-900'/>}
        {(props.type === "Number of Test")&& <SiTestcafe className='text-4xl mx-auto mb-2 text-green-900'/>}
        <p className='text-gray-500'>{props.type}:</p>
        <p className='font-bold text-3xl text-center' > {props.number}</p>
      </div>
    </div>
  )
}

export default Card1