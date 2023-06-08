"use client";
import React, { useEffect } from "react";
import { Chart } from "chart.js";
import Heading from "./Heading";

const PieChart = ({ data, label }) => {
  useEffect(() => {
    var ctx = document.getElementById(label).getContext("2d");

    var pieChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: [label],
        datasets: [
          {
            data: [data, 100 - data],
            backgroundColor: ["rgb(87, 184, 255)", "#bababa"],
            hoverBackgroundColor: ["rgb(33, 118, 174)", ""],
          }
        ],
      },
      options: {
        plugins: {
          datalabels: {
          },
        },
      },
    });
  }, []);
  return (
    <>
      {/* Filled Pie chart */}
      <div className=" w-full  ">
        <div className=" component">
          <canvas id={label} className="">
          </canvas>
          <Heading heading={label +" "+data+"%"} />
        </div>
      </div>
    </>
  );
};

export default PieChart;
