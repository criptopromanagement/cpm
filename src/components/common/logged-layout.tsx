import { FC, ReactNode, useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { LoggedNavbar } from "./logged-navbar";
import { LoggedNavbarDesktop } from "./logged-navbar-desktop";
import Head from "next/head";
import { ConfirmationLogoutModal } from "../logout";
import { ModalMyInfo } from "../account/MyData";
import { useDispatch, useSelector } from "src/store";
import { closeLogoutModal } from "src/slices/logout-modal-slice";
interface MainLayoutProps {
  children?: ReactNode;
  head: string;
}

const MainLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100%",
  paddingTop: 64,
}));

export const LoggedLayout: FC<MainLayoutProps> = ({
  children = "CPM",
  head,
}) => {
  const { openModal } = useSelector((state) => state.logoutModal);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(closeLogoutModal());
  };

  const [openUserMenu, setOpenUserMenu] = useState<boolean>(false);

  const handleOpenSideBar = () => {
    setOpenUserMenu(!openUserMenu)
  }

  return (
    <MainLayoutRoot>
      <Head>
        <title>{head}</title>
      </Head>
      <LoggedNavbarDesktop
        onClose={(): void => setOpenUserMenu(false)}
        onOpenUserMenu={handleOpenSideBar}
        open={openUserMenu}
      />
      <LoggedNavbar />
      {children}
      <ModalMyInfo open={openModal} handleClose={handleCloseModal}>
        <ConfirmationLogoutModal handleCloseModal={handleCloseModal} />
      </ModalMyInfo>
    </MainLayoutRoot>
  );
};

LoggedLayout.propTypes = {
  children: PropTypes.node,
};
