import React, { FC } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import ApiClient from "../../../services/api-client";
import { useDispatch } from "react-redux";
import { setUser } from "src/slices/user-slice";
import {
  errorNotification,
  succesNotification,
} from "src/slices/my-account-notificacion-slice";
import { MyAccountNotification } from "../MyAccountNotification";
interface Props {
  firstname: string | undefined;
  closeModal: () => void;
}

export const FormChangeFirstName: FC<Props> = ({ firstname, closeModal }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstname: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(10, "El primer nombre debe ser menor a 10 caracteres")
        .required("Debes ingresar el primer nombre"),
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        const json = JSON.stringify(values);
        const response = await ApiClient.patch("/users", json);
        closeModal();
        dispatch(setUser({ token: "", user: response.data }));
        dispatch(
          succesNotification({
            msg: "Cambiaste tu primer nombre",
            tab: "my-data",
          })
        );
      } catch (err) {
        dispatch(
          errorNotification({
            msg: "No se pudo cambiar tu primer nombre",
            tab: "my-data",
          })
        );
      }
    },
  });

  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      sx={{ bgcolor: "background.paper" }}
      p={2}
      rowSpacing={2}
      boxShadow={24}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <MyAccountNotification showError currentTab="my-data" />
      </Grid>
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
          label="Primer nombre elegido"
          placeholder={firstname}
          name="firstname"
          onBlur={formik.handleBlur}
          helperText={formik.touched.firstname && formik.errors.firstname}
          error={Boolean(formik.touched.firstname && formik.errors.firstname)}
          value={formik.values.firstname}
          onChange={formik.handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          color="primary"
          fullWidth
          variant="contained"
          type="submit"
          disabled={Boolean(
            Object.keys(formik.errors).length || formik.isSubmitting
          )}
          endIcon={
            formik.isSubmitting && (
              <CircularProgress size={20} color="primary" />
            )
          }
        >
          Guardar
        </Button>
      </Grid>
    </Grid>
  );
};
