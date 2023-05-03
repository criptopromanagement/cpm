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
      const currency = "$";
      const criptoCurrency = "USDT";
      const response = await ApiClient.get("/orders?per_page=5&page=1");
      const data = response.data.data.map((transaction: Transaction) => {
        const { type, amount, fund, createdAt } = transaction;
        const text =
          transaction.type === "buy"
            ? `Invertiste`
            : type === "inversion"
              ? `Invertiste`
              : `Retiraste`;

        const formatedAmount = `${currency} ${amount.toFixed(2)}`.replace(".", ",");
        const formatedAmountCrypto = `${amount.toFixed(2)} ${criptoCurrency}`.replace(".", ",");
        const transactionTypeDescription =
          type === "buy"
            ? `+ ${formatedAmountCrypto}`
            : type === "inversion"
              ? `+ ${formatedAmountCrypto}`
              : `- ${formatedAmountCrypto}`;

        const to = fund ? fund.name : '';
        const created = new Date(createdAt);
        const formatedDate = created.toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });

        return ({ ...transaction, formatedDate, formatedAmount, transactionTypeDescription, to, text })
      })
      return data as Transaction[];
    } catch (error) { }
  }
);

export const { reducer } = slice;
