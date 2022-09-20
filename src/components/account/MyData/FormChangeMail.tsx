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
  email: string | undefined;
  closeModal: () => void;
}
export const FormChangeMail: FC<Props> = ({ email, closeModal }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Debes ingresar el email"),
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        const json = JSON.stringify(values);
        console.log(json);
        const response = await ApiClient.patch("/users", json);
        closeModal();
        dispatch(setUser({ token: "", user: response.data }));
        dispatch(
          succesNotification({
            msg: "Cambiaste tu email",
            tab: "my-data",
          })
        );
      } catch (err) {
        dispatch(
          errorNotification({
            msg: "No se pudo cambiar tu email",
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
        <MyAccountNotification showError currentTab="my-data"/>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="h3">¿Cómo querés que te llamemos?</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="body1">Modificar email de contacto</Typography>
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
          label="Email elegido"
          placeholder={email}
          name="email"
          type="email"
          onBlur={formik.handleBlur}
          helperText={formik.touched.email && formik.errors.email}
          error={Boolean(formik.touched.email && formik.errors.email)}
          value={formik.values.email}
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
