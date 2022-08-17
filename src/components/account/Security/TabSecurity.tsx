import { Grid } from "@mui/material";
import React from "react";
import { FormChangePassword } from "./FormChangePassword";

export const TabSecurity = () => {
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justifyContent="center"
      alignItems="stretch"
    >
      <FormChangePassword />
    </Grid>
  );
};
