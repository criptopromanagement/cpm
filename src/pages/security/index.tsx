import { AuthGuard } from "src/components/authentication/auth-guard";
import type { NextPage } from "next";
import { LoggedLayout } from "src/components/common";
import { TabsAccountMobile } from "src/components/account/mobile";
import { useSelector } from "src/store";
import { Grid, Typography } from "@mui/material";
import { DesktopSecurity } from "src/components/account/desktop";

interface Props {
  tab: string;
}
const Security: NextPage<Props> = ({ tab }) => {
  const { isMobile } = useSelector((state) => state.mobile);
  return (
    <Grid container justifyContent="flex-start" spacing={2}>
      <Grid item xs={12} md={12} sm={12} lg={12}>
        <Typography variant="h2">Seguridad</Typography>
      </Grid>
      <Grid container item xs={12} md={12} sm={12} lg={12}>
        {isMobile ? <TabsAccountMobile tab={tab} /> : <DesktopSecurity />}
      </Grid>
    </Grid>
  );
};
Security.getInitialProps = async ({ query }) => {
  const tab: string = query.tab?.toString() ?? "2";
  return { tab };
};

Security.getLayout = (page) => (
  <AuthGuard>
    <LoggedLayout head="Seguridad | CPM">{page}</LoggedLayout>
  </AuthGuard>
);
export default Security;
