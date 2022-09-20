export interface Account {
  id: string;
  name: string;
  cbu: string;
  coin: "ARS" | "USD";
  user: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}
