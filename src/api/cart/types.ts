import { Product } from "../products/types";

export interface CartProduct {
  id: number;
  merchant_id: string;
  user_id: number;
  product_id: number;
  qty: number;
  notes: string;
  subtotal: string;
  tax: string;
  total: string;
  status: string;
  created_on: Date;
  product: Product;
}

export type DeleteCartPayload = {
  cart_id: number;
};
