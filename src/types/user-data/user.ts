import { UserDetail } from "./user-detail";

export interface User {
    user: UserDetail | null;
    token: string;
}
