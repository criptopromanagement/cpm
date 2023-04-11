import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { getTransactions } from "src/slices/transactions-slice";
import { useDispatch, useSelector } from "src/store";
import { Transactions } from "./transactions";

export const MyTransactions: FC = () => {
  const dispatch = useDispatch();
  const { transactions, loading } = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);
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
