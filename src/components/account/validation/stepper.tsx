import { FC } from "react";
import { Box, Container, IconButton, Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { StepperForm } from "./stepper-forms";

export const Stepper: FC = (props) => {
  return (
    <Box
      sx={{
        minHeight: "100%",
        p: { xs: 0.5, lg: 3 },
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={5}
          sx={{
            position: "relative",
            backgroundColor: "background.default",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              pb: 2,
              pt: 3,
              px: 3,
            }}
          >
            <div>
              <Typography variant="h5" align="center">
                Completá tu cuenta
              </Typography>
              <Typography color="textSecondary" sx={{ mt: 1 }} variant="body2">
                Completá los siguientes datos personales para empezar a invertir
              </Typography>
            </div>
          </Box>
          <StepperForm />
        </Paper>
      </Container>
    </Box>
  );
};
