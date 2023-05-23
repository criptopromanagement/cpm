import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Abr",
    CPM: -10,
  },
  {
    name: "May",
    CPM: 20,
  },
  {
    name: "Jun",
    CPM: -20,
  },
  {
    name: "Jul",
    CPM: 0,
  },
  {
    name: "Ago",
    CPM: 10,
  },
  {
    name: "Sep",
    CPM: 30,
  },
  {
    name: "Oct",
    CPM: 10,
  },
  {
    name: "Nov",
    CPM: 0,
  },
  {
    name: "Dic",
    CPM: -20,
  },
  {
    name: "Ene",
    CPM: 22,
  },
  {
    name: "Feb",
    CPM: -10,
  },
  {
    name: "Mar",
    CPM: 10,
  },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="95%" height={400}>
      <LineChart 
        width={500}
        height={300}
        data={data}
        >
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="CPM"
          stroke="#00FF33"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
