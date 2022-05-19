import { FC, useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  MobileStepper,
  Paper,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { StepperForm } from "./stepper-forms";

export const Stepper: FC = (props) => {


  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        p: 3,
      }}
    >
      <Container maxWidth="sm">
        <Paper 
          elevation={12} 
          sx={{
            position: "relative",
            backgroundColor: "background.default",
            minHeight: '90vh'
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
              <Typography 
                variant="h5" 
                align="center"
              >
                Completá tu cuenta
              </Typography>
              <Typography color="textSecondary"
                sx={{ mt: 1 }}
                variant="body2"
              >
                Completá los siguientes datos personales para empezar a invertir
              </Typography>
            </div>
          </Box>
          <Box
            p={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
          <StepperForm/>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
