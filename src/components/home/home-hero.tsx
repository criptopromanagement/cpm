import type { FC } from "react";
import NextLink from "next/link";
import { Box, Button, Container, Typography, useMediaQuery, Grid } from "@mui/material";
export const HomeHero: FC = (props) => {

  const isMobile = useMediaQuery('(max-width:600px)');

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
                  position: "relative",
                  pt: "calc(400 / 450 * 100%)",
                  "& img": {
                    height: "auto",
                    position: "absolute",
                    top: 0,
                    width: "100%",
                  },
                }}
              >
                <img
                  alt="hero"
                  src="/static/home/hero.svg"
                />
              </Box>
            </Box>
            <Container
              maxWidth="md"
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                align="left"
                variant="h1"
              >
                Fondos cripto indexados

              </Typography>
              <Typography
                align="left"
                variant="subtitle2"
                sx={{ py: 1 }}
              >
                Estrategia automatizada
              </Typography>
              <Typography
                align="left"
                variant="subtitle2"
                sx={{ py: 1 }}
              >
                Exposición diversificada
              </Typography>
              <NextLink
                href="/dashboard"
                passHref
              >
                <Button
                  sx={{ maxWidth: "350px" }}
                  component="a"
                  size="large"
                  fullWidth
                  variant="contained"
                >
                  Invertir
                </Button>
              </NextLink>
            </Container>
          </Box>

        ) : (
          // desktop
          <div className="hero">
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
                padding: 20,
              }}
            >
              <Typography
                align="left"
                variant="h1"
              >
                Fondos cripto indexados
              </Typography>
              <Typography
                align="left"
                variant="subtitle2"
                sx={{ py: 1 }}
              >
                Estrategia automatizada
              </Typography>
              <Typography
                align="left"
                variant="subtitle2"
                sx={{ py: 1 }}
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
                  sx={{ maxWidth: "350px" }}
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
                maxWidth: 450,
                width: "100%",
                mx: "auto",
                backgroundColor: 'primary.nav', 
              }}
            >
              <Box
                sx={{
                  justifyContent: "flex-end",
                  pt: "calc(400 / 450 * 100%)",
                  "& img": {
                    height: "auto",
                    position: "absolute",
                    top: 100,
                    left: 700,
                    width: "50%",
                  },
                }}
              >
                <img
                  alt="hero"
                  src="/static/home/hero.svg"
                />
              </Box>
            </Box>


            </Container>



              
          </Grid>
          </div>
        )

        }
      </div>
    </>
  );
};
