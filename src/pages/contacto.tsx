import type { NextPage } from 'next';
import { MainNavbar } from 'src/components/main-navbar';
import { MainSidebar } from 'src/components/main-sidebar';
import Head from 'next/head';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Footer } from 'src/components/footer';
import { Box, Button, Grid, Container, Typography, TextField } from '@mui/material';
import { useState } from 'react';


const Contacto: NextPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    //Defino el esquema de validacion de datos para pasar por hook de useFormik
    const validationSchema = Yup.object({
        name: Yup
            .string()
            .required("Debes completar este campo"),

        email: Yup
            .string()
            .email('Debes ingresar un email valido')
            .required('Email es requerido'),
        message: Yup
            .string()
            .required("Tu mensaje no puede estar vacio")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // Lo que devuelva la funcion de onSubmit tiene que  llamar a la api para mandar un mail con los campos 
            console.log(JSON.stringify(values))
        },
    });

    return (
        <>
            <Head>
                <title>
                    CPM | Contacto
                </title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 9,
                    pb: 0
                }}
            >
                <Container
                    maxWidth="lg"
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography
                            variant="h3"
                            style={{
                                paddingLeft: "20px",
                                paddingRight: "20px"
                            }}>
                            Hablemos.
                        </Typography>
                        <Typography
                            style={{
                                paddingLeft: "20px",
                                paddingRight: "20px"
                            }}>
                            Dejanos tu mensaje y pronto nos comunicaremos con vos.
                        </Typography>
                        <MainNavbar onOpenSidebar={(): void => setIsSidebarOpen(true)} />
                        <MainSidebar
                            onClose={(): void => setIsSidebarOpen(false)}
                            open={isSidebarOpen}
                        />
                        <form
                            onSubmit={formik.handleSubmit}
                            noValidate
                            style={{
                                paddingLeft: "20px",
                                paddingRight: "20px"
                            }}>

                            <TextField
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                                id="name"
                                label="Nombre"
                                placeholder='Juan Peréz'
                                type="text"
                                variant="outlined"
                                margin='normal'
                                fullWidth

                            />
                            <TextField
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                id="email"
                                label="Email"
                                placeholder='ejemplo@mail.com'
                                type="email"
                                variant="outlined"
                                margin='normal'
                                fullWidth

                            />
                            <TextField
                                onChange={formik.handleChange}
                                error={formik.touched.message && Boolean(formik.errors.message)}
                                helperText={formik.touched.message && formik.errors.message}
                                id="message"
                                label="Mensaje"
                                placeholder='Tu mensaje aqui'
                                type="text"
                                variant="outlined"
                                margin='normal'
                                multiline
                                rows={6}
                                fullWidth

                            />
                            <Button
                                style={{
                                    marginTop: "25px"
                                }}
                                size="large"
                                variant="contained"
                                fullWidth
                                type="submit"
                            >
                                Enviar
                            </Button>
                        </form>
                    </Grid>
                </Container>
                <Box
                    component="img"
                    src='/static/home/contact.svg'
                    style={{
                        position: "relative",
                        top: -80,
                        zIndex: -1,
                        transform: "rotateY(180deg)",

                    }}
                >
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Contacto