import type { NextPage } from "next";
import { MainNavbar } from "src/components/main-navbar";
import { MainSidebar } from "src/components/main-sidebar";
import Head from "next/head";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Footer } from "src/components/footer";
import {
  Box,
  Button,
  Grid,
  Container,
  Typography,
  TextField,
  Alert,
  IconButton,
  Collapse,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import apiClientWithoutToken from "src/services/api-client-without-token";
import GoBack from "src/components/widgets/goBack";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

const Contacto: NextPage = () => {
  const isMobile = useSelector((state: RootState) => state.isMobile.isMobile);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [openSucces, setOpenSucces] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  const handleOpenSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Debes completar este campo"),

    email: Yup.string()
      .email("Debes ingresar un email valido")
      .required("Email es requerido"),
    message: Yup.string().required("Tu mensaje no puede estar vacio"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        setLoading(true);
        const sendMessage = await apiClientWithoutToken.post(
          "/contactForm",
          JSON.stringify(values, null, 2)
        );
        if (sendMessage.status === 201) {
          setLoading(false);
          setOpenSucces(true);
        } else {
          setLoading(false);
          setOpenError(true);
        }
      } catch (error) {
        console.log("ERROR=>", error);
      }
    },
  });

  return (
    <>
      <Head>
        <title>CPM | Contacto</title>
      </Head>
      <MainNavbar onOpenSidebar={handleOpenSideBar} />
            <MainSidebar
              onClose={(): void => setIsSidebarOpen(false)}
              open={isSidebarOpen}
            />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 9,
          pb: 0,
        }}
      >
        <Box sx={{
            mt: 3,
            display: "flex",
            flexDirection: {xs: 'column', md: 'row'},
            [theme.breakpoints.up('md')]: {
              alignItems: "center",
              mt: 6,
              mb: "4rem",
              justifyContent: "center",
            },
          }}>
            <Typography
              variant="h1"
              sx={{ mb: "0.5rem" }}
            >
            <GoBack/>
              Hablemos
            </Typography>
            <Typography
              variant="h2"
              sx={{ 
                ml: { xs: '2.5rem', sm: "2.5rem", md: 0 },
                mb: { xs: '1rem', md: "2rem" }
              }}
            >
              ¿Cómo podemos ayudarte?
            </Typography>
          </Box>
        <Container maxWidth="xl">
        <Grid 
          container
          justifyContent="center"
          spacing={2}>
          <Grid
            item xs={12}
            md={6}
            textAlign="center"
            sx={{mb: 5}}>
            {/* Alert de mensaje Enviado */}
            <form
              // className="formulario"
              onSubmit={formik.handleSubmit}
              noValidate
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                width: isMobile? "100%" : "70%",
                margin: "0 auto", 
              }}
            >
            {loading ? (
                          <Typography
                          variant="body1"
                          sx={{ m: { xs: '1.5rem', sm: "1.5rem" } }}
                        >
              Enviando...
                        </Typography>
            ) : (
              <Box>
                <Collapse in={openSucces}>
                  <Alert
                    severity="success"
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        onClick={() => {
                          setOpenSucces(false);
                        }}
                      >
                      </IconButton>
                    }
                    sx={{
                      backgroundColor: "rgba(0, 255, 51, 0.2)",
                      border: "1px solid #00FF33",
                    }}
                  >
                    <Typography color="inherit">
                      ¡Gracias por envíar tu mensaje! Te responderemos muy pronto.
                    </Typography>
                  </Alert>
                </Collapse>
              </Box>
            )}

            {/* Alert de ERROR al enviar el mensaje */}
            {loading ? (
              ""
            ) : (
              <Box>
                <Collapse in={openError}>
                  <Alert
                    severity="error"
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        onClick={() => {
                          setOpenError(false);
                        }}
                      >
                        <CloseIcon
                          style={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            height: "100%",
                            width: "30px",
                          }}
                        />
                      </IconButton>
                    }
                    sx={{
                      mb: 2,
                    }}
                  >
                    <Typography color="white">
                      Oops! Algo salio mal.
                      <br />
                      Por favor intenta mas tarde.
                    </Typography>
                  </Alert>
                </Collapse>
              </Box>
            )}
              <TextField
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                id="name"
                label="Nombre"
                placeholder="Juan Peréz"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
              />
              <TextField
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                id="email"
                label="Email"
                placeholder="ejemplo@mail.com"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
              />
              <TextField
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
                id="message"
                label="Mensaje"
                placeholder="Tu mensaje aqui"
                type="text"
                variant="outlined"
                margin="normal"
                multiline
                rows={6}
                fullWidth
              />
              <Button
                style={{
                  marginTop: "25px",
                }}
                size="large"
                variant="contained"
                type="submit"
                disabled={formik.isSubmitting}
              >
                Enviar
              </Button>
            </form>
          </Grid>
          <Grid
            item xs={12}
            md={6}>
                      <Box
          component="img"
          src="/static/home/contact.svg"
          style={{
            display: "flex",
            width: '100%',
            height: "100%",
            objectFit: "cover",
          }}
          >
          </Box>
            </Grid>
            </Grid>
          </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Contacto;
