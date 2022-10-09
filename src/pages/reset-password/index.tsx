import { Box, Container, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import React from "react";
import { MyAccountNotification } from "src/components/account";
import { FormChangePassword } from "src/components/account/Security";
import { MainLayout } from "src/components/main-layout";
import { FormResetPassword } from "src/components/reset-password";
import Router from "next/router";

interface Props {
  resetPasswordToken: string;
}
// /auth/reset-password
const ResetPassword: NextPage<Props> = ({ resetPasswordToken }) => {
  const redirect = () => {
    Router.push("/login");
  };
  return (
    <Box
      component="main"
      sx={{
        py: 10,
      }}
    >
      <Container maxWidth="md">
        <Grid
          container
          spacing={3}
          direction="column"
          justifyContent="center"
          alignItems="stretch"
        >
          <MyAccountNotification showSuccess showError currentTab="security" />
          {resetPasswordToken ? (
            <>
              <Typography variant="h3">
                Reinicia tu contraseña para volver a acceder
              </Typography>

              <FormChangePassword
                token={resetPasswordToken}
                redirect={redirect}
              />
            </>
          ) : (
            <FormResetPassword />
          )}
        </Grid>
      </Container>
    </Box>
  );
};

ResetPassword.getInitialProps = async ({ query }) => {
  const token = query.token?.toString() ?? "";
  return { resetPasswordToken: token };
};
ResetPassword.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ResetPassword;
