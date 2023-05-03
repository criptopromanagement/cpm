import type { FC } from "react";
import type { ApexOptions } from "apexcharts";
import {
  Box,
  Button,
  Card,
  CardActions,
  Grid,
  Typography,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { Chart } from "./chart";

import { MaterialUISwitch } from "../../widgets/toggle";
import { LineChart } from "./line-chart";

const BarChart: FC = () => {
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
    colors: ["#2F3EB1"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      show: false,
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    stroke: {
      width: 0,
    },
    theme: {
      mode: theme.palette.mode,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  };

  const chartSeries = [{ data: [10, 20, 30, 40, 50, 60, 5] }];

  return (
    <Chart options={chartOptions} series={chartSeries} type="bar" width={120} />
  );
};

export const Balance: FC = () => (
  <Grid item xs={12} sm={6} md={4} lg={4}>
    <Card>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          px: 3,
          py: 2,
        }}
      >
        <div>
          <Typography variant="h6">Balance</Typography>
          <Typography sx={{ mt: 1 }} variant="h5">
            $2640,00ARS
          </Typography>
        </div>
        <MaterialUISwitch />
      </Box>
      <CardActions
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          px: 3,
          py: 2,
        }}
      >
        <div>
          <Button
            style={{
              backgroundColor: "#000",
              borderRadius: "50px",
            }}
          >
            +12%
          </Button>
        </div>
        <LineChart />
      </CardActions>
    </Card>
  </Grid>
);
