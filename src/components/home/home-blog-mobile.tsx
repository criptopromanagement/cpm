import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Avatar, Box, Card, CardContent, Chip, Link, Typography, Grid, Button, Container } from '@mui/material';
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useMounted } from "../../hooks/use-mounted";
import { getInitials } from "src/utils/get-initials";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    title: "FINANZAS DESCENTRALIZADAS",
    subtitle:
      "Dentro del ecosistema crypto, seguramente escuchaste hablar de DeFi. DeFi significa Finanzas Descentralizadas. Algo así como Wall Street sobre blockchain, pero con más transparencia.",
    imgPath: "/static/blog/defi.png",
    author: {
      avatar: '',
      name: 'Mauricio Luduenia'
    }
  },
  {
    title: "ETHEREUM. UNA COMPUTADORA MUNDIAL",
    subtitle:
      "No sería exagerado comparar Ethereum con internet, con un estado o con una gran organización. Conecta usuarios en todo el mundo, tiene sus propias reglas.",
    imgPath: "/static/blog/ethereum.png",
    author: {
      avatar: '',
      name: 'CPM'
    }
  },
];


export const HomeBlogMobile = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;
  const isMounted = useMounted();

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box marginLeft={2}>
        <Typography align="left" variant="h1">
          Blog e investigación
        </Typography>
        <Typography align="left" variant="subtitle2" sx={{ py: 1 }}>
          Qué está pasando en el mundo cripto y por qué es importante. Conocé mas sobre las últimas investigaciones del equipo de CPM.
        </Typography>
      </Box>
      <Box component="main" sx={{ flexGrow: 5, pt: 3, pb: 3 }}>
        <Container maxWidth="lg">
          <Grid container md={4} xs={12} justifyContent="center" >
            <Card elevation={0} sx={{ height: "100%", p: 2, backgroundColor: "#1C1C1C" }}>
              <Box
                sx={{
                  border: "1px white solid",
                  borderRadius: "18px"
                }}
              >
                <AutoPlaySwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
                  interval={5000} // Añadido para ajustar el intervalo de cambio de imágenes
                  slideStyle={{ width: "100%" }} // Añadido para mejorar el rendimiento
                >
                  {images.map((image, index) => (
                    <div key={index}>
                      {Math.abs(activeStep - index) <= 2 && ( // Añadido para mostrar solo las imágenes cercanas al paso activo
                        <Box
                          component="img"
                          sx={{
                            height: "100%",
                            display: "block",
                            maxWidth: "100%",
                            overflow: "hidden",
                            width: "100%",
                            borderTopLeftRadius: "18px",
                            borderTopRightRadius: "18px"
                          }}
                          src={image.imgPath}
                          alt={image.title}
                        />
                      )}
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
                    backgroundColor: "#1C1C1C"
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
                    backgroundColor: "#1C1C1C",
                    borderBottomLeftRadius: "18px",
                    borderBottomRightRadius: "18px"
                  }}
                >
                  <Typography color="textSecondary" variant="caption">
                    {images[activeStep].subtitle}
                  </Typography>

                </Paper>

                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    marginLeft: "10px",
                    marginBottom: "18px"

                  }}
                >
                  <Avatar
                    src={images[activeStep].author.avatar}
                    sx={{ mr: 2 }}
                  >
                    {getInitials(images[activeStep].author.name)}
                  </Avatar>

                  <Typography variant="subtitle2">
                    By{' '}
                    {images[activeStep].author.name}
                  </Typography>
                </Box>

              </Box>
            </Card>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton
              backButton
            />
          </Grid>
        </Container>
      </Box>
    </>
  );
};
