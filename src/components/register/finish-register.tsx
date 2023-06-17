import { Button, Grid, Link, Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import { MessageWithBorder } from "../widgets/message-with-border";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
interface Props {
  email: string;
}
export const FinishRegister: FC<Props> = ({ email }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      pt={10}
    >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="h1" align="center">
          Verificá tu email
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="h2" align="center">
          Te enviamos un email a:
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="h2" align="center">
          {email}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <MessageWithBorder
          title={
            <Typography variant="h4" align="center">
              Revisá tu correo y hacé click en el enlace que te enviamos
            </Typography>
          }
          closeActionVisible={false}
          boxShadow={0}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
        >
          <InfoOutlinedIcon fontSize="small" color="primary" />
          <Typography variant="body2" align="center">
            En caso de no encontrarlo, revisá la casilla de SPAM
          </Typography>
        </Stack>
      </Grid>
      <Button variant="outlined" sx={{ marginTop: "30vh" }}>
        Reenviar email
      </Button>
      <Grid item xs={12} sm={12} md={12} lg={12} mt={2}>
        <Link href="/" color="textPrimary" variant="subtitle2">
          <Typography
            color="primary"
            variant="subtitle2"
            align="center"
            sx={{ textDecoration: "underline" }}
          >
            Volver al inicio
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};
