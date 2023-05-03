import type { FC } from "react";
import { Box } from "@mui/system";
import { Container, Grid, Typography } from "@mui/material";
import { Plan } from "src/types/plan";
import { CardPlan } from "./home-card-plan";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

export const HomePlans: FC = (props) => {
  const isMobile = useSelector((state: RootState) => state.mobile.isMobile);

  const plans: Plan[] = [
    {
      id: "1",
      cover: "/static/home/foundation.svg",
      title: "Foundation",
      description:
        "Índice que reúne a las 10 plataformas de contratos inteligentes mas importantes y mejor consolidadas del sector.",
      subdescription: "Ponderado según la capitalización de mercado y rebalanceado mensualmente.",
      informationLink: "",
      investmentLink: "",
    },
  ];
  return (
    isMobile ? (
      <>
      <Box marginLeft={2}>
        <Typography align="left"
          variant="h1">
          Fondos de
          inversión cripto
        </Typography>
        <Typography
          align="left"
          variant="subtitle2"
          sx={{ py: 1 }}
        >
          Basados en Índices con los principales criptoactivos por sector, rebalanceado períodicamente
        </Typography>
        </Box>
        <Box
          component="main"
          marginTop={5}
          marginLeft={5}
          sx={{
            flexGrow: 5,
          }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              justifyContent="center"
              spacing={5}
              padding={2}
            >
              {plans.map((plan) => (
                <CardPlan key={plan.id} plan={plan} />
              ))}
            </Grid>
          </Container>
        </Box>
      </>
    ) : (
      <>
        <Box marginLeft={'100px'} marginBottom={5}>
          <Typography align="left"
            variant="h1">
            Fondos de
            inversión cripto
          </Typography>
          <Typography
            align="left"
            variant="subtitle2"
            sx={{ py: 1 }}
          >
            Basados en Índices con los principales criptoactivos por sector, rebalanceado períodicamente
          </Typography>
          </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 5,
            flexDirection: "column",
          }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              justifyContent="center"
              spacing={5}
              padding={2}
            >
              {plans.map((plan) => (
                <CardPlan key={plan.id} plan={plan} />
              ))}
            </Grid>
          </Container>
        </Box>
      </>
    )
  );
};
