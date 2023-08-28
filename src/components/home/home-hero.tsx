import type { FC } from "react";
import NextLink from "next/link";
import { Box, Button, Container, Typography, Grid } from "@mui/material";
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

export const HomeHero: FC = (props) => {

  const isMobile = useSelector((state: RootState) => state.mobile.isMobile);

  return (
    <>
      <div>
        {isMobile ? (
          <Box
            sx={{
              pt: 3,
              pb: 3,
            }}
            {...props}
          >
            <Box
              sx={{
                maxWidth: 450,
                width: "100%",
                mx: "auto",
                backgroundColor: 'primary.nav',
              }}
            >
              <Box
                sx={{
                  justifyContent: "flex-end",
                  "& img": {
                    maxWidth: "95%",
                    height: "auto",
                    position: "absolute",
                    top: 215,
                  },
                }}
              >
                <img
                  alt="hero"
                  src="/images/home-heroimg.svg"
                />
              </Box>
            </Box>
            <Container
              maxWidth="md"
            >
              <Typography
                align="left"
                variant="h1"
                letterSpacing="3px"
              >
                Fondos cripto

              </Typography>
              <Typography
                align="left"
                variant="h1"
                paddingBottom={2}
                letterSpacing="3px"
              >
                indexados

              </Typography>
              <Typography
                align="left"
                variant="subtitle2"
                sx={{ py: 0 }}
              >
                Estrategia automatizada
              </Typography>
              <Typography
                align="left"
                variant="subtitle2"
                sx={{ paddingBottom: 25, paddingTop: 1 }}
              >
                Exposición diversificada
              </Typography>
              <NextLink
                href="/dashboard"
                passHref
              >
                <Box textAlign="center">
                  <Button
                    sx={{ maxWidth: "350px", marginTop: 6 }}
                    component="a"
                    size="large"
                    variant="contained"
                  >
                    Invertir
                  </Button>
                </Box>
              </NextLink>
            </Container>
          </Box>
        ) : (
          // desktop
          <div style={{ padding: 80 }}>
            <Grid item
              xs={12}
              sm={12}
              md={6}
              lg={6}>
              <Container
                maxWidth="md"
                sx={{
                  alignItems: "left",
                  display: "flex",
                  flexDirection: "column",
                  padding: 5,
                }}
              >
                <Typography
                  align="left"
                  variant="h1"
                >
                  Fondos cripto
                </Typography>
                <Typography
                  align="left"
                  variant="h1"
                  paddingBottom={2}
                >
                  indexados
                </Typography>
                <Typography
                  align="left"
                  variant="subtitle1"
                  sx={{ py: 1 }}
                >
                  Estrategia automatizada
                </Typography>
                <Typography
                  paddingTop={0}
                  align="left"
                  variant="subtitle1"
                  sx={{ paddingTop: 0 }}
                >
                  Exposición diversificada
                </Typography>
              </Container>


              <Container
                maxWidth="md"
                sx={{
                  alignItems: "right",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <NextLink
                  href="/dashboard"
                  passHref
                >
                  <Button
                    sx={{ maxWidth: "150px" }}
                    component="a"
                    size="large"
                    fullWidth
                    variant="contained"
                  >
                    Invertir
                  </Button>
                </NextLink>
                <Box
                  sx={{
                    justifyContent: "flex-end",
                    "& img": {
                      height: "auto",
                      position: "absolute",
                      top: 70,
                      left: { md: 600, lg: 350, xl: 900 },
                      right: 150
                    },
                  }}
                >
                  <img
                    alt="hero"
                    src="/images/home-heroimg.svg"
                  />
                </Box>
              </Container>
            </Grid>
          </div>
        )}
      </div>
    </>
  );
};
