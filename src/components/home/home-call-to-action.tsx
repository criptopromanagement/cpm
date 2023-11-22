import type { FC } from "react";
import { Box } from "@mui/system";
import { Container, Grid, Button, Typography } from "@mui/material";
import { Plan } from "src/types/plan";
import { HomeCallCard } from "./home-call-to-action-card";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

export const HomeCallToAction: FC = () => {
    const isMobile = useSelector((state: RootState) => state.mobile.isMobile);

    const plans: Plan[] =
        [
            {
                id: "2",
                description:
                    "Registrate y empezá a invertir en la industria cripto.",
                subdescription: "",
                cover: "/static/home/contact.svg",
                title: "",
                informationLink: "",
                investmentLink: "",

            }
        ]

    return (
        isMobile ? (
        <Container
            maxWidth={false}
                // maxWidth="lg"
                style={{
                    padding: 0
                }}
         >
                <Grid
                    container
                    justifyContent="center"
                    spacing={5}
                >
                    {plans.map((plan) => (
                        <HomeCallCard key={plan.id} plan={plan} />
                    ))}
            <Box
            component="main"
            sx={{
                flexGrow: 5,
            }}
            >
            </Box>
                 </Grid>
        </Container>
        ) : (
        //desktop
        <Box margin='12rem 0 -0.2rem 7.5rem'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Columna de Texto e Input */}
        <div style={{ flex: 1 }}>
        <Typography align="left"
                    variant="h3">
                    Registrate e invertí
        </Typography>
        <Typography align="left"
                    variant="h3"
                    marginBottom={ '2rem' }>
                    en la indrustria cripto
                    </Typography>
          <Button
          sx= {{ width: 'fit-content', paddingLeft: '40pt', paddingRight: '40pt' }}
                      component="a"
                      size="large"
                      variant="contained"
                    >
                      Invertir
            </Button>
        </div>
        {/* Columna de Imagen */}
        <div style={{ flex: 1, alignItems: 'bottom' }}>
        <img
        alt="home-cta"
        src="/images/home-cta.svg"
      />
        </div>
      </div>
      </Box>
        )
    )
}
