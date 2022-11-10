import { useTheme } from "@mui/material/styles";
import type { ApexOptions } from "apexcharts";
import { FC } from "react";
import { Chart } from "./chart";

export const LineChart: FC = () => {
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: ["#0F3"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      show: false,
    },
    stroke: {
      width: 3,
    },
    theme: {
      mode: theme.palette.mode,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  };

  const chartSeries = [{ data: [30, 40, 60, 40, 30, 50] }];

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type="bar"
      width={180}
      height={90}
    />
  );
};
