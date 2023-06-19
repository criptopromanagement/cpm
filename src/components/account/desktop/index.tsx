import { Grid, Typography } from "@mui/material";
import React from "react";
import { FormChangePassword, LoginHistory } from "../mobile/security";
import { MultiFactorAuth } from "../mobile/security/multi-factor-auth";

export const DesktopSecurity = () => {
  return (
    <Grid container item md={12} lg={12} spacing={2}>
      <FormChangePassword />
      <MultiFactorAuth />
      <LoginHistory />
    </Grid>
  );
};
