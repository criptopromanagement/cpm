import React, { FC, useEffect, useState } from "react";
import { Box, Tab, Tabs, Divider, Grid } from "@mui/material";
import { useSelector } from "src/store";
import { useRouter } from "next/router";
import { TabSecurity } from "src/components/account/mobile/security";
import { TabMyInfo } from "./my-data";
import { TabMyAccount } from "./accounts";
interface Props {
  tab: string;
}
export const TabsAccountMobile: FC<Props> = ({ tab }) => {
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
    <Grid item xs={12} sm={12}>
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
    </Grid>
  );
};
