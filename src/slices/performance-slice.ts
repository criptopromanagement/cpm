import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiClient from "../services/api-client";
import { Performance, PerformanceDetail } from "../types/performance-data";

interface PerformanceState {
  performanceData: Performance[];
  isLoading: boolean;
}

const performanceInitialState: PerformanceState = {
  isLoading: false,
  performanceData: [],
};

const slice = createSlice({
  name: "performance",
  initialState: performanceInitialState,
  reducers: {
    setPerformance: (
      state: PerformanceState,
      action: PayloadAction<Performance[]>
    ): void => {
      state.performanceData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPerformance.fulfilled, (state, { payload }) => {
      state.performanceData = payload;
      state.isLoading = false;
    }),
      builder.addCase(getPerformance.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const getPerformance = createAsyncThunk(
  "performance/getPerformance",
  async () => {
    try {
      const today = new Date();
      const nineDaysAgo = new Date(today);
      nineDaysAgo.setDate(today.getDate() - 9);
      const from = nineDaysAgo.getTime();
      const until = today.getTime();
      const response = await ApiClient.get(
        `/funds/651d1716982a77b57c58af97/perform?type=daily&from=${from}&until=${until}`
      );
      const data: Performance[] = response.data.reverse() as Performance[];
      return data;
    } catch (error) {
      console.log(error, "error");
      throw error;
    }
  }
);

export const { reducer } = slice;
export const { setPerformance } = slice.actions;
