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
import { Notification } from "src/components/common/notification";

const Dashboard: NextPage = () => {
  const { userData } = useSelector((state) => state.user);
  const [openDepositModal, setOpenDepositModal] = useState<boolean>(false);
  const [openInvestModal, setOpenInvestModal] = useState<boolean>(false);
  const { user } = userData;

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
                <Notification currentPage="dashboard" showSuccess />
              </Grid>
              {/* <Balance /> */}
              <DepositMoney handleOpenDepositModal={handleOpenDepositModal} />
              <InvestMoney handleOpenInvestModal={handleOpenInvestModal} />
              <MyTransactions />
              <CommonModal
                open={openInvestModal}
                handleClose={handleCloseInvestModal}
              >
                <InvestMoneyForm closeModal={handleCloseInvestModal} />
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
