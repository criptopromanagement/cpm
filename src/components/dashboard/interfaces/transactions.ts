import { Transaction } from "src/types";

export interface TransactionsProps {
    transactions: Transaction[];
    showLoader: boolean;
}