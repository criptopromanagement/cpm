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
  closeModal: () => void;
}
export const DepositMoneyForm: FC<Props> = ({ closeModal }) => {
  const { userData } = useSelector((state) => state.user);
  const { user } = userData;
  const dispatch = useDispatch();
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      total_local_currency: 0.0,
      total_usdt: 0.0,
    },
    validationSchema: Yup.object({
      total_local_currency: Yup.number()
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
            title={<Typography variant="h3">Depositá dinero</Typography>}
            subheader="Para invertir dinero en el fondo cargá dinero a tu cuenta CPM"
            style={{ paddingTop: 0 }}
          />
          <CardActions>
            <Grid container rowSpacing={5}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextField
                  fullWidth
                  label="Cantidad ARS"
                  name="total_local_currency"
                  type="number"
                  onBlur={formik.handleBlur}
                  error={Boolean(
                    formik.touched.total_local_currency &&
                      formik.errors.total_local_currency
                  )}
                  value={formik.values.total_local_currency.toFixed(2)}
                  onChange={formik.handleChange}
                  inputProps={{
                    step: "0.01",
                    min: "0.00",
                    pattern: "^d*(.d{0,2})?$",
                  }}
                  helperText={
                    formik.touched.total_local_currency &&
                    formik.errors.total_local_currency
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextField
                  fullWidth
                  label="Cantidad USDT"
                  name="total_usdt"
                  type="number"
                  onBlur={formik.handleBlur}
                  error={Boolean(
                    formik.touched.total_usdt && formik.errors.total_usdt
                  )}
                  value={formik.values.total_usdt.toFixed(2)}
                  onChange={formik.handleChange}
                  inputProps={{
                    step: "0.01",
                    min: "0.00",
                    pattern: "^d*(.d{0,2})?$",
                  }}
                  helperText={
                    formik.touched.total_usdt && formik.errors.total_usdt
                  }
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
                  Depositar dinero
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
              Depositá el monto que quieras invertir en pesos y nosotros lo
              convertiremos a USDT
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
