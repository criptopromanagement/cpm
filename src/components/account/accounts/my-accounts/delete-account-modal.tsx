import { useTheme } from "@mui/material/styles";
import {
  Grid,
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Button,
  CardActions,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FC } from "react";

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
  handleCloseModal: () => void;
  deleteAccount: () => void;
}
export const DeleteAccountModal: FC<Props> = ({
  handleCloseModal,
  deleteAccount,
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
            title={
              <Typography variant="h4">¿Deseas eliminar la cuenta?</Typography>
            }
            sx={{ paddingBottom: 0 }}
            action={<CloseButton handleCloseModal={handleCloseModal} />}
          />
          <CardContent>
            <Typography variant="body2">
              Una vez eliminada no podrás deshacer la acción, deverás volver a
              registrar la cuenta
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              fullWidth
              variant="contained"
              onClick={deleteAccount}
            >
              Eliminar
            </Button>
            <Button
              color="primary"
              fullWidth
              variant="outlined"
              onClick={handleCloseModal}
            >
              Cancelar
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};
