import { useTheme } from "@mui/material/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { FC, ReactNode } from "react";
interface ButtonProps {
  handleCloseModal: () => void;
}

const CloseButton = ({ handleCloseModal }: ButtonProps) => (
  <>
    <IconButton onClick={handleCloseModal} color="primary">
      <CloseIcon fontSize="small" />
    </IconButton>
  </>
);

interface Props {
  title?: ReactNode | null;
  close: () => void;
  content?: ReactNode | null;
  actions?: ReactNode | null;
}
export const MessageWithBorder: FC<Props> = ({
  title = null,
  close,
  content = null,
  actions = null,
}) => {
  const theme = useTheme();
  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      p={2}
      rowSpacing={2}
      boxShadow={24}
    >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Card sx={{ borderTop: `3px solid ${theme.palette.primary.main}` }}>
          <CardHeader
            title={title}
            sx={{ paddingBottom: 0 }}
            action={<CloseButton handleCloseModal={close} />}
          />
          <CardContent>{content}</CardContent>
          {actions && <CardActions>{actions}</CardActions>}
        </Card>
      </Grid>
    </Grid>
  );
};
