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
import { useAuth } from "src/hooks/use-auth";
import { useRouter } from "next/router";
import { useDispatch } from "src/store";
import { closeLogoutModal } from "src/slices/logout-modal-slice";

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
}
export const ConfirmationLogoutModal: FC<Props> = ({ handleCloseModal }) => {
  const theme = useTheme();
  const { logout } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = async (): Promise<void> => {
    try {
      dispatch(closeLogoutModal());
      await logout();

      router.push("/").catch(console.error);
    } catch (err) {}
  };
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
              <Typography variant="h4">¿Deseas salir de la cuenta?</Typography>
            }
            sx={{ paddingBottom: 0 }}
            action={<CloseButton handleCloseModal={handleCloseModal} />}
          />
          <CardContent>
            <Typography variant="body2">
              Una vez que lo hagas tendras que volver a ingresar tu usuario y
              contraseña
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              fullWidth
              variant="contained"
              onClick={handleLogout}
            >
              Si, salir
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
