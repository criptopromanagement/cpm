import React, { useEffect } from "react";
import { AuthGuard } from "src/components/authentication/auth-guard";
import type { NextPage } from "next";
import { LoggedLayout } from "src/components/common";
import { useDispatch, useSelector } from "src/store";
import { MobileDashboard } from "src/components/dashboard/mobile";
import { DesktopDashboard } from "src/components/dashboard/desktop";
import { getTransactions } from "src/slices/transactions-slice";

const Dashboard: NextPage = () => {
  const dispatch = useDispatch();
  const { user, mobile } = useSelector((state) => state);
  const { isMobile } = mobile;
  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return isMobile ? <MobileDashboard /> : <DesktopDashboard />;
};
Dashboard.getLayout = (page) => (
  <AuthGuard>
    <LoggedLayout head="Dashboard | CPM">{page}</LoggedLayout>
  </AuthGuard>
);

export default Dashboard;
