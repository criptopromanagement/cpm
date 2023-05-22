import { Container, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import Head from "next/head";
import { AccordionComponent } from "../components/faqs/index";
import { MainNavbar } from "../components/main-navbar";
import { useState } from "react";
import { MainSidebar } from "src/components/main-sidebar";
import Link from "next/link";
import { Footer } from "src/components/footer";

const Faqs: NextPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const theme = useTheme();


  const handleOpenSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen)
}
  return (
    <>
      <Head>
        <title>CPM | Inversiones Cripto</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: 8,
        }}
      >
        <Container maxWidth="lg" sx={{marginBottom: "6rem"}}>
          <MainNavbar onOpenSidebar={handleOpenSideBar} />
          <MainSidebar
            onClose={(): void => setIsSidebarOpen(false)}
            open={isSidebarOpen}
          />
          <Box sx={{
            mt: 3,
            mb: "2rem",
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.up('md')]: {
              alignItems: "center",
              mt: 6,
              mb: "4rem",
              justifyContent: "center",
            },
          }}>
            <Typography variant="h1" sx={{ mt: 3, mb: "2rem" }}>
              &lt;Preguntas frecuentes
            </Typography>
            <Typography color="textSecondary" variant="subtitle1">
            Consultá las dudas más frecuentes de nuestros usuarios.
            </Typography>
            <Typography color="textSecondary" variant="subtitle1">
              Si no encontrás lo que estás buscando,{' '}
              <Link href="/contacto">
                <a style={{ color: "#0f3"}}>contactanos</a>
              </Link>
              .
            </Typography>
          </Box>
          <AccordionComponent /> 
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Faqs;
