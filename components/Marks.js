"use client";
import React, { useEffect } from "react";
import { Chart } from "chart.js";

const Marks = ({data}) => {
  useEffect(() => {
    var ctx = document.getElementById("barChart").getContext("2d");
    console.log(data[0]);
    var barChartData = {
  labels: [
    "July",
    "August",
    "September",
    "October"
  ],
  datasets: [
    {
      label: "Math",
      backgroundColor: "pink",
      borderColor: "red",
      borderWidth: 1,
      data: [15,20,25,35],
    },
    {
      label: "English",
      backgroundColor: "lightblue",
      borderColor: "blue",
      borderWidth: 1,
      data: [25,30,40,50],
    },
    {
      label: "Science",
      backgroundColor: "lightgreen",
      borderColor: "green",
      borderWidth: 1,
      data: [10,28,49,62],
    }
  ],
};

var chartOptions = {
  responsive: true,
  legend: {
    position: "top",
  },
  title: {
    display: true,
    text: "Student Progress",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

    var barChart = new Chart(ctx, {
      type: "bar",
      data: barChartData,
      options: chartOptions,
    });
  }, []);

  return (
    <div className="w-full md:w-1/2  mb-3 p-0 md:p-5">
      <div className=" md:h-auto bg-slate-200 pt-0 rounded-xl  w-full h-fit my-auto  shadow-md">
        <canvas id="barChart"></canvas>
      </div>
    </div>
  );
};

export default Marks;

