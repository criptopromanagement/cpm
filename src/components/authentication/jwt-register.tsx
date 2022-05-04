import type { FC } from 'react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Box, Button, Checkbox, FormHelperText, TextField, Typography, Link, Alert } from '@mui/material';
import { useAuth } from '../../hooks/use-auth';
import { useMounted } from '../../hooks/use-mounted';

export const JWTRegister: FC = (props) => {
  const isMounted = useMounted();
  const router = useRouter();
  const { register } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name:' ',
      passwordConfirmation: '',
      policy: false,
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Debes ingresar un email valido')
        .max(255)
        .required('Email es requerido'),
      password: Yup
        .string()
        .min(8,"La contraseña debe incluir al menos 8 caracteres, una mayuscula, un numero y un simbolo")
        .max(255)
        .required('Password es requerido'),
        passwordConfirmation: Yup
        .string()
        .oneOf([Yup.ref('password'), null], 'Debe ser igual a la contraseña'),
      policy: Yup
        .boolean()
        .oneOf([true], 'Debes aceptar los Terminos y condiciones')
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        await register(values.name, values.email, values.password);

        if (isMounted()) {
          const returnUrl = (router.query.returnUrl as string | undefined) || '/dashboard';
          router.push(returnUrl).catch(console.error);
        }
      } catch (err) {
        console.error(err);

        if (isMounted()) {
          helpers.setStatus({ success: false });
          helpers.setErrors({ submit: err.message });
          helpers.setSubmitting(false);
        }
      }
    }
  });

  return (
    <form
      noValidate
      onSubmit={formik.handleSubmit}
      {...props}
    >
      {formik.errors.submit && (
        <Box sx={{ mt: 3 }}>
          <Alert 
            severity="error"
            variant="outlined"
          >
          {formik.errors.submit}
          </Alert>
        </Box>
      )}
      <TextField
        error={Boolean(formik.touched.email && formik.errors.email)}
        fullWidth
        helperText={formik.touched.email && formik.errors.email}
        label="Email"
        margin="normal"
        name="email"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        type="email"
        value={formik.values.email}
        variant="outlined"
      />
      <TextField
        error={Boolean(formik.touched.password && formik.errors.password)}
        fullWidth
        helperText={formik.touched.password && formik.errors.password}
        label="Contraseña"
        margin="normal"
        name="password"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        type="password"
        value={formik.values.password}
        variant="outlined"
      />
        <TextField
        error={Boolean(formik.touched.passwordConfirmation && formik.errors.passwordConfirmation)}
        fullWidth
        helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
        label="Confirma contraseña"
        margin="normal"
        name="passwordConfirmation"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        type="password"
        value={formik.values.passwordConfirmation}
        variant="outlined"
      />
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          ml: -1,
          mt: 2
        }}
      >
        <Checkbox
          checked={formik.values.policy}
          name="policy"
          onChange={formik.handleChange}
        />
        <Typography
          color="textSecondary"
          variant="body2"
        >
          Acepto los
          {' '}
          <Link
            component="a"
            href="#"
          >
            Terminos y Condiciones
          </Link>
        </Typography>
      </Box>
      {Boolean(formik.touched.policy && formik.errors.policy) && (
        <FormHelperText error>
          {formik.errors.policy}
        </FormHelperText>
      )}
      <Box sx={{ mt: 2 }}>
        <Button
          disabled={formik.isSubmitting}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          Register
        </Button>
      </Box>
    </form>
  );
};
