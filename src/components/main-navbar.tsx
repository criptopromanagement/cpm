import { FC } from 'react';
import NextLink from 'next/link';
import { AppBar, Box, Container, Drawer, IconButton, Link, Toolbar, Grid, Stack } from '@mui/material';
import { MenuIcon } from './menu-icon';
import { Logo } from './logo';
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { styled } from "@mui/material/styles";

interface MainNavbarProps {
  handleOpenSideBar?: () => void;
  open: boolean
}


const LinkWrapper = styled("a")({
  textDecoration: "none",
  "& a:hover": {
    color: "#00FF33"
  }

});


export const MainNavbar: FC<MainNavbarProps> = (props) => {
  const { handleOpenSideBar, open } = props;



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
            onClick={handleOpenSideBar}

            sx={{
              marginRight: -1.5,
            }}
          >
            <MenuIcon
              open={open}
            />
          </IconButton>

          <Drawer
            anchor='right'
            open={open}
            PaperProps={{
              sx: {
                width: '100%',
                backgroundColor: 'background.default',
                marginTop: "4rem"
              }
            }}
            variant="temporary"
          >
            <Grid>
              <Stack
                spacing={2}
                marginLeft={3}
              >

                <NextLink
                  href="/packs"
                  passHref
                >
                  <LinkWrapper>
                    <Link
                      color="textPrimary"
                      underline="none"
                    >
                      Índices
                    </Link>
                  </LinkWrapper>
                </NextLink>

                <NextLink
                  href="/blog"
                  passHref
                >
                  <LinkWrapper>
                    <Link
                      color="textPrimary"
                      underline="none"
                    >
                      Blog
                    </Link>
                  </LinkWrapper>
                </NextLink>

                <NextLink
                  href="/contacto"
                  passHref
                >
                  <LinkWrapper>
                    <Link
                      color="textPrimary"
                      underline="none"
                    >
                      Contacto
                    </Link>
                  </LinkWrapper>
                </NextLink>

                <NextLink
                  href="/ayuda"
                  passHref
                >
                  <LinkWrapper>
                    <Link
                      color="textPrimary"
                      underline="none"

                    >
                      Ayuda
                    </Link>
                  </LinkWrapper>
                </NextLink>

                <NextLink
                  href="/terminos"
                  passHref
                >
                  <LinkWrapper>
                    <Link
                      color="textPrimary"
                      underline="none"

                    >
                      Términos
                    </Link>
                  </LinkWrapper>
                </NextLink>

              </Stack>
            </Grid>
            <Grid>
              <Stack
                direction="row"
                spacing={3}
                mt={3}
                marginLeft={2}
              >
                <Link href="www.instagram.com/cpm.app/" color="inherit">
                  <InstagramIcon fontSize="large" />
                </Link>
                <Link
                  href="www.linkedin.com/company/crypto-pro-management"
                  color="inherit"
                >
                  <LinkedInIcon fontSize="large" />
                </Link>
                <Link href="www.facebook.com/cpm.app" color="inherit">
                  <FacebookIcon fontSize="large" />
                </Link>
              </Stack>
            </Grid>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

