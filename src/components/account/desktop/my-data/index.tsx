import React, { useEffect, useState } from "react";
import { Typography, TextField, Grid, Box, Button, IconButton, Collapse, Alert } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from "@mui/icons-material/Close";
import InputAdornment from "@mui/material";
import { useSelector } from "src/store";
import * as Yup from "yup";
import { useFormik } from "formik";
import { authApi } from "src/services/api-auth";
import request from "src/services/api-client";

const FormStyle = {
    leftForm: {
        width: "500px",
        marginBottom: "15px",
        marginTop: "15px"
    },

    rightForm: {
        width: "500px",
        marginBottom: "15px",
        marginTop: "15px"
    }
}





export const MyDataFormDesktop = () => {
    const { userData } = useSelector((state) => state.user);
    const { user } = userData;
    const [loading, setLoading] = useState(false)
    const [openSucces, setOpenSucces] = useState(false);
    const [openError, setOpenError] = useState(false);

    const validationSchema = Yup.object({
        username: Yup.string().required("Debes completar este campo"),

        email: Yup.string()
            .email("Debes ingresar un email valido")
            .required("Email es requerido"),

        adress: Yup.string().required("Debes completar este campo"),

        zip_code: Yup.string().required("Debes completar este campo"),
    });

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            adress: "",
            zip_code: ""
        },
        validationSchema: validationSchema,


        onSubmit: async (values) => {
            try {
                setLoading(true)
                const newData = await request.patch("/users", JSON.stringify(values, null, 2))

                if (newData.status === 200) {
                    setLoading(false);
                    setOpenSucces(true);
                } else {
                    setLoading(false);
                    setOpenError(true);
                }
            } catch (error) {
                console.log("ERROR=>", error)
            }

        },
    });






    return (
        <>
            <Box
                sx={{
                    marginLeft: "20px"
                }}
            >
                <Typography
                    variant="h1"
                >
                    Mi cuenta
                </Typography>

                <Typography
                    variant="h4"
                    style={{
                        marginTop: "75px",
                        marginLeft: "5px"

                    }}
                >
                    Datos personales
                </Typography>

            </Box>
            {/* Alert de enviado correctamente */}

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
                                Datos guardados.
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

            <Grid
                container
                spacing={5}
                style={{
                    border: "1px white solid",
                    borderRadius: "15px",
                    marginTop: "50px",
                    marginLeft: "20px"
                }}
            >

                {/* Datos que el usuario no puede modificar. */}
                <Grid
                    item
                    xs={6}
                    md={3}

                >

                    <Typography>
                        Nombre
                    </Typography>
                    <TextField style={FormStyle.leftForm} value={user?.full_name} disabled />

                    <Typography>
                        Nacionalidad
                    </Typography>
                    <TextField style={FormStyle.leftForm} value={user?.country} disabled />

                    <Typography>
                        CUIL
                    </Typography>
                    <TextField style={FormStyle.leftForm} value={user?.legalId} disabled />

                    <Typography>
                        Fecha de Nacimiento
                    </Typography>
                    <TextField style={FormStyle.leftForm} value={user?.birthday} disabled />

                </Grid>

                {/* Datos que el usuario puede modificar. */}

                <Grid
                    item
                    xs={6}
                    md={3}
                    style={{
                        marginLeft: "250px"
                    }}

                >
                    <form
                        onSubmit={formik.handleSubmit}
                        noValidate

                    >

                        <Typography>
                            Usuario
                        </Typography>

                        <TextField
                            style={FormStyle.rightForm}
                            name="username"
                            id="username"

                            onChange={formik.handleChange}

                            error={formik.touched.username && Boolean(formik.errors.username)}
                            helperText={formik.touched.username && formik.errors.username}
                            value={formik.values.username}


                            InputProps={{
                                endAdornment: <EditIcon style={{ color: "rgba(0,255,51,1" }} />
                            }}


                        />

                        <Typography>
                            Email
                        </Typography>
                        <TextField
                            style={FormStyle.rightForm}
                            // value={user?.email ? user.email : "janedoe@gmail.com"}
                            id="email"

                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}



                            InputProps={{
                                endAdornment: <EditIcon style={{ color: "rgba(0,255,51,1" }} />
                            }}

                        />

                        <Typography>
                            Domicilio
                        </Typography>
                        <TextField
                            style={FormStyle.rightForm}
                            // value={user?.address ? user.address : "Avenida"}
                            id="adress"

                            onChange={formik.handleChange}
                            error={formik.touched.adress && Boolean(formik.errors.adress)}
                            helperText={formik.touched.adress && formik.errors.adress}


                            InputProps={{
                                endAdornment: <EditIcon style={{ color: "rgba(0,255,51,1" }} />
                            }}

                        />

                        <Typography>
                            Código Postal
                        </Typography>

                        <TextField
                            style={FormStyle.rightForm}
                            // value={user?.zip_code ? user.zip_code : "1722"}
                            id="zip_code"

                            onChange={formik.handleChange}
                            error={formik.touched.zip_code && Boolean(formik.errors.zip_code)}
                            helperText={formik.touched.zip_code && formik.errors.zip_code}


                            InputProps={{
                                endAdornment: <EditIcon style={{ color: "rgba(0,255,51,1" }} />
                            }}

                        />


                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                marginTop: "30px",
                                marginBottom: "30px",
                                marginLeft: "200px",
                                width: "300px"
                            }}


                        >
                            Guardar Cambios
                        </Button>
                    </form>
                </Grid>
            </Grid>

        </>
    )

}