"use client"
import Image from "next/image";
import React, { useRef, useState } from "react";
import { MdLocationOn } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { RiContactsFill } from "react-icons/ri"
import Link from "next/link";

const Profile = ({ data }) => {
  const profile = useRef()
  const contact = useRef()
  const address = useRef()
  const content = useRef()

  const navBar = (e) => {
    console.log(e.current.innerText)
    if (!e.current.classList.contains("active")) {
      profile.current.classList.remove("active")
      profile.current.classList.add("nactive")
      contact.current.classList.remove("active")
      contact.current.classList.add("nactive")
      address.current.classList.remove("active")
      address.current.classList.add("nactive")
      e.current.classList.remove("nactive")
      e.current.classList.add("active")
      if(e.current.innerText == "Profile"){
        content.current.style.transform=`translateX(0)`
      }else if(e.current.innerText == "Contact"){
        content.current.style.transform=`translateX(-33.3%)`
      }else{
        content.current.style.transform=`translateX(-66.6%)`
      }
    }
  }

  return (
    <div className="w-full self-stretch p-0  text-center profile overflow-hidden" >
      <div className="  bg-slate-200 border h-full border-gray-200 rounded-lg shadow-lg">

        {/* upper navbar start */}
        <div className="border-b border-slate-300 ">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 ">
            <li className="mr-2 active" ref={profile}>
              <div  className=" group " onClick={() => navBar(profile)}>
                <CgProfile />Profile
              </div>
            </li>
            <li className="mr-2 nactive" ref={contact} >
              <div  className=" group" onClick={() => navBar(contact)} >
                <RiContactsFill />Contact
              </div>
            </li>
            <li className="mr-2 nactive" ref={address} >
              <div  className="  group" onClick={() => navBar(address)}>
                <MdLocationOn />address
              </div>
            </li>
          </ul>
        </div>
        {/* upper navbar end */}
        <div className="contentProfile center" ref={content}>

          {/* profile section start */}
          <div className=" w-full ">
          <div className="img">
              <Image src={"/user.jpeg"} width={200} height={200} className="h-full" />
            </div>
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 capitalize">
              {data.studentName}
            </h2>

            <p className="mb-3 font-normal text-gray-500 ">
              <span className="text-gray-700">Session</span> : {data.AddmissionSession}
            </p>
            <p className="mb-3 font-normal text-gray-500 ">
              <span className="text-gray-700" >Course</span> : {data.Course}
              <span className="ml-5"><span className="text-gray-700">Batch</span> : {data.batch}</span>
            </p>
            <p className=" mb-3 font-normal text-gray-500 space-x-3 ">
              <span><span className="text-gray-700">Father Name</span> : {data.perents.FatherName}</span>
              <br className="block md:hidden" />
              <span > <span className="text-gray-700 ">Mob. No.</span> : {data.perents.FatherMobileNumber}</span>
            </p>
            <p className="mb-3 font-normal text-gray-5d00">
              <span className="text-gray-700 text-left ">Address</span> <br />
              <span className="text-gray-700">House No.</span> : {data.Address.HouseNo}
              <span className="ml-5"> <span className="text-gray-700">Street</span> : {data.Address.street}</span>
              <br className="block md:hidden" />
              <span className="ml-5"> <span className="text-gray-700">Area</span> : {data.Address.area}</span>
            </p>
          </div>
          {/* profile section end */}

          {/* contact section start */}
          <div className="text-left w-full ">
            <div className="img">
              <Image src={"/user.jpeg"} width={200} height={200} className="h-full" />
            </div>
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 capitalize">
              {data.studentName}
            </h2>

            <p className="mb-3 font-normal text-gray-500 ">
              <span className="text-gray-700">Session</span> : {data.AddmissionSession}
            </p>
            <p className="mb-3 font-normal text-gray-500 ">
              <span className="text-gray-700" >Course</span> : {data.Course}
              <span className="ml-5"><span className="text-gray-700">Batch</span> : {data.batch}</span>
            </p>
            <p className=" mb-3 font-normal text-gray-500 space-x-3 ">
              <span><span className="text-gray-700">Father Name</span> : {data.perents.FatherName}</span>

              <span > <span className="text-gray-700 ">Mob. No.</span> : {data.perents.FatherMobileNumber}</span>
            </p>
            <p className="mb-3 font-normal text-gray-500">
              <span className="text-gray-700 text-left ">Address</span> <br />
              <span className="text-gray-700">House No.</span> : {data.Address.HouseNo}
              <span className="ml-5"> <span className="text-gray-700">Street</span> : {data.Address.street}</span>

              <span className="ml-5"> <span className="text-gray-700">Area</span> : {data.Address.area}</span>
            </p>
          </div>
          {/* contact section end */}

          {/* address section start */}
          <div className="w-full" >
          <div className="img">
              <Image src={"/user.jpeg"} width={200} height={200} className="h-full" />
            </div>
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 capitalize">
              Address
            </h2>

            <p className="mb-3 font-normal text-gray-500 ">
              <span className="text-gray-700">Session</span> : {data.AddmissionSession}
            </p>
            <p className="mb-3 font-normal text-gray-500 ">
              <span className="text-gray-700" >Course</span> : {data.Course}
              <span className="ml-5"><span className="text-gray-700">Batch</span> : {data.batch}</span>
            </p>
            <p className=" mb-3 font-normal text-gray-500 space-x-3 ">
              <span><span className="text-gray-700">Father Name</span> : {data.perents.FatherName}</span>
              <br className="block md:hidden" />
              <span > <span className="text-gray-700 ">Mob. No.</span> : {data.perents.FatherMobileNumber}</span>
            </p>
            <p className="mb-3 font-normal text-gray-5d00">
              <span className="text-gray-700 text-left ">Address</span> <br />
              <span className="text-gray-700">House No.</span> : {data.Address.HouseNo}
              <span className="ml-5"> <span className="text-gray-700">Street</span> : {data.Address.street}</span>
              <br className="block md:hidden" />
              <span className="ml-5"> <span className="text-gray-700">Area</span> : {data.Address.area}</span>
            </p>
          </div>
          {/* address section end */}

        </div>

      </div>
    </div>

  );
};

export default Profile;
