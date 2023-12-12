export interface ApiResponse<T> {
  request_param: string;
  status: string;
  error_message: null;
  data: T;
  next: string;
  version: Version;
}

export interface ApiError {
  request_param?: string;
  status: string;
  error_message: string;
  data?: null;
  next?: string;
  version?: Version;
}

export interface Version {
  code: string;
  name: string;
}
