import { PerformanceDetail } from "./performance-detail";

export interface Performance {
    performance: PerformanceDetail | null;
    label: Date;
    perform: number;
    time: number;
    token: string;
}
