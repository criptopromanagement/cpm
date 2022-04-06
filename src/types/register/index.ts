export interface RegisterResponse {
    id: number;
    email: string;
    name: string;
    password: string;
    legalId: string;
    phoneNumber: string;
    country: string;
    updatedAt: Date;
    createdAt: Date;
}