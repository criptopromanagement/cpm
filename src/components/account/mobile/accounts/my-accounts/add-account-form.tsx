import React, { FC } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import {
  errorNotification,
  succesNotification,
} from "src/slices/my-account-notificacion-slice";
import { MyAccountNotification } from "src/components/common/notification/my-account-notification";

interface Props {
  closeModal: () => void;
}
export const AddAccountForm: FC<Props> = ({ closeModal }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      cbu: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Debes ingresar el nombre de cuenta"),
      cbu: Yup.string().required("Debes ingresar el CBU"),
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        const json = JSON.stringify(values);
        // const response = await ApiClient.patch("/users", json
        closeModal();
        dispatch(
          succesNotification({
            msg: "Añadiste una nueva cuenta bancaria",
            tab: "my-accounts",
          })
        );
      } catch (err) {
        dispatch(
          errorNotification({
            msg: "No se pudo cambiar tu name",
            tab: "my-accounts",
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
      sx={{ bgcolor: "background.paper" }}
      p={2}
      rowSpacing={2}
      boxShadow={24}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <MyAccountNotification showSuccess showError currentTab="my-accounts" />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="h3">Agregar una cuenta bancaria</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography variant="body1">
          Te enviaremos un name para confirmación
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          focused
          label="Nombre de cuenta"
          placeholder="Ej: Santander pesos"
          name="name"
          type="text"
          onBlur={formik.handleBlur}
          helperText={formik.touched.name && formik.errors.name}
          error={Boolean(formik.touched.name && formik.errors.name)}
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          focused
          label="CBU"
          placeholder="CBU o Alias"
          name="cbu"
          type="text"
          onBlur={formik.handleBlur}
          helperText={formik.touched.cbu && formik.errors.cbu}
          error={Boolean(formik.touched.cbu && formik.errors.cbu)}
          value={formik.values.cbu}
          onChange={formik.handleChange}
        />
      </Grid>
      <Grid item xs={12}>
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
          Guardar
        </Button>
      </Grid>
    </Grid>
  );
};
