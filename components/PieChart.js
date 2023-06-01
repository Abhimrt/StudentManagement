"use client";
import React, { useEffect } from "react";
import { Chart } from "chart.js";

const PieChart = ({ data, label }) => {
  useEffect(() => {
    var ctx = document.getElementById("pieChart").getContext("2d");

    var pieChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: [label],
        datasets: [
          {
            data: [data, 100 - data],
            backgroundColor: ["green", ""],
            hoverBackgroundColor: ["green", ""],
          },
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
      <div className="w-full md:w-1/2  p-5">
        <div className=" ">
          <canvas id="pieChart" className=""></canvas>
        </div>
      </div>
    </>
  );
};

export default PieChart;
