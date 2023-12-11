export type User = {
  id: string;
  username: string;
  email: string;
  phone: string;
  current_points: number;
  total_points: number;
};

export type UpdateUserPassword = {
  old_password: string;
  new_password: string;
  new_password_confirmation: string;
};
