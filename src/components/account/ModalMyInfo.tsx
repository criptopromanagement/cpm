import {
  Grid,
  Modal,
  Box,
  useMediaQuery,
} from "@mui/material";

import { FC } from "react";

interface Props {
  open: boolean;
  handleClose: () => void;
}
export const ModalMyInfo: FC<Props> = ({ open, handleClose, children }) => {
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <Modal open={open} onClose={handleClose}>

      <Grid
        container
        justifyContent="center"
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: md? "50%": "90%",
        }}
      >
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ bgcolor: "background.paper" }}
          p={2}
          rowSpacing={2}
          boxShadow={24}
        >
          {children}
        </Grid>
      </Grid>

    </Modal>
  );
};
