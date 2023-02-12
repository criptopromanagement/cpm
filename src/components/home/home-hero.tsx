import type { FC } from "react";
import NextLink from "next/link";
import { Box, Button, Container, Grid, styled, Typography } from "@mui/material";

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    textTransform: "uppercase",
  },
}));

export const HomeHero: FC = (props) => {
  return (
    <Root>
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
      </Box>
      <NextLink 
          href="/dashboard" 
          passHref
        >
          <Button
          sx={{maxWidth:"350px"}}
            component="a" 
            size="large"
            fullWidth 
            variant="contained"
          >
            Invertir
          </Button>
        </NextLink>
        </Container>

    </Grid>
    </Root>

  );
};
