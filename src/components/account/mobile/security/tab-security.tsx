import { Grid } from "@mui/material";
import React from "react";
import { MyAccountNotification } from "../../../common/notification/my-account-notification";
import { AccountLogout } from "./account-logout";
import { FormChangePassword } from "./form-change-password";
import { LoginHistory } from "./login-history";
import { MultiFactorAuth } from "./multi-factor-auth";

export const TabSecurity = () => {
  return (
    <Grid container direction="row" spacing={3}>
      <MyAccountNotification showSuccess showError currentTab="security" />
      <FormChangePassword />
      <MultiFactorAuth />
      <LoginHistory />
      <AccountLogout />
    </Grid>
  );
};
