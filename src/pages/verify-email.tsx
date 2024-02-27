import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import request from 'src/services/api-client';
import axios from 'axios';
import { RootState, useSelector } from 'src/store';

interface ApiResponse {
  success: boolean;
  message?: string;
}

export default function VerifyEmailPage() {
  const user = useSelector((state: RootState) => state.user.userData.user);
  const router = useRouter();
  const [verificationStatus, setVerificationStatus] = useState<string>('');
  const userEmail = user?.email

  useEffect(() => {
    if (!router.isReady) return;

    const token = router.query.token;

    if (typeof token !== 'string') {
      setVerificationStatus('Token no proporcionado o inválido.');
      return;
    }

    const verifyEmail = async (token: string) => {
      try {
        const body = JSON.stringify({ token, email: userEmail });

        const response = await request.postWithToken('/users/verify-email', body, token);

        const data: ApiResponse = await response.data;

        if (data.success) {
          router.push('/dashboard');
        } else {
          setVerificationStatus(data.message || 'Error en la verificación. El token puede ser inválido o haber expirado.');
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const message = error.response?.data.message || 'Error al verificar el correo electrónico. Intenta de nuevo más tarde.';
          setVerificationStatus(message);
        } else {
          setVerificationStatus('Error al verificar el correo electrónico. Intenta de nuevo más tarde.');
        }
      }
    };

    verifyEmail(token);
  }, [router.isReady, router.query.token]);

  return (
    <div>
      <h1>Verificación de Email</h1>
      <p>{verificationStatus}</p>
    </div>
  );
}
