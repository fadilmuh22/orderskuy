export interface ApiResponse<T> {
  request_param: string;
  status: string;
  error_message: null;
  data: T;
  next: string;
  version: Version;
}

export interface Version {
  code: string;
  name: string;
}

export type Food = {
  id: number;
  name: string;
  price: number;
  points: number;
  image: string;
  categoryId: number;
};

export type Category = {
  id: number;
  categoryLabel: string;
};

export type User = {
  id: string;
  phone: string;
  username: string;
  email: string;
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

export const mockCategories: Category[] = [
  {
    id: 1,
    categoryLabel: "Nasi Goreng",
  },
  {
    id: 2,
    categoryLabel: "Mie",
  },
];

export const mockFoods: Food[] = [
  {
    id: 1,
    name: "Nasi Goreng Italy",
    price: 47000,
    points: 1,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryId: 1,
  },
  {
    id: 2,
    name: "Nasi Goreng Korea",
    price: 47000,
    points: 1,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryId: 1,
  },
  {
    id: 3,
    name: "Nasi Goreng Jepang",
    price: 47000,
    points: 1,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryId: 1,
  },
  {
    id: 4,
    name: "Nasi Goreng Thailand",
    price: 47000,
    points: 1,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryId: 1,
  },
  {
    id: 5,
    name: "Nasi Goreng Legend",
    price: 49000,
    points: 1,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryId: 1,
  },
  {
    id: 6,
    name: "Mie Goreng Italy",
    price: 42000,
    points: 1,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryId: 2,
  },
  {
    id: 7,
    name: "Mie Goreng Korea",
    price: 42000,
    points: 1,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryId: 2,
  },
  {
    id: 8,
    name: "Mie Goreng Jepang",
    price: 42000,
    points: 1,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryId: 2,
  },
  {
    id: 9,
    name: "Mie Goreng Thailand",
    price: 42000,
    points: 1,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryId: 2,
  },
  {
    id: 10,
    name: "Mie Goreng Legend",
    price: 44000,
    points: 1,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryId: 2,
  },
];
