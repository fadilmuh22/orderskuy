import { PaginationBaseParams } from "../pagination/types";

export interface Category {
  id: number;
  merchant_id: string;
  name: string;
  icon: null;
  remarks: null;
  products?: Product[];
}

export interface Product {
  id: number;
  merchant_id: string;
  category_id: number;
  category_name: string;
  name: string;
  code: string;
  image: string;
  price: string;
  type: string;
  stock: number;
  ready: boolean;
  total_order: number;
  point: number;
}

export type ProductPaginationParams = PaginationBaseParams;

export type CategoryPaginationParams = PaginationBaseParams & {
  with_products?: boolean;
  id?: string;
};

export type ProductToCartPayload = {
  product_id: number;
  qty: number;
  notes: string;
};

export interface ProductToCartResponse {
  created_on: EdOn;
  modified_on: EdOn;
  deleted: number;
  id: number;
  merchant_id: string;
  user_id: number;
  product_id: number;
  qty: number;
  subtotal: number;
  tax: number;
  total: number;
  status: string;
  notes: string;
}

export interface EdOn {
  val: string;
}
