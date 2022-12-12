import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { AuthGuard } from "src/components/authentication/auth-guard";
import type { NextPage } from "next";
import { CommonModal, LoggedLayout } from "src/components/common";
import { useSelector } from "src/store";
import {
  MyTransactions,
  Balance,
  DepositMoney,
  InvestMoney,
} from "../../components/dashboard";
import { Transaction } from "../../types";
import { DepositMoneyForm, InvestMoneyForm } from "src/components/invest";

const Dashboard: NextPage = () => {
  const { userData } = useSelector((state) => state.user);
  const [openDepositModal, setOpenDepositModal] = useState<boolean>(false);
  const [openInvestModal, setOpenInvestModal] = useState<boolean>(false);
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

  const handleOpenDepositModal = () => setOpenDepositModal(true);
  const handleCloseDepositModal = () => setOpenDepositModal(false);
  const handleOpenInvestModal = () => setOpenInvestModal(true);
  const handleCloseInvestModal = () => setOpenInvestModal(false);
  return (
    <>
      <Box
        component="main"
        sx={{
          py: 4,
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: 4 }}>
            <Grid container justifyContent="flex-start" spacing={2}>
              <Grid item xs={12} md={12} sm={12} lg={12}>
                <Typography variant="h4">
                  ¡Hola {user?.firstname} {user?.lastname}!
                </Typography>
              </Grid>
              {/* <Balance /> */}
              <DepositMoney handleOpenDepositModal={handleOpenDepositModal} />
              <InvestMoney handleOpenInvestModal={handleOpenInvestModal} />
              <MyTransactions transactions={transactions} />
              <CommonModal
                open={openInvestModal}
                handleClose={handleCloseInvestModal}
              >
                <InvestMoneyForm closeModal={() => {}} />
              </CommonModal>
              <CommonModal
                open={openDepositModal}
                handleClose={handleCloseDepositModal}
              >
                <DepositMoneyForm closeModal={() => {}} />
              </CommonModal>
            </Grid>
          </Box>
        </Container>
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
