"use client"
import Image from "next/image";
import React, { useRef, useState } from "react";
import { MdLocationOn } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { RiContactsFill } from "react-icons/ri"
import dynamic from "next/dynamic";


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
      if (e.current.innerText == "Profile") {
        content.current.style.transform = `translateX(0)`
      } else if (e.current.innerText == "Contact") {
        content.current.style.transform = `translateX(-33.3%)`
      } else {
        content.current.style.transform = `translateX(-66.6%)`
      }
    }
  }

  return (
    <div className="w-full self-stretch p-0  text-center profile overflow-hidden" >
      <div className="  bg-slate-200 border h-full border-gray-200 rounded-xl shadow-lg overflow-hidden">

        {/* upper navbar start */}
        <div className="border-b border-slate-300 ">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 ">
            <li className="mr-2 active" ref={profile}>
              <div className=" group " onClick={() => navBar(profile)}>
                <CgProfile />Profile
              </div>
            </li>
            <li className="mr-2 nactive" ref={contact} >
              <div className=" group" onClick={() => navBar(contact)} >
                <RiContactsFill />Contact
              </div>
            </li>
            <li className="mr-2 nactive" ref={address} >
              <div className="  group" onClick={() => navBar(address)}>
                <MdLocationOn />address
              </div>
            </li>
          </ul>
        </div>
        {/* upper navbar end */}

        <div className="contentProfile center box-border" ref={content}>

          {/* profile section start */}
          <div className=" w-1/3 center flex-col md:flex-row box-border p-5">
            <div className="img basis-1/4">
              <Image src={"/user.jpeg"} width={200} height={200} className="h-full w-full" />
            </div>
            <div className="basis-3/4 text-left text-xl pl-5">
                  <h2 className="text-3xl capitalize font-medium">{data.studentName}</h2>
                  <table className="table">
                    <tr>
                      <td>Session:</td>
                      <td>{data.AddmissionSession}</td>
                    </tr>
                    <tr>
                      <td>Email id:</td>
                      <td className="break-all">{data.email}</td>
                    </tr>
                    <tr>
                      <td>Course:</td>
                      <td>{data.Course}</td>
                    </tr>
                    <tr>
                      <td>Branch:</td>
                      <td className="break-all">{data.branch}</td>
                    </tr>
                    <tr>
                      <td>Batch:</td>
                      <td>{data.batch}</td>
                    </tr>
                    <tr>
                      <td>Gender:</td>
                      <td>{data.gender}</td>
                    </tr>
                  </table>
                  <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-2" onClick={() => navBar(contact)}>More Details</button>
            </div>
          </div>
          {/* profile section end */}

          {/* contact section start */}
          <div className=" w-1/3 center flex-col md:flex-row box-border p-5">
            <div className="img basis-1/4">
              <Image src={"/user.jpeg"} width={200} height={200} className="h-full w-full" />
            </div>
            <div className="basis-3/4 text-left text-xl pl-5">
                  <h2 className="text-3xl capitalize font-medium">{data.studentName}</h2>
                  <table className="">
                    <tr>
                      <td>Father Name:</td>
                      <td>{data.parents.FatherName}</td>
                    </tr>
                    <tr>
                      <td>Father Mobile No.:</td>
                      <td className="break-all">{data.parents.FatherMobileNumber}</td>
                    </tr>
                    <tr>
                      <td>Mother Name:</td>
                      <td>{data.parents.MotherName}</td>
                    </tr>
                    <tr>
                      <td>Mother Mobile No.:</td>
                      <td className="break-all">{data.parents.MotherMobileNumber}</td>
                    </tr>
                  </table>
                  <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-2" onClick={() => navBar(address)}>More Details</button>
            </div>
          </div>
          {/* contact section end */}

          {/* address section start */}
          <div className=" w-1/3 center flex-col md:flex-row box-border p-5">
            <div className="img basis-1/4">
              <Image src={"/user.jpeg"} width={200} height={200} className="h-full w-full" />
            </div>
            <div className="basis-3/4 text-left text-xl pl-5">
                  <h2 className="text-3xl capitalize font-medium">{data.studentName}</h2>
                  <h1 className="text-2xl capitalize font-medium text-gray-700">Address</h1>
                  <table className=" ">
                    <tr>
                      <td>House No.:</td>
                      <td>{data.Address.HouseNo}</td>
                    </tr>
                    <tr>
                      <td>Street:</td>
                      <td className="break-all">{data.Address.street}</td>
                    </tr>
                    <tr>
                      <td>Area:</td>
                      <td>{data.Address.area}</td>
                    </tr>
                  </table>
                  <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-2" onClick={() => navBar(profile)}>Profile</button>
            </div>
          </div>
          {/* address section end */}

        </div>

      </div>
    </div>

  );
};

export default dynamic (() => Promise.resolve(Profile), {ssr: false})

