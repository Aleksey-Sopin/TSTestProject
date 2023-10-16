export type CartItem = {
  id: number;
  scrUrl: string;
  price: number;
  description: string;
  weight: string;
  count: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
