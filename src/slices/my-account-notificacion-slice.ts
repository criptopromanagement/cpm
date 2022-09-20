import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AlertColor } from "@mui/material";

interface MyAccountNotificationState {
  msg: string;
  open: boolean;
  type: AlertColor | undefined;
  tab: "my-data" | "my-accounts" | "security" | "";
}
interface Msg {
  msg: string;
  tab: "my-data" | "my-accounts" | "security" | "";
}
const initialState: MyAccountNotificationState = {
  msg: "",
  open: false,
  type: "success",
  tab: "my-data",
};

const slice = createSlice({
  name: "myAccountNotification",
  initialState: initialState,
  reducers: {
    succesNotification: (
      state: MyAccountNotificationState,
      action: PayloadAction<Msg>
    ): void => {
      state.msg = action.payload.msg;
      state.open = true;
      state.type = "success";
      state.tab = action.payload.tab;
    },
    errorNotification: (
      state: MyAccountNotificationState,
      action: PayloadAction<Msg>
    ): void => {
      state.msg = action.payload.msg;
      state.open = true;
      state.type = "error";
      state.tab = action.payload.tab;
    },
    closeNotification: (state: MyAccountNotificationState): void => {
      state.msg = "";
      state.open = false;
      state.type = "success";
      state.tab = "";
    },
  },
});
export const { reducer } = slice;
export const {
  succesNotification,
  errorNotification,
  closeNotification,
} = slice.actions;
