export type LoginPayload = {
  phone: string;
  password: string;
};

export type LoginResponse = {
  user_id: string;
  merchant_id: string;
  token: string;
};

export type RegisterPayload = {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
  phone_number?: string;
};

export type AuthResponse = {
  isAuthenticated: boolean;
};

export type UpdateUserPassword = {
  old_password: string;
  new_password: string;
  new_password_confirmation: string;
};
