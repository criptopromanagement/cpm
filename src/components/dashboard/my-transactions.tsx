import { Card, CardContent, CardHeader, Grid, useTheme } from "@mui/material";
import React, { FC } from "react";
import { Transaction } from "../../types";
import { Transactions } from "./transactions";

interface Props {
  transactions: Transaction[];
}
export const MyTransactions: FC<Props> = ({ transactions }) => {
  return (
    <Grid item xs={12} md={12} sm={12} lg={12}>
      <Card elevation={0} style={{ background: "rgba(0,0,0,0)" }}>
        <CardHeader title="Mis Movimientos" />
        <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
          <Transactions transactions={transactions} />
        </CardContent>
      </Card>
    </Grid>
  );
};
