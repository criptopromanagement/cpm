import { Box, Button, Container, Typography } from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";
import { Footer } from "src/components/footer";
import { MainNavbar } from "src/components/main-navbar";
import NextLink from "next/link";
import Composition from "./composition";
import Terms from "./terms";
import Documents from "./documents";
import Performance from "./performance";
import { MainSidebar } from "src/components/main-sidebar";

const Indices = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const handleOpenSideBar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <>
            <Head>
                <title>CPM | Indices</title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth="lg">
                    <MainNavbar onOpenSidebar={handleOpenSideBar}/>
                    <MainSidebar
                        onClose={(): void => setIsSidebarOpen(false)}
                        open={isSidebarOpen}
                    />
                    <Typography
                        variant="h1"
                        sx={{ mt: 3, mb: 1 }}
                    >
                        &lt;	Índices fondo CPM
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="subtitle1"
                    >
                        Fondo de inversión en proyectos cripto.
                    </Typography>

                    <Typography
                        color="textSecondary"
                        variant="subtitle1"
                        sx={{ mb: 2 }}
                    >
                        Contratos inteligentes seleccionados de manera diversificada.
                    </Typography>
                    <NextLink
                        href={'dashboard'}
                        passHref
                    >
                        <Button
                            component="a"
                            size="large"
                            fullWidth
                            variant="contained"
                        >
                            Invertir
                        </Button>
                    </NextLink>
                    <Composition />
                    <Typography
                        variant="h5"
                        sx={{ mt: 3 }}
                    >
                        Términos
                    </Typography>
                    <Terms />
                    <Typography
                        variant="h5"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Rendimiento
                    </Typography>
                    <Performance />
                    <Documents />
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default Indices;
