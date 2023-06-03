import Image from "next/image";
import React from "react";

const Profile = ({ data }) => {
  return (
    <div className="w-full md:w-1/2 self-stretch p-0 md:p-5 text-center" >
      <div className="p-6  bg-slate-200 border h-full border-gray-200 rounded-lg shadow-lg">
        <Image src={"/user.png"} width={200} height={200} className="m-auto " />
        <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 capitalize">
          {data.StudentProfile.studentName}
        </h2>

        <p className="mb-3 font-normal text-gray-500 ">
          <span className="text-gray-700">Session</span> : {data.StudentProfile.AddmissionSession}
        </p>
        <p className="mb-3 font-normal text-gray-500 ">
          <span className="text-gray-700" >Course</span> : {data.StudentProfile.Course}
          <span className="ml-5"><span className="text-gray-700">Batch</span> : {data.StudentProfile.batch}</span>
        </p>
        <p className=" mb-3 font-normal text-gray-500 space-x-3 ">
          <span><span className="text-gray-700">Father Name</span> : {data.perents.FatherName}</span>
          <br className="block md:hidden"/>
          <span > <span className="text-gray-700 ">Mob. No.</span> : {data.perents.FatherMobileNumber}</span>
        </p>
        <p className="mb-3 font-normal text-gray-5d00">
          <span className="text-gray-700 text-left ">Address</span> <br />
          <span className="text-gray-700">House No.</span> : {data.Address.HouseNo}
          <span className="ml-5"> <span className="text-gray-700">Street</span> : {data.Address.street}</span>
          <br className="block md:hidden"/>
          <span className="ml-5"> <span className="text-gray-700">Area</span> : {data.Address.area}</span>
        </p>
       

      </div>
    </div>
  );
};

export default Profile;
