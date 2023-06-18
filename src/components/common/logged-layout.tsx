import { FC, ReactNode, useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { LoggedNavbar } from "./logged-navbar";
import { LoggedNavbarDesktop } from "./logged-navbar-desktop";
import Head from "next/head";
import { ConfirmationLogoutModal } from "../logout";
import { ModalMyInfo } from "../account/mobile/my-data";
import { useDispatch, useSelector } from "src/store";
import { closeLogoutModal } from "src/slices/logout-modal-slice";
import { Container, Grid } from "@mui/material";
import { LayoutProps } from "src/types";
import { LeftBar } from "./left-bar";
import { ModalIsVerified } from "../verified";
import { Stepper } from "../account/validation/stepper";

const MainLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100%",
  paddingTop: 64,
}));

export const LoggedLayout: FC<LayoutProps> = ({
  children = "CPM",
  head,
  initVerification = "0",
}) => {
  const { openModal } = useSelector((state) => state.logoutModal);
  const { isMobile } = useSelector((state) => state.mobile);
  const [openUserMenu, setOpenUserMenu] = useState<boolean>(false);
  const [openVerification, setOpenVerification] = useState(
    initVerification === "1"
  );
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(closeLogoutModal());
  };

  const handleCloseVerification = () => {
    setOpenVerification(false);
  };
  const handleOpenSideBar = () => {
    setOpenUserMenu(!openUserMenu);
  };

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
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          {!isMobile && (
            <Grid
              item
              md={3}
              lg={2}
              container
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <LeftBar showUser showIcons />
            </Grid>
          )}
          <Grid
            item
            md={9}
            lg={10}
            container
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            {children}
          </Grid>
        </Grid>
      </Container>
      <ModalMyInfo open={openModal} handleClose={handleCloseModal}>
        <ConfirmationLogoutModal handleCloseModal={handleCloseModal} />
      </ModalMyInfo>
      <ModalIsVerified
        open={openVerification}
        handleClose={handleCloseVerification}
      />
    </MainLayoutRoot>
  );
};
