import {
  Box,
  Button,
  TextField,
  Alert,
  MobileStepper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Tooltip,
  IconButton,
  Grid,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { useFormik } from "formik";
import { FC, useEffect, useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/lab";
import { stepperFormSchema } from "../../../yup-schemas";
import { PhotoButton } from "./photo-button";
import { Nationalities as nationalities } from "../../../__next-api__/nationalities-api";
import {es} from 'date-fns/locale'

export const StepperForm: FC = (props) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [validFieldsAtStep, setValidFieldsAtStep] = useState<boolean>(false);

  const handleNext = () => {
    const nextStep: number = activeStep + 1;
    nextStep !== 2 && setValidFieldsAtStep(false);
    setActiveStep(nextStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const setImageUrl = (field: string, value: string) => {
    formik.setFieldValue(field, value);
  };
  const formik = useFormik({
    initialValues: {
      nombreApellido: "",
      DNI: "",
      nacionalidad: "-1", // -1 default to select the option -1 for placeholder
      fechaNacimiento: "",
      domicilio: "",
      cuil: "",
      telefono: "",
      option1: "",
      nombreCuenta: "",
      CBU: "",
      frenteDNI: "",
      dorsoDNI: "",
      submit: null,
    },
    validateOnChange: true,
    validationSchema: stepperFormSchema,
    onSubmit: async (values, helpers): Promise<void> => {},
  });

  useEffect(() => {
    switch (activeStep) {
      case 0:
        setValidFieldsAtStep(
          !Boolean(
            (formik.touched.nombreApellido && formik.errors.nombreApellido) ||
              formik.values.nombreApellido === ""
          ) &&
            !Boolean(
              (formik.touched.DNI && formik.errors.DNI) ||
                formik.values.DNI === ""
            ) &&
            !Boolean(formik.values.nacionalidad === "-1") &&
            !Boolean(
              (formik.touched.fechaNacimiento &&
                formik.errors.fechaNacimiento) ||
                formik.values.fechaNacimiento === ""
            )
        );
        break;
      case 1:
        setValidFieldsAtStep(
          !Boolean(
            formik.touched.domicilio &&
              formik.errors.domicilio &&
              formik.values.domicilio === ""
          ) &&
            !Boolean(formik.touched.cuil && formik.errors.cuil) &&
            !Boolean(formik.touched.telefono && formik.errors.telefono) &&
            !Boolean(
              (formik.touched.option1 && formik.errors.option1) ||
                formik.values.option1 === ""
            )
        );
        break;
      default:
    }
  }, [formik.values]);

  return (
    <form noValidate onSubmit={formik.handleSubmit} {...props}>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="stretch"
        p={3}
      >
        <Grid item>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            <MobileStepper
              variant="dots"
              steps={4}
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
        </Grid>

        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "60vh" }}
        >
          <Grid
            item
            xs={12}
            lg={12}
            md={12}
            sm={12}
            mt={4}
            sx={{ width: "100%" }}
          >
            {activeStep === 0 && (
              <>
                <TextField
                  error={Boolean(
                    formik.touched.nombreApellido &&
                      formik.errors.nombreApellido
                  )}
                  fullWidth
                  helperText={
                    formik.touched.nombreApellido &&
                    formik.errors.nombreApellido
                  }
                  label="Nombre y Apellido"
                  margin="normal"
                  placeholder="Ingresa tu nombre y apellido"
                  name="nombreApellido"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.nombreApellido}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(formik.touched.DNI && formik.errors.DNI)}
                  fullWidth
                  helperText={formik.touched.DNI && formik.errors.DNI}
                  label="DNI"
                  margin="normal"
                  placeholder="Ingresa tu DNI sin espacios o puntos"
                  name="DNI"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="tel"
                  value={formik.values.DNI}
                  variant="outlined"
                />

                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel id="select-label-nacionalidad">
                    Nacionalidad
                  </InputLabel>
                  <Select
                    labelId="select-label-nacionalidad"
                    id="select-nacionalidad"
                    value={formik.values.nacionalidad}
                    onChange={formik.handleChange}
                    onAbort={() => console.log("capture")}
                    name="nacionalidad"
                    label="Nacionalidad"
                    renderValue={(selected) => {
                      if (selected === "-1") {
                        return (
                          <Typography className="css-thnkpo-MuiFormLabel-root-MuiInputLabel-root">
                            Seleccionar país
                          </Typography>
                        );
                      }

                      return selected;
                    }}
                  >
                    <MenuItem disabled value="-1">
                      <em>Seleccionar país</em>
                    </MenuItem>
                    {nationalities.map(({ name }) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <LocalizationProvider locale={es} dateAdapter={AdapterDateFns}>
                  <MobileDatePicker
                    label="Fecha de nacimiento"
                    value={formik.values.fechaNacimiento}
                    inputFormat="dd-MM-yyyy"
                    onChange={(newDate) => {
                      formik.setFieldValue("fechaNacimiento", newDate);
                    }}
                    maxDate={new Date()}
                    renderInput={(params) => {
                      return (
                        <TextField
                          {...params}
                          name="fechaNacimiento"
                          error={Boolean(
                            formik.touched.fechaNacimiento &&
                              formik.errors.fechaNacimiento
                          )}
                          fullWidth
                          helperText={
                            formik.touched.fechaNacimiento &&
                            formik.errors.fechaNacimiento
                          }
                          margin="normal"
                        />
                      );
                    }}
                  />
                </LocalizationProvider>
              </>
            )}

            {activeStep === 1 && (
              <>
                <TextField
                  error={Boolean(
                    formik.touched.domicilio && formik.errors.domicilio
                  )}
                  fullWidth
                  helperText={
                    formik.touched.domicilio && formik.errors.domicilio
                  }
                  label="Domicilio"
                  margin="normal"
                  placeholder="Ingresa tu domicilio"
                  name="domicilio"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.domicilio}
                  variant="outlined"
                />
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
                  type="text"
                  value={formik.values.cuil}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(
                    formik.touched.telefono && formik.errors.telefono
                  )}
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
                <FormControl>
                  <RadioGroup
                    name="option1"
                    value={formik.values.option1}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  >
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label={
                        <>
                          {"Sujeto obligado"}
                          <Tooltip sx={{ ml: 1 }} title="Cambia este mensaje">
                            <IconButton color="primary">
                              <HelpIcon />
                            </IconButton>
                          </Tooltip>
                        </>
                      }
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label={
                        <>
                          {"Persona políticamente expuesta"}
                          <Tooltip sx={{ ml: 1 }} title="Cambia este mensaje">
                            <IconButton color="primary">
                              <HelpIcon />
                            </IconButton>
                          </Tooltip>
                        </>
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </>
            )}
            {activeStep === 2 && (
              <>
                <TextField
                  error={Boolean(
                    formik.touched.nombreCuenta && formik.errors.nombreCuenta
                  )}
                  fullWidth
                  helperText={
                    formik.touched.nombreCuenta && formik.errors.nombreCuenta
                  }
                  label="Nombre de cuenta"
                  placeholder="Asignar un nombre (ej: Galicia Pesos)"
                  margin="normal"
                  name="nombreCuenta"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.nombreCuenta}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(formik.touched.CBU && formik.errors.CBU)}
                  fullWidth
                  helperText={formik.touched.CBU && formik.errors.CBU}
                  label="CBU o Alias"
                  placeholder="CBU o Alias de tu cuenta"
                  margin="normal"
                  name="CBU"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="tel"
                  value={formik.values.CBU}
                  variant="outlined"
                />

                <Typography
                  textAlign="center"
                  sx={{ mt: 2, mb: 2 }}
                  variant="link"
                  onClick={handleNext}
                  component="p"
                >
                  Prefiero hacerlo en otro momento
                </Typography>
              </>
            )}
            {activeStep === 3 && (
              <>
                <Grid
                  item
                  xs={12}
                  lg={12}
                  md={12}
                  sm={12}
                  sx={{
                    py: 2,
                  }}
                >
                  <PhotoButton
                    label="Foto DNI frente"
                    name="frenteDNI"
                    value={formik.values.frenteDNI}
                    setValue={setImageUrl}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={12}
                  md={12}
                  sm={12}
                  sx={{
                    py: 2,
                  }}
                >
                  <PhotoButton
                    label="Foto DNI dorso"
                    name="dorsoDNI"
                    value={formik.values.dorsoDNI}
                    setValue={setImageUrl}
                  />
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} lg={12} md={12} sm={12}>
          {activeStep === 3 ? (
            <Button
              disabled={formik.isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              onClick={handleNext}
            >
              Finalizar
            </Button>
          ) : (
            <Button
              disabled={!validFieldsAtStep}
              fullWidth
              size="large"
              variant="contained"
              onClick={handleNext}
            >
              Siguiente
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  );
};
