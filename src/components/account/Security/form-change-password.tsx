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
import { PasswordField } from "src/components/common";

export const FormChangePassword = () => {
  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      submit: null,
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string()
        .min(8, "La constraseña es muy corta")
        .required("Debes ingresar la contraseña actual")
        .matches(
          /(?=^.{8,20}$)(?=.*\d)(?=.*[!@#$.]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
          "La contraseña debe contener: 1 letra mayuscula, 1 letra minuscula, 1 caracter especial (!@#$.) y 1 numero"
        ),
      newPassword: Yup.string()
        .min(8, "La constraseña es muy corta")
        .required("Debes ingresar la contraseña actual")
        .matches(
          /(?=^.{8,20}$)(?=.*\d)(?=.*[!@#$.]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
          "La contraseña debe contener: 1 letra mayuscula, 1 letra minuscula, 1 caracter especial (!@#$.) y 1 numero"
        ),
    }),
    onSubmit: async (values, helpers): Promise<void> => {},
  });
  console.log(formik.values);
  return (
    <Grid item md={12} xs={12}>
      <Card>
        <CardHeader title="Cambiar contraseña" />
        <CardContent style={{ paddingTop: 0 }}>
          <Grid
            container
            direction="column"
            spacing={2}
            component="form"
            onSubmit={formik.handleSubmit}
          >
            <Grid item>
              <PasswordField
                error={formik.errors.currentPassword}
                handleBlur={formik.handleBlur}
                value={formik.values.currentPassword}
                label="Contraseña actual"
                handleChange={formik.handleChange}
                name="currentPassword"
                touched={formik.touched.currentPassword}
                placeholder="Ingresa tu contraseña"
              />
            </Grid>
            <Grid item>
              <PasswordField
                error={formik.errors.newPassword}
                handleBlur={formik.handleBlur}
                value={formik.values.newPassword}
                label="Contraseña nueva"
                handleChange={formik.handleChange}
                name="newPassword"
                touched={formik.touched.newPassword}
                placeholder="Ingresa tu nueva contraseña"
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
                Cambiar contraseña
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
