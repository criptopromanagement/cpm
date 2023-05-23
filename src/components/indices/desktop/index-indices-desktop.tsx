import React, { useState } from "react";
import { Box, Button, Container, Grid, Typography, Link } from "@mui/material";
import NextLink from 'next/link';
import Head from "next/head";
import { MainNavbar } from "src/components/main-navbar";
import { MainSidebar } from "src/components/main-sidebar";
import { Composition } from "./composition";
import { Terms } from "./terms";
import Performance from "../performance";
import { Documents } from "./documents";
import { Footer } from "src/components/footer";


export const DesktopIndices = () => {
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
                    py: 8
                }}
            >
                <Container>
                    <MainNavbar onOpenSidebar={handleOpenSideBar} />
                    <MainSidebar
                        onClose={(): void => setIsSidebarOpen(false)}
                        open={isSidebarOpen}
                    />
                    <Typography
                        variant="h1"
                        textAlign="center"
                        mt="2rem"
                        mb="1rem"
                    >
                        Índices Foundation
                    </Typography>
                    <Typography
                        variant="h2"
                        textAlign="center"
                        sx={{
                            mb: "4rem"
                        }}
                    >
                        Fondo de inversión en proyectos de plataformas de contratos inteligentes seleccionados de manera diversificada.
                    </Typography>
                    <Button
                        href="/login"
                        variant="contained"
                        sx={{
                            position: "relative",
                            ml: "40%",
                            mb: "6rem",
                            width: "15rem",
                            height: "3rem"
                        }}
                    >
                        Invertir
                    </Button>

                    <Typography
                        variant="subtitle2"
                        mb="3rem"
                    >
                        La novedad del mercado cripto presenta desafíos a la hora de evaluar y elegir proyectos particulares para invertir.
                        A través de los fondos, que replican los índices CPM, se facilita a los inversores el proceso de decisión de inversión.
                    </Typography>

                    <Box>
                        <Grid
                            container
                            spacing={2}
                        >
                            <Grid
                                item
                                xs={6}
                            >
                                <Composition />
                            </Grid>
                            <Grid
                                item
                                xs={6}
                            >

                                <Terms />
                            </Grid>
                        </Grid>
                    </Box>


                    <Box
                        mt="2rem"

                    >
                        <Typography
                            variant="h2"
                            mb="3rem"
                        >
                            Rendimiento
                        </Typography>
                        <Performance />
                    </Box>

                    <Box>
                        <Typography
                            variant="h2"
                            mt="2rem"
                            mb="1rem"
                        >
                            Objetivo y estrategia
                        </Typography>
                        <Typography
                            variant="subtitle2"
                        >
                            Capitalizar el crecimiento de la industria y la adopción masiva de la tecnología blockchain invirtiendo de manera temprana en
                            proyectos con potencial de servir como infraestructura para la era del internet del dinero.
                        </Typography>

                        <Typography
                            variant="subtitle2"
                        >
                            Para ver las metodologías aplicadas en el índice Foundation,
                            <NextLink
                                href={"/static/documents/metodologia-indice-foundation.pdf"}
                                passHref
                            >
                                <Link
                                    underline="always"

                                > hacé click aquí. </Link>
                            </NextLink>
                        </Typography>
                    </Box>

                    <Box>
                        <Documents />
                    </Box>
                </Container >
            </Box >
            <Footer />
        </>
    )
}