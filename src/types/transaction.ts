import { Fund } from "./fund";

export interface Transaction {
  amount: number;
  type: string;
  status: string;
  fund: Fund;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}
