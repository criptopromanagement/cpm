import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AccessLogResponse, AccessLogsState } from "src/types/user-data/logs";

const accessLogsInitialState: AccessLogsState = {
  accessLogs: null,
  isLoading: false,
  error: null
};

// 5. Async Thunk
export const fetchAccessLogs = createAsyncThunk(
  "accessLogs/fetchAccessLogs",
  async () => {
    const response = await axios.get("/users/access-log?per_page=100&page=1");
    return response.data;
  }
);

const accessLogsSlice = createSlice({
  name: "accessLogs",
  initialState: accessLogsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessLogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAccessLogs.fulfilled, (state, action: PayloadAction<AccessLogResponse>) => {
        state.accessLogs = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAccessLogs.rejected, (state, action) => {
        state.isLoading = false;
        if (action.error && action.error.message) {
          state.error = action.error.message;
        } else {
          state.error = null;
        }
      });
  }
});

export const { reducer } = accessLogsSlice;
export const selectAllAccessLogs = (state: AccessLogsState) => state.accessLogs;
