import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import { PasswordField } from "src/components/common";
import {
  errorNotification,
  succesNotification,
} from "src/slices/my-account-notificacion-slice";
import { useDispatch } from "src/store";
import { FC } from "react";
import ApiClient from "src/services/api-client";

interface Props {
  token?: string;
  redirect?: () => void;
}
export const FormChangePassword: FC<Props> = ({ token, redirect }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password_old: "",
      password: "",
      password_confirm: "",
      submit: null,
    },
    validationSchema: Yup.object({
      password_old: Yup.string().required(
        "Debes ingresar la contraseña actual"
      ),
      password: Yup.string()
        .min(8, "La constraseña es muy corta")
        .required("Debes ingresar la nueva contraseña")
        .matches(
          /(?=^.{8,20}$)(?=.*\d)(?=.*[!@#$.]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
          "La contraseña debe contener: 1 letra mayuscula, 1 letra minuscula, 1 caracter especial (!@#$.) y 1 numero"
        ),
      password_confirm: Yup.string()
        .min(8, "La constraseña es muy corta")
        .required("Debes confirmar la nueva contraseña")
        .matches(
          /(?=^.{8,20}$)(?=.*\d)(?=.*[!@#$.]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
          "La contraseña debe contener: 1 letra mayuscula, 1 letra minuscula, 1 caracter especial (!@#$.) y 1 numero"
        ),
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      const json = JSON.stringify(values);
      try {
        if (token) {
          await ApiClient.postWithToken("/users/reset-password", json, token);
        } else {
          await ApiClient.post("/users/reset-password", json);
        }

        helpers.resetForm();
        dispatch(
          succesNotification({
            msg: "Cambiaste tu contraseña",
            tab: "security",
          })
        );
        token && redirect?.();
      } catch (error) {
        dispatch(
          errorNotification({
            msg: "No se pudo realizar el cambio de contraseña",
            tab: "security",
          })
        );
      }
    },
  });
  return (
    <Grid container item xs={12} sm={12}>
      <Grid container item component={Paper} padding={2}>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Typography>Cambiar contraseña</Typography>
        </Grid>
        <Grid
          container
          direction="row"
          component="form"
          onSubmit={formik.handleSubmit}
          spacing={1}
          item
          md={9}
          lg={9}
        >
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <PasswordField
              error={formik.errors.password_old}
              handleBlur={formik.handleBlur}
              value={formik.values.password_old}
              label="Contraseña actual"
              handleChange={formik.handleChange}
              name="password_old"
              touched={formik.touched.password_old}
              placeholder="Ingresa tu contraseña actual"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <PasswordField
              error={formik.errors.password}
              handleBlur={formik.handleBlur}
              value={formik.values.password}
              label="Nueva contraseña"
              handleChange={formik.handleChange}
              name="password"
              touched={formik.touched.password}
              placeholder="Ingresa tu nueva contraseña"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <PasswordField
              error={formik.errors.password_confirm}
              handleBlur={formik.handleBlur}
              value={formik.values.password_confirm}
              label="Confirma tu contraseña nueva"
              handleChange={formik.handleChange}
              name="password_confirm"
              touched={formik.touched.password_confirm}
              placeholder="Confirma tu nueva contraseña"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Button
              fullWidth
              type="submit"
              disabled={Boolean(
                Object.keys(formik.errors).length || formik.isSubmitting
              )}
              variant="contained"
              color="primary"
            >
              Cambiar contraseña
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
