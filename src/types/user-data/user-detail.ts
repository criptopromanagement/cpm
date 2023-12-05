import { Account } from "./account";

export interface Address {
  street: string;
  number: number;
  floor?: number;
  department?: string;
  zip_code: number,
  country: "",
  state: "",
}
export interface UserDetail {
  email: string;
  active: boolean;
  terms: Date | string;
  documents: string[];
  accounts: Account[];
  createdAt: Date | string;
  updatedAt: Date | string;
  address: Address;
  firstname: string;
  lastname: string;
  legalId: string;
  name: string;
  phoneNumber: string;
  sex: string;
  subject_politically: boolean;
  subject_uif: boolean;
  profile_complete: boolean;
  id: string;
  full_name: string;
  avatar: string;
  username: string;
  birthday: string;
  balance: {
    available: number;
    invested: number;
    locked: number;
  };
}
