import React, { FC, useEffect } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
  InputAdornment,
  Card,
  CardContent,
  useTheme,
  Stack,
  CardHeader,
  CardActions,
} from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import ApiClient from "../../services/api-client";
import { useDispatch } from "react-redux";
import { setUser } from "src/slices/user-slice";
import {
  errorNotification,
  succesNotification,
} from "src/slices/my-account-notificacion-slice";
import { MaterialUISwitch } from "../widgets/toggle";
import { useSelector } from "src/store";

interface Props {
  total_funds: number;
  closeModal: () => void;
}
export const InvestMoneyForm: FC<Props> = ({ total_funds, closeModal }) => {
  const { userData } = useSelector((state) => state.user);
  const { user } = userData;
  const dispatch = useDispatch();
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      total_invest: 0.0,
    },
    validationSchema: Yup.object({
      total_invest: Yup.number()
        .required("Debes ingresar la cantidad a invertir")
        .positive("La cantidad debe ser mayor a 0"),
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        const json = JSON.stringify(values);

        const response = await ApiClient.patch("/users", json);
        closeModal();
        dispatch(setUser({ token: "", user: response.data }));
        dispatch(
          succesNotification({
            msg: "Cambiaste tu total_invest",
            tab: "my-data",
          })
        );
      } catch (err) {
        dispatch(
          errorNotification({
            msg: "No se pudo cambiar tu total_invest",
            tab: "my-data",
          })
        );
      }
    },
  });
  const handleSetTotalFunds = () => {
    formik.setValues({ total_invest: user?.balance.available || 0 });
  };

  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      sx={{ bgcolor: "background.default" }}
      p={2}
      rowSpacing={3}
      boxShadow={24}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Grid item xs={12} md={12} sm={12} lg={12}>
        <Card elevation={0} style={{ background: "rgba(0,0,0,0)" }}>
          <CardHeader
            title={<Typography variant="h3">Invertir dinero</Typography>}
            style={{ paddingTop: 0 }}
          />
          <CardContent
            style={{
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body1">Foundation</Typography>
              <MaterialUISwitch />
            </Stack>
          </CardContent>
          <CardActions>
            <Grid container rowSpacing={5}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextField
                  fullWidth
                  focused
                  label="Cantidad USDT"
                  name="total_invest"
                  type="number"
                  onBlur={formik.handleBlur}
                  helperText={`Fondos di sponibles en cuenta ${user?.balance.available?.toFixed(
                    2
                  )} USDT`}
                  error={Boolean(
                    formik.touched.total_invest && formik.errors.total_invest
                  )}
                  value={formik.values.total_invest.toFixed(2)}
                  onChange={formik.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <Button variant="text" onClick={handleSetTotalFunds}>
                          Total fondos
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                  inputProps={{
                    step: "0.01",
                    min: "0.00",
                    pattern: "^d*(.d{0,2})?$",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Button
                  color="primary"
                  fullWidth
                  variant="contained"
                  type="submit"
                  disabled={Boolean(
                    Object.keys(formik.errors).length || formik.isSubmitting
                  )}
                  endIcon={
                    formik.isSubmitting && (
                      <CircularProgress size={20} color="primary" />
                    )
                  }
                >
                  Invertir
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} sm={12} lg={12}>
        <Card sx={{ borderTop: `3px solid ${theme.palette.primary.main}` }}>
          <CardContent>
            <Typography variant="body2" align="center">
              Las inversiones en el fondo se hacen efectivas los días miércoles
              a las 12PM.
            </Typography>
            <Typography variant="body2" align="center">
              Tu inversión se acreditará dentro de:
            </Typography>
            <Typography variant="body2" align="center" color="primary">
              3 días, 6 horas
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
