import React from "react";
import type { FC } from "react";
import PropTypes from "prop-types";
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
    Drawer,
    Button,

} from "@mui/material";
import { Logo } from "../logo";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "../../store/index";
import Link from "next/link";
import { openLogoutModal } from "src/slices/logout-modal-slice";

interface LoggedNavbarDesktopProps {
    onOpenUserMenu?: () => void;
    onClose?: () => void;
    open?: boolean
}

export const LoggedNavbarDesktop: FC<LoggedNavbarDesktopProps> = (props) => {
    const { onOpenUserMenu, onClose, open } = props;
    const { userData } = useSelector((state) => state.user);
    const { user } = userData;

    const dispatch = useDispatch();
    const handleOpenLogoutModal = () => {
        dispatch(openLogoutModal());
    };

    return (
        <AppBar
            elevation={0}
            sx={{
                backgroundColor: 'background.default',
                borderBottomColor: 'divider',
                borderBottomStyle: 'solid',
                borderBottomWidth: 0,
                color: 'text.secondary',
            }}
        >

            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{ minHeight: 64 }}
                >
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
                    <Button
                        onClick={onOpenUserMenu}
                    >
                        <Avatar />
                    </Button>

                    <Drawer
                        anchor='top'
                        open={open}
                        onClose={onClose}
                        PaperProps={{
                            sx: {
                                width: '20%',
                                backgroundColor: 'background.default',
                                marginTop: "4rem",
                                height: "20%",
                                marginLeft: "80%"
                            }
                        }}
                        sx={{
                            zIndex: (theme) => theme.zIndex.appBar + 100,
                        }}
                        variant="temporary"
                    >
                        <MenuList disabledItemsFocusable>
                            <MenuItem>
                                <ListItemText>
                                    <Typography variant="h6">{user?.full_name}</Typography>
                                    <Typography variant="caption">{user?.email}</Typography>
                                </ListItemText>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <HelpIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Ayuda</ListItemText>
                            </MenuItem>
                            <MenuItem
                                onClick={handleOpenLogoutModal}
                            >
                                <ListItemIcon>
                                    <LogoutIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Cerrar sesión</ListItemText>
                            </MenuItem>
                        </MenuList>
                    </Drawer>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

LoggedNavbarDesktop.propTypes = {
    onOpenUserMenu: PropTypes.func,
    onClose: PropTypes.func,
    open: PropTypes.bool
};
