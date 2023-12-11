export type User = {
  id: string;
  username: string;
  email: string;
  phone: string;
};

export type UpdateUserPassword = {
  old_password: string;
  new_password: string;
  new_password_confirmation: string;
};
