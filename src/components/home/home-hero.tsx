import type { FC } from "react";
import NextLink from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";

export const HomeHero: FC = (props) => {
  return (
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
          INVERTÍ EN LA INDUSTRIA CRIPTO
        </Typography>
        <Typography 
          align="left" 
          variant="subtitle2" 
          sx={{ py: 1 }}
        >
          ELEGÍ TU PACK PARA INVERTIR DE MANERA PROFESIONAL EN EL MUNDO CRIPTO
        </Typography>
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
    </Box>
  );
};
