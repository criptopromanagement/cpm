import { Grid } from "@mui/material";
import { MyAccountNotification } from "../MyAccountNotification";
import { MyAccounts } from "./my-accounts";

export const TabMyAccount = () => {
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justifyContent="center"
      alignItems="stretch"
    >
      <Grid>
        <MyAccountNotification showError currentTab="my-accounts" />
        <MyAccountNotification showSuccess currentTab="my-accounts" />
      </Grid>
      <MyAccounts />
    </Grid>
  );
};
