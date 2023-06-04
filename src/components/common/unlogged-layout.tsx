import { FC, useState } from "react";
import PropTypes from "prop-types";
import { LoggedNavbar } from "./logged-navbar";
import { LoggedNavbarDesktop } from "./logged-navbar-desktop";
import Head from "next/head";
import { ConfirmationLogoutModal } from "../logout";
import { ModalMyInfo } from "../account/mobile/my-data";
import { useDispatch, useSelector } from "src/store";
import { closeLogoutModal } from "src/slices/logout-modal-slice";
import { Container } from "@mui/material";
import { LayoutProps } from "src/types";
import { LayoutRoot } from "./layout-root";
import { MainSidebar } from "../main-sidebar";
import { MainNavbar } from "../main-navbar";
import { Footer } from "../footer";

export const UnloggedLayout: FC<LayoutProps> = ({ children = "CPM", head }) => {
  const { openModal } = useSelector((state) => state.logoutModal);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(closeLogoutModal());
  };

  const [openUserMenu, setOpenUserMenu] = useState<boolean>(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleOpenSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <LayoutRoot>
      <Head>
        <title>{head}</title>
      </Head>
      <LoggedNavbarDesktop
        onClose={(): void => setOpenUserMenu(false)}
        onOpenUserMenu={handleOpenSideBar}
        open={openUserMenu}
      />
      <MainSidebar
        onClose={(): void => setIsSidebarOpen(false)}
        open={isSidebarOpen}
      />
      <MainNavbar onOpenSidebar={handleOpenSideBar} />
      <LoggedNavbar />
      <Container maxWidth="xl" sx={{ mt: 2, mb: 8 }}>
        {children}
      </Container>
      <ModalMyInfo open={openModal} handleClose={handleCloseModal}>
        <ConfirmationLogoutModal handleCloseModal={handleCloseModal} />
      </ModalMyInfo>
      <Footer />
    </LayoutRoot>
  );
};

UnloggedLayout.propTypes = {
  children: PropTypes.node,
};
