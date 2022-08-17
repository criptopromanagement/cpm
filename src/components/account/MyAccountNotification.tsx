import { Alert, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { closeNotification } from "src/slices/my-account-notificacion-slice";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { FC } from "react";

interface Props {
  showSuccess?: boolean;
  showError?: boolean;
}
export const MyAccountNotification: FC<Props> = ({
  showSuccess = false,
  showError = false,
}) => {
  const { msg, open, type } = useSelector(
    (state: RootStateOrAny) => state.myAccountNotification
  );
  const dispatch = useDispatch();
  const handleCloseNotification = () => {
    dispatch(closeNotification());
  };

  const alert = (
    <Alert
      variant="outlined"
      severity={type}
      action={
        <IconButton onClick={handleCloseNotification}>
          <CancelIcon fontSize="inherit" />
        </IconButton>
      }
    >
      {msg}
    </Alert>
  );
  return (
    <>
      {open && showSuccess && type === "success" && alert}
      {open && showError && type === "error" && alert}
    </>
  );
};
