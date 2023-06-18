import {
  Box,
  Button,
  Grid,
  Link,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";
import { MessageWithBorder } from "../widgets/message-with-border";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useSelector } from "src/store";
import { Stepper } from "../account/validation/stepper";
interface Props {
  open: boolean;
  handleClose: () => void;
}
export const ModalIsVerified: FC<Props> = ({ open, handleClose }) => {
  const { isMobile } = useSelector((state) => state.mobile);
  const [init, setInit] = useState(false);
  const initiVerification = () => {
    setInit(true);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ backdropFilter: "blur(5px)" }}
    >
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? "90" : "35%",
        }}
      >
        {!init ? (
          <MessageWithBorder
            close={handleClose}
            sx={{ height: "300px" }}
            title={
              <Stack
                alignItems="center"
                justifyContent="center"
                direction="column"
              >
                <CheckCircleIcon
                  color="primary"
                  style={{ fontSize: 50 }}
                  sx={{ mb: 3 }}
                />
                <>
                  <Typography variant="h5" mb={2} align="center">
                    !Cuenta verificada¡
                  </Typography>
                  <Typography variant="body2" align="center">
                    Termina de completar tus datos para empezar a operar en la
                    plataforma
                  </Typography>
                </>
              </Stack>
            }
            actions={
              <Stack
                direction="column"
                spacing={2}
                width="100%"
                alignItems="center"
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={initiVerification}
                >
                  Completar mis datos
                </Button>

                <Typography
                  color="primary"
                  variant="subtitle2"
                  align="center"
                  sx={{ textDecoration: "underline", cursor: "pointer" }}
                  onClick={handleClose}
                >
                  En otro momento
                </Typography>
              </Stack>
            }
          />
        ) : (
          <Stepper />
        )}
      </Box>
    </Modal>
  );
};
