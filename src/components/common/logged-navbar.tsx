import React from "react";
import type { FC } from "react";
import NextLink from "next/link";
import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  Container,
  IconButton,
  Toolbar,
  MenuList,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Avatar,
} from "@mui/material";
import { Logo } from "../logo";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EditIcon from "@mui/icons-material/Edit";
import HelpIcon from "@mui/icons-material/Help";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "../../store/index";
import Link from "next/link";
import { openLogoutModal } from "src/slices/logout-modal-slice";

export const LoggedNavbar: FC = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const { user } = userData;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenLogoutModal = () => {
    dispatch(openLogoutModal());
  };
  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "background.default",
        borderBottomColor: "divider",
        borderBottomStyle: "solid",
        borderBottomWidth: 0,
        color: "text.secondary",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          <NextLink href="/" passHref>
            <a>
              <Logo
                sx={{
                  display: {
                    md: "inline",
                    xs: "inline",
                  },
                  height: 60,
                  width: 100,
                }}
              />
            </a>
          </NextLink>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            color="primary"
            onClick={handleMenu}
            sx={{
              marginRight: -1.5,
            }}
          >
            <Avatar
              alt={user?.firstname}
              src={user?.avatar}
              sx={{ width: 24, height: 24 }}
            />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuList disabledItemsFocusable>
              <MenuItem>
                <ListItemText>
                  <Typography variant="h5">¡Hola!</Typography>
                </ListItemText>
                <ListItemIcon>
                  <CloseIcon fontSize="small" onClick={handleClose} />
                </ListItemIcon>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Avatar alt={user?.firstname} src={user?.avatar} />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="h6">{user?.full_name}</Typography>
                  <Typography variant="caption">{user?.email}</Typography>
                </ListItemText>
              </MenuItem>
              <Divider />
              <Link href="/account?tab=0">
                <MenuItem>
                  <ListItemIcon>
                    <AccountCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Mis datos</ListItemText>
                </MenuItem>
              </Link>
              <Link href="/account?tab=2">
                <MenuItem>
                  <ListItemIcon>
                    <LockOutlinedIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Seguridad</ListItemText>
                </MenuItem>
              </Link>
              <Link href="/account?tab=1">
                <MenuItem>
                  <ListItemIcon>
                    <AccountBalanceIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Mis cuentas</ListItemText>
                </MenuItem>
              </Link>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <EditIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Blog</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <HelpIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Ayuda</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <CollectionsBookmarkIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Términos & condiciones</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleOpenLogoutModal}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cerrar sesión</ListItemText>
              </MenuItem>
            </MenuList>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};