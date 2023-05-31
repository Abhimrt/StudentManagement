"use client"
import React, { useState } from 'react'


/*
    data to be shared
    assignment=[
        {
            title:"Title comes here",
            date:"May 2"
        }
    ]
*/

const Todo = (props) => {

  const [checked, setChecked] = useState([]);

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  var isChecked = (item) =>
    checked.includes(""+item) ? "line-through text-gray-400" : "";
    
  return (
    <div className='component space-y-5 '>
        {props.assignment && props.assignment.map((item, index) => (
            <div className='flex justify-start items-center' key={index}>
            <input type="checkbox"  value={index} onChange={handleCheck} className='w-6 h-6 mx-4'/>
            <div className={isChecked(index)}>
                <h3 className='capitalize '>{item.title}</h3>
                <p className='text-gray-400 text-sm capitalize'>{item.date}</p>
            </div>
        </div>
          ))}
        
       
    </div>
  )
}

export default Todo