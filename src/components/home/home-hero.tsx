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
          INVERTÍ EN CRIPTO
        </Typography>
        <Typography 
          align="left" 
          variant="subtitle2" 
          sx={{ py: 1 }}
        >
          La industria cripto ofrece miles de oportunidades. Accedé de forma simple a través de nuestros fondos diseñados y gestionados por profesionales
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
