import { AuthGuard } from "src/components/authentication/auth-guard";
import type { NextPage } from "next";
import { LoggedLayout } from "src/components/common";
import { TabsAccountMobile } from "src/components/account/mobile";
import { useSelector } from "src/store";
import { Grid, Typography } from "@mui/material";

interface Props {
  tab: string;
}
const MyAccounts: NextPage<Props> = ({ tab }) => {
  const { isMobile } = useSelector((state) => state.mobile);
  return (
    <Grid container justifyContent="flex-start" spacing={2}>
      <Grid item xs={12} md={12} sm={12} lg={12}>
        <Typography variant="h4">Mis cuentas</Typography>
      </Grid>
      <Grid container item xs={12} md={12} sm={12} lg={12}>
        {isMobile ? <TabsAccountMobile tab={tab} /> : <h1>desktop</h1>}
      </Grid>
    </Grid>
  );
};
MyAccounts.getInitialProps = async ({ query }) => {
  const tab: string = query.tab?.toString() ?? "1";
  return { tab };
};

MyAccounts.getLayout = (page) => (
  <AuthGuard>
    <LoggedLayout head="Mis cuentas | CPM">{page}</LoggedLayout>
  </AuthGuard>
);
export default MyAccounts;
