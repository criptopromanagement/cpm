import React, { FC } from "react";
import { Card, Grid, Typography, CardContent, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface Props {
  closeModal: () => void;
}

export const FormChangeAddress: FC<Props> = ({ closeModal }) => {
  const theme = useTheme();
  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      sx={{ bgcolor: "background.paper" }}
      p={2}
      rowSpacing={2}
      boxShadow={24}
    >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Card style={{ borderTop: `3px solid ${theme.palette.primary.main}` }}>
          <CardContent>
            <Typography variant="body1" textAlign="center">
              Para cambiar el domicilio enviá una foto del frente y del dorso de
              tu DNI con el asunto CAMBIO DE DOMICILIO a{" "}
              <a href="mailto:info@cpmanager.io">
                <Typography
                  component="span"
                  color="primary"
                  style={{ textDecoration: "underline" }}
                >
                  info@cpmanager.io
                </Typography>
              </a>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Button
          color="primary"
          fullWidth
          variant="outlined"
          onClick={closeModal}
        >
          Volver al inicio
        </Button>
      </Grid>
    </Grid>
  );
};
