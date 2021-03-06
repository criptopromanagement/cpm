import type { FC } from "react";
import NextLink from "next/link";
import { Box } from "@mui/system";
import { Container, Grid } from "@mui/material";
import { Plan } from "src/types/plan";
import { CardPlan } from "./home-card-plan";

export const HomePlans: FC = (props) => {
  const plans: Plan[] = [
    {
      id: "1",
      cover: "/static/home/foundation.svg",
      title: "Foundation",
      description:
        "Pack de inversión en proyectos cripto. Invertí en contratos inteligentes de manera diversificada.",
      informationLink: "",
      investmentLink: "",
    },
    {
      id: "2",
      cover: "/static/home/p2e.svg",
      title: "P2E: Axie Infinity",
      description:
        "Ganá en el mundo gaming, sin jugar. Becá jugadores y llevá a tu equipo a las grandes ligas.",
      informationLink: "",
      investmentLink: "",
    },
  ];
  return (
    <Box
      component="main"
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
  );
};
