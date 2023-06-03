"use client";
import React, { useEffect } from "react";
import { Chart } from "chart.js";

const PieChart = ({ data, label }) => {
  useEffect(() => {
    var ctx = document.getElementById(label).getContext("2d");

    var pieChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: [label,""],
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
            display: true,
            align: "up",
            backgroundColor: "red",
            borderRadius: 3,
            font: {
              size: 18,
            },
          },
        },
      },
    });
  }, []);
  return (
    <>
      {/* Filled Pie chart */}
      <div className="w-full  md:w-1/3  p-5">
        <div className=" ">
          <canvas id={label} className=""></canvas>
        </div>
      </div>
    </>
  );
};

export default PieChart;
