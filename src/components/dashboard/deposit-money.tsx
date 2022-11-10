import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { MaterialUISwitch } from "../widgets/toggle";
import Stack from "@mui/material/Stack";

export const DepositMoney = () => {
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <Card elevation={0} style={{ background: "rgba(0,0,0,0)" }}>
        <CardHeader
          title="Dinero disponible en cuenta"
          style={{ paddingTop: 0 }}
        />
        <CardContent
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            background: theme.palette.background.paper,
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4">215,10 USDT</Typography>
            <MaterialUISwitch />
          </Stack>
        </CardContent>
        <CardActions
          style={{
            background: theme.palette.background.paper,
            borderTop: `1px solid ${theme.palette.divider}`,
            paddingTop: 5,
            paddingLeft: 5,
          }}
        >
          <Button endIcon={<ArrowForwardIcon />}>Ingresar dinero</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
