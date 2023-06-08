import React from 'react'

const Heading = ({heading,size}) => {
  return (
    <h3 className={`font-bold ${size?size:"text-xl"} text-gray-700 my-3 text-center`}>{heading}</h3>
  )
}

export default Heading