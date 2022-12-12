import { Alert, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { closeNotification } from "src/slices/notification-slice";
import { useDispatch } from "react-redux";
import { FC, useCallback, useEffect } from "react";
import { useSelector } from "src/store";

interface Props {
  showSuccess?: boolean;
  showError?: boolean;
  currentPage: string;
}
export const Notification: FC<Props> = ({
  showSuccess = false,
  showError = false,
  currentPage,
}) => {
  const { msg, open, type, page } = useSelector((state) => state.notification);
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
      }, 5000);
    }
  }, [open, dispatch, handleCloseNotification]);
  return (
    <>
      {open &&
        currentPage === page &&
        showSuccess &&
        type === "success" &&
        alert}
      {open && currentPage === page && showError && type === "error" && alert}
    </>
  );
};
