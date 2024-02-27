import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


interface ApiResponse {
  success: boolean;
  message?: string;
}

export default function VerifyEmailPage() {
  const router = useRouter();
  const [verificationStatus, setVerificationStatus] = useState<string>('');

  useEffect(() => {
    if (!router.isReady) return;

    const token = router.query.token;

    if (typeof token !== 'string') {
      setVerificationStatus('Token no proporcionado o inválido.');
      return;
    }

    const verifyEmail = async (token: string) => {
      try {
        const response = await fetch('/users/verify-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });

        if (!response.ok) throw new Error('Falló la verificación del correo electrónico.');

        const data: ApiResponse = await response.json();

        if (data.success) {
            router.push('/dashboard');
                } else {
          setVerificationStatus(data.message || 'Error en la verificación. El token puede ser inválido o haber expirado.');
        }
      } catch (error) {
        setVerificationStatus('Error al verificar el correo electrónico. Intenta de nuevo más tarde.');
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
