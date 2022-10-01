export interface Transaction {
  id: string;
  type: "carga" | "inversion" | "retiro";
  date: Date;
  amount: number;
  currency: string;
  criptoCurrency: string;
}
