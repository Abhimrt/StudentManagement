import React from "react";

const Assignment = (props) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-5 text-[14px] md:text-lg whitespace-nowrap">
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
              {props.data.Subject}
            </th>
            <td className="px-3 md:px-6 py-2 md-py-3">{props.data.StartDate}</td>
            <td className="px-3 md:px-6 py-2 md-py-3">{props.data.EndDate}</td>
            <td className="px-3 md:px-6 py-2 md-py-3">{props.data.Status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Assignment;
