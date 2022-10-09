import { Grid } from "@mui/material";
import React from "react";
import { MyAccountNotification } from "../MyAccountNotification";
import { AccountLogout } from "./account-logout";
import { FormChangePassword } from "./form-change-password";
import { LoginHistory } from "./login-history";

export const TabSecurity = () => {
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justifyContent="center"
      alignItems="stretch"
    >
      <MyAccountNotification showSuccess showError currentTab="security" />
      <FormChangePassword />
      <LoginHistory />
      <AccountLogout />
    </Grid>
  );
};
