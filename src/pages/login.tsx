
import type { NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Card, Container, Divider, Link, Typography } from '@mui/material';
import { Logo } from '../components/logo';
import { useAuth } from '../hooks/use-auth';
import { JWTLogin } from '../components/authentication/jwt-login';
import { GuestGuard } from 'src/components/authentication/guest-guard';

type Platform = 'JWT';

const Login: NextPage = () => {
  const router = useRouter();
  const { platform }: { platform: Platform } = useAuth();
  const { disableGuard } = router.query;

  return (
    <>
      <Head>
        <title>
          Login | Material Kit Pro
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          backgroundColor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            py: {
              xs: '25px',
            }
          }}
        >
          <Card
            elevation={16}
            sx={{ 
                p: 4,
                backgroundColor:'background.default'
            }}
          >
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <NextLink
                href="/"
                passHref
              >
                <a>
                  <Logo
                    sx={{
                        height: 60,
                        width: 100
                    }}
                  />
                </a>
              </NextLink>
              <Typography variant="h4">
                Hola de nuevo
              </Typography>
              <Typography
                color="textSecondary"
                sx={{ mt: 2 }}
                variant="body2"
              >
                  Iniciar sesión
            </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                mt: 3
              }}
            >
              {platform === 'JWT' && <JWTLogin />}
            </Box>
            <div style={{
                marginTop: 15,
                textAlign:'center'
                }}
            >
            Aún no tenés cuenta? {' '}
              <NextLink
                href={
                  disableGuard
                    ? `/register?disableGuard=${disableGuard}`
                    : '/register'
                }
                passHref
              >
                <Link
                  color="primary"
                  variant="body2"
                >
                  Registrate
                </Link>
              </NextLink>
            </div>
          </Card>
        </Container>
      </Box>
    </>
  );
};

Login.getLayout = (page) => (
  <GuestGuard>
    {page}
  </GuestGuard>
);

export default Login;
