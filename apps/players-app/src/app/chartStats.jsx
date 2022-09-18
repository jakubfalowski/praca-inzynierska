import React, { PureComponent, useState } from 'react';
import { playerTabFunction } from './fetchData';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis,Tooltip, Legend } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 }
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 }
];

let playerTab = [];
let jb = 0;

export default function ChartStats(){

  const [on, setOn] = useState(false)

  let test = 0;

  
    playerTabFunction().then((stat) => {
      for(let a = 0; a < 14; a++){
        test = 0;
        for(let i = 0; i < 426; i++){
          test += parseInt(stat[i][a+1])
        }
        test = test/425;
        console.log(a);
        console.log(test)
        if(jb < 14){
          playerTab.push({name:"name", value: test})
          jb++;
        }
      }
    }).then(()=>{
      setOn(true)
    })
    
    console.log(jb+"JB")

  console.log(playerTab)
  
  return (
    <div>
    { on === true &&
      <BarChart
      width={500}
      height={300}
      data={playerTab}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
      {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
    </BarChart>
    }
    </div>
  );
}