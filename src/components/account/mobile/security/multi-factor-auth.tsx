import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
export const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  padding: 1,
  width: 70,
  height: 30,
  "& .MuiSwitch-track": {
    borderRadius: 22,
    backgroundColor: "#1c1c1c",

    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "65%",
      transform: "translateY(-50%)",
      width: 26,
      height: 26,
      fontSize: 12,
    },
    "&:before": {
      content: '"OFF"',
      color: "#1c1c1c",
      left: 7,
    },
    "&:after": {
      content: '"ON"',
      color: "#0F3",
      right: 7,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    transform: "translateX(10px) !important",
    width: 20,
    height: 20,
    margin: -5,
  },
}));
export const MultiFactorAuth = () => {
  return (
    <Grid container item xs={12} sm={12}>
      <Grid
        container
        item
        component={Paper}
        padding={2}
        direction="row"
  justifyContent="space-between"
  alignItems="flex-start"
      >
        <Grid item md={8} lg={8}>
          <Typography variant="h2">Multi factor</Typography>
          <Typography variant="h2">de autenticación</Typography>
        </Grid>
        <Grid item md={2} lg={2} />
        <Grid item md={2} lg={2}>
          <FormGroup>
            <FormControlLabel
              control={<MaterialUISwitch sx={{ m: 1 }} />}
              label=""
            />
          </FormGroup>
        </Grid>
        <Grid item md={8} lg={8}>
          <Typography variant="body1">
            La autenticación de dos factores sirve para agregar una instancia de
            seguridad al inicio de sesión en tu cuenta
          </Typography>
          <Typography variant="body1">
            Te recomendamos activar esta herrmienta para mayor seguridad
          </Typography>
        </Grid>
        <Grid item md={8} lg={8} mt={2}>
          <FormControl>
            <RadioGroup name="auth-type">
              <FormControlLabel
                value="email"
                control={<Radio />}
                label="Email"
              />
              <FormControlLabel
                value="cellphone"
                control={<Radio />}
                label="Telefono celular"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
};
