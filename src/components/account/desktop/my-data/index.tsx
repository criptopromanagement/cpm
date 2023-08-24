import React, { useState } from "react";
import { Typography, TextField, Grid, Box, Button, IconButton, Collapse, Alert } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "src/store";
import * as Yup from "yup";
import { useFormik } from "formik";
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


interface InputsEnabled {
    userLabel: boolean;
    mailLabel: boolean;
    addressLabel: boolean;
    zipLabel: boolean;
}


export const MyDataFormDesktop = () => {
    const { userData } = useSelector((state) => state.user);
    const { user } = userData;
    const [loading, setLoading] = useState(false)
    const [openSucces, setOpenSucces] = useState(false);
    const [openError, setOpenError] = useState(false);
    const [disabled, setDisabled] = useState<InputsEnabled>({
        userLabel: false,
        mailLabel: false,
        addressLabel: false,
        zipLabel: false
    })

    const enabled = (inputName: keyof InputsEnabled) => {
        setDisabled((prevEnabled) => ({
            ...prevEnabled,
            [inputName]: !prevEnabled[inputName],
        }));
    };


    const validationSchema = Yup.object({
        username: Yup.string(),

        email: Yup.string()
            .email("Debes ingresar un email valido"),


        address: Yup.string(),

        zip_code: Yup.string()
    });

    const formik = useFormik({
        initialValues: {
            username: user?.username,
            email: user?.email,
            address: user?.address,
            zip_code: user?.zip_code
        },
        validationSchema: validationSchema,


        onSubmit: async (values) => {
            try {
                setLoading(true)
                const newData = await request.patch("/users", JSON.stringify(values, null, 2))

                if (newData.status === 200) {
                    setLoading(false);
                    setOpenSucces(true);
                    console.log(newData)
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
            <Grid
                container
                spacing={2}
            >
                <Grid
                    item
                    xs={12}
                >
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
                </Grid>
                {/* Alert de enviado correctamente */}
                <Grid
                    item
                    xs={12}
                >
                    <Box>
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

                        {/* Alert de ERROR en el envio */}
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
                    </Box>
                </Grid>

            </Grid>
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
                            placeholder={user?.username ? user.username : "Jane Doe"}
                            style={FormStyle.rightForm}
                            name="username"
                            id="username"
                            disabled={!disabled.userLabel}
                            onChange={formik.handleChange}
                            error={formik.touched.username && Boolean(formik.errors.username)}
                            helperText={formik.touched.username && formik.errors.username}
                            InputProps={{
                                endAdornment: <Button onClick={() => enabled("userLabel")}><img src="/static/account/pen.svg" style={{ color: "rgba(0,255,51,1" }} /></Button>
                            }}
                        />

                        <Typography>
                            Email
                        </Typography>
                        <TextField
                            placeholder={user?.email ? user.email : "janedoe@gmail.com"}
                            style={FormStyle.rightForm}
                            name="email"
                            id="email"
                            disabled={!disabled.mailLabel}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            InputProps={{
                                endAdornment: <Button onClick={() => enabled("mailLabel")}><img src="/static/account/pen.svg" style={{ color: "rgba(0,255,51,1" }} /></Button>
                            }}

                        />

                        <Typography>
                            Domicilio
                        </Typography>
                        <TextField
                            placeholder={user?.address ? user.address : "Avenida San Martin 100"}
                            style={FormStyle.rightForm}
                            name="address"
                            id="address"
                            disabled={!disabled.addressLabel}
                            onChange={formik.handleChange}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                            InputProps={{
                                endAdornment: <Button onClick={() => enabled("addressLabel")}><img src="/static/account/pen.svg" style={{ color: "rgba(0,255,51,1" }} /></Button>
                            }}
                        />

                        <Typography>
                            Código Postal
                        </Typography>

                        <TextField
                            placeholder={user?.zip_code ? user.zip_code : "1722"}
                            style={FormStyle.rightForm}
                            name="zip_code"
                            id="zip_code"
                            disabled={!disabled.zipLabel}
                            onChange={formik.handleChange}
                            error={formik.touched.zip_code && Boolean(formik.errors.zip_code)}
                            helperText={formik.touched.zip_code && formik.errors.zip_code}
                            InputProps={{
                                endAdornment: <Button onClick={() => enabled("zipLabel")}><img src="/static/account/pen.svg" style={{ color: "rgba(0,255,51,1" }} /></Button>
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