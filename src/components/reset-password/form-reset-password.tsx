import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import ApiClient from "../../services/api-client";
import {
  errorNotification,
  succesNotification,
} from "src/slices/my-account-notificacion-slice";
import { useDispatch } from "src/store";
import { FC } from "react";

export const FormResetPassword: FC = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Debes ingresar un correo valido")
        .required("Debes ingresar tu correo"),
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      const json = JSON.stringify(values);
      try {
        await ApiClient.post("/auth/reset-password", json);
        helpers.resetForm();
        dispatch(
          succesNotification({
            msg: "Recibirás un correo para cambiar tu email",
            tab: "security",
          })
        );
      } catch (error) {
        const msg = error?.response
          ? error.response.data.error
          : "Ha ocurrido un error";
        dispatch(
          errorNotification({
            msg: msg,
            tab: "security",
          })
        );
      }
    },
  });
  return (
    <Grid item md={12} xs={12}>
      <Card>
        <CardHeader title="Reinicia tu contraseña" />
        <CardContent style={{ paddingTop: 0 }}>
          <Grid
            container
            direction="column"
            spacing={2}
            component="form"
            onSubmit={formik.handleSubmit}
          >
            <Grid item>
              <TextField
                fullWidth
                focused
                type="email"
                onBlur={formik.handleBlur}
                helperText={formik.touched.email && formik.errors.email}
                error={Boolean(formik.touched.email && formik.errors.email)}
                onChange={formik.handleChange}
                value={formik.values.email}
                label="Ingresa tu email"
                name="email"
                placeholder="Ingresa tu email"
              />
            </Grid>
            <Grid item>
              <Button
                fullWidth
                type="submit"
                disabled={Boolean(
                  Object.keys(formik.errors).length || formik.isSubmitting
                )}
                variant="contained"
                color="primary"
              >
                Reiniciar contraseña
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
