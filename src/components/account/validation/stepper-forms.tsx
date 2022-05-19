import {
  Box,
  Button,
  FormHelperText,
  TextField,
  Alert,
  MobileStepper,
} from "@mui/material";
import { useFormik } from "formik";
import { FC, useState } from "react";
import * as Yup from "yup";

export const StepperForm: FC = (props) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const formik = useFormik({
    initialValues: {
      cuil: "",
      telefono: "",
      name: " ",
      passwordConfirmation: "",
      policy: false,
      submit: null,
    },
    validationSchema: Yup.object({
      cuil: Yup.string()
        .min(14, "El CUI o CUIL debe tener el siguiente formato xx-xxxxxxxx-x")
        .max(14, "El CUI o CUIL debe tener el siguiente formato xx-xxxxxxxx-x")
        .required("CUI o CUIL es requerido"),
      telefono: Yup.string()
        .min(11, "El Teléfono debe terner el siguiente formato xx-xxxxxxxx")
        .max(11, "El Teléfono debe terner el siguiente formato xx-xxxxxxxx")
        .required("Teléfono es requerido"),
    }),
    onSubmit: async (values, helpers): Promise<void> => {},
  });

  return (
    <form noValidate onSubmit={formik.handleSubmit} {...props}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <MobileStepper
          variant="dots"
          steps={3}
          sx={{
            backgroundColor: "background.default",
          }}
          position="static"
          activeStep={activeStep}
          nextButton={null}
          backButton={null}
        />
      </Box>
      {formik.errors.submit && (
        <Box sx={{ mt: 3 }}>
          <Alert severity="error" variant="outlined">
            {formik.errors.submit}
          </Alert>
        </Box>
      )}
      {activeStep === 0 && (
        <>
          <TextField
            error={Boolean(formik.touched.cuil && formik.errors.cuil)}
            fullWidth
            helperText={formik.touched.cuil && formik.errors.cuil}
            label="CUIL O CUIT"
            margin="normal"
            placeholder="Ingresa tu CUIT o CUIL"
            name="cuil"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="cuil"
            value={formik.values.cuil}
            variant="outlined"
          />
          <TextField
            error={Boolean(formik.touched.telefono && formik.errors.telefono)}
            fullWidth
            helperText={formik.touched.telefono && formik.errors.telefono}
            label="Teléfono"
            margin="normal"
            placeholder="Ingresa tu teléfono"
            name="telefono"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="tel"
            value={formik.values.telefono}
            variant="outlined"
          />
        </>
      )}
      {activeStep === 1 && (
        <>
          <TextField
            error={Boolean(formik.touched.cuil && formik.errors.cuil)}
            fullWidth
            helperText={formik.touched.cuil && formik.errors.cuil}
            label="CUIL O CUIT"
            margin="normal"
            name="cuil"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="cuil"
            value={formik.values.cuil}
            variant="outlined"
          />
          <TextField
            error={Boolean(formik.touched.telefono && formik.errors.telefono)}
            fullWidth
            helperText={formik.touched.telefono && formik.errors.telefono}
            label="Teléfono"
            margin="normal"
            name="telefono"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="tel"
            value={formik.values.telefono}
            variant="outlined"
          />
        </>
      )}
      {activeStep === 2 && (
        <>
          <TextField
            error={Boolean(formik.touched.cuil && formik.errors.cuil)}
            fullWidth
            helperText={formik.touched.cuil && formik.errors.cuil}
            label="CUIL O CUIT"
            margin="normal"
            name="cuil"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="cuil"
            value={formik.values.cuil}
            variant="outlined"
          />
          <TextField
            error={Boolean(formik.touched.telefono && formik.errors.telefono)}
            fullWidth
            helperText={formik.touched.telefono && formik.errors.telefono}
            label="Teléfono"
            margin="normal"
            name="telefono"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="tel"
            value={formik.values.telefono}
            variant="outlined"
          />
        </>
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          px: 3,
          py: 1.5,
        }}
      >
        <Button
          disabled={formik.isSubmitting}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          onClick={handleNext}
        >
          Siguiente
        </Button>
      </Box>
    </form>
  );
};
