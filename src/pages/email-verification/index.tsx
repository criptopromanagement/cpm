import { Container, Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

const EmailVerificationPage = () => {

  const user = useSelector((state: RootState) => state.user.userData.user);

  const router = useRouter();

  const userEmail = user?.email;

  const handleResendEmail = () => {
  };

  const handleReturnHome = () => {
    router.push('/');
  };

  return (
    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'primary.default', p: 0 }}>
      <Box sx={{ width: '100%', textAlign: 'center', color: 'common.white', p: 3 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Verifica tu email
        </Typography>
        <Typography>
          Te enviamos un email a:
        </Typography>
        <Typography fontWeight="fontWeightBold">
          {userEmail}
        </Typography>
        <Typography gutterBottom>
          Revisa tu correo y haz click en el enlace que te enviamos
        </Typography>
        <Button
          variant="contained"
          onClick={handleResendEmail}
          sx={{
            mt: 2,
            bgcolor: 'secondary.main',
            '&:hover': {
              bgcolor: 'secondary.dark',
            },
          }}
        >
          Reenviar email
        </Button>
        <Button
          onClick={handleReturnHome}
          sx={{
            mt: 2,
            color: 'common.white',
            display: 'block',
            width: '100%',
          }}
        >
          Volver al inicio
        </Button>
      </Box>
    </Container>
  );
};

export default EmailVerificationPage;
