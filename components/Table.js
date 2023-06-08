import React from "react";
import Heading from "./Heading";
/*

    data = [ 
        {
            "Subject": "Math",
            "StartDate": "2023-05-10",
            "EndDate": "2023-05-15",
            "Status": "pending"
        },
        {
            "Subject": "Math",
            "StartDate": "2023-05-10",
            "EndDate": "2023-05-15",
            "Status": "pending"
        },
          
    ]

*/

const Table = ({heading,data}) => {
  const tableHeadings = Object.keys(data[0]);
  return (
    <div className="TableComponent" >
       <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-0 my-3 md:m-5  whitespace-nowrap">
        <Heading heading={heading}/>
      <table className="w-full  text-left text-gray-500">
        <thead className=" text-gray-700 uppercase bg-blue-300">
          <tr>
            {
              tableHeadings.map((e,i)=>(
                <th scope="col" className="px-3 md:px-6 py-2 md-py-3" key={i}>
                {e}
              </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
            
            {
              data.map((e)=>(
                <tr className="bg-white border-b hover:bg-slate-200 transition ">
                    {
                      Object.values(e).map((e1,i)=>(
                        (i==0)?<th
                        scope="row"
                        className="px-3 md:px-6 py-2 md-py-3 font-medium text-gray-900 whitespace-nowrap"
                        key={i}
                      >
                        {e1}
                      </th>:<td key={i} className="px-3 md:px-6 py-2 md-py-3">{e1}</td>
                     ))
                    }
                </tr>
              ))
            }
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Table;
