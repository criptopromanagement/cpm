import Head from "next/head";
import { Box, Container, Tab, Tabs, Typography, Divider } from "@mui/material";
import { MainNavbar } from "../../components/dashboard/dash-navbar";
import { useState } from "react";
import { TabMyInfo } from "../../components/account";

const Account = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const tabs = [
    { label: "Mis datos", value: 0 },
    { label: "Mis cuentas", value: 1 },
    { label: "seguridad", value: 2 },
  ];

  const handleChangeTabs = (event: any, newValue: number) => {
    setCurrentTab(newValue);
  };
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
          <Box sx={{ mt: 4 }}>{currentTab === 0 && <TabMyInfo />}</Box>
        </Container>
      </Box>
    </>
  );
};

export default Account;
