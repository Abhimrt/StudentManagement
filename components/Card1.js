import React from 'react'

const Card1 = (props) => {
  /*
    Content to be shared:  | Example
        number = "Integer" | //124
        type = "String"    | // number of students
  */
  return (
    <div className='component m-5'>
      <div>
        <p className='text-gray-500'>{props.type}:</p>
        <p className='font-bold text-3xl text-center' > {props.number}</p>
      </div>
    </div>
  )
}

export default Card1