import React, { FC, useState } from "react";
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
import {
  errorNotification,
  succesNotification,
} from "src/slices/notification-slice";
import { MaterialUISwitch } from "../widgets/toggle";
import { useSelector } from "src/store";
import { InvestReponse } from "src/types/invest";
import { getUser } from "src/slices/user-slice";
import { MessageWithBorder } from "../widgets/message-with-border";
import { CommonModal } from "../common";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface Props {
  closeModal: () => void;
}
export const InvestMoneyForm: FC<Props> = ({ closeModal }) => {
  const { userData } = useSelector((state) => state.user);
  const { user } = userData;
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      amount: 0.0,
    },
    validationSchema: Yup.object({
      amount: Yup.number()
        .required("Debes ingresar la cantidad a invertir")
        .positive("La cantidad debe ser mayor a 0"),
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        const json = JSON.stringify(values);

        const response = await ApiClient.post(
          "/funds/638388bd54915e92006cba96/buy",
          json
        );
        const investResponse: InvestReponse = response.data;
        dispatch(getUser());
        setOpenModal(true);
        dispatch(
          succesNotification({
            msg: `Invertiste ${values.amount.toFixed(
              2
            )} USDT en Foundation. Te avisaremos cuando se acrediten`,
            page: "dashboard",
          })
        );
      } catch (err) {
        dispatch(
          errorNotification({
            msg: "No se pudo realizar la operación ",
            page: "dashboard",
          })
        );
      }
    },
  });
  const handleSetTotalFunds = () => {
    formik.setValues({ amount: user?.balance.available || 0 });
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
                  name="amount"
                  type="number"
                  onBlur={formik.handleBlur}
                  helperText={`Fondos di sponibles en cuenta ${user?.balance.available?.toFixed(
                    2
                  )} USDT`}
                  error={Boolean(formik.touched.amount && formik.errors.amount)}
                  value={formik.values.amount.toFixed(2)}
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
      <CommonModal handleClose={closeModal} open={openModal}>
        <MessageWithBorder
          close={closeModal}
          title={
            <Stack alignItems="center">
              <CheckCircleIcon color="primary" style={{ fontSize: 50 }} />
            </Stack>
          }
          content={
            <>
              <Typography variant="h5">{`Invertiste ${formik.values.amount.toFixed(
                2
              )} ARS`}</Typography>
              <Typography variant="body2">
                Tu inversión se acreditará el próximo miércoles 16/07/2022 a las
                12PM.
              </Typography>
              <Typography variant="body2">
                te enviaremos un email para avisarte.
              </Typography>
            </>
          }
        />
      </CommonModal>
    </Grid>
  );
};
