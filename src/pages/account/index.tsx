import { Box, Container, Tab, Tabs, Typography, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { TabMyInfo } from "../../components/account/MyData";
import { AuthGuard } from "src/components/authentication/auth-guard";
import { TabSecurity } from "../../components/account/Security";
import { TabMyAccount } from "../../components/account/accounts";
import { MyAccountNotification } from "src/components/account/MyAccountNotification";
import type { NextPage } from "next";
import { useSelector } from "src/store";
import { useRouter } from "next/router";
import { LoggedLayout } from "src/components/common";

interface Props {
  tab: string;
}
const Account: NextPage<Props> = ({ tab }) => {
  const router = useRouter();
  const { pathname, query } = router;

  const [currentTab, setCurrentTab] = useState<string>(tab);

  const { userData } = useSelector((state) => state.user);
  const { user } = userData;

  const tabs = [
    { label: "Mis datos", value: "0" },
    { label: "Mis cuentas", value: "1" },
    { label: "Seguridad", value: "2" },
  ];

  const handleChangeTabs = (event: any, newValue: string) => {
    setCurrentTab(newValue);
    router.push({
      pathname,
      query: {
        ...query,
        tab: newValue,
      },
    });
  };

  useEffect(() => {
    setCurrentTab(tab);
  }, [tab]);

  return (
    <>
      <Box
        component="main"
        sx={{
          py: 10,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4">Mi cuenta</Typography>
          <Tabs
            indicatorColor="primary"
            onChange={handleChangeTabs}
            scrollButtons="auto"
            textColor="primary"
            value={currentTab}
            variant="scrollable"
            sx={{ mt: 3 }}
          >
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
          <Divider sx={{ mb: 3 }} />
          <Box sx={{ mt: 4 }}>
            {currentTab === "0" && <TabMyInfo user={user} />}
            {currentTab === "1" && <TabMyAccount />}
            {currentTab === "2" && <TabSecurity />}
          </Box>
        </Container>
      </Box>
    </>
  );
};

Account.getInitialProps = async ({ query }) => {
  const tab: string = query.tab?.toString() ?? "0";
  return { tab };
};

Account.getLayout = (page) => (
  <AuthGuard>
    <LoggedLayout head="Mi cuenta | CPM">{page}</LoggedLayout>
  </AuthGuard>
);
export default Account;
