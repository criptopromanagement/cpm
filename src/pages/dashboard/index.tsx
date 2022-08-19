import React from "react";
import Head from "next/head";
import { Box, Container, Grid, Typography } from "@mui/material";
import { MainNavbar } from "../../components/dashboard/dash-navbar";
import { Balance } from "src/components/dashboard/dash-balance";
import { AuthGuard } from "src/components/authentication/auth-guard";
import type { NextPage } from "next";
import { useSelector } from "src/store";

const Dashboard: NextPage = () => {
  const { userData } = useSelector((state) => state.user);
  const { user } = userData;
  return (
    <>
      <Head>
        <title>Dashboard | CPM</title>
      </Head>
      <MainNavbar />
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
                  ¡Hola {user.firstname} {user.lastname}!
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Balance />
      </Box>
    </>
  );
};
Dashboard.getLayout = (page) => <AuthGuard>{page}</AuthGuard>;

export default Dashboard;
