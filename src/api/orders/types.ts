import { Product } from "../products/types";

export interface Transaction {
  id: number;
  merchant_id: string;
  trx_code: string;
  user_id: number;
  table_number: number;
  subtotal: string;
  tax: string;
  total: string;
  status: string;
  payment_type: string;
  served_by: null;
  served_at: null;
  point: number;
  created_on: Date;
  details: TransactionDetail[];
}

export interface TransactionDetail {
  total: string;
  id: number;
  merchant_id: string;
  trx_code: string;
  user_id: number;
  cart_id: number;
  product_id: number;
  qty: number;
  notes: string;
  subtotal: string;
  tax: string;
  created_on: Date;
  product: Product;
}

export type OrderPayload = {
  table_number: number;
};

export interface OrderResponse {
  tax: number;
  total: number;
  subtotal: number;
  point: number;
  trx_code: string;
  merchant_id: string;
  user_id: number;
  table_number: number;
  status: string;
  transaction_details: OderResponseDetail[];
}

export interface OderResponseDetail {
  merchant_id: string;
  user_id: number;
  trx_code: string;
  cart_id: number;
  product_id: number;
  qty: number;
  notes: string;
  subtotal: string;
  tax: string;
  total: string;
}
