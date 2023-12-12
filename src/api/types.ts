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

export const newApiError = (
  status: string,
  error_message: string
): ApiError => ({
  status,
  error_message,
});

export type ApiRequestProps<V> =
  | {
      url: string;
      method: "get";
      params?: Record<string, unknown>;
    }
  | {
      url: string;
      method: "post" | "put" | "patch" | "delete";
      body?: V;
      params?: Record<string, unknown>;
    };
