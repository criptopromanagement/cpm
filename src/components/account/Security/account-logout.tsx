import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

export const AccountLogout = () => {
  return (
    <Grid item md={12} xs={12}>
      <Card>
        <CardHeader title="Salir de mi cuenta"  sx={{ paddingBottom: 0 }}/>
        <CardContent sx={{ paddingTop: 2 }}>
          <Grid container direction="column" spacing={3} sx={{ paddingTop: 0 }}>
            <Grid item>
              <Typography variant="body2">
                Para volver a ingresa deberás ingresar tu usuario y contraseña
                nuevamente
              </Typography>
            </Grid>
            <Grid item>
              <Button fullWidth color="primary" variant="contained">
                Salir de la cuenta
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
