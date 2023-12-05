export type Food = {
  id: number;
  name: string;
  price: number;
  points: number;
  image: string;
};

export type User = {
  id: string;
};

export type Cart = {
  id: string;
};

export type Order = {
  id: string;
};

export type LoginPayload = {
  username: string;
  password: string;
};

export type RegisterPayload = {
  username: string;
  email: string;
  password: string;
  phoneNumber?: string;
};

export const friedRice: Food = {
  id: 1,
  name: "Nasi Goreng Italy",
  price: 47000,
  points: 1,
  image:
    "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
