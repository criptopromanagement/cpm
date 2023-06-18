import React, { useEffect } from "react";
import { AuthGuard } from "src/components/authentication/auth-guard";
import type { NextPage } from "next";
import { LoggedLayout } from "src/components/common";
import { useDispatch, useSelector } from "src/store";
import { MobileDashboard } from "src/components/dashboard/mobile";
import { DesktopDashboard } from "src/components/dashboard/desktop";
import { getTransactions } from "src/slices/transactions-slice";
interface Props {
  initVerification?: string;
}
const Dashboard: NextPage<Props> = () => {
  const dispatch = useDispatch();
  const { user, mobile } = useSelector((state) => state);
  const { isMobile } = mobile;
  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return isMobile ? <MobileDashboard /> : <DesktopDashboard />;
};
Dashboard.getInitialProps = async ({ query }) => {
  const initVerification: string = query?.initVerification?.toString() ?? "0";
  return { initVerification };
};
Dashboard.getLayout = (page) => {
  const initVerification =
    page.props?.children?.props?.initVerification.toString() ?? "0";
  return (
    <AuthGuard>
      <LoggedLayout head="Dashboard | CPM" initVerification={initVerification}>
        {page}
      </LoggedLayout>
    </AuthGuard>
  );
};

export default Dashboard;
