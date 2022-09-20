import { Alert, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { closeNotification } from "src/slices/my-account-notificacion-slice";
import { useDispatch } from "react-redux";
import { FC, useCallback, useEffect } from "react";
import { useSelector } from "src/store";

interface Props {
  showSuccess?: boolean;
  showError?: boolean;
  currentTab: "my-data" | "my-accounts" | "security" | undefined;
}
export const MyAccountNotification: FC<Props> = ({
  showSuccess = false,
  showError = false,
  currentTab,
}) => {
  const { msg, open, type, tab } = useSelector(
    (state) => state.myAccountNotification
  );
  const dispatch = useDispatch();
  const handleCloseNotification = useCallback(() => {
    dispatch(closeNotification());
  }, [dispatch]);

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
  useEffect(() => {
    if (open === true) {
      setTimeout(() => {
        handleCloseNotification();
      }, 3000);
    }
  }, [open, dispatch, handleCloseNotification]);
  return (
    <>
      {open && currentTab === tab && showSuccess && type === "success" && alert}
      {open && currentTab === tab && showError && type === "error" && alert}
    </>
  );
};
