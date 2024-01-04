import type { FC } from "react";
import { Box } from "@mui/system";
import { Grid, Button, Typography } from "@mui/material";
import { Plan } from "src/types/plan";
import { HomeCallCard } from "./home-call-to-action-card";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

export const HomeCallToAction: FC = () => {
    const isMobile = useSelector((state: RootState) => state.mobile.isMobile);

    return (
        isMobile ? (
        <Box>
            <div style={{ display:'flex', alignItems:'center', textAlign:'center', justifyContent:'center' }} >
            <Grid>
                <Typography align="center"
                            variant="subtitle2"
                            sx={{ padding:"36pt", marginTop:"20pt" }}>
                            Registrate y empezá a invertir en la industria cripto
                </Typography>
                <Button
          sx= {{ width: 'fit-content',  padding: '4pt 24pt 4pt 24pt', marginTop: '-26pt' }}
                      component="a"
                      size="large"
                      variant="contained"
                    >
                      Invertir
            </Button>
            </Grid> 
            </div>
            <div style={{ flex: 1, alignItems: 'bottom', marginBottom: '-3pt', marginTop:'-44pt' }}>
        <img
        alt="home-cta-mobile"
        src="/images/home-cta-mobile.svg"
      />
        </div>
        </Box>
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
