"use client"
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Tue',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Wed',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Thur',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Fri',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Sat',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Sun',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div className="bg-gray p-3 rounded-lg">
        <p className="text-lg">{label}</p>
        <p className={"text-pink"}><span>Visit:</span> {payload[0].value}</p>
        <p className={"text-success"}><span>Click:</span> {payload[1].value}</p>
      </div>
    );
  }

  return null;
}

const Chart = () => {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip/>} />
        <Legend />
        <Line type="monotone" dataKey="pv" name={"visit"} stroke="#8884d8" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="uv" name={"click"} stroke="#82ca9d" strokeDasharray="3 4 5 2" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart