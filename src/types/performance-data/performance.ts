import { PerformanceDetail } from "./performance-detail";

export interface Performance {
    performance: PerformanceDetail | null;
    date: string;
    perform: number;
    time: number;
    token: string;
}
