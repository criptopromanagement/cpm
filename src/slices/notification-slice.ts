import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AlertColor } from "@mui/material";

interface NotificationState {
  msg: string;
  open: boolean;
  type: AlertColor | undefined;
  page: string;
}
interface Msg {
  msg: string;
  page: string;
}
const initialState: NotificationState = {
  msg: "",
  open: false,
  type: "success",
  page: "",
};

const slice = createSlice({
  name: "notification",
  initialState: initialState,
  reducers: {
    succesNotification: (
      state: NotificationState,
      action: PayloadAction<Msg>
    ): void => {
      state.msg = action.payload.msg;
      state.open = true;
      state.type = "success";
      state.page = action.payload.page;
    },
    errorNotification: (
      state: NotificationState,
      action: PayloadAction<Msg>
    ): void => {
      state.msg = action.payload.msg;
      state.open = true;
      state.type = "error";
      state.page = action.payload.page;
    },
    closeNotification: (state: NotificationState): void => {
      state.msg = "";
      state.open = false;
      state.type = "success";
      state.page = "";
    },
  },
});
export const { reducer } = slice;
export const { succesNotification, errorNotification, closeNotification } =
  slice.actions;
