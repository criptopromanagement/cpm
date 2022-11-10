import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { FC } from "react";
import Stack from "@mui/material/Stack";
import { LineChart } from "./line-chart";
import { useSelector } from "src/store";

interface Props {
  handleOpenInvestModal: () => void;
}

export const InvestMoney: FC<Props> = ({ handleOpenInvestModal }) => {
  const { userData } = useSelector((state) => state.user);
  const { user } = userData;
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <Card elevation={0} style={{ background: "rgba(0,0,0,0)" }}>
        <CardHeader
          title="Dinero invertido en fondo"
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
            <Typography variant="h4">
              {user?.balance.invested.toFixed(2)} USDT
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="space-between"
            alignItems="center"
          >
            <Chip
              label={`Ingresos pendientes $${user?.balance.locked.toFixed(2)}`}
              variant="outlined"
              color="primary"
            />
            <LineChart />
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
          <Button
            endIcon={<ArrowForwardIcon />}
            onClick={handleOpenInvestModal}
          >
            Ingresar dinero
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
