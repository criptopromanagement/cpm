import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { NextPage } from "next/types";
import React, { useEffect, useState } from "react";
import { useMounted } from "src/hooks/use-mounted";
import ApiClient from "src/services/api-client";
import { useDispatch } from "src/store";
interface Props {
  token: string;
}
const VerifyEmail: NextPage<Props> = ({ token }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const reduxDispatch = useDispatch();
  const isMounted = useMounted();
  const verifyEmail = async () => {
    setLoading(true);
    try {
      const response = await ApiClient.postWithToken(
        "/users/verify-email",
        "{}",
        token
      );
      if (response.status === 200) {
        setSuccess(true);
        setTimeout(() => {
          if (isMounted()) {
            const returnUrl =
              (router.query.returnUrl as string | undefined) ||
              "/dashboard?verified=true";
            router.push(returnUrl).catch(console.error);
          }
        }, 2000);
      }
    } catch (error) {
      if (error.response?.status === 403) {
        setErrorMessage("El link ha expirado");
      } else {
        if (error?.response) {
          setErrorMessage(JSON.stringify(error?.response.data));
        }
      }
      setSuccess(false);
    }
    setLoading(false);
  };
  useEffect(() => {
    verifyEmail();
  }, []);
  return (
    <Box
      sx={{
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
      }}
    >
      <Stack direction="column" alignItems="center" spacing={4}>
        <Typography variant="h1">
          {loading
            ? "Estamos verificando tus datos"
            : success
            ? "Tu cuenta ha sido verificada, por favor inicia sesión"
            : errorMessage}
        </Typography>
        {loading && <CircularProgress size={80} />}
      </Stack>
    </Box>
  );
};
VerifyEmail.getInitialProps = async ({ query }): Promise<Props> => {
  const token = (query.token as string) ?? "";
  return { token };
};
export default VerifyEmail;
