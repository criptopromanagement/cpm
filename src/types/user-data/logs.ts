export interface AccessLog {
  id: number;
  createdAt: string;
  ip: string;
  device: string;
}
export interface AccessLogResponse {
  data: AccessLog[];
  page: number;
  per_page: number;
}

export interface AccessLogsState {
  accessLogs: AccessLogResponse | null;
  isLoading: boolean;
  error: string | null;
}
