import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { AuthGuard } from "src/components/authentication/auth-guard";
import type { NextPage } from "next";
import { LoggedLayout } from "src/components/common";
import { useSelector } from "src/store";
import { MyTransactions, Balance } from "../../components/dashboard";
import { Transaction } from "../../types";

const Dashboard: NextPage = () => {
  const { userData } = useSelector((state) => state.user);
  const { user } = userData;
  const transactions: Transaction[] = [
    {
      id: "0",
      type: "carga",
      date: new Date("2022-04-20"),
      amount: 500.0,
      currency: "$",
      criptoCurrency: "USDT",
    },
    {
      id: "1",
      type: "inversion",
      date: new Date("2022-02-06"),
      amount: 1000.0,
      currency: "$",
      criptoCurrency: "USDT",
    },
    {
      id: "2",
      type: "retiro",
      date: new Date("2022-01-18"),
      amount: 100.0,
      currency: "$",
      criptoCurrency: "USDT",
    },
  ];

  return (
    <>
      <Box
        component="main"
        sx={{
          py: 10,
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: 4 }}>
            <Grid container justifyContent="space-between" spacing={3}>
              <Grid item>
                <Typography variant="h4">
                  ¡Hola {user?.firstname} {user?.lastname}!
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Balance />
        <MyTransactions transactions={transactions} />
      </Box>
    </>
  );
};
Dashboard.getLayout = (page) => (
  <AuthGuard>
    <LoggedLayout head="Dashboard | CPM">{page}</LoggedLayout>
  </AuthGuard>
);

export default Dashboard;
