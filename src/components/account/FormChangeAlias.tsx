import React, { FC } from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";

export const FormChangeAlias: FC = () => {
  const formik = useFormik({
    initialValues: {
      alias: "",
    },
    validationSchema: Yup.object({
        alias: Yup.string().max(10, "El alias debe ser menor a 10 caracteres").required("Debes ingresar el alias"),
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
          El nombre que elijas será el que usaremos para comunicarnos con vos
          dentro de la plataforma.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="body1">
          Sólo usaremos el nombre que figura en tu DNI si es necesario
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          focused
          label="Alias elegido"
          placeholder="Jane Doe"
          name="alias"
          onBlur={formik.handleBlur}
          helperText={formik.touched.alias && formik.errors.alias}
          error={Boolean(
            formik.touched.alias && formik.errors.alias
          )}
          value={formik.values.alias}
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
