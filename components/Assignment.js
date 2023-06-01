import React from "react";

const Assignment = ({data}) => {
  return (
    <div>
      <h3 className="font-bold ">Assignment Details</h3>
       <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-0 my-3 md:m-5  whitespace-nowrap">
      <table className="w-full  text-left text-gray-500">
        <thead className=" text-gray-700 uppercase bg-slate-200">
          <tr>
            <th scope="col" className="px-3 md:px-6 py-2 md-py-3">
              Subject
            </th>
            <th scope="col" className="px-3 md:px-6 py-2 md-py-3">
              Start
            </th>
            <th scope="col" className="px-3 md:px-6 py-2 md-py-3">
              End
            </th>
            <th scope="col" className="px-3 md:px-6 py-2 md-py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="px-3 md:px-6 py-2 md-py-3 font-medium text-gray-900 whitespace-nowrap"
            >
              {data.Subject}
            </th>
            <td className="px-3 md:px-6 py-2 md-py-3">{data.StartDate}</td>
            <td className="px-3 md:px-6 py-2 md-py-3">{data.EndDate}</td>
            <td className="px-3 md:px-6 py-2 md-py-3">{data.Status}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Assignment;
