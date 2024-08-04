import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SalesState } from './types';
import { CartItem } from '@/store/cartStore/types';

export const handleAddSalesItems = (
  state: SalesState,
  salesItems: CartItem[]
) => {
  const combinedItems = [...state.items, ...salesItems].reduce<CartItem[]>(
    (accumulator, currentItem) => {
      if (accumulator[currentItem.id]) {
        accumulator[currentItem.id].quantity += currentItem.quantity;
        accumulator[currentItem.id].price +=
          currentItem.price * currentItem.quantity;
      } else {
        accumulator[currentItem.id] = {
          ...currentItem,
          price: currentItem.price * currentItem.quantity,
        };
      }
      return accumulator;
    },
    []
  );

  return Object.values(combinedItems).map((item) => ({
    ...item,
    formattedPrice: `$${item.price.toFixed(2)}`,
  }));
};

export const useSalesStore = create<SalesState>()(
  persist(
    (set) => ({
      items: [],

      addSalesItems: (salesItems: CartItem[]) => {
        set((state: SalesState) => {
          return { items: handleAddSalesItems(state, salesItems) };
        });
      },
    }),
    { name: 'sales' }
  )
);
