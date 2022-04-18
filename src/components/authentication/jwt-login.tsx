import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField, Typography } from '@mui/material';
import { useAuth } from '../../hooks/use-auth';
import { useMounted } from '../../hooks/use-mounted';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const JWTLogin: FC = (props) => {
  const isMounted = useMounted();
  const router = useRouter();
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberme: false,
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
        .max(255)
        .required('Password es requerido')
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        await login(values.email, values.password);

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

  const [showPassword, setShowPassword] = useState(false);
  return (
    <form
      noValidate
      onSubmit={formik.handleSubmit}
      {...props}
    >
      <TextField
        autoFocus
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
        placeholder='tu email'
      />
      <FormControl
        fullWidth 
        variant="outlined" 
        margin="normal"
      >
          <InputLabel 
              htmlFor="outlined-adornment-password"
              error={Boolean(formik.touched.password && formik.errors.password)}
            >
              Contraseña
            </InputLabel>
          <OutlinedInput
            error={Boolean(formik.touched.password && formik.errors.password)}
            fullWidth
            name="password"
            label="Contraseña"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type={showPassword? "text":"password"}
            value={formik.values.password}
            placeholder='tu contraseña'
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {!showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        {!!Boolean(formik.touched.password && formik.errors.password) && (
          <FormHelperText 
            error 
            id="accountId-error"
          >
          {formik.touched.password && formik.errors.password}
          </FormHelperText>
        )}
        </FormControl>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent:'space-between',
          mt: 0
        }}
      >
        <FormControlLabel control={<Checkbox
          checked={formik.values.rememberme}
          name="rememberme"
          onChange={formik.handleChange}/>} 
          label="Recuerdame" 
        />
          <Link
          sx={{
            color:'white'
          }}
            component="a"
            href="#"
          >
          <Typography
            color="white"
            variant="body2"
          >
            Olvidé mi contraseña
            </Typography>
          </Link>
        
      </Box>
      {formik.errors.submit && (
        <Box sx={{ mt: 3 }}>
          <FormHelperText error>
            {formik.errors.submit}
          </FormHelperText>
        </Box>
      )}
      <Box sx={{ mt: 10 }}>
        <Button
          disabled={formik.isSubmitting}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          Ingresar
        </Button>
      </Box>
    </form>
  );
};
