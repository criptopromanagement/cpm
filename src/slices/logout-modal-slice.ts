import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: false,
};

const slice = createSlice({
  name: "logoutModal",
  initialState: initialState,
  reducers: {
    openLogoutModal: (state: { openModal: boolean }): void => {
      state.openModal = true;
    },
    closeLogoutModal: (state: { openModal: boolean }): void => {
      state.openModal = false;
    },
  },
});
export const { reducer } = slice;
export const { openLogoutModal, closeLogoutModal } = slice.actions;
