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
      const response = await ApiClient.get(
        "/funds/6426e7f3921236ca19a06e1e/perform?type=daily&from=1681066801020&until=1683572401114"
      );
      const data: Performance[] = response.data as Performance[];
      return data;
    } catch (error) {
      console.log(error, "error");
      throw error;
    }
  }
);

export const { reducer } = slice;
export const { setPerformance } = slice.actions;
