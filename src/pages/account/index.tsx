import Head from "next/head";
import { Box, Container, Tab, Tabs, Typography, Divider } from "@mui/material";
import { MainNavbar } from "../../components/dashboard/dash-navbar";
import { useEffect, useState } from "react";
import { TabMyInfo } from "../../components/account";
import { AuthGuard } from "src/components/authentication/auth-guard";
import { MyAccountNotification } from "src/components/account/MyAccountNotification";
import type { NextPage } from "next";
import { useSelector } from "src/store";
import { useRouter } from "next/router";

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
      <Head>
        <title>Mi cuenta | CPM</title>
      </Head>
      <MainNavbar />
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
            <MyAccountNotification showSuccess />
            {currentTab === "0" && <TabMyInfo user={user} />}
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

Account.getLayout = (page) => <AuthGuard>{page}</AuthGuard>;
export default Account;
