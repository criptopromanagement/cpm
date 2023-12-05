import { Grid } from "@mui/material";
import React from "react";
import { MyAccountNotification } from "../../../common/notification/my-account-notification";
import { AccountLogout } from "./account-logout";
import { LoginHistory } from "./login-history";
import { FormResetPassword } from "./form-reset-password";
import { MultiFactorAuth } from "./multi-factor-auth";

export const TabSecurity = () => {
  return (
    <Grid container direction="row" spacing={3}>
      <MyAccountNotification showSuccess showError currentTab="security" />
      <FormResetPassword />
      <MultiFactorAuth />
      <LoginHistory />
      <AccountLogout />
    </Grid>
  );
};
