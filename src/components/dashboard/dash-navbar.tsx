import React from 'react';
import type { FC } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { AppBar, Box, Menu, MenuItem, Container, IconButton, Link, Toolbar } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Logo } from '../logo';
import { styled } from '@mui/material/styles';

interface MainNavbarProps {
  onOpenSidebar?: () => void;
}

const teta = () => {
  console.log('teta')
}

const MainSidebarLink = styled(Link)(
  ({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    display: 'block',
    padding: theme.spacing(1.5),
    '&:hover': {
      backgroundColor: theme.palette.action.hover
    }
  })
);

export const MainNavbar: FC<MainNavbarProps> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: 'background.default',
        borderBottomColor: 'divider',
        borderBottomStyle: 'solid',
        borderBottomWidth: 0,
        color: 'text.secondary'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ minHeight: 64 }}
        >
          <NextLink
            href="/"
            passHref
          >
            <a>
              <Logo
                sx={{
                  display: {
                    md: 'inline',
                    xs: 'inline'
                  },
                  height: 60,
                  width: 100
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
            <AccountCircle />
          </IconButton>
          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>My cuenta</MenuItem>
                <MenuItem onClick={handleClose}>Seguridad</MenuItem>
                <MenuItem onClick={handleClose}>Cuentas bancarias</MenuItem>
                <MenuItem onClick={handleClose}>Validación de datos</MenuItem>
                <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>
              </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

MainNavbar.propTypes = {
  onOpenSidebar: PropTypes.func
};
