type AccessLog = {
    device: string;
    ip: string;
    createdAt: string;
    updatedAt: string;
    id: string;
  };
  
  interface AccessLogsState {
    logs: AccessLog[];
    page: number;
    per_page: number;
  }