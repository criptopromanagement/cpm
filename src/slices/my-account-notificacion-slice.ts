import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AlertColor } from "@mui/material";

interface MyAccountNotificationState {
  msg: string;
  open: boolean;
  type: AlertColor | undefined;
}
const initialState: MyAccountNotificationState = {
  msg: "",
  open: false,
  type: "success",
};

const slice = createSlice({
  name: "myAccountNotification",
  initialState: initialState,
  reducers: {
    succesNotification: (
      state: MyAccountNotificationState,
      action: PayloadAction<string>
    ): void => {
      state.msg = action.payload;
      state.open = true;
      state.type = "success";
    },
    errorNotification: (
      state: MyAccountNotificationState,
      action: PayloadAction<string>
    ): void => {
      state.msg = action.payload;
      state.open = true;
      state.type = "error";
    },
    closeNotification: (state: MyAccountNotificationState): void => {
      state.msg = "";
      state.open = false;
      state.type = "success";
    },
  },
});
export const { reducer } = slice;
export const { succesNotification, errorNotification, closeNotification } = slice.actions;
