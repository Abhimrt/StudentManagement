import React from "react";

const Profile = ({ data }) => {
  return (
    <div className="w-full md:w-1/2 self-stretch p-5" >
      <div className="p-6  bg-slate-200 border h-full border-gray-200 rounded-lg shadow-lg">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 capitalize">
          {data.StudentProfile.studentName}
        </h2>

        <p className="mb-3 font-normal text-gray-500 ">
        {data.StudentProfile.AddmissionSession}
        </p>
        <p className="mb-3 font-normal text-gray-500 ">
        {data.StudentProfile.AddmissionSession}
        </p>
        <p className="mb-3 font-normal text-gray-500 ">
        {data.StudentProfile.AddmissionSession}
        </p>
        <p className="mb-3 font-normal text-gray-500 ">
        {data.StudentProfile.AddmissionSession}
        </p>
        <p className="mb-3 font-normal text-gray-500 ">
        {data.StudentProfile.AddmissionSession}
        </p>
      </div>
    </div>
  );
};

export default Profile;
