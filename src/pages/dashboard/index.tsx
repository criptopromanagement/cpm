import React from "react";
import { AuthGuard } from "src/components/authentication/auth-guard";
import type { NextPage } from "next";
import { LoggedLayout } from "src/components/common";
import { useSelector } from "src/store";
import { MobileDashboard } from "src/components/dashboard/mobile";
import { DesktopDashboard } from "src/components/dashboard/desktop";
import { Container } from "@mui/material";
import { Box } from "@mui/system";

const Dashboard: NextPage = () => {
  const { user, mobile } = useSelector((state) => state);
  const { isMobile } = mobile;

  return isMobile ? <MobileDashboard /> : <DesktopDashboard />
};
Dashboard.getLayout = (page) => (
  <AuthGuard>
    <LoggedLayout head="Dashboard | CPM">{page}</LoggedLayout>
  </AuthGuard>
);

export default Dashboard;
