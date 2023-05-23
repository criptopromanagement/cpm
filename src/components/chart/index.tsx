import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getPerformance } from "src/slices/performance-slice";
import { RootState, useDispatch } from "src/store";

const Chart = () => {
  const { isLoading, performanceData } = useSelector(
    (state: RootState) => state.performance
  );

  interface ChartData {
    Fecha: string;
    Performance: number;
  }

  const [chartData, setChartData] = useState<ChartData[]>([]);

  const data = chartData.slice(1, 10);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPerformance());
  }, [dispatch]);

  useEffect(() => {
    if (performanceData) {
      const transformedData = performanceData.map((obj) => ({
        Fecha: obj.label.toString(),
        Performance: parseFloat(obj.perform.toFixed(2)),
      }));
      setChartData(transformedData);
    }
  }, [performanceData]);

  return (
    <ResponsiveContainer width="95%" height={200}>
      {isLoading ? (
        <h1>Cargando</h1>
      ) : (
        <LineChart 
          width={200} 
          height={20} 
          data={data}>
          <XAxis dataKey="Fecha" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: "#1C1C1C" }}
            itemStyle={{ color: "#00FF33" }}
          />{" "}
          <Legend />
          <Line
            type="linear"
            dataKey="Performance"
            stroke="#FFF"
            fill="#00FF33"
            activeDot={{ r: 8, fill: "#00FF33" }}
            dot={{ r: 6, fill: "#00FF33" }}
          />
        </LineChart>
      )}
    </ResponsiveContainer>
  );
};

export default Chart;
