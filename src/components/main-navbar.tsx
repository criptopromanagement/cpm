import type { FC } from "react";
import PropTypes from "prop-types";
import NextLink from 'next/link';
import { AppBar, Box, Button, Container, IconButton, Link, Toolbar } from '@mui/material';
import { Menu as MenuIcon } from '../icons/menu';
import { Logo } from './logo';

interface MainNavbarProps {
  onOpenSidebar?: () => void;
}

export const MainNavbar: FC<MainNavbarProps> = (props) => {
  const { onOpenSidebar } = props;
  return (

    <AppBar
      elevation={0}
      sx={{
        border: '0px solid #1c1c1c',
        backgroundColor: 'background.default',
        borderBottomColor: 'divider',
        borderBottomStyle: 'solid',
        borderBottomWidth: 0,
        color: 'text.secondary',
        paddingLeft: '12px',
        paddingRight: '12px'
      }}
    >
      <Container maxWidth="xl">
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
            onClick={onOpenSidebar}
            sx={{
              marginRight: -1.5,
              display: {
                md: 'none',
              }
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Box
            sx={{
              alignItems: 'center',
              display: {
                md: 'flex',
                xs: 'none'
              }
            }}
          >
            <NextLink
              href="/indice"
              passHref
            >
              <Link
                color="textSecondary"
                underline="none"
                variant="subtitle2"

              >
                Índice
              </Link>
            </NextLink>

            <NextLink
              href="/blog"
              passHref
            >
              <Link
                color="textSecondary"
                sx={{ ml: 2 }}
                underline="none"
                variant="subtitle2"
              >
                Blog
              </Link>
            </NextLink>
            <NextLink
              href="/faqs"
              passHref
            >
              <Link
                color="textSecondary"
                component="a"
                sx={{ ml: 2 }}
                underline="none"
                variant="subtitle2"
              >
                FAQs
              </Link>
            </NextLink>
            <NextLink
              href="/terminos"
              passHref
            >
              <Link
                color="textSecondary"
                component="a"
                sx={{ ml: 2 }}
                underline="none"
                variant="subtitle2"
              >
                Términos
              </Link>
            </NextLink>
            <NextLink
              href="/contacto"
              passHref
            >
              <Link
                color="textSecondary"
                component="a"
                sx={{ ml: 2 }}
                underline="none"
                variant="subtitle2"
              >
                Contacto
              </Link>
            </NextLink>
            <Button
              component="a"
              href="/login"
              size="medium"
              sx={{ ml: 2 }}
              variant="contained"
            >
              Ingresar
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

MainNavbar.propTypes = {
  onOpenSidebar: PropTypes.func
};
