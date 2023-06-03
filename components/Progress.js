"use client"
import React, { useEffect, useState } from "react";
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

const Progress = ({ data }) => {

    const testCount = Object.keys(data);
    const marks = [[], [], [], []];

    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');

        {
            Object.values(data).map((key) => {
                if (marks[0].length != key.length / 2) {
                       for(let i=0;i<key.length;i+=2){
                            marks[0].push(key[i]);
                       }
                }
                marks[1].push(parseInt(key[1]))
                marks[2].push(parseInt(key[3]))
                marks[3].push(parseInt(key[5]))
                
            })
        }

        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: testCount,
                datasets: [{
                    data: marks[1],
                    label: marks[0][0],
                    borderColor: "rgb(87, 184, 255)",
                    backgroundColor: "rgb(87, 184, 255,0.1)",
                },
                {
                    data: marks[2],
                    label: marks[0][1],
                    borderColor: "rgb(251, 177, 60)",
                    backgroundColor: "rgb(251, 177, 60,0.1)",
                },
                {
                    data: marks[3],
                    label: marks[0][2],
                    borderColor: "rgb(254, 104, 71)",
                    backgroundColor: "rgb(254, 104, 71,0.1)",
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
        <div className="w-full md:w-1/2  mb-3 p-0 md:p-5">
            <div className=' md:h-auto bg-slate-200 pt-0 rounded-xl  w-full h-fit my-auto  shadow-md'>
                <canvas id='myChart'></canvas>
            </div>
        </div>
    </>

    )
}

export default Progress;







