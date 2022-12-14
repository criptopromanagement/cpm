import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Transaction } from "src/types";
import ApiClient from "../services/api-client";

interface TransactionsState {
  loading: boolean;
  transactions: Transaction[];
}
const initialState: TransactionsState = {
  loading: false,
  transactions: [],
};
const slice = createSlice({
  name: "transactions",
  initialState: initialState,
  reducers: {
    setLoading: (state: TransactionsState): void => {
      state.loading = true;
    },
    unsetLoading: (state: TransactionsState): void => {
      state.loading = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(getTransactions.fulfilled, (state, { payload }) => {
      state.transactions = payload as Transaction[];
      state.loading = false;
    });
    builder.addCase(getTransactions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTransactions.rejected, (state) => {
      state.loading = false;
      state.transactions = [];
    });
  },
});

export const getTransactions = createAsyncThunk(
  "transactions/getTransactions",
  async () => {
    try {
      const response = await ApiClient.get("/orders?per_page=5&page=1");
      console.log(response.data.data);
      return response.data.data as Transaction[];
    } catch (error) {}
  }
);

export const { reducer } = slice;
