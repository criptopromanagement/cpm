import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/user-data";

interface UserState {
  userData: User;
}
const userInitialState: UserState = {
  userData: {
    user: {
      email: "",
      active: false,
      terms: "",
      documents: [],
      accounts: [],
      createdAt: "",
      updatedAt: "",
      address: "",
      country: "",
      firstname: "",
      lastname: "",
      legalId: "",
      name: "",
      phoneNumber: "",
      sex: "",
      subject_politically: false,
      subject_uif: false,
      profile_complete: false,
      id: "",
      full_name: "",
    },
    token: "",
  },
};

const slice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<User>): void => {
      state.userData = action.payload;
    },
    clearUser: (state: UserState): void => {
      state.userData = userInitialState.userData;
    },
  },
});
export const { reducer } = slice;
export const {setUser} = slice.actions;
