import { CartItem } from '@/store/cartStore/types';

export type SalesState = {
  items: CartItem[];
  addSalesItems: (items: CartItem[]) => void;
};
