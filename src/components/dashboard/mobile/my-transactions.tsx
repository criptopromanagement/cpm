import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import React, { FC } from "react";
import { useDispatch, useSelector } from "src/store";
import { Transactions } from "./transactions";

export const MyTransactions: FC = () => {
  const { transactions, loading } = useSelector((state) => state.transactions);

  return (
    <Grid item xs={12} md={12} sm={12} lg={12}>
      <Card elevation={0} style={{ background: "rgba(0,0,0,0)" }}>
        <CardHeader title="Mis Movimientos" />
        <CardContent style={{ padding: 0 }}>
          <Transactions transactions={transactions} showLoader={loading} />
        </CardContent>
      </Card>
    </Grid>
  );
};
