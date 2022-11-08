import type { FC } from "react";
import { Box } from "@mui/system";
import { Container, Grid } from "@mui/material";
import { Plan } from "src/types/plan";
import { HomeCallCard } from "./home-call-to-action-card";

export const HomeCallToAction: FC = (props) => {

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
        <Box
            component="main"
            sx={{
                flexGrow: 5,
            }}
        >
            <Container
                maxWidth="lg"
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
                </Grid>
            </Container>
        </Box>
    );
};
