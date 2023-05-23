import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import ApiClient from "../services/api-client";
import { User, UserDetail } from "../types/user-data";

interface UserState {
  userData: User;
}

export const getUser = createAsyncThunk("user/getUser", async () => {
  try {
    const response = await ApiClient.get("/users");
    return response.data as UserDetail;
  } catch (error) {}
});

const userInitialState: UserState = {
  userData: {
    user: {
      balance: { available: 0, invested: 0, locked: 0 },
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
      avatar: "",
      username: "",
      birthday: "",
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
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.userData = { ...state.userData, user: payload as UserDetail };
    });
  },
});

export const { reducer } = slice;
export const { setUser } = slice.actions;
