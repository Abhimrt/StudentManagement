"use client"
import React,{ useEffect, useState } from "react";
import { Chart } from "chart.js";
  
/*
    data to be shared
    ResultData=[
        {
            test:"1",    // Test count 
            marks:"85"   // Total marks  percentage in each test
        }
    ]
*/

const Progress = ({data}) => {

  const testCount = [];
  const marks = [];

  useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        
        {
          data.map((key,id) => (
            testCount.push(key.test),
            marks.push(key.marks)
          ))
        }

      
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: testCount,
                datasets: [{
                    data: marks,
                    label: "Student Progress",
                    borderColor: "rgb(62,149,205)",
                    backgroundColor: "rgb(62,149,205,0.1)",
                }
                ]
            },
            options: {
                scales: {
                   yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
                }
            }
        });
    }, [])

  return (<>
            {/* Filled line chart */}
            <div className="w-full md:w-1/2  p-5">
                <div className=' md:h-auto bg-slate-200 border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
                    <canvas id='myChart'></canvas>
                </div>
            </div>
        </>
    
  )
}

export default Progress;







