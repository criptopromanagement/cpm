import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Card, Container, Grid } from "@mui/material";
import { useMounted } from "../../hooks/use-mounted";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    title: "FINANZAS DESCENTRALIZADAS",
    subtitle:
      "Dentro del ecosistema crypto, seguramente escuchaste hablar de DeFi. DeFi significa Finanzas Descentralizadas. Algo así como Wall Street sobre blockchain, pero con más transparencia.",
    imgPath: "/static/blog/defi.png",
  },
  {
    title: "ETHEREUM. UNA COMPUTADORA MUNDIAL",
    subtitle:
      "No sería exagerado comparar Ethereum con internet, con un estado o con una gran organización. Conecta usuarios en todo el mundo, tiene sus propias reglas.",
    imgPath: "/static/blog/ethereum.png",
  },
];

export const HomeBlogMobile = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;
  const isMounted = useMounted();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (

    <>
      <Box
        marginLeft={2}
      >
        <Typography
          align="left"
          variant="h1">
          Blog e investigación
        </Typography>
        <Typography
          align="left"
          variant="subtitle2"
          sx={{ py: 1 }}
        >
          Qué está pasando en el mundo cripto y por qué es importante. Conocé mas sobre las últimas investigaciones del equipo de CPM.
        </Typography>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 5,
          pt: 3,
          pb: 3,
        }}
      >
        <Container maxWidth="lg">
          <Grid container md={4} xs={12} justifyContent="center">
            <Card
              sx={{
                height: "100%",
                p: 2,
              }}
            >
              <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {images.map((images) => (
                  <div key={images.title}>
                    {Math.abs(activeStep) <= 2 ? (
                      <Box
                        component="img"
                        sx={{
                          height: "100%",
                          display: "block",
                          maxWidth: "100%",
                          overflow: "hidden",
                          width: "100%",
                        }}
                        src={images.imgPath}
                        alt={images.title}
                      />
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
              <Paper
                square
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: 70,
                  pl: 2,
                  pb: 1,
                  bgcolor: "background.footer",
                }}
              >
                <Typography>{images[activeStep].title}</Typography>
              </Paper>
              <Paper
                square
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: 80,
                  pl: 2,
                  pb: 3,
                  bgcolor: "background.footer",
                }}
              >
                <Typography color="textSecondary" variant="caption">
                  {images[activeStep].subtitle}
                </Typography>
              </Paper>
              <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                  </Button>
                }
              />
            </Card>
          </Grid>
        </Container>
      </Box>
    </>
  );
}


