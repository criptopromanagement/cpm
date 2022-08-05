import React, { FC } from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";

export const FormChangeMail: FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
        email: Yup.string().email().required("Debes ingresar el email"),
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
      } catch (err) {}
    },
  });
  return (
    <>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="h3">¿Cómo querés que te llamemos?</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="body1">
          Modificar email de contacto
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="body1">
          Te enviaremos un email para confirmación
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          focused
          label="email elegido"
          placeholder="Jane Doe"
          name="email"
          type="email"
          onBlur={formik.handleBlur}
          helperText={formik.touched.email && formik.errors.email}
          error={Boolean(
            formik.touched.email && formik.errors.email
          )}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          color="primary"
          fullWidth
          variant="contained"
          disabled={Boolean(
            Object.keys(formik.errors).length || formik.isSubmitting
          )}
        >
          Guardar
        </Button>
      </Grid>
    </>
  );
};
