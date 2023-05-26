import React from 'react'

const Card1 = (props) => {
  /*
    Content to be shared:  | Example
        number = "Integer" | //124
        type = "String"    | // number of students
  */
  return (
    <div className='component'>
      <div>
        <p className='font-bold text-3xl ' > {props.number}</p>
        <p className='text-gray-500'>{props.type}:</p>
      </div>
    </div>
  )
}

export default Card1