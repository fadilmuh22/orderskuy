export interface CartProduct {
  qty: number;
  subtotal: number;
  tax: number;
  total: number;
  points: number;
  details: CartProductDetail[];
}

export interface CartProductDetail {
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
  "product.name": string;
  "product.image": string;
  "product.price": string;
  "product.point": number;
  point: number;
}

export type DeleteCartPayload = {
  cart_id: number;
};
