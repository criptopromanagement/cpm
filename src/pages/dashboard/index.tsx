import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Balance } from "src/components/dashboard/dash-balance";
import { AuthGuard } from "src/components/authentication/auth-guard";
import type { NextPage } from "next";
import { LoggedLayout } from "src/components/common";
import { useSelector } from "src/store";

const Dashboard: NextPage = () => {
  const { userData } = useSelector((state) => state.user);
  const { user } = userData;
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
