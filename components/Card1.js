import React from 'react'
import {FcQuestions,FcParallelTasks} from "react-icons/fc"
import {MdAssignmentAdd} from "react-icons/md"
import {AiOutlineProject} from "react-icons/ai"
import {SiTestcafe} from "react-icons/si"

const Card1 = (props) => {
  /*
    Content to be shared:  | Example
        number = "Integer" | //124
        type = "String"    | // students
  */
  return (
    <div className='component m-2 my-4 md:m-5 basis-1/6 self-stretch whitespace-nowrap text-center hover:scale-3'>
      <div>
        {(props.type === "Queries")&& <FcQuestions className='text-4xl mx-auto mb-2'/>}
        {(props.type === "Task")&& <FcParallelTasks className='text-4xl mx-auto mb-2'/>}
        {(props.type === "Assignment")&& <MdAssignmentAdd className='text-4xl mx-auto mb-2 text-red-900'/>}
        {(props.type === "Project")&& <AiOutlineProject className='text-4xl mx-auto mb-2 text-blue-900'/>}
        {(props.type === "Test")&& <SiTestcafe className='text-4xl mx-auto mb-2 text-green-900'/>}
        <p className='font-bold text-3xl text-center' > {props.number}</p>
        <p className='text-gray-500'>{props.type}</p>
      </div>
    </div>
  )
}

export default Card1