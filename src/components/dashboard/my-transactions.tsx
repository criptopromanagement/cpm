import { Card, CardContent, CardHeader, Grid, useTheme } from "@mui/material";
import React, { FC } from "react";
import { Transaction } from "../../types";
import { Transactions } from "./transactions";

interface Props {
  transactions: Transaction[];
}
export const MyTransactions: FC<Props> = ({ transactions }) => {
  return (
    <Grid item md={12} xs={12}>
      <Card elevation={0} style={{background:"rgba(0,0,0,0)"}}>
        <CardHeader title="Mis Movimientos" />
        <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
          <Transactions transactions={transactions} />
        </CardContent>
      </Card>
    </Grid>
  );
};
