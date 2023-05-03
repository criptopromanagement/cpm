import { Fund } from "./fund";

export interface Transaction {
  amount: number;
  type: string;
  status: string;
  fund: Fund;
  createdAt: Date;
  updatedAt: Date;
  id: string;
  formatedDate: string;
  formatedAmount: string;
  transactionTypeDescription: string;
  to: string;
  text: string;
}
