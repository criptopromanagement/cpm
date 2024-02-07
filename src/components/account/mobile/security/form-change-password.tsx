import React from 'react';
import { Button, Grid, Paper, Typography, Box } from '@mui/material';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { PasswordField } from 'src/components/common';
import { errorNotification, succesNotification } from 'src/slices/my-account-notificacion-slice';
import { useDispatch } from 'src/store';
import ApiClient from 'src/services/api-client';

interface Props {
  token?: string;
  redirect?: () => void;
}

const FormChangePassword: React.FC<Props> = ({ token, redirect }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password_old: "",
      password: '',
      password_confirm: '',
      submit: null,
    },
    validationSchema: Yup.object({
      password_old: Yup.string().required(
        "Debes ingresar la contraseña actual"
      ),
      password: Yup.string()
        .min(8, 'La contraseña es muy corta')
        .required('Debes ingresar la nueva contraseña')
        .matches(
          /(?=^.{8,20}$)(?=.*\d)(?=.*[!@#$.]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
          'La contraseña debe contener: 1 letra mayúscula, 1 letra minúscula, 1 carácter especial (!@#$.) y 1 número'
        ),
      password_confirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
        .required('Debes confirmar la nueva contraseña'),
    }),
    onSubmit: async (values, helpers) => {
      const json = JSON.stringify(values);
      try {
        if (token) {
          await ApiClient.postWithToken('/users/reset-password', json, token);
        } else {
          await ApiClient.post('/users/reset-password', json);
        }
        helpers.resetForm();
        dispatch(succesNotification({ msg: 'Cambiaste tu contraseña', tab: 'security' }));
        if (token) redirect?.();
      } catch (error) {
        dispatch(errorNotification({ msg: 'No se pudo realizar el cambio de contraseña', tab: 'security' }));
      }
    },
  });

  return (
    <Grid container spacing={2} margin='16px 0 16px 32px' border='2px solid white' borderRadius='16px' padding='24px 48px 40px 24px'>
      <Grid item xs={12}>
        <Box style={{ padding: '20px', textAlign: 'left' }}>
          <Typography variant="h5">Cambiar contraseña</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={formik.handleSubmit}>
          <Box style={{ textAlign: 'right' }}>
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
            <Button
              fullWidth
              type="submit"
              disabled={formik.isSubmitting || !!Object.keys(formik.errors).length}
              variant="contained"
              color="primary"
            >
              Cambiar contraseña
            </Button>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
};

export default FormChangePassword;
